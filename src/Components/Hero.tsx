import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'

const Hero = () => {
    const socials = [<BsFacebook />, <BsTwitter />, <BsLinkedin />, <BsInstagram />]
    const links = ['Hire Me', 'Lets Talk']
  return (
    <div id='home' className="container">
        <div className="flex flex-col min-h-screen relative items-center sm:ty justify-between py-16 gap-12">
            <div className=""></div>
            <div className="flex gap-12 flex-col w-full text-center sm:w-[80%] justify-center items-center ">
                <h3 className="font-bold text-2xl sx:text-3xl sm:text-4xl lg:text-[2.75rem] uppercase nameShadow">Hi, I'm Victor Ubah</h3>
                <div className="flex">
                    <p className="text-xl sm:text-3xl font-bold relative">MERN STACK DEVELOPER
                        <p className="text-xl sm:text-3xl border-r-2 absolute bottom-[-3px] top-[0] left-0 w-0 overflow-hidden animateText whitespace-nowrap text-[#0CAFFF] font-bold">MERN STACK DEVELOPER</p>
                    </p>
                </div>
                <p className="text-sm sm:text-base text-center lg:text-lg">Welcome to my portfolio as a MERN stack developer! In this showcase, I will present my expertise in utilizing the MERN stack (MongoDB, Express.js, React.js, and Node.js) to develop innovative and interactive web applications. With a deep understanding of frontend and backend technologies, I have crafted various projects that demonstrate my skills in building robust, scalable, and user-friendly web solutions.</p>
                <div className="flex gap-7">
                    {links.map((link) => (
                        <a href='#contact' className="h-11 w-28 sm:h-12 sm:w-32 lg:h-14 lg:w-36 roundShadow border-2 border-blue-chlorine hover:after:w-full group after:w-0 overflow-hidden cursor-pointer active:scale-75 duration-500 after:duration-500 flex items-center justify-center rounded-md after:h-full relative after:absolute after:top-0 after:left-0 after:bg-blue-500 after:z-0">
                            <div className="h-11 w-28 sm:h-12 sm:w-32 lg:h-14 lg:w-36 z-20 relative text-sm sm:text-base flex items-center rounded-md justify-center group-hover:text-white duration-500 text-blue-chlorine font-bold"><p>{link}</p></div>
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-10">
                {socials.map((item) => (
                    <div className="h-10 w-10 grow sm:h-11 sm:w-11 md:h-12 md:w-12 active:scale-75 aboutShadow duration-500 group border-2 hover:border-white border-blue-500 rounded-full cursor-pointer flex items-center justify-center">
                        <p className='text-base  sm:text-lg md:text-xl group-hover:text-white text-blue-500 duration-500'>{item}</p>
                    </div>
                ))}
            </div>
           
        </div>



    </div>
)}
export default Hero