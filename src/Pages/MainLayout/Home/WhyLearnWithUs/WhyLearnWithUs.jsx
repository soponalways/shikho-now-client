import { LightBulbIcon, AcademicCapIcon, DevicePhoneMobileIcon, ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'motion/react';

export default function WhyLearnWithUs() {
    const features = [
        {
            title: "Expert Instructors",
            description: "Learn from industry leaders with real-world experience who guide you every step of the way.",
            icon: AcademicCapIcon
        },
        {
            title: "Flexible Learning",
            description: "Access courses anytime, anywhere on any device — learn at your own pace.",
            icon: DevicePhoneMobileIcon
        },
        {
            title: "Hands-On Projects",
            description: "Work on real-world projects to build your portfolio and showcase your skills.",
            icon: LightBulbIcon
        },
        {
            title: "Lifetime Access",
            description: "Once enrolled, you’ll have unlimited access to your courses and materials forever.",
            icon: ClockIcon
        }
    ];

    return (
        <section className="py-16 bg-base-100">
            <div className="container mx-auto w-11/12">
                <h2 className="text-3xl font-bold text-center mb-4">Why Learn With <span className="text-primary">Shikho Now</span>?</h2>
                <p className="text-center text-base-content/80 max-w-2xl mx-auto mb-12">
                    We make learning accessible, practical, and enjoyable so you can achieve your goals faster.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, idx) => (
                        <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="card bg-base-200 shadow-md p-6 hover:shadow-lg transition">
                            <feature.icon className="h-12 w-12 text-primary mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-base-content/70">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
