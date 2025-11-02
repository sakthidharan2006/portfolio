export default function Footer() {
    return (
        <footer className="bg-secondary dark:bg-black backdrop-blur-md shadow-md text-white py-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-lg md:text-xl font-serif tracking-wide text-white dark:text-white">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-bold">
                        𝕊𝕒𝕜𝕥𝕙𝕚𝕕𝕙𝕒𝕣𝕒𝕟 𝔼
                    </span>{" "}
                    , 𝙰𝚕𝚕 𝚁𝚒𝚐𝚑𝚝𝚜 𝚁𝚎𝚜𝚎𝚛𝚟𝚎𝚍.
                </h2>
            </div>
        </footer>
    );
}
