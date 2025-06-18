import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const AddCourse = () => {
    const {user} = useAuth(); 
    const axiosSecure = useAxiosSecure(); 
    
    const handleAddCourse = e => {
        e.preventDefault(); 
        const form = e.target; 
        const formData = new FormData(form); 
        const { prerequisites , ...restCourseData} = Object.fromEntries(formData.entries()); 

        const prerequisitesArray = prerequisites.split(','); 
        const creationTime = new Date().getTime(); 

        const courseData = {
            ...restCourseData, 
            prerequisites: prerequisitesArray, 
            creationTime, 
            adminEmail : user?.email, 
            adminName : user?.displayName || user?.name, 
        }

        axiosSecure.post(`/course`, courseData)
        .then(res => {
            if (res.data.insertedId) {
                form.reset()
                if (restCourseData.publishedStatus === "Draft") {
                    toast.success("he Course saved in Draft please update as published")
                } else if (restCourseData.publishedStatus === "Published") {
                    toast.success("You have successfully added the course")
                }
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            <div>
               <title>Add a course</title>
            </div>
            <div className='w-11/12 mx-auto'>
                <div className='text-center space-y-2'>
                    <h2 className='text-xl  md:text-2xl lg:text-3xl font-medium md:font-semibold lg:font-bold'>Add a Course</h2>
                    <p>Turn your expertise into impact — add a course and empower learners across the world with your knowledge.</p>
                </div>
                {/* Genearate form for add ocurse */}
                <form onSubmit={handleAddCourse} className='my-4 md:my-6 lg:my-8 space-y-3 md:space-y-4 lg:space-y-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
                        {/* Course Title */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Course title</legend>
                            <input required type="text" name='courseTitle' className="input w-full" placeholder="Type the course title" />
                        </fieldset>

                        {/* Short Description  */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Short Description</legend>
                            <input required type="text" name='shortDescription' className="input w-full" placeholder="Type the course short description " />
                        </fieldset>

                        {/* Thumbnail Image */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Thumbnail Image</legend>
                            <input required type="text" name='imageURL' className="input w-full" placeholder="Enter the Thumbnail image URL" />
                        </fieldset>

                        {/* Duration */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Course Duration</legend>
                            <input required type="text" name='duration' className="input w-full" placeholder="Type the course duration" />
                        </fieldset>

                        {/* Course Level */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Course Level</legend>
                            <select name="level" defaultValue="Beginner" className="select w-full cursor-pointer">
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </fieldset>

                        {/* Course Language */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Course Language</legend>
                            <select name="language" defaultValue="bangla" className="select w-full cursor-pointer">
                                <option value="Bangla">Bangla</option>
                                <option value="English">English</option>
                                <option value="Arbic">Arbic</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                        </fieldset>

                        {/* Course Category */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Course Category</legend>
                            <select name="category" className="select w-full cursor-pointer">
                                <option value="Web Developement">Web Developement</option>
                                <option value="Ai">Ai</option>
                                <option value="Meachin Learning">Meachin Learning</option>
                                <option value="Game development">Game development</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="App Development">App Development</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="Software Development">Software Development</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="Video Editing / Animation">Video Editing / Animation</option>
                                <option value="Social Media Management">Social Media Management</option>
                                <option value="Technical Writing">Technical Writing</option>
                            </select>
                        </fieldset>

                        {/* Total Lesson  */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base"> Total Lesson</legend>
                            <input required type="number" name='lessons' className="input w-full" placeholder="How many lessons for these course (number)" />
                        </fieldset>

                        {/* Course Type */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Course Type</legend>
                            <select name="courseType" className="select w-full cursor-pointer">
                                <option disabled={true}>Choose the type</option>
                                <option value="Free">Free</option>
                                <option value="Paid">Paid</option>
                            </select>
                        </fieldset>

                        {/* Price */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Price</legend>
                            <input required type="number" name='price' className="input w-full" placeholder="Type the course price " />
                        </fieldset>

                        {/* Published status */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Published status</legend>
                            <select name="publishedStatus" defaultValue="Draft" className="select w-full cursor-pointer">
                                <option disabled={true}>Choose a status</option>
                                <option value="Published">Published</option>
                                <option value="Draft">Draft</option>
                            </select>
                        </fieldset>

                        {/* Start Date */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Start Date</legend>
                            <input required type="date" name="startDate" className='input  w-full border-2 border-base-100 focus:border-2' />
                        </fieldset>

                        {/* Enrollment limitation */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Enrollment limitation</legend>
                            <input required type="text" name='maxSeat' className="input w-full" placeholder="Max Seat" />
                        </fieldset>

                        {/* Instructor Name */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Instractor Name</legend>
                            <input required type="text" name='instractor' className="input w-full" placeholder="Type The Instractor name" />
                        </fieldset>

                        {/* Instractor Image URL */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Instractor Image URL</legend>
                            <input required type="url" name='instractorImage' className="input w-full" placeholder="Paste it here the instractor image url" />
                        </fieldset>

                        {/* Instractor Bio */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Instractor Bio</legend>
                            <textarea name='instractorBio' className="textarea w-full" placeholder="Type the instructor bio" />
                        </fieldset>

                        {/* Prerequisites */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Prerequisites</legend>
                            <textarea name='prerequisites' className="textarea w-full" placeholder="Type the Prerequisites Separeted by comma (,)" />
                        </fieldset>

                        {/* Full Description of the course */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-3 md:p-4">
                            <legend className="fieldset-legend text-sm text-gray-400 md:text-base">Full Description of the course</legend>
                            <textarea name='fullDescription' className="textarea w-full" placeholder="Type the full Description of the course " />
                        </fieldset>
                    </div>
                    {/* Submite Form */}
                    <div>
                        <input type="submit" className='w-full btn btn-secondary hover:bg-accent hover:text-black hover:border-accent' value="Add Course" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddCourse;