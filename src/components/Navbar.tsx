import React, { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
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
    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
              <div className="flex items-center justify-center gap-3 bg-white rounded-xl shadow-md px-6 py-3">
                <img
                  src="/logoMinfin.png"
                  alt="SETIC Logo"
                  className="h-20 w-auto object-contain"
                />
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
                  Powered by
                </span>
                <img
                  src="/GGPEN_LOGO-scaled (1).png"
                  alt="GGPEN Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {/* {["Mission", "Technology", "Impact", "Community"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`text-sm font-medium transition-colors hover:text-[#c4703d] ${isScrolled ? "text-stone-600" : "text-white/90"}`}
                        >
                            {item}
                        </a>
                    ))} */}

                    {[
                        
                    ].map((item) => (
                        <img width={30} height={15} src={item} alt="Forest texture" className="" />
                    ))}

                    <Button variant={isScrolled ? "primary" : "secondary"} size="sm">
                        <a href="https://gedae.ggpen.gov.ao/ferramenta-de-visualizacao/otchiva/en" rel="noopener noreferrer">
                            Login
                        </a>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
                        initial={{
                            opacity: 0,
                            height: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        className="md:hidden bg-white border-t border-stone-100"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {["Mission", "Technology", "Impact", "Community"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-stone-600 font-medium py-2 border-b border-stone-100"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <Button className="w-full mt-2">Access Platform</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
