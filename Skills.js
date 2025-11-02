import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaJava
} from "react-icons/fa";

export default function Skills() {
    const languages = [
        { name: "​🇯​​🇦​​🇻​​🇦​​🇸​​🇨​​🇷​​🇮​​🇵​​🇹​", icon: <FaJsSquare size={30} className="text-yellow-400" /> },
        { name: "🇯​​🇦​​🇻​​🇦​", icon: <FaJava size={30} className="text-red-600" /> },
        { name: "​🇵​​🇾​​🇹​​🇭​​🇴​​🇳​", icon: <span className="text-2xl font-bold text-green-500">Py</span> },
        { name: "​🇨​", icon: <span className="text-2xl font-bold text-blue-700">C</span> },
        { name: "​🇸​​🇶​​🇱​", icon: <FaDatabase size={30} className="text-indigo-500" /> },
    ];

    const frontend = [
        { name: "​🇷​​🇪​​🇦​​🇨​​🇹​", icon: <FaReact size={30} className="text-blue-400" /> },
        { name: "🇭​​🇹​​🇲​​🇱5", icon: <FaHtml5 size={30} className="text-orange-500" /> },
        { name: "🇨​​🇸​​🇸3", icon: <FaCss3Alt size={30} className="text-blue-600" /> },
    ];

    const backend = [
        { name: "🇳​​🇴​​🇩​​🇪​.​🇯​​🇸​", icon: <FaNodeJs size={30} className="text-green-500" /> },
        { name: "🇲​​🇴​​🇳​​🇬​​🇴​​🇩​​🇧​", icon: <FaDatabase size={30} className="text-green-700" /> },
    ];

    const renderSkillGroup = (title, skills) => (
        <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 border-b-2 border-primary w-fit text-white dark:text-white">{title}</h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105"
                    >
                        {skill.icon}
                        <span className="mt-3 text-lg font-semibold">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section
            id="skills"
            className="bg-secondary dark:bg-black px-6 md:px-12 py-20 text-white"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-primary w-fit mb-10 text-white dark:text-white">
                    𝕊𝕜𝕚𝕝𝕝𝕤
                </h2>
                {renderSkillGroup("𝐋𝐚𝐧𝐠𝐮𝐚𝐠𝐞𝐬", languages)}
                {renderSkillGroup("𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝", frontend)}
                {renderSkillGroup("𝐁𝐚𝐜𝐤𝐞𝐧𝐝", backend)}
            </div>
        </section>
    );
}
