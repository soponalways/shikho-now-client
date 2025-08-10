import React from "react";
import bannerImageUrl from "../../../assets/images/aboutpage.jpg";
import { Link } from "react-router";

export default function AboutPage() {
    return (
        <main className="min-h-screen  text-base-content mb-4 md:mb-6 lg:mb-7">
            <title>About Us - Shikho Now</title>

            {/* Banner / Hero */}
            <section className="relative">
                <div className="h-64 md:h-96 w-full overflow-hidden bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500">
                    {bannerImageUrl ? (
                        <img
                            src={bannerImageUrl}
                            alt="Shikho Now banner"
                            className="w-full h-full object-cover opacity-95"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/90">
                            <div className="text-center px-4">
                                <h1 className="text-3xl md:text-5xl font-extrabold">Shikho Now</h1>
                                <p className="mt-2 text-sm md:text-lg">Learn. Build. Launch.</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Floating avatar */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 md:-bottom-12">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full ring-4 ring-base-100 shadow-lg overflow-hidden bg-base-100">
                        <img
                            src={bannerImageUrl || "/images/avatar-placeholder.png"}
                            alt="Instructor / Brand"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="container mx-auto px-4 md:px-8 pt-16 md:pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: About text */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-bold">About Shikho Now</h2>
                        <p className="mt-4 leading-relaxed">
                            Shikho Now is a modern course management platform built to help learners master practical
                            tech and creative skills. We host a wide range of courses — from UI/UX design to full-stack
                            web development (React, Vue, Angular), and even hands-on creative courses like video editing.
                            Our goal is to make high-quality, project-focused learning accessible for everyone.
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-base-200 rounded-lg shadow">
                                <h3 className="font-semibold">What we teach</h3>
                                <ul className="mt-2 text-sm list-disc list-inside">
                                    <li>UI / UX Design — tools & portfolio projects</li>
                                    <li>Frontend — React, Vue, Angular</li>
                                    <li>Full Stack — Node.js, Express, MongoDB</li>
                                    <li>Video Editing & Content Creation</li>
                                </ul>
                            </div>

                            <div className="p-4 bg-base-200 rounded-lg shadow">
                                <h3 className="font-semibold">How we teach</h3>
                                <p className="mt-2 text-sm">
                                    Project-based lessons, real-world assignments, step-by-step guidance, and an active
                                    community that helps learners ship portfolio-ready projects quickly.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold">Our Promise</h3>
                            <p className="mt-2">
                                We focus on practical skills that employers value. Every course includes clear outcomes,
                                hands-on projects, and resources to help you move from learning to building and then to
                                getting hired or launching your own products.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Link
                                to="/courses"
                                className="btn btn-primary hover:btn-accent btn-md shadow-sm"
                            >
                                Browse Courses
                            </Link>
                            <Link to="/contact" className="btn btn-outline hover:btn-accent btn-md">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Right: Stats */}
                    <aside className="space-y-4">
                        <div className="p-4 bg-base-200 rounded-lg shadow">
                            <h4 className="text-sm opacity-70">Learner success</h4>
                            <div className="mt-3">
                                <p className="text-2xl md:text-3xl font-extrabold">50K+</p>
                                <p className="text-sm opacity-80">Learners and growing</p>
                            </div>
                        </div>

                        <div className="p-4 bg-base-200 rounded-lg shadow">
                            <h4 className="text-sm opacity-70">Courses</h4>
                            <div className="mt-3">
                                <p className="text-2xl md:text-3xl font-extrabold">200+</p>
                                <p className="text-sm opacity-80">Practical, project-based courses</p>
                            </div>
                        </div>

                        <div className="p-4 bg-base-200 rounded-lg shadow">
                            <h4 className="text-sm opacity-70">Instructors</h4>
                            <div className="mt-3">
                                <p className="text-2xl md:text-3xl font-extrabold">80+</p>
                                <p className="text-sm opacity-80">Industry practitioners</p>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Mission */}
                <div className="mt-12 bg-base-200 rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                    <p className="mt-3">
                        To empower learners with the skills, projects, and community they need to succeed in the
                        digital economy. We believe hands-on experience and small, meaningful projects accelerate
                        learning — that is why Shikho Now is focused on guided, outcome-oriented courses.
                    </p>

                    <div className="mt-6">
                        <h4 className="font-medium">Meet the team</h4>
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {["A", "B", "C", "D"].map((t, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 border border-primary rounded-full overflow-hidden bg-base-300 flex items-center justify-center">
                                        <span className="text-2xl font-bold opacity-50">{t}</span>
                                    </div>
                                    <div className="mt-2 text-sm">
                                        <p className="font-semibold">Team Member</p>
                                        <p className="text-xs opacity-70">Role</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ / Values */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-base-200 rounded-lg shadow">
                        <h4 className="font-semibold">Frequently asked</h4>
                        <div className="mt-4 space-y-3">
                            <details className="group">
                                <summary className="cursor-pointer list-none font-medium">Can I switch between courses?</summary>
                                <p className="mt-2 text-sm opacity-80">Yes — enroll in multiple courses and learn at your own pace.</p>
                            </details>
                            <details className="group">
                                <summary className="cursor-pointer list-none font-medium">Do you offer certificates?</summary>
                                <p className="mt-2 text-sm opacity-80">Most courses offer a completion certificate and project review.</p>
                            </details>
                            <details className="group">
                                <summary className="cursor-pointer list-none font-medium">What level are the courses?</summary>
                                <p className="mt-2 text-sm opacity-80">Beginner to advanced — each course lists prerequisites and outcomes.</p>
                            </details>
                        </div>
                    </div>

                    <div className="p-6 bg-base-200 rounded-lg shadow">
                        <h4 className="font-semibold">Our values</h4>
                        <ul className="mt-3 list-disc list-inside opacity-80">
                            <li>Practical learning — build portfolio-ready projects</li>
                            <li>Community — learners help learners</li>
                            <li>Transparency — clear outcomes and honest feedback</li>
                            <li>Accessibility — affordable and well-structured content</li>
                        </ul>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-10 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-lg p-6 text-white">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h4 className="text-xl font-semibold">Ready to start learning?</h4>
                            <p className="mt-1 text-sm text-white/90">Join thousands of learners who are building real projects.</p>
                        </div>
                        <div className="flex gap-3">
                            <Link to="/Register" className="btn btn-outline hover:btn-accent text-white">
                                Create Account
                            </Link>
                            <Link to="/courses" className="btn btn-primary hover:btn-accent">
                                View Courses
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
