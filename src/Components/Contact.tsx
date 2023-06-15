const Contact = () => {
    const items = ['Full Name', 'Email Address', 'Mobile Number', 'Email Subject']
    
  return (
    <div className="py-20 min min-h-screenk md:py-24" id='contact'>
        <div className="container px-0 sm:px-7 md:px-16 lg:px-40 xl:lg:px-60 ">
            <div className="flex flex-col gap-12">
                <p className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold text-center"><span className="text-blue-carpi">Contact</span> Me</p>
                <div className="flex flex-col gap-7 items-center">
                    <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-5">
                        {items.map((item) => (
                            <input type="text" placeholder={item} className="outline-none focus:border-emerald-500 duration-500 h-14 md:h-16 rounded-md border-2 border-blue-500 w-full bg-transparent px-3 font-semibold text-sm"/>
                        ))}
                    </div>
                    <textarea className="outline-none focus:border-emerald-500 duration-500 h-56 md:h-60 border-2 rounded-md border-blue-500 bg-transparent p-3 font-semibold text-sm w-full" placeholder="Message"></textarea>
                    <div className="h-12 w-32 md:h-[3.75rem] md:w-40 relative group aboutShadow border-2 border-white active:scale-75 duration-500 cursor-pointer hover:scale-105 rounded-xl hover:border-emerald-500 overflow-hidden grid place-content-center">
                        <p className="z-20 relative  text-sm sm:text-base font-bold">Submit</p>
                        <div className="h-0 w-0 z-0 absolute bg-emerald-500 aboutShadow bottom-0 left-0  group-hover:h-72 group-hover:w-72 group-hover:md:w-96 rounded-full group-hover:-right-10 md:group-hover:h-96 duration-500"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact