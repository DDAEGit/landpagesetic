import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const institutionalLogos = [
        { src: "/logminf.png", label: "MINFIN", height: "h-12" },
        { src: "/minttics.gov.png", label: "MINTTICS", height: "h-12" },
        { src: "/minplan-logo2.png", label: "MINPLAN", height: "h-9" },
    ];

    const poweredByLogos = [
        { src: "/GGPEN_LOGO-scaled (1).png", label: "GGPEN", height: "h-8" },
        { src: "/setic_logo_nobackgd.png", label: "SETIC", height: "h-8" },
        { src: "/dnoe.png", label: "DNOE", height: "h-7" },
        { src: "/dnip.png", label: "DNIP", height: "h-5" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo Block */}
                <div className="flex items-center bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100">
                    {/* Institutional Logos ${label === "MINPLAN" ? "mt-3" : ""} */}
                    <div className="flex items-center gap-4 px-5 py-3 border-r border-stone-100">
                        {institutionalLogos.map(({ src, label, height }) => (
                            <div key={label} className={`flex flex-col items-center gap-1 group ${label !== "MINPLAN" || "pt-1"}`}>
                                <img
                                    src={src}
                                    alt={`${label} Logo`}
                                    className={`${height} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
                                />
                                <span
                                    className={`${label !== "MINPLAN" || "mt-2"} text-[8px] font-bold text-stone-400 uppercase tracking-widest`}
                                >
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Powered By Section */}
                    <div className="flex flex-col items-center px-5 py-3">
                        <span className="text-[8px] font-bold text-stone-300 uppercase tracking-[0.18em] mb-2">Powered by</span>
                        <div className="flex items-center gap-4">
                            {poweredByLogos.map(({ src, label, height }, index) => (
                                <React.Fragment key={label}>
                                    <div className="flex flex-col items-center gap-1 group">
                                        <img
                                            src={src}
                                            alt={`${label} Logo`}
                                            className={`${height} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
                                        />
                                        <span className="text-[8px] font-bold text-stone-400 uppercase tracking-widest">{label}</span>
                                    </div>
                                    {index < poweredByLogos.length - 1 && <div className="w-px h-6 bg-stone-100" />}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop: Login Button */}
                <div className="hidden md:flex items-center">
                    <Button variant={isScrolled ? "primary" : "secondary"} size="sm">
                        <a href="https://gedae.ggpen.gov.ao/tech-gest-setic/" rel="noopener noreferrer">
                            Login
                        </a>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-[#c4703d]" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-[#c4703d]" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-stone-100"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {/* Logos no mobile menu */}
                            <div className="flex flex-wrap justify-center gap-4 py-3 border-b border-stone-100">
                                {[...institutionalLogos, ...poweredByLogos].map(({ src, label }) => (
                                    <div key={label} className="flex flex-col items-center gap-1">
                                        <img src={src} alt={`${label} Logo`} className="h-8 w-auto object-contain" />
                                        <span className="text-[8px] font-bold text-stone-400 uppercase tracking-widest">{label}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="w-full mt-2">
                                <a href="https://gedae.ggpen.gov.ao/ferramenta-de-visualizacao/otchiva/en" rel="noopener noreferrer">
                                    Aceder à Plataforma
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
