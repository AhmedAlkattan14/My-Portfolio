"use client";

import React, { useEffect, useState } from "react";
import { BiPhone, BiEnvelope, BiMap } from "react-icons/bi";

export default function Contact() {
    const [message, setMessage] = useState<string | null>(null);
    const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);

    // Reveal animation
    useEffect(() => {
        const elements = document.querySelectorAll(".fade-left, .fade-right, .fade-up");
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-active");
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);


    // Send email using Formspree
    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setMessage("🚀 Message sent successfully!");
                setMessageType('success');
                form.reset();
            } else {
                setMessage("❌ Failed to send message. Please try again.");
                setMessageType('error');
            }
        } catch (error) {
            console.error("Formspree error:", error);
            setMessage("❌ Failed to send message. Please try again.");
            setMessageType('error');
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 text-white">

            <div className="grid lg:grid-cols-2 gap-12 w-full">

                {/* LEFT SIDE FORM */}
                <div className="bg-gray-500/5 p-8 rounded-xl shadow-lg fade-left">
                    <h2 className="font-unbounded text-5xl font-normal text-[color:var(--primary-color)] mb-4 fade-up">
                        Let&apos;s work Together
                    </h2>

                    <p className="text-sm text-gray-400 my-8 fade-up">
                        Feel free to reach out and tell me about your project or inquiry.
                    </p>

                    <form className="space-y-6" onSubmit={sendEmail}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fade-up">
                            <input type="text" name="first_name" required placeholder="First Name"
                                className="input-focus w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm" />
                            <input type="text" name="last_name" required placeholder="Last Name"
                                className="input-focus w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fade-up">
                            <input type="email" name="email" required placeholder="Email Address"
                                className="input-focus w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm" />
                            <input type="tel" name="phone" placeholder="Phone Number"
                                className="input-focus w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm" />
                        </div>

                        <select name="service" required
                            className="input-focus w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm fade-up">
                            <option value="">Select Service</option>
                            <option>Frontend Development</option>
                            <option>Business-Focused Web Solutions</option>
                            <option>Customer Support & Account Handling</option>
                            <option>Sales & Lead Management</option>
                        </select>

                        <textarea name="message" rows={5} required placeholder="Type your message here..."
                            className="input-focus w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm fade-up" />

                        <button
                            type="submit"
                            className="relative overflow-hidden w-full bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-500 cursor-pointer fade-up group"
                        >
                            <span className="relative z-10 group-hover:text-black transition-all duration-500 ">
                                Send Message
                            </span>
                            <span className="absolute right-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full "></span>
                        </button>

                        {message && (
                            <div className={`mt-4 p-4 rounded-lg text-sm ${messageType === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500' : 'bg-red-500/10 text-red-400 border border-red-500'}`}>
                                {message}
                            </div>
                        )}

                    </form>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col space-y-6 justify-center fade-right">
                    {[
                        { icon: <BiPhone size={24} />, title: "Phone", value: "(+02) 01111159919 - (+02) 01002888767" },
                        { icon: <BiEnvelope size={24} />, title: "Email", value: "Ahmed.alkattan@gmail.com" },
                        { icon: <BiMap size={24} />, title: "Location", value: "Cairo, Egypt" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-4 border-b border-gray-600 pb-5 fade-up">
                            <span className="bg-[#1a1b1f] p-4 rounded-lg border border-[var(--primary-color)] text-[color:var(--primary-color)]">
                                {item.icon}
                            </span>
                            <div>
                                <p className="text-sm text-gray-400">{item.title}</p>
                                <p className="font-medium">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
