import WeatherImg from '../assets/weather.png';
import MaruthamImg from '../assets/marutham.png';
import PortfolioImg from '../assets/portfolio.png';

export default function Projects() {
    const projects = [
        {
            title: "ᴡᴇᴀᴛʜᴇʀ ᴅᴀꜱʜʙᴏᴀʀᴅ",
            description:
                "𝙰 𝚕𝚒𝚟𝚎 𝚠𝚎𝚊𝚝𝚑𝚎𝚛 𝚊𝚙𝚙𝚕𝚒𝚌𝚊𝚝𝚒𝚘𝚗 𝚋𝚞𝚒𝚕𝚝 𝚠𝚒𝚝𝚑 𝚁𝚎𝚊𝚌𝚝 𝚊𝚗𝚍 𝚃𝚊𝚒𝚕𝚠𝚒𝚗ᴅ 𝙲𝚂𝚂, 𝚏𝚎𝚝𝚌𝚑𝚒𝚗𝚐 𝚛𝚎𝚊𝚕-𝚝𝚒𝚖𝚎 𝚍𝚊𝚝𝚊 𝚞𝚜𝚒𝚗𝚐 𝙾𝚙𝚎𝚗𝚆𝚎𝚊𝚝𝚑𝚎𝚛 𝙰𝙿𝙸.",
            tech: ["ʀᴇᴀᴄᴛ", "ᴛᴀɪʟᴡɪɴᴅ", "ᴀᴘɪ"],
            link: null,
            image: WeatherImg,
        },
        {
            title: "ᴡᴇꜱᴛᴇʀɢᴀᴛᴇꜱ - ꜰᴀʀᴍ ꜰʀᴇꜱʜ",
            description:
                "𝙰 𝚏𝚞𝚕𝚕-𝚜𝚝𝚊𝚌𝚔 𝙼𝙴𝚁𝙽 𝚎-𝚌𝚘𝚖𝚖𝚎𝚛𝚌𝚎 𝚙𝚕𝚊𝚝𝚏𝚘𝚛𝚖 𝚠𝚒𝚝𝚑 𝚞𝚜𝚎𝚛 𝚊𝚞𝚝𝚑𝚎𝚗𝚝𝚒𝚌𝚊𝚝𝚒𝚘𝚗, 𝚙𝚛𝚘𝚍𝚞𝚌𝚝 𝚖𝚊𝚗𝚊𝚐𝚎𝚖𝚎𝚗𝚝, 𝚊𝚗𝚍 𝚙𝚊𝚢𝚖𝚎𝚗𝚝 𝚒𝚗𝚝𝚎𝚐𝚛𝚊𝚝𝚒𝚘𝚗.",
            tech: ["ᴍᴏɴɢᴏᴅʙ", "ᴇxᴘʀᴇꜱꜱ", "React", "ɴᴏᴅᴇ.ᴊꜱ"],
            link: null,
            image: MaruthamImg,
        },
        {
            title: "ᴘᴏʀᴛꜰᴏʟɪᴏ ᴡᴇʙꜱɪᴛᴇ",
            description:
                "A responsive personal portfolio website showcasing my skills, projects, and resume.",
            tech: ["ʀᴇᴀᴄᴛ", "ᴛᴀɪʟᴡɪɴᴅ"],
            link: "#",
            image: PortfolioImg,
        },
    ];

    return (
        <section
            id="projects"
            className="bg-secondary dark:bg-black px-6 md:px-12 py-20 text-white"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-primary w-fit mb-10">
                    ℙ𝕣𝕠𝕛𝕖𝕔𝕥𝕤
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6 flex flex-col justify-between">
                                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-sm px-3 py-1 rounded-full"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Description / Link */}
                                {project.link === null ? (
                                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                                ) : (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-block text-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition"
                                    >
                                        𝚅𝚒𝚎𝚠 𝙿𝚛𝚘𝚓𝚎𝚌𝚝
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
