import { useQuery } from "@tanstack/react-query";
import Banner from "./Banner/Banner";
import CoursesSection from "./CoursesSection/CoursesSection";
import LearingingIsEarning from "./LearningIsEarning/LearingingIsEarning";
import PopularCourses from "./PopularCourses/PopularCourses";
import ProjectsBasedLearning from "./ProjectsBaseLearing/ProjectsBasedLearning";
import StudentSuccessStories from "./StudentSuccessStories/StudentSuccessStories";
import TrustedByProfessionals from "./TrustedByProfessionals/TrustedByProfessionals";
import WhyLearnWithUs from "./WhyLearnWithUs/WhyLearnWithUs";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import LoadingSpineer from "../LoadingSpineer/LoadingSpineer";

const Home = () => {
    const axiosPublic = useAxiosPublic();
    const {data:courses=[], isLoading:coursesIsLoading} = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axiosPublic.get("/courses/latest");
            return res.data;
        }
    });

    if(coursesIsLoading) {
        return <div>
            <LoadingSpineer></LoadingSpineer>
        </div>
    }
    return (
        <div>
            <div>
                <title>Home | Shikho Now</title>
            </div>
            <header>
                <Banner></Banner>
            </header>
            <main>
                {/* courses Section  */}
                <section className="my-4 md:my-6 lg:my-8">
                    <CoursesSection courses={courses} ></CoursesSection>
                </section>
                {/* popular courses Section  */}
                <section className="my-4 md:my-6 lg:my-8">
                    <PopularCourses></PopularCourses>
                </section>
                {/* Whhy Learn with Shikho now platform */}
                <section className="my-4 md:my-6 lg:my-8">
                    <WhyLearnWithUs></WhyLearnWithUs>
                </section>
                { /* Trusted by Professionals section  */ }
                <section className="my-4 md:my-6 lg:my-8">
                    <TrustedByProfessionals></TrustedByProfessionals>
                </section>
                { /* Student Success Stories section  */ }
                <section className="my-4 md:my-6 lg:my-8">
                    <StudentSuccessStories></StudentSuccessStories>
                </section>

                {/* Learing is Earning section  */}
                <section className="my-4 md:my-6 lg:my-8">
                    <LearingingIsEarning></LearingingIsEarning>
                </section>
                {/* Projects based learing section  */}
                <section className="my-4 md:my-6 lg:my-8">
                    <ProjectsBasedLearning></ProjectsBasedLearning>
                </section>
            </main>
        </div>
    );
};

export default Home;