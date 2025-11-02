import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [result, setResult] = useState("");

    const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) {
            setEmailError("❌ Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateEmail(email);
        if (emailError) return;

        setResult("Sending...");

        const formData = new FormData(e.target);
        formData.append("access_key", "c88bd2df-9957-4ef1-885f-17b100ee522e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("✅ Message sent successfully!");
            e.target.reset();
            setEmail("");
        } else {
            setResult("❌ " + data.message);
        }
    };

    return (
        <section
            id="contact"
            className="bg-secondary dark:bg-black px-6 md:px-12 py-20 text-white"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-primary w-fit mb-10 animate-fade-in text-white dark:text-white">
                    ℂ𝕠𝕟𝕥𝕒𝕔𝕥
                </h2>

                <div className="flex flex-col md:flex-row gap-10">
                    {/* Contact Form */}
                    <div className="md:w-1/2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-xl p-8">
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="𝚈𝚘𝚞𝚛 𝙽𝚊𝚖𝚎"
                                className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="𝚈𝚘𝚞𝚛 𝙴𝚖𝚊𝚒𝚕"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    validateEmail(e.target.value);
                                }}
                                className={`border rounded-lg p-3 focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-white ${emailError
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-primary dark:border-gray-600"
                                    }`}
                                required
                            />
                            {emailError && (
                                <span className="text-red-600 text-sm">{emailError}</span>
                            )}
                            <textarea
                                name="message"
                                placeholder="𝚈𝚘𝚞𝚛 𝙼𝚎𝚜𝚜𝚊𝚐𝚎"
                                rows={5}
                                className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition font-semibold"
                            >
                                𝚂𝚎𝚗𝚍 𝙼𝚎𝚜𝚜𝚊𝚐𝚎
                            </button>

                            {result && (
                                <div
                                    className={`mt-4 font-medium p-3 rounded-lg border 
                                    ${result.includes("✅")
                                            ? "text-green-600 bg-green-100 border-green-300 dark:bg-green-900 dark:text-green-400 dark:border-green-700"
                                            : "text-red-600 bg-red-100 border-red-300 dark:bg-red-900 dark:text-red-400 dark:border-red-700"
                                        }`}
                                >
                                    {result}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="md:w-1/2 flex flex-col justify-center gap-6">
                        <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-xl transition">
                            <FaEnvelope size={30} className="text-primary" />
                            <div>
                                <p className="text-lg font-semibold">ᴇᴍᴀɪʟ</p>
                                <a
                                    href="mailto:sakthidharane16@gmail.com"
                                    className="text-primary hover:underline"
                                >
                                    𝚜𝚊𝚔𝚝𝚑𝚒𝚍𝚑𝚊𝚛𝚊𝚗𝚎𝟷𝟼@𝚐𝚖𝚊𝚒𝚕.𝚌𝚘𝚖
                                </a>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-xl transition">
                            <FaPhone size={30} className="text-primary" />
                            <div>
                                <p className="text-lg font-semibold">ᴘʜᴏɴᴇ</p>
                                <a
                                    href="tel:+916374103029"
                                    className="text-primary hover:underline"
                                >
                                    ⁺⁹¹ ⁶³⁷⁴¹⁰³⁰²⁹
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation */}
            <style jsx>{`
                .animate-fade-in {
                    animation: fadeIn 1s ease-in-out;
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}
