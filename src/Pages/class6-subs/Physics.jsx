/* eslint-disable react/no-unescaped-entities */
import { FaPlay, FaRegCirclePlay } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoTrendingUpSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

function Physics() {
  return (
    <>
      <div className=" bg-[#28235f] text-white p-6 md:p-12">
        <nav className="text-sm text-gray-400 ">
          <a href="#" className="hover:text-white mr-2">
            Home
          </a>{" "}
          &gt;
          <a href="#" className="hover:text-white ml-2 mr-2">
            {" "}
            Browse{" "}
          </a>{" "}
          &gt;
          <a href="#" className="hover:text-white ml-2 mr-2">
            {" "}
            Courses
          </a>
        </nav>
        <div className="flex flex-row justify-between mt-14 ">
          <div>
            <div className="flex flex-row gap-x-2">
              <p className="px-4 py-2 rounded-2xl bg-[#D60059] flex flex-row font-semibold text-sm  w-28">
                <FaPlay className="mr-2 h-3 w-3 mt-1" />
                courses
              </p>
              <p className=" rounded-2xl  bg-[#3c3772] flex flex-row justify-center items-center  text-sm w-16">
                skills
              </p>
            </div>
            <h1 className="mt-6 text-4xl font-bold text-white">
              Physics: Executive Briefing
            </h1>
            <p className="mt-4 flex flex-row ">
              <FaStar className="text-yellow-500 mt-2" />
              <FaStar className="text-yellow-500 mt-2" />
              <FaStar className="text-yellow-500 mt-2" />
              <FaStar className="text-yellow-500 mt-2" />
              <FaStarHalfAlt className="text-yellow-500  mt-2" />
              <p className="ml-9">
                {" "}
                by{" "}
                <Link
                  to={"/authors/brice-wilson"}
                  className="hover:underline text-lg"
                >
                  Brice Wilson
                </Link>
              </p>
            </p>
            <p className="text-lg font-semibold mt-4 ">
              Physics has advanced significantly in recent years. This course
              will cover the basics of motion,
              <br />
              forces, energy, and matter, explaining how they affect everyday
              life. Gain essential knowledge to
              <br /> understand and explore the physical world around us.
            </p>

            <Link to={"/video-page"}>
              <p className="flex flex-row gap-x-2  p-3  mt-5 border-indigo-400 font-semibold bg-[#3c3772] border-2  hover:bg-[#28245c] w-64 justify-center rounded-3xl flex-wrap">
                <FaPlay className="w-5 h-5 text-white mt-1 " />
                <p className="text-lg">Preview this Course</p>
              </p>
            </Link>

            <h1 className="text-white text-xl font-bold mt-20">What you'll learn</h1>
            <div className=" w-5/6">
            <p className="mt-4 text-lg ">Physics has advanced significantly in recent years. This course will provide you with an overview of the fundamentalprinciples of physics as well as the skills required to apply these principles in various <br/> real-world scenarios. You will  explore the concepts of motion, forces, energy, and matter, learning how <br/> they interact and influence each other.  From understanding the laws of gravity to exploring the principles of electromagnetism, this course will equip you with  the knowledge needed to   comprehend<br/> the physical world around us. Whether you're interested in the mechanics of  everyday objects or the <br/>vast phenomena of the  universe, this course will offer the foundational insights necessary to pursue <br/> further studies or careers  in physics and related fields.You'll also investigate atomic and nuclear<br/> physics, gaining insights into  the behavior of particles at the smallest scales. Practical experiments <br/> and problem-solving sessions will  enhance your understanding and help you develop critical thinking <br/> skills. This comprehensive approach  ensures you not only grasp theoretical concepts but also appreciate their practical applications in  technology, engineering, and everyday life.</p>

            <p className="w-full border-2 border-indigo-400 mt-8 border-opacity-30"></p>
            </div>
            <div className="w-5/6">
              <div className="text-xl mt-69 font-bold">Table of contents</div>
            </div>
          </div>

          {/* right section */}

          <div className="  flex flex-col justify-center rounded-xl text-lg">
            <div className="flex flex-col bg-white rounded-xl p-8 ">
              <div className="flex flex-col -mt-3 justify-center ">
                <h1 className="text-2xl  font-bold text-black">Try for free</h1>
                <p className="text-black  mt-2">
                  Get this course plus top-rated picks in tech skills and other popular topics.
                </p>
                <Link to={"/payment-page"}>
                  <p className="flex flex-row gap-x-2 py-4 mt-5 bg-[#D60059] hover:bg-[#ff3478] font-semibold  border-2   w-96 justify-center rounded-3xl flex-wrap">
                    <p className="text-lg">Get Started</p>
                  </p>
                </Link>
                <p className="mt-4 text-gray-700 ml-14">
                  ₹ 749 per month after 10 day trial
                </p>
              </div>
              <p className="w-full bg-gray-500 border"></p>
              <div className="flex flex-col p-8 justify-center items-center">
                <h1 className="text-lg font-bold text-black">
                  Your 10 day Standard free trial includes
                </h1>
                <p className="flex flex-row gap-x-2 mt-4">
                  <FaRegCirclePlay className="text-pink-500  w-9 h-9 mr-4" />
                  <p>
                    <p className="text-black text-lg font-bold">
                      Expert-led courses
                    </p>
                    <p className="text-black text-sm mt-3">
                      Keep up with the pace of change with
                      <br /> thousands of expert-led, in-depth courses.
                    </p>
                  </p>
                </p>
              </div>
              <p className="w-full bg-gray-500 border"></p>
              <div className="flex flex-col px-8 pt-4 justify-center text-black ">
                <h1 className="text-lg font-bold text-black">For teams</h1>
                <p>
                  <span className="text-pink-600 font-semibold hover:underline">
                    Give up to 50 users
                  </span>{" "}
                  access to our full library including
                  <br />
                  this course{" "}
                  <span className="font-bold">free for 30 days</span>
                </p>
              </div>
            </div>

            {/* course info */}

            <div>
              <h1 className="text-2xl mt-8 text-white font-bold">Course info</h1>
              <div className="flex flex-col mt-4">
                  <div className="flex flex-row justify-between">
                    <p>Rating</p>
                    <p className="flex flex-row gap-x-2">
                    <p className="flex flex-row text-yellow-400 mt-1">
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStarHalfAlt/>
                    </p>
                    <p>{"(159)"}</p>
                    </p>
                  </div>
                  <p className="border w-full  border-indigo-800 mt-1 border-opacity-70"></p>
                  <div className="flex flex-row justify-between">
                    <p>Level</p>
                   <p className="flex flex-row gap-x-2">
                   <p>Beginner</p>
                   <IoTrendingUpSharp className="h-6 w-6"/>
                   </p>
                  </div>
                  <p className="border w-full  border-indigo-800 mt-1 border-opacity-70"></p>
                  <div className="flex flex-row justify-between">
                    <p>Updated</p>
                   <p className="flex flex-row gap-x-2">
                   <p>june 11,2024</p>
                   <MdDateRange className="h-6 w-6"/>
                   </p>
                  </div>
                  <p className="border w-full  border-indigo-800 mt-1 border-opacity-70"></p>
                  <div className="flex flex-row justify-between">
                    <p>Duration</p>
                   <p className="flex flex-row gap-x-2">
                   <p>30 m</p>
                   <FaRegClock className="h-6 w-6"/>
                   </p>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

 export default Physics;
