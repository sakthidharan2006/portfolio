import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-md">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <a
                    href="#home"
                    className="font-bold text-2xl text-white tracking-wide hover:text-gray-300 transition"
                >
                    𝕊𝕒𝕜𝕥𝕙𝕚𝕕𝕙𝕒𝕣𝕒𝕟
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-8 text-white font-medium">
                        {["home", "about", "projects", "skills", "contact"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item}`}
                                    className="relative group transition"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Theme Toggle & Mobile Menu */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-white"
                        aria-label="Toggle Theme"
                    >
                        {darkMode ? (
                            <SunIcon className="h-6 w-6" />
                        ) : (
                            <MoonIcon className="h-6 w-6" />
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className="block md:hidden text-white"
                    >
                        {toggleMenu ? (
                            <XMarkIcon className="h-7 w-7" />
                        ) : (
                            <Bars3Icon className="h-7 w-7" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden absolute top-full left-0 w-full transform transition-all duration-300 ${toggleMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
                    }`}
            >
                <nav className="bg-black/60 backdrop-blur-md border-t border-gray-700 shadow-lg">
                    <ul className="flex flex-col items-center gap-6 py-6 text-white font-medium">
                        {["home", "about", "projects", "skills", "contact"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item}`}
                                    onClick={() => setToggleMenu(false)}
                                    className="relative group transition"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}