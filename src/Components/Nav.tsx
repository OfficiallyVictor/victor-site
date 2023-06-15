import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


const Nav = () => {
    const [over50, setOver50] = useState<boolean>(false)
    const [navOpened, setNavOpened] = useState<boolean>(false)
    const toggleNav = () => {
        setNavOpened(!navOpened)
    }
    const [active, setActive] = useState<number>(0)
    const changeActive = (index: number) => {
        setActive(index)
        toggleNav()
    }
    const scrollTop = () => {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            setOver50(true)
        }else{
            setOver50(false)
        }
    }

    window.addEventListener('scroll', scrollTop)
    const links = ['home', 'about', 'education', 'skills', 'contact']

  return (
    <div className={`fixed top-0 left-0 duration-500 shadow-md bg-blue-a z-50 right-0 h-16 border-b-2 lg:h-[4.5rem] ${over50 ? 'shadow-slate-950 border-blue-cobalt' : 'border-transparent shadow-transparent'}`}>
        <div className="flex container h-full items-center justify-between">
            <a href='#home' className="text-2xl lg:text-2xl font-bold" onClick={() => setNavOpened(false)}>Victor.</a>
            <div className="">
                <ul className={`flex flex-col bg-blue-a lg:bg-transparent fixed top-16 px-[20px] py-5 ${navOpened ? 'left-0 lg:left-auto ' : 'lg:left-auto left-[200vw]'} duration-500 gap-5 right-0 bottom-0 bg-darkblue-500 lg:relative lg:flex-row lg:top-auto lg:gap-14`}>
                    {links.map((item, index) => (
                        <li><a href={`#${item}`} onClick={() => changeActive(index)} className={`font-semibold text-[15px] capitalize hover:text-red-500 duration-500 ${active === index ? 'text-red-500' : 'text-white'}`}>{item}</a></li>
                    ))}
                </ul>
            </div>
            {navOpened
                ?
                <FaTimes onClick={toggleNav} className='lg:hidden text-lg cursor-pointer active:scale-75 duration-500'/>
                :
                <FaBars onClick={toggleNav} className='lg:hidden text-lg cursor-pointer active:scale-75 duration-500'/>
            }
        </div>
    </div>
  )
}

export default Nav