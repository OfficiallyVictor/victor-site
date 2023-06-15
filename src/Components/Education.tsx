import { BiCalendar } from "react-icons/bi"

const Education = () => {
const items = [1,2,3]
  return (
    <div className="pt-20 md:pt-24" id="education">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 ">
            <div className="flex flex-col group gap-8">
                <p className="text-2xl md:text-3xl uppercase text-blue-carpi font-bold ">Education</p>
                <div className="flex flex-col gap-10 relative">
                    <div className="h-full w-[2px] duration-500 hidden rounded-full md:block bg-white absolute left-[8.5px] z-0 top-0"></div>
                    {items.map(() => (
                        <div className="grid group/one grid-cols-1 md:grid-cols-[auto_1fr] gap-3">
                            <div className="hidden md:flex justify-center">
                                <div className="h-5 w-5 group-hover/one:bg-blue-500 duration-500 rounded-full bg-white relative z-10"></div>
                            </div>
                            <div className="flex group-hover/one:border-blue-500 duration-500 border-2 rounded-md border-white p-4 py-7 flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <BiCalendar className='text-base sm:text-lg'/>
                                    <p className="text-sm sm:textbase">2017 - 2018</p>
                                </div>
                                <p className="text-base md:text-lg font-bold">Masters Degree - Oxford University</p>
                                <p className="text-sm md:text-base opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum voluptates laudantium odio nam itaque dolorem corporis perferendis quisquam animi!</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col group gap-8">
                <p className="text-2xl md:text-3xl uppercase font-bold ">Experience</p>
                <div className="flex flex-col gap-10 relative">
                    <div className="h-full w-[2px] duration-500 hidden rounded-full md:block bg-white absolute left-[8.5px] z-0 top-0"></div>
                    {items.map(() => (
                        <div className="grid group/one grid-cols-1 md:grid-cols-[auto_1fr] gap-3">
                            <div className="hidden md:flex justify-center">
                                <div className="h-5 w-5 group-hover/one:bg-blue-500 duration-500 rounded-full bg-white relative z-10"></div>
                            </div>
                            <div className="flex group-hover/one:border-blue-500 duration-500 border-2 rounded-md border-white p-4 py-7 flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <BiCalendar className='text-base sm:text-lg'/>
                                    <p className="text-sm sm:textbase">2017 - 2018</p>
                                </div>
                                <p className="text-base md:text-lg font-bold">Frontend Engineer - Waterford Blomming Ltd.</p>
                                <p className="text-sm md:text-base opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum voluptates laudantium odio nam itaque dolorem corporis perferendis quisquam animi!</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Education