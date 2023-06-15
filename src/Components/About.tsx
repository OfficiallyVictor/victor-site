import Img from '../Assets/ceo1.jpg'
const About = () => {
  return (
    <div className="pt-20 lg:pt-24" id="about">
      <div className="container text-center items-center flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-5 md:gap-8">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase"> <span className='text-blue-carpi'>about</span> me </p>
              <p className="font-bold text-lg sm:text-xl">MERN STACK DEVELOPER </p>
          </div>
          <div className="h-60 aboutShadow w-60 sm:w-72 sm:h-72 lg:h-80 lg:w-80 p-2 flex items-center group justify-center overflow-hidden rounded-full relative anime">
            <div className="h-full w-full bg-[#070e31] group-hover:p-3 z-40 duration-500 rounded-full relative p-4">
              <div className="h-full w-full relative  rounded-full">
                <img src={Img} className='w-full h-full group-hover:opacity-0 duration-300 object-cover rounded-full' alt="" />
                <div className="h-full rounded-full opacity-0 group-hover:opacity-100 duration-500 flex items-center justify-center flex-col w-full bg-blue-a gap-3 absolute top-0 left-0">
                  <p className='font-bold text-sm md:text-lg'>MERN STACK DEVELOPER</p>
                  <p className='font-semibold text-xs md:text-base'>VICTOR UBAH</p>
                  <p className='px-5 py-2 md:px-7 md:py-[11px] uppercase hover:scale-110 text-[10px] md:text-xs border-2 border-white growBtn font-semibold active:scale-75 shadoww text-white cursor-pointer mt-3 duration-500 rounded-full'>Hire me</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[80%] text-center">
            <p className='text-base sm:text-lg text-center'>Welcome to my profile as a MERN Stack developer! In this overview, I will introduce myself and share my passion for creating captivating user experiences through cutting-edge web technologies. With a strong foundation in HTML, CSS, and JavaScript (Mongo DB, Express, React Js, Nodoje), I specialize in building visually appealing and responsive user interfaces as well as create backend functionalities that'll connect with the Frontend to give you that great user experience.</p>
          </div>
          <div className="h-12 w-32 md:h-[3.75rem] md:w-40 relative group aboutShadow border-2 border-white active:scale-75 duration-500 cursor-pointer hover:scale-105 rounded-xl hover:border-[#62DAFC] overflow-hidden grid place-content-center">
              <p className="z-20 relative  text-sm sm:text-base font-bold">Read More</p>
              <div className="h-0 w-0 z-0 absolute bg-[#62DAFC] aboutShadow bottom-0 left-0  group-hover:h-72 group-hover:w-72 group-hover:md:w-96 rounded-full group-hover:-right-10 md:group-hover:h-96 duration-500"></div>
          </div>
      </div>
    </div>
  )
}

export default About