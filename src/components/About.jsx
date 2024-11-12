import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2x1 container mx-auto px-4 md:px-50 my-16 flex justify-center"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 flex justify-center">About</h1>
        <p>
          Hello, I'm Rehan, a passionate web developer with a focus on the MERN
          Stack. With a background in IT, I am dedicated to creating innovative,
          efficient, and visually appealing software solutions. I strive to
          design web applications that not only meet user needs but also leave a
          lasting impression with their functionality and design.
        </p>
        <br />
        <h1 className="text-green-500 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          <ul  className='list-disc pl-5 mt-2 space-y-2'>
            <li>
              Bachelor of Computer Applications (BCA) - Kavayitri Bahinabai
              Chaudhari North Maharashtra University, Jalgaon, 2024
            </li>
            <li> Full Stack Development Course - WAE Academy, 2024</li>
          </ul>
        </span>
        <br />
        <br />
       
        <h1 className="text-green-500 font-semibold text-xl">
          Professional Experience
        </h1>
        <h2>Full Stack Developer (MERN) Trainee, WAE Academy (2024)</h2>
        <span>
          <ul className='list-disc pl-5 mt-2 space-y-2'>
            <li>
              Worked on JavaScript and HTML/CSS concepts while learning the
              basics of React.js.
            </li>
            <li>
              Gained hands-on experience in the development and testing of new
              features for web applications.
            </li>
            <li>
              Achievements: Improved understanding of web development by working
              on multiple projects, gaining proficiency in optimizing code and
              debugging errors.
            </li>
          </ul>
        </span>
        <br />
        <br />
        <h1 className="text-green-500 font-semibold text-xl">
          Mission Statement
        </h1>
        <span>
          <ul  className='list-disc pl-5 mt-2 space-y-2 '>
            <li>My Mission: To become a skilled Full Stack Web Developer.</li>
            <li>
              I Aim To: Develop innovative, user-friendly applications using my
              MERN Stack skills.
            </li>
            <li>
              I Am Ready To: Provide creative and efficient solutions that
              enhance user experiences and support business goals.
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}

export default About;
