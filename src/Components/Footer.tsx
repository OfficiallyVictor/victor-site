import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'


const Footer = () => {
    const socials = [<BsFacebook />, <BsTwitter />, <BsLinkedin />, <BsInstagram />]
    return (
    <div className="bg-blue-duke mt-32 font-bold flex items-center justify-center">
      <div className="glass py-20 md:py-24 lg:py-28 flex-col gap-10 md:gap-20 w-full font-bold h-full flex items-center justify-center">
        <div className="flex text-3xl flex-col md:flex-row md:text-4xl lg:text-5xl xl::text-6xl gap-5 md:gap-16 text-center items-center">
          <div className="flex gap-10">
            <span className="mongo">M</span>
            <span className="express">E</span>
            <span className="react">R</span>
            <span className="node">N</span>
          </div>
          <div className="flex stack gap-5">
            <span>S</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
          </div>
          
        </div>
        <div className="flex gap-7 md:gap-14">
          {socials.map((item) => (
              <div className="h-10 w-10 grow sm:h-11 sm:w-11 md:h-12 md:w-12 active:scale-75 smallShadow duration-500 group border-2 hover:border-white border-blue-carpi rounded-full cursor-pointer flex items-center justify-center">
                  <p className='text-base  sm:text-lg md:text-xl group-hover:text-white text-blue-carpi duration-500'>{item}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer