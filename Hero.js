import HeroImg from '../assets/heros.png.jpg';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="flex flex-col md:flex-row px-5 py-32 bg-secondary dark:bg-black justify-center items-center min-h-screen"
        >
            {/* Left Side - Text */}
            <div className="md:w-1/2 flex flex-col items-start">
                <h1 className="text-white dark:text-white text-5xl md:text-6xl font-bold leading-tight">
                    𝘏𝘪,<br />
                    𝘐'𝘮 𝘚𝘢𝘬𝘵𝘩𝘪𝘥𝘩𝘢𝘳𝘢𝘯 <span className="text-black dark:text-gray-300">𝘌 </span>
                </h1>
                <p className="text-2xl text-white dark:text-white mt-4">
                    𝐅𝐮𝐥𝐥-𝐒𝐭𝐚𝐜𝐤 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫
                </p>

                {/* Social Icons */}
                <div className="flex py-10">
                    <a
                        href="https://www.instagram.com/____sakthii.____/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pr-5 text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
                    >
                        <FaInstagram size={40} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sakthidharan-e-"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pr-5 text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                        <FaLinkedin size={40} />
                    </a>
                    <a
                        href="https://github.com/sakthidharan2006"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pr-5 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300"
                    >
                        <FaGithub size={40} />
                    </a>
                </div>

                {/* Resume Button */}
                <div className="flex gap-4">
                    <a
                        href="/resume.jpg"
                        download="E-Sakthidharan-Resume.jpg"
                        className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 dark:hover:bg-gray-300 transition duration-300 flex items-center gap-2"
                    >
                        📄  𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚁𝚎𝚜𝚞𝚖𝚎
                    </a>
                </div>
            </div>

            {/* Right Side - Image Card with Animation */}
            <div className="md:w-1/3 flex justify-center mt-10 md:mt-0">
                <motion.div
                    className="rounded-xl shadow-lg overflow-hidden w-64 md:w-full"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                >
                    <motion.img
                        src={HeroImg}
                        alt="Portrait of E Sakthidharan"
                        className="w-full h-auto object-cover"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
