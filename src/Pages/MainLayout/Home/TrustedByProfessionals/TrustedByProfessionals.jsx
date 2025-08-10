import { motion } from 'motion/react';
export default function TrustedByProfessionals() {
    const companies = [
        { name: "Google", logo: "/images/logos/google.png" },
        { name: "Microsoft", logo: "/images/logos/microsoft.png" },
        { name: "Adobe", logo: "/images/logos/adobe.png" },
        { name: "Netflix", logo: "/images/logos/netflix.png" },
        { name: "Amazon", logo: "/images/logos/amazon.png" },
    ];

    return (
        <section className="py-16 bg-base-100">
            <div className="container mx-auto w-11/12">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Trusted by <span className="text-primary">Professionals</span>
                </h2>
                <p className="text-center text-base-content/80 max-w-2xl mx-auto mb-10">
                    Professionals and organizations around the world choose Shikho Now to upskill, reskill, and stay ahead in their careers.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 ">
                    {companies.map((company, idx) => (
                        <motion.div 
                        key={idx} 
                        whileHover={{ scale: 1.1 , transitionDuration: "0.3s" }}
                        className="flex items-center justify-center shadow shadow-primary px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="h-12 object-contain grayscale hover:grayscale-0 transition"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
