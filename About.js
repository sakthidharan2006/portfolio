import { useState } from "react";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

import AboutImg from '../assets/abouts.png.jpg';
import EduImg1 from '../assets/edu1.png.png';
import EduImg2 from '../assets/edu2.png.png';
import EduImg3 from '../assets/edu3.png.jpg';
import CertImg2 from '../assets/cert2.png.jpg.png';
import CertImg3 from '../assets/cert3.png.jpg';
import CertImg4 from '../assets/cert4.png.jpg.png';

export default function About() {
    const [selectedImage, setSelectedImage] = useState(null);

    const education = [
        { title: "​🇧​.​🇹​​🇪​​🇨​​🇭​ ​🇮​​🇳​ ​🇮​​🇳​​🇫​​🇴​​🇷​​🇲​​🇦​​🇹​​🇮​​🇴​​🇳​ ​🇹​​🇪​​🇨​​🇭​​🇳​​🇴​​🇱​​🇴​​🇬​​🇾​", institution: "​🇧​​🇦​​🇳​​🇳​​🇦​​🇷​​🇮​ ​🇦​​🇲​​🇲​​🇦​​🇳​ ​🇮​​🇳​​🇸​​🇹​​🇮​​🇹​​🇺​​🇹​​🇪​ ​🇴​​🇫​ ​🇹​​🇪​​🇨​​🇭​​🇳​​🇴​​🇱​​🇴​​🇬​​🇾​", year: "²⁰²⁴ ⁻ ²⁰²⁷", img: EduImg1 },
        { title: "​🇩​​🇮​​🇵​​🇱​​🇴​​🇲​​🇦​ ​🇮​​🇳​ ​🇨​​🇴​​🇲​​🇵​​🇺​​🇹​​🇪​​🇷​ ​🇹​​🇪​​🇨​​🇭​​🇳​​🇴​​🇱​​🇴​​🇬​​🇾​", institution: "​🇰​​🇴​​🇳​​🇬​​🇺​ ​🇵​​🇴​​🇱​​🇾​​🇹​​🇪​​🇨​​🇭​​🇳​​🇮​​🇨​ ​🇨​​🇴​​🇱​​🇱​​🇪​​🇬​​🇪​", year: "²⁰²¹ ⁻ ²⁰²⁴", Percentage: "​ᴘᴇʀᴄᴇɴᴛᴀɢᴇ-84%", img: EduImg2 },
        { title: "ꜱꜱʟᴄ ɪɴ 10ᴛʜ", institution: "ᴛʜᴇ ɴᴇꜱᴛ ꜱᴄʜᴏᴏʟ", year: "²⁰²¹", img: EduImg3 },
    ];

    const certifications = [
        { title: "​🇫​​🇺​​🇱​​🇱​ ​🇸​​🇹​​🇦​​🇨​​🇰​ ​🇲​​🇪​​🇷​​🇳​ ​🇩​​🇪​​🇻​​🇪​​🇱​​🇴​​🇵​​🇲​​🇪​​🇳​​🇹​", issuer: "🇦​​🇲​​🇾​​🇵​​🇴​", year: "²⁰²⁵" },
        { title: "ᴍɪᴄʀᴏꜱᴏꜰᴛ ᴀᴢᴜʀᴇ ꜰᴜɴᴅᴀᴍᴇɴᴛᴀʟꜱ: ᴅᴇꜱᴄʀɪʙᴇ ᴄʟᴏᴜᴅ ᴄᴏɴᴄᴇᴘᴛꜱ", issuer: "ᴍɪᴄʀᴏꜱᴏꜰᴛ", year: "²⁰²⁵", img: CertImg2 },
        { title: "ᴍɪᴄʀᴏꜱᴏꜰᴛ ᴀᴢᴜʀᴇ ꜰᴜɴᴅᴀᴍᴇɴᴛᴀʟꜱ: ᴅᴇꜱᴄʀɪʙᴇ ᴀᴢᴜʀᴇ ᴍᴀɴᴀɢᴇᴍᴇɴᴛ ᴀɴᴅ ɢᴏᴠᴇʀɴᴀɴᴄᴇ", issuer: "ᴍɪᴄʀᴏꜱᴏꜰᴛ", year: "²⁰²⁵", img: CertImg3 },
        { title: "ᴍɪᴄʀᴏꜱᴏꜰᴛ ᴀᴢᴜʀᴇ ꜰᴜɴᴅᴀᴍᴇɴᴛᴀʟꜱ: ᴅᴇꜱᴄʀɪʙᴇ ᴀᴢᴜʀᴇ ᴀʀᴄʜɪᴛᴇᴄᴛᴜʀᴇ ᴀɴᴅ ꜱᴇʀᴠɪᴄᴇꜱ", issuer: "ᴍɪᴄʀᴏꜱᴏꜰᴛ", year: "²⁰²⁵", img: CertImg4 },
    ];

    return (
        <section
            id="about"
            className="bg-secondary dark:bg-black px-6 md:px-10 py-16 md:py-20 flex flex-col items-center"
        >
            {/* Top: About Image & Text */}
            <div className="flex flex-col md:flex-row w-full max-w-6xl items-center mb-12 gap-12">
                {/* About Image */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="rounded-xl shadow-lg overflow-hidden w-3/4 md:w-full">
                        <motion.img
                            src={AboutImg}
                            alt="About me"
                            className="w-full h-auto object-cover"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                        />
                    </div>
                </div>

                {/* About Text */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="flex flex-col justify-center text-white dark:text-white max-w-xl text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl border-b-4 border-primary mb-5 font-bold w-fit">𝔸𝕓𝕠𝕦𝕥 𝕄𝕖</h1>
                        <p className="mb-4">
                            𝙷𝚒, 𝙸’𝚖 𝚂𝚊𝚔𝚝𝚑𝚒𝚍𝚑𝚊𝚛𝚊𝚗 𝙴 – 𝚊 𝚙𝚊𝚜𝚜𝚒𝚘𝚗𝚊𝚝𝚎 𝙵𝚞𝚕𝚕-𝚂𝚝𝚊𝚌𝚔 𝙼𝙴𝚁𝙽 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛, I 𝚎𝚗𝚓𝚘𝚢𝚜 𝚋𝚞𝚒𝚕𝚍𝚒𝚗𝚐 𝚖𝚘𝚍𝚎𝚛𝚗, 𝚜𝚌𝚊𝚕𝚊𝚋𝚕𝚎, 𝚊𝚗𝚍 𝚑𝚒𝚐𝚑-𝚙𝚎𝚛𝚏𝚘𝚛𝚖𝚊𝚗𝚌𝚎 𝚠𝚎𝚋 𝚊𝚙𝚙𝚕𝚒𝚌𝚊𝚝𝚒𝚘𝚗𝚜. 𝚆𝚒𝚝𝚑 𝚎𝚡𝚙𝚎𝚛𝚝𝚒𝚜𝚎 𝚒𝚗 𝚝𝚑𝚎 𝙼𝙴𝚁𝙽 𝚜𝚝𝚊𝚌𝚔 (𝙼𝚘𝚗𝚐𝚘𝙳𝙱, 𝙴𝚡𝚙𝚛𝚎𝚜𝚜.𝚓𝚜, 𝚁𝚎𝚊𝚌𝚝.𝚓𝚜, 𝙽𝚘𝚍𝚎.𝚓𝚜), 𝙸 𝚍𝚎𝚟𝚎𝚕𝚘𝚙 𝚜𝚘𝚕𝚞𝚝𝚒𝚘𝚗𝚜 𝚝𝚑𝚊𝚝 𝚌𝚘𝚗𝚗𝚎𝚌𝚝 𝚎𝚟𝚎𝚛𝚢𝚝𝚑𝚒𝚗𝚐 𝚏𝚛𝚘𝚖 𝚒𝚗𝚝𝚞𝚒𝚝𝚒𝚟𝚎 𝚏𝚛𝚘𝚗𝚝-𝚎𝚗𝚍 𝚒𝚗𝚝𝚎𝚛𝚏𝚊𝚌𝚎𝚜 𝚝𝚘 𝚛𝚘𝚋𝚞𝚜𝚝 𝚋𝚊𝚌𝚔-𝚎𝚗𝚍 𝙰𝙿𝙸𝚜. 𝙾𝚗 𝚝𝚑𝚎 𝚏𝚛𝚘𝚗𝚝 𝚎𝚗𝚍, 𝙸 𝚜𝚙𝚎𝚌𝚒𝚊𝚕𝚒𝚣𝚎 𝚒𝚗 𝚌𝚛𝚊𝚏𝚝𝚒𝚗𝚐 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚒𝚟𝚎 𝚊𝚗𝚍 𝚍𝚢𝚗𝚊𝚖𝚒𝚌 𝚞𝚜𝚎𝚛 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎𝚜 𝚠𝚒𝚝𝚑 𝚁𝚎𝚊𝚌𝚝.𝚓𝚜, 𝚕𝚎𝚟𝚎𝚛𝚊𝚐𝚒𝚗𝚐 𝚜𝚝𝚊𝚝𝚎 𝚖𝚊𝚗𝚊𝚐𝚎𝚖𝚎𝚗𝚝 𝚝𝚘𝚘𝚕𝚜 𝚊𝚗𝚍 𝚖𝚘𝚍𝚎𝚛𝚗 𝚄𝙸 𝚕𝚒𝚋𝚛𝚊𝚛𝚒𝚎𝚜. 𝙾𝚗 𝚝𝚑𝚎 𝚋𝚊𝚌𝚔 𝚎𝚗𝚍, 𝙸 𝚍𝚎𝚜𝚒𝚐𝚗 𝚜𝚎𝚌𝚞𝚛𝚎 𝚁𝙴𝚂𝚃𝚏𝚞𝚕 𝙰𝙿𝙸𝚜 𝚊𝚗𝚍 𝚖𝚒𝚌𝚛𝚘𝚜𝚎𝚛𝚟𝚒𝚌𝚎𝚜 𝚠𝚒𝚝𝚑 𝙽𝚘𝚍𝚎.𝚓𝚜 𝚊𝚗𝚍 𝙴𝚡𝚙𝚛𝚎𝚜𝚜.𝚓𝚜, 𝚠𝚑𝚒𝚕𝚎 𝚞𝚜𝚒𝚗𝚐 𝙼𝚘𝚗𝚐𝚘𝙳𝙱 𝚝𝚘 𝚑𝚊𝚗𝚍𝚕𝚎 𝚎𝚏𝚏𝚒𝚌𝚒𝚎𝚗𝚝 𝚊𝚗𝚍 𝚜𝚌𝚊𝚕𝚊𝚋𝚕𝚎 𝚍𝚊𝚝𝚊𝚋𝚊𝚜𝚎𝚜.
                        </p>
                        <p className="mb-6">
                            𝙲𝚘𝚖𝚒𝚗𝚐 𝚏𝚛𝚘𝚖 𝚊 𝚋𝚊𝚌𝚔𝚐𝚛𝚘𝚞𝚗𝚍 𝚒𝚗 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚘𝚗 𝚃𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚢, 𝚊𝚗𝚍 𝚠𝚒𝚝𝚑 𝚑𝚊𝚗𝚍𝚜-𝚘𝚗 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎 𝚝𝚑𝚛𝚘𝚞𝚐𝚑 𝚙𝚛𝚘𝚓𝚎𝚌𝚝𝚜 𝚊𝚗𝚍 𝚒𝚗𝚝𝚎𝚛𝚗𝚜𝚑𝚒𝚙𝚜, 𝙸 𝚝𝚑𝚛𝚒𝚟𝚎 𝚘𝚗 𝚜𝚘𝚕𝚟𝚒𝚗𝚐 𝚛𝚎𝚊𝚕-𝚠𝚘𝚛𝚕𝚍 𝚌𝚑𝚊𝚕𝚕𝚎𝚗𝚐𝚎𝚜 𝚠𝚒𝚝𝚑 𝚙𝚛𝚊𝚌𝚝𝚒𝚌𝚊𝚕 𝚊𝚗𝚍 𝚒𝚗𝚗𝚘𝚟𝚊𝚝𝚒𝚟𝚎 𝚜𝚘𝚕𝚞𝚝𝚒𝚘𝚗𝚜. 𝙼𝚢 𝚓𝚘𝚞𝚛𝚗𝚎𝚢 𝚊𝚜 𝚊 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝚒𝚜 𝚏𝚞𝚎𝚕𝚎𝚍 𝚋𝚢 𝚌𝚘𝚗𝚝𝚒𝚗𝚞𝚘𝚞𝚜 𝚕𝚎𝚊𝚛𝚗𝚒𝚗𝚐, 𝚎𝚡𝚙𝚎𝚛𝚒𝚖𝚎𝚗𝚝𝚒𝚗𝚐, 𝚊𝚗𝚍 𝚊𝚙𝚙𝚕𝚢𝚒𝚗𝚐 𝚖𝚘𝚍𝚎𝚛𝚗 𝚝𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚒𝚎𝚜 𝚝𝚘 𝚌𝚛𝚎𝚊𝚝𝚎 𝚊𝚙𝚙𝚕𝚒𝚌𝚊𝚝𝚒𝚘𝚗𝚜 𝚝𝚑𝚊𝚝 𝚖𝚊𝚔𝚎 𝚊𝚗 𝚒𝚖𝚙𝚊𝚌𝚝.
                        </p>

                        {/* Cards for LeetCode & Figma */}
                        <div className="grid grid-cols-2 gap-6 mt-4">
                            <a
                                href="https://leetcode.com/u/sakthidharan2006/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-yellow-400 mb-2">
                                    <path d="M13.74 2.67a1.5 1.5 0 0 0-2.13 0l-8.94 8.94a1.5 1.5 0 0 0 0 2.13l8.94 8.94a1.5 1.5 0 0 0 2.13-2.13l-7.88-7.88 7.88-7.88a1.5 1.5 0 0 0 0-2.13zM15.5 8a1.5 1.5 0 0 0 0 3h3.5a1.5 1.5 0 0 0 0-3H15.5zm0 5a1.5 1.5 0 0 0 0 3h3.5a1.5 1.5 0 0 0 0-3H15.5z" />
                                </svg>
                                <span className="font-semibold">𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞</span>
                            </a>

                            <a
                                href="https://www.figma.com/@sakthidharan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 cursor-pointer"
                            >
                                <FaFigma size={40} className="text-pink-500 mb-2" />
                                <span className="font-semibold">𝐅𝐢𝐠𝐦𝐚</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education */}
            <div className="w-full max-w-6xl mb-10">
                <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-primary mb-6 text-white dark:text-white">𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧</h2>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(edu.img)}
                            className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer p-6"
                        >
                            <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
                            <p className="mb-1">{edu.institution}</p>
                            <p className="text-gray-600 dark:text-gray-300">{edu.year}</p>
                            <p className="mb-1">{edu.Percentage}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div className="w-full max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-primary mb-6 text-white dark:text-white">𝐂𝐞𝐫𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬</h2>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            onClick={() => cert.img && setSelectedImage(cert.img)}
                            className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg p-6 flex flex-col transform transition duration-300 hover:scale-105 cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                            <p className="mb-1">{cert.issuer}</p>
                            <p className="text-gray-600 dark:text-gray-300">{cert.year}</p>
                            {cert.img && <p className="text-primary mt-2 text-sm"></p>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Images */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg max-w-lg w-full">
                        <img src={selectedImage} alt="Preview" className="w-full h-auto object-cover" />
                    </div>
                </div>
            )}
        </section>
    );
}
