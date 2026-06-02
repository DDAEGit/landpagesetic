import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight, Satellite } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    className="absolute inset-0 scale-110"
                    style={{
                        backgroundImage: "url('./ministra.jpg')",
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Satellite Orbit Graphic */}
            <div className="absolute top-20 right-20 opacity-20 hidden lg:block animate-pulse-slow">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="199" stroke="#c4703d" strokeWidth="1" strokeDasharray="8 8" />
                    <circle cx="200" cy="200" r="150" stroke="#c4703d" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="200" cy="200" r="100" stroke="#c4703d" strokeWidth="1" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
                <div className="max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c4703d]/20 backdrop-blur-sm border border-[#ddd4a1] text-white/90 text-sm font-medium mb-6">
                            <Satellite className="w-4 h-4 text-[#ddd4a1]" />
                            <span>Monitoramento dos Projectos de Investimento Público, Usando Satélite e IA</span>
                        </div>

                        {/* Linha separadora */}
                        <div className="w-16 h-1 bg-[#c4703d] rounded-full mb-6" />

                        {/* Descrição */}
                        <p className="text-base md:text-lg text-stone-300 mb-8 max-w-2xl leading-relaxed">
                            A plataforma <span className="text-[#ddd4a1] font-semibold">Tech-Gest</span> integrada ao{" "}
                            <span className="text-white font-semibold">SIGPIP</span> garante transparência, eficiência e rigor técnico na
                            monitorização dos projectos de investimento público em todo o território nacional.
                        </p>

                        {/* Botões */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="group bg-[#c4703d] hover:bg-[#a85c2e] border-none">
                                <a
                                    className="flex items-center"
                                    href="https://gedae.ggpen.gov.ao/tech-gest-setic/"
                                    rel="noopener noreferrer"
                                >
                                    Explorar
                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="border-[#c4703d]/60 text-white hover:bg-[#c4703d]/10">
                                <a className="flex items-center" href="./#usmore" rel="noopener noreferrer">
                                    Saber Mais
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
