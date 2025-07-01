import React from "react";

import pic from "../../public/rehan.png";
// rehan2.jpg

import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2x1 container mx-auto px-4 md:px-50 my-20 flex justify-center"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl flex justify-center items-center text-center">
              Welcome In My Portfolio
            </span>
            <div className="flex space-x-1 text-2xl md:text-4xl flex justify-center items-center text-center">
              <h1 className="">Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:taxtgt-md text-justify flex justify-center items-center ">
              I'm Rehan, a passionate web developer with a strong foundation in
              the MERN stack and a background in IT. I focus on creating
              visually appealing and efficient software solutions that leave a
              lasting impact. I hold a BCA degree from Kavayitri Bahinabai
              Chaudhari North Maharashtra University, Jalgaon (2025), and have
              completed training in Full Stack Development from WAE Academy. My
              skills encompass HTML, CSS, JavaScript, Tailwind CSS, and a
              growing proficiency in React.js — particularly in building
              reusable components and managing routes using React Router. I have
              hands-on experience with Node.js, Express.js, and MongoDB, and I'm
              familiar with Redux Toolkit, Git/GitHub, and creating RESTful
              APIs. I also focus on building responsive user interfaces and have
              explored tools like Firebase for authentication and data storage.
            </p>
            <br />
            {/**social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-1">
                <h1 className="font-bold ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    {" "}
                    <a
                      href="https://www.instagram.com/accounts/login/"
                      target="_blank"
                    >
                      <FaInstagramSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rehan-khan-13609031a"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    {""} <FaTelegram className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 mt-16 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[320px] md:h[320px] "
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
