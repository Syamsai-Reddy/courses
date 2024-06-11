/* eslint-disable react/no-unescaped-entities */
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

import Class6 from "../../assets/class-6.jpg";
import Class7 from "../../assets/class-7.jpg";
import Class8 from "../../assets/class-8.jpg";
import Class9 from "../../assets/class-9.jpg";
import Class10 from "../../assets/class-10.jpg";
import Class11 from "../../assets/class-11.jpg";
import Class12 from "../../assets/class-12.jpg";
import NEET from "../../assets/neet.jpg";
import JEE from "../../assets/jee.jpg";

function CoursesPages() {
  return (
    <>
      <div className="w-full h-full text-lg font-medium">
        {/* class 6th - 10th books pages */}

        <div className=" bg-cyan-50  ">
          <div className="border border-gray-600 m-4">
            <div className="text-xl font-bold flex justify-center text-black mt-2 ">
              Class 6th - Class 10th All Subjects
            </div>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-9 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3 ">
                    <Link to={"/class-6"}>
                      <div className="h-full border-2  border-gray-200 border-opacity-60 bg-white rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-fit object-center"
                          src={Class6}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                            class 6
                          </h1>
                          <p className="leading-relaxed mb-3">
                            All Subjects For Class 6th.
                          </p>
                          <p className="texl-sm text-gray-400">
                            more than 3000 students enrolled
                          </p>
                          <div className="flex items-center flex-wrap bg-blue-500 p-3 w-40 hover:bg-blue-700 rounded-lg mt-4">
                            <Link
                              to={"/class-6"}
                              className="text-white inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              Learn More{" "}
                              <IoIosArrowRoundForward className="w-6 h-6 ml-2" />{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="p-4 md:w-1/3">
                    <Link to={"/class-7"}>
                      <div className="h-full border-2  bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-fit object-center"
                          src={Class7}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                            class 7
                          </h1>
                          <p className="leading-relaxed mb-3">
                            All Subjects For Class 7th.
                          </p>
                          <p className="texl-sm text-gray-400">
                            more than 5800 students enrolled
                          </p>
                          <div className="flex items-center flex-wrap bg-red-500 p-3 w-40 hover:bg-red-700 rounded-lg mt-4">
                            <Link
                              to={"/class-7"}
                              className="text-white inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              Learn More{" "}
                              <IoIosArrowRoundForward className="w-6 h-6 ml-2" />{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="p-4 md:w-1/3">
                    <Link to={"/class-8"}>
                      <div className="h-full border-2  bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-fit object-center"
                          src={Class8}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                            class 8
                          </h1>
                          <p className="leading-relaxed mb-3">
                            All Subjects For Class 8th.
                          </p>
                          <p className="texl-sm text-gray-400">
                            more than 9000 students enrolled
                          </p>
                          <div className="flex items-center flex-wrap bg-green-500 p-3 w-40 hover:bg-green-700 rounded-lg mt-4">
                            <Link
                              to={"/class-8"}
                              className="text-white inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              Learn More{" "}
                              <IoIosArrowRoundForward className="w-6 h-6 ml-2" />{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3">
                    <Link to={"/class-9"}>
                      <div className="h-full border-2  bg-white  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-fit object-center"
                          src={Class9}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                            class 9
                          </h1>
                          <p className="leading-relaxed mb-3">
                            All Subjects For Class 9th.
                          </p>
                          <p className="texl-sm text-gray-400">
                            more than 12000 students enrolled
                          </p>
                          <div className="flex items-center flex-wrap bg-blue-500 p-3 w-40 hover:bg-blue-700 rounded-lg mt-4">
                            <Link
                              to={"/class-9"}
                              className="text-white inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              Learn More{" "}
                              <IoIosArrowRoundForward className="w-6 h-6 ml-2" />{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="p-4 md:w-1/3">
                    <Link to={"/class-10"}>
                      <div className="h-full border-2  bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-fit object-center"
                          src={Class10}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                            class 10
                          </h1>
                          <p className="leading-relaxed mb-3">
                            All Subjects For Class 10th.
                          </p>
                          <p className="texl-sm text-gray-400">
                            more than 30000 students enrolled
                          </p>
                          <div className="flex items-center flex-wrap bg-indigo-700 p-3 w-40 hover:bg-indigo-900 rounded-lg mt-4">
                            <Link
                              to={"/class-10"}
                              className="text-white inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              Learn More{" "}
                              <IoIosArrowRoundForward className="w-6 h-6 ml-2" />{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="border border-gray-600 m-4">
            <div className="text-xl font-bold flex justify-center text-black mt-2 ">
              Class 11th and Class 12th All Subjects
            </div>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-9 mx-auto flex justify-center items-center">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-auto">
                    <Link to={"/class-11"}>
                      <div className="h-full border-2  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-fit object-center"
                          src={Class11}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                            class 11
                          </h1>
                          <p className="leading-relaxed mb-3">
                            All Subjects For Class 11th.
                          </p>
                          <p className="texl-sm text-gray-400">
                            more than 54000 students enrolled
                          </p>
                          <div className="flex items-center flex-wrap bg-yellow-700 p-3 w-40 hover:bg-yellow-900 rounded-lg mt-4">
                            <Link
                              to={"/class-11"}
                              className="text-white inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              Learn More{" "}
                              <IoIosArrowRoundForward className="w-6 h-6 ml-2" />{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="p-4 md:w-auto">
                    <Link to={"/class-12"}>
                      <div className="h-full border-2  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-fit object-center"
                          src={Class12}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                            class 12
                          </h1>
                          <p className="leading-relaxed mb-3">
                            All Subjects For Class 12th.
                          </p>
                          <p className="texl-sm text-gray-400">
                            more than 70000 students enrolled
                          </p>
                          <div className="flex items-center flex-wrap bg-amber-900 p-3 w-40 hover:bg-amber-950 rounded-lg mt-4">
                            <Link
                              to={"/class-12"}
                              className="text-white inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              Learn More{" "}
                              <IoIosArrowRoundForward className="w-6 h-6 ml-2" />{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  
                </div>
                
              </div>
            </section>
          </div>
          <div className="border border-gray-600 m-4">
            <div className="text-xl font-bold flex justify-center text-black mt-2 ">
             What's Next?
             </div>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-9 mx-auto flex justify-center items-center">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-auto">
                    <Link to={"/neet"}>
                      <div className="h-full border-2  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-fit object-center"
                          src={NEET}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                            Neet
                          </h1>
                          <p className="leading-relaxed mb-3">
                            All Subjects For Class 11th.
                          </p>
                          <p className="texl-sm text-gray-400">
                            more than 54000 students enrolled
                          </p>
                          <div className="flex items-center flex-wrap bg-green-500 p-3 w-40 hover:bg-green-700 rounded-lg mt-4">
                            <Link
                              to={"/neet"}
                              className="text-white inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              Learn More{" "}
                              <IoIosArrowRoundForward className="w-6 h-6 ml-2" />{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="p-4 md:w-auto">
                    <Link to={"/jee"}>
                      <div className="h-full border-2  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-fit object-center"
                          src={JEE}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                            Jee mains and Advance
                          </h1>
                          <p className="leading-relaxed mb-3">
                            All Subjects For Class 12th.
                          </p>
                          <p className="texl-sm text-gray-400">
                            more than 70000 students enrolled
                          </p>
                          <div className="flex items-center flex-wrap bg-green-500 p-3 w-40 hover:bg-green-700 rounded-lg mt-4">
                            <Link
                              to={"/jee"}
                              className="text-white inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              Learn More{" "}
                              <IoIosArrowRoundForward className="w-6 h-6 ml-2" />{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  
                </div>
                
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesPages;
