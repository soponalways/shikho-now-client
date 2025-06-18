import Banner from "./Banner/Banner";
import CoursesSection from "./CoursesSection/CoursesSection";

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
            </main>
        </div>
    );
};

export default Home;