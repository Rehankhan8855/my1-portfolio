import React from "react";
// import mongoDB from "../../public/mongodb.jpg"
// import expressJS from "../../public/express.png"
// import reactJS from "../../public/reactjs.png"
// import nodeJS from "../../public/node.png"
function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: "/javascript.png", // Direct URL
      name: "Task App",
      link: "https://github.com/Rehankhan8855/task-app",
      description:
        "Simple Task Management App to efficiently organize and track daily tasks.",
    },
    {
      id: 2,
      logo: "/javascript.png", // Direct URL
      name: "Tic Tac Toe",
      link: "https://github.com/Rehankhan8855/tic-tac-toe",
      description:
        "Classic Tic-Tac-Toe game app for two players with an intuitive interface.",
    },
    {
      id: 3,
      logo: "/javascript.png",
      name: "Dom Project",
      link: "https://github.com/Rehankhan8855/dom-project",
      description:
        "DOM project to showcase dynamic content manipulation with JavaScript.",
    },

    {
      id: 1,
      logo: "/javascript.png", // Direct URL
      name: "Wheather app",
      link: "https://github.com/Rehankhan8855/wheather-app",
      description:
        "Weather App providing real-time weather updates for various locations.",
    },
    {
      id: 5,
      logo: "/javascript.png",
      name: "Calculator",
      link: "https://github.com/Rehankhan8855/calculator-app",
      description:
        "Simple Calculator App for performing basic arithmetic operations.",
    },
    {
      id: 6,
      logo: "/javascript.png",
      name: "SPS Game",
      link: "https://github.com/Rehankhan8855/Stone-Paper-Scissors_Game",
      description:
        "Classic Stone, Paper, Scissors game with an interactive user interface.",
    },
    {
      id: 7,
      logo: "/javascript.png",
      name: "Clock",
      link: "https://github.com/Rehankhan8855/clock-using-html-css-and-js",
      description:
        "Clock app built using HTML, CSS, and JavaScript to display real-time time.",
    },
    {
      id: 8,
      logo: "/javascript.png", // Direct URL
      name: "Spotify Clone",
      link: "https://github.com/Rehankhan8855/Spotify-Clone",
      description:
        "Spotify Clone app replicating Spotify's interface for music streaming and playlists.",
    },
    {
      id: 9,
      logo: "/reactjs.png",
      name: "all In App",
      link: "https://github.com/Rehankhan8855/allReactPractice",
      description: "Learning React concepts with Hands-on React.js projects for learning and improvement..",
    },
    {
      id: 10,
      logo: "/reactjs.png",
      name: "calculator",
      link: "https://github.com/Rehankhan8855/calculator",
      description:
        "Calculator app built with React for performing basic arithmetic operations.",
    },
    {
      id: 11,
      logo: "/reactjs.png",
      name: "my1 portfolio",
      link: "https://github.com/Rehankhan8855/my1-portfolio",
      description: "Personal portfolio website showcasing projects and skills.",
    },
    {
      id: 12,
      logo: "/reactjs.png",
      name: "E-Commerce",
      link: "https://github.com/Rehankhan8855/frontend",
      description: "React.js-based e-commerce app with product listing, cart, and checkout functionality.",
    },
    {
      id: 13,
      logo: "/mern.webp",
      name: "Social Media App",
      link: "https://github.com/Rehankhan8855/socialNest",
      description: "MERN Stack: Proficient in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in REST APIs, real-time data handling with Socket.IO, and frontend-backend integration"
    },
   
  ];
  const handelBtn = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2x1 container mx-auto px-4 md:px-50 my-20 flex justify-center"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 flex justify-center">
          PortFolio
        </h1>
       
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-10 my-3 justify-items-center">          {cardItem.map((item) => (
            <div
              className="md:w-[300px] md:h-full border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300 flex flex-col items-center"
              key={item.id}
            >
              <img
                src={item.logo}
                className="w-[120px] h-[120px] p-6 rounded-full border-[2px] "
                alt={item.name}
              />
              <div>
                <div className="py-4 font-bold text-xl mb-2 flex justify-center">
                  {item.name}
                </div>
                <p className="px-2 text-gray-700 flex flex-col items-center pb-4 text-center">
                  {item.description}
                </p>
              </div>
              <div className="space-x-3 justify-around flex justify-center">
                <button
                  onClick={() => handelBtn(item.link)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
