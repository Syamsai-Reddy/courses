/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import PHYSICS_IMG from "C:/Users/Dell/Desktop/internship/CF/src/assets/class6-physics.png";
import MATHS_IMG from "C:/Users/Dell/Desktop/internship/CF/src/assets/claas6-maths.jpg";
import BIOLOGY_IMG from "../../../assets/class6-biology.jpg";

import CHEMISTRY_IMG from "../../../assets/class6-chemistry.png";

function class6() {
  return (
    <div className="bg-teal-50">
      <nav className="bg-teal-500 p-4">
        <div className="container mx-auto">
          <a href="/" className="text-white text-lg">
            Home
          </a>
          <span className="text-white mx-2">/</span>
          <a href="/class-6" className="text-white text-lg">
            Class 6 Online Coaching
          </a>
        </div>
      </nav>
      <header className="bg-teal-200 p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-pink-700">
            CLASS 6 ONLINE COACHING
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Writo Education's provides affordable Class 6 online coaching,
            offering the latest study material, mock test series, lectures, and
            live classes. Our best Class 6 online coaching in India ensures a
            state-of-the-art learning experience for students of Class 12, Class
            10, & Class 9, following the NCERT pattern. The best faculty members
            conduct live classes, providing solutions to students' doubts
            through our excellent doubt app.
          </p>
        </div>
      </header>
      <main className="container mx-auto p-8">
        <div className=" bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row mb-4">
          <div className="w-full md:w-1/3 h-72 p-2">
            <img
              src={PHYSICS_IMG}
              alt="Fundo (Class 6th)"
              className="w-full h-full object-fit rounded-lg" // Added rounded-lg here
            />
          </div>
          <div className="flex flex-col flex-1 p-6 ">
            <h2 className="text-2xl font-bold mb-2">physics (Class 6th)</h2>
            <div className="flex flex-row flex-wrap md:flex-nowrap mb-4">
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0 mr-4 mb-2 md:mb-0 ">
                <p className="text-lg font-semibold">20+</p>
                <p className="text-sm text-gray-600">Assignments</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-semibold">120+</p>
                <p className="text-sm text-gray-600">Lectures</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-semibold">10</p>
                <p className="text-sm text-gray-600">MOCK TEST</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-semibold">20+</p>
                <p className="text-sm text-gray-600">Practice</p>
              </div>
            </div>
            <div className="text-lg font-bold text-black mb-2">
              Special Discounted Price
            </div>
            <div className="text-2xl font-bold text-gray-900 mt-3 ">₹ 2999</div>
            <div className="flex justify-center md:justify-end">
              <Link to={"/class-6/physics"}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-2 rounded">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row mb-4">
          <div className="w-full md:w-1/3 h-72 p-2">
            <img
              src={CHEMISTRY_IMG}
              alt="Fundo (Class 6th)"
              className="w-full h-full object-fit rounded-lg" // Added rounded-lg here
            />
          </div>
          <div className="flex flex-col flex-1 p-6 ">
            <h2 className="text-2xl font-bold mb-2">Chemistry (Class 6th)</h2>
            <div className="flex flex-row flex-wrap md:flex-nowrap mb-4">
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0 mr-4 mb-2 md:mb-0 ">
                <p className="text-lg font-semibold">20+</p>
                <p className="text-sm text-gray-600">Assignments</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-semibold">120+</p>
                <p className="text-sm text-gray-600">Lectures</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-semibold">10</p>
                <p className="text-sm text-gray-600">MOCK TEST</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-semibold">20+</p>
                <p className="text-sm text-gray-600">Practice</p>
              </div>
            </div>
            <div className="text-lg font-bold text-black mb-2">
              Special Discounted Price
            </div>
            <div className="text-2xl font-bold text-gray-900 mt-3 ">₹ 2999</div>
            <div className="flex justify-center md:justify-end">
              <Link to={"/class-6/chemistry"}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-2 rounded">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row mb-4">
          <div className="w-full md:w-1/3 h-72 p-2">
            <img
              src={MATHS_IMG}
              alt="Fundo (Class 6th)"
              className="w-full h-full object-fit rounded-lg" // Added rounded-lg here
            />
          </div>
          <div className="flex flex-col flex-1 p-6 ">
            <h2 className="text-2xl font-bold mb-2">Maths (Class 6th)</h2>
            <div className="flex flex-row flex-wrap md:flex-nowrap mb-4">
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0 mr-4 mb-2 md:mb-0 ">
                <p className="text-lg font-semibold">20+</p>
                <p className="text-sm text-gray-600">Assignments</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-semibold">120+</p>
                <p className="text-sm text-gray-600">Lectures</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-semibold">10</p>
                <p className="text-sm text-gray-600">MOCK TEST</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-semibold">20+</p>
                <p className="text-sm text-gray-600">Practice</p>
              </div>
            </div>
            <div className="text-lg font-bold text-black mb-2">
              Special Discounted Price
            </div>
            <div className="text-2xl font-bold text-gray-900 mt-3 ">₹ 2999</div>
            <div className="flex justify-center md:justify-end">
              <Link to={"/class-6/physics"}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-2 rounded">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row mb-4">
          <div className="w-full md:w-1/3 h-72 p-2">
            <img
              src={BIOLOGY_IMG}
              alt="Fundo (Class 6th)"
              className="w-full h-full object-fit rounded-lg" // Added rounded-lg here
            />
          </div>
          <div className="flex flex-col flex-1 p-6 ">
            <h2 className="text-2xl font-bold mb-2">Biology (Class 6th)</h2>
            <div className="flex flex-row flex-wrap md:flex-nowrap mb-4">
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0 mr-4 mb-2 md:mb-0 ">
                <p className="text-lg font-semibold">20+</p>
                <p className="text-sm text-gray-600">Assignments</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-semibold">120+</p>
                <p className="text-sm text-gray-600">Lectures</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-semibold">10</p>
                <p className="text-sm text-gray-600">MOCK TEST</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-semibold">20+</p>
                <p className="text-sm text-gray-600">Practice</p>
              </div>
            </div>
            <div className="text-lg font-bold text-black mb-2">
              Special Discounted Price
            </div>
            <div className="text-2xl font-bold text-gray-900 mt-3 ">₹ 2999</div>
            <div className="flex justify-center md:justify-end">
              <Link to={"/class-6/physics"}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-2 rounded">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default class6;
