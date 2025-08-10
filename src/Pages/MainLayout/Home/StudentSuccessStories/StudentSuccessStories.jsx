import { motion } from 'motion/react';
export default function StudentSuccessStories() {
    const stories = [
        {
            name: "Amina Rahman",
            course: "UI/UX Design Masterclass",
            image: "/images/students/amina.jpg",
            quote: "Shikho Now helped me land my dream job as a Product Designer. The projects and mentorship were game-changing!"
        },
        {
            name: "Hasan Mahmud",
            course: "Full-Stack Web Development",
            image: "/images/students/hasan.jpg",
            quote: "I went from zero to building full apps with React and Node.js. Now I work as a Junior Developer at a tech startup."
        },
        {
            name: "Farhana Kabir",
            course: "Video Editing Essentials",
            image: "/images/students/farhana.jpg",
            quote: "The hands-on approach was exactly what I needed. Now I freelance for clients worldwide."
        }
    ];

    return (
        <section className="py-6 md:py-10 lg:py-12 bg-base-100">
            <div className="container mx-auto w-11/12">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Student <span className="text-primary">Success Stories</span>
                </h2>
                <p className="text-center text-base-content/80 max-w-2xl mx-auto mb-12">
                    See how learners from Shikho Now have transformed their skills and careers through our courses.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {stories.map((story, idx) => (
                        <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut", transitionBehavior: "smooth" }}
                        className="card bg-base-200 shadow-md hover:shadow-lg shadow-primary transition">
                            <figure className="px-6 pt-6">
                                <img src={story.image} alt={story.name} className="hover:scale-105 transition-transform rounded-xl h-48 w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h3 className="text-lg font-semibold">{story.name}</h3>
                                <p className="text-sm text-primary mb-2">{story.course}</p>
                                <p className="text-sm text-base-content/70 italic">"{story.quote}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
