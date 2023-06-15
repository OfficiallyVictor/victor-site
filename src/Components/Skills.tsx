import { useState } from "react";

interface Skill{
  title: string
  percent: number
  color: string,
}

const Skills = () => {

  const [number, setNumber] = useState<number>(10)

  setTimeout(() => {
    if(number === 40){
      setNumber(10)
    }else{
      setNumber(number + 10)
    }
  }, 500);
  
  const skills: Skill[] = [
    {
      title: 'html', 
      percent: 95,
      color: '#F47933'
    }
    ,
    {
      title: 'css', 
      percent: 90,
      color: '#264DE4'
    }
    ,
    {
      title: 'javascript', 
      percent: 80,
      color: '#dbc204'
    }
    ,
    {
      title: 'typescript', 
      percent: 70,
      color: '#3178C6'
    }
    ,
    {
      title: 'react js', 
      percent: 80,
      color: '#62DAFC'
    }
    ,
    {
      title: 'node js', 
      percent: 70,
      color: '#42883F'
    }
  ]

  return (
    <div id="skills" className="pt-20 md:pt-24 ">
        <div className="container">
          <div className="flex flex-col gap-10 lg:gap-20">
            <p className='text-2xl md:text-3xl lg:text-4xl font-bold text-center uppercase'>My <span className="text-blue-carpi">Skills</span></p>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-20">
              {skills.map(skill => (
                <div data-ddd={`${skill.color}`} className="flex hover:scale-110 growSkills group flex-col items-center text-center gap-7">
                  <div className="h-32 w-32 md:h-40 clockwise hover:bg-white md:w-40 lg:h-44 lg:w-44  rounded-full roundShadow p-2 md:p-3" style={{backgroundImage: `conic-gradient(${skill.color} ${skill.percent}%,  white ${skill.percent}%, white 100%)`}}>
                    <div className={`flex items-center justify-center relative  h-full w-full overflow-hidden rounded-full`}>
                      <p className="font-bold text-sm skillsShadow md:text-base rounded-full h-12 w-12 md:h-14 md:w-14  lg:h-16 lg:w-16 grid border-2 lg:border-4 place-items-center border-white lg:text-lg xl:text-xl antiClockwise z-20 relative"  style={{background: `${skill.color}`}}>{skill.percent}%</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg font-bold  duration-500 uppercase" style={{color: `${skill.color}}`, textShadow: `1px 1px ${number}px ${skill.color}, 1px 1px ${number + 10}px ${skill.color}, 1px 1px ${number + 20}px ${skill.color}` }}>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
    </div>
  )
}

export default Skills

