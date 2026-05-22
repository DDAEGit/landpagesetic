import React from "react";
import { motion } from "framer-motion";

const images = [
    { src: "/download.jpeg", position: "object-top" },
    { src: "/pessoa2.jpeg", position: "object-top" },
    { src: "/quem_e_quem.png", position: "object-top" },
];

export function Community() {
    return (
        <section id="community" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[#c4703d] font-bold text-sm tracking-widest uppercase mb-4">__________________</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">Colaboradores</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {images.map(({ src, position }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
                        >
                            <img
                                src={src}
                                alt="Community member"
                                className={`w-full h-full object-cover ${position} transition-transform duration-700 group-hover:scale-110`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}