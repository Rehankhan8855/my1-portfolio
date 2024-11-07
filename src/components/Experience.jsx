import React from 'react'
// import mongoDB from "../../public/mongodb.jpg"
// import expressJS from "../../public/express.png"
// import reactJS from "../../public/reactjs.png"
// import nodeJS from "../../public/node.png"
function Experience() {
  const cardItem=[
    {
      id: 1,
      logo: "/html.png",  // Direct URL
      name: "HTML"
    },
    {
      id: 2,
      logo: "/css.jpg",  // Direct URL
      name: "CSS"
    },
  
    {
      id: 3,
      logo: "/javascript.png",     
      name: "JavaScript"
    },
    {
        id: 4,
        logo: "/reactjs.png",     
        name: "ReactJS"
      },
      {
        id:5,
        logo:'/tailwindCss.png',   
        name: "Tailwind CSS"
      },
     

   
  ];
  return (
   <div name='Experience' className='max-w-screen-2x1 container mx-auto px-4 md:px-50 my-16'>
          <div>
            <h1 className='text-3xl font-bold mb-5'>Experience</h1>
            <p className=' font-semibold'>Completed 12 projects using HTML, CSS, and JavaScript,Gained hands-on experience over the past 3-4 months by working on practical projects,Developed a portfolio project using React.js and Tailwind CSS, showcasing modern design principles and interactive features..</p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-5 my-3'>
      {cardItem.map(item => (
        <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 ' key={item.id}>
          <img src={item.logo} className='w-[150px]  rounded-full' alt='' />
         <div>
            <div className=''>{item.name}</div>
            
         </div>
         
        </div>
      ))}
    </div>
        </div>
   </div>
  )
}

export default Experience
