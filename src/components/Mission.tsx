import React from "react";
import { motion } from "framer-motion";

export function Mission() {
    return (
        <section id="mission" className="py-20 md:py-32 bg-stone-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl" id="usmore">
                            <img
                                src="/obra2.jpg"
                                alt="Angolan community near mangroves"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Segunda imagem com animação flutuante */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-xl border-8 border-stone-50 hidden md:block"
                        >
                            <img
                                src="Obras-na-estrada.jpg"
                                alt="Mangrove roots detail"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Decorative element */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#c4703d]/10 rounded-full -z-10" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-[#c4703d] font-bold text-sm tracking-widest uppercase mb-4">Sobre Nós</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                            Do: <span className="text-[#c4703d]">Satélite à Estrada</span> Fiscalização Transparente e Rigorosa.
                        </h3>
                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                            Angola investe anualmente mais de 2,5 mil milhões de dólares em infra-estruturas rodoviárias.
                            Para garantir a rentabilidade e qualidade deste investimento, o GGPEN e o MINFIN uniram forças.
                            Através da integração da plataforma Tech-Gest com o SIGPIP, criámos um mecanismo de fiscalização independente.
                        </p>

                        <div className="p-6 bg-white rounded-xl border border-stone-100 shadow-sm">
                            <p className="text-stone-800 italic font-serif text-lg">
                                "A ferramenta utiliza imagens de satélite de alta resolução (até 50 cm) e Inteligência Artificial
                                para a detecção automática de mudanças nas vias. Com uma cobertura superior a 95% do território
                                nacional, asseguramos o controlo desde a concepção até à conclusão da obra."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}