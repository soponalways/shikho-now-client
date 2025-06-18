import Banner from "./Banner/Banner";
import CoursesSection from "./CoursesSection/CoursesSection";
import LearingingIsEarning from "./LearningIsEarning/LearingingIsEarning";
import ProjectsBasedLearning from "./ProjectsBaseLearing/ProjectsBasedLearning";

const Home = () => {
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
                    <CoursesSection></CoursesSection>
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