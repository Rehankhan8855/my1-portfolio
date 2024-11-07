import React from 'react'
// import mongoDB from "../../public/mongodb.jpg"
// import expressJS from "../../public/express.png"
// import reactJS from "../../public/reactjs.png"
// import nodeJS from "../../public/node.png"
function Portfolio() {
  const cardItem=[
    {
      id: 1,
      logo: "/mongodb.jpg",  // Direct URL
      name: "MongoDB"
    },
    {
      id: 2,
      logo: "/express.png",  // Direct URL
      name: "Express"
    },
    {
      id: 3,
      logo: "/reactjs.png",  // Direct URL
      name: "ReactJS"
    },
    {
      id: 4,
      logo: "/node.png",     // Direct URL
      name: "NodeJS"
    },
    {
      id:5,
      logo: "/python.webp",
      name: "Python",
   },
   {
    id: 6,
    logo: "/javascript.png",
    name:"JavaScript"
   }
  ];
  return (
   <div name='Portfolio' className='max-w-screen-2x1 container mx-auto px-4 md:px-50 my-20'>
          <div>
            <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
            <span className='underline font-semibold'>Featured Projects</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
      {cardItem.map(item => (
        <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 ' key={item.id}>
          <img src={item.logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt={item.name} />
         <div>
            <div className='px-2 font-bold text-xl mb-2'>{item.name}</div>
            <p className='px-2 text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
         </div>
         <div className='space-x-3 justify-around'>
           <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded '>Video</button>
           <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button>
         </div>
        </div>
      ))}
    </div>
        </div>
   </div>
  )
}

export default Portfolio
