import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 2000;
        const step = 16;
        const increment = target / (duration / step);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, step);

        return () => clearInterval(timer);
    }, [isInView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export function Impact() {
    return (
        <section id="impact" className="py-20 bg-stone-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 bg-white p-4 rounded-3xl shadow-xl border border-stone-200"
                    >
                        <div className="relative aspect-[4/3] bg-[#e6ded5] rounded-2xl overflow-hidden">
                            <img
                                src="/trabalhador.jpeg"
                                alt="Forest texture"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                    </motion.div>

                    {/* Stats Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-[#1a4d2e] font-bold text-sm tracking-widest uppercase mb-4">IMPACTO REAL</h2>
                        <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                            Mais <span className="text-[#c4703d]">Eficiência</span> no Investimento Público
                        </h3>
                        <p className="text-lg text-stone-600 mb-10">
                            O sistema altera radicalmente a forma como o Estado planifica e gere os projectos.
                            Uma única plataforma centraliza a preparação, aprovação e execução dos projectos
                            patrimoniais do Estado sem grandes intervenções humanas.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Card com CountUp */}
                            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                                <div className="text-3xl md:text-4xl font-bold text-[#c4703d] mb-1 font-serif">
                                    <CountUp target={21} suffix="+" />
                                </div>
                                <div className="text-stone-500 text-sm font-medium uppercase tracking-wide">
                                    Províncias Integradas na Plataforma
                                </div>
                            </div>

                            {/* Card com CountUp */}
                            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                                <div className="text-3xl md:text-4xl font-bold text-[#c4703d] mb-1 font-serif">
                                    <CountUp target={95} suffix="%" />
                                </div>
                                <div className="text-stone-500 text-sm font-medium uppercase tracking-wide">
                                    Cobertura do Território Nacional
                                </div>
                            </div>

                            {/* Card estático */}
                            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                                <div className="text-3xl md:text-4xl font-bold text-[#c4703d] mb-1 font-serif">
                                    50 cm
                                </div>
                                <div className="text-stone-500 text-sm font-medium uppercase tracking-wide">
                                    Resolução Máxima de Imagem Satelital
                                </div>
                            </div>

                            {/* Card estático */}
                            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                                <div className="text-3xl md:text-4xl font-bold text-[#c4703d] mb-1 font-serif">
                                    USD 2,5 Mil Milhões
                                </div>
                                <div className="text-stone-500 text-sm font-medium uppercase tracking-wide">
                                    Monitorizados Anualmente
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}