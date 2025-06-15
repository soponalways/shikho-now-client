import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Home | Shikho Now</title>
                </Helmet>
            </div>
            <h3 className='text-2xl font-semibold'>Hello from Home pages </h3>
        </div>
    );
};

export default Home;