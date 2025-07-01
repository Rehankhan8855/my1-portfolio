import React from "react";
// import mongoDB from "../../public/mongodb.jpg"
// import expressJS from "../../public/express.png"
// import reactJS from "../../public/reactjs.png"
// import nodeJS from "../../public/node.png"
function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: "/html.png", // Direct URL
      name: "HTML",
    },
    {
      id: 2,
      logo: "/css.jpg", // Direct URL
      name: "CSS",
    },

    {
      id: 3,
      logo: "/javascript.png",
      name: "JavaScript",
    },
    {
      id: 4,
      logo: "/reactjs.png",
      name: "ReactJS",
    },
    {
      id: 5,
      logo: "/tailwindCss.png",
      name: "TailwindCSS",
    },
    {
      id: 6,
      logo: "/node.png",
      name: "nodeJS",
    },
    {
      id: 7,
      logo: "/express.png",
      name: "expressJS",
    },
    {
      id: 8,
      logo: "/mongodb.jpg",
      name: "mongoDB",
    },
    {
      id: 9,
      logo: "/shadcn.png",
      name: "ShadCN UI",
    },
    {
      id: 9,
      logo: "/chakraui.jpg",
      name: "Chakra UI",
    },
    {
      id: 10,
      logo: "/prebuilt.svg",
      name: "",
    },
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2x1 container mx-auto px-4 md:px-50 my-16 "
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 flex justify-center">Skills</h1>
        <p className=" font-semibold text-center">
          Skills Completed 13+ projects using HTML, CSS, and JavaScript, gaining
          hands-on experience over the past **6 months** by building real-world,
          practical applications. Developed a modern and responsive portfolio
          project using React.js and Tailwind CSS, showcasing interactive
          features and clean UI design. Additionally, enhanced backend
          development skills with Node.js, Express.js, and MongoDB, while also
          building UI components with ShadCN UI,prebuiltui,Chakra UI. Gained
          familiarity with real-time features using Socket.IO and focused on
          writing clean, maintainable code across full-stack applications.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-0 gap-x-0 my-3 justify-items-center pt-6">
          {cardItem.map((item) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300  mb-2"
              key={item.id}
            >
              <img
                src={item.logo}
                className="w-[110px] rounded-full "
                alt={item.name}
              />
              <div>
                <div className="text-center py-4">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
