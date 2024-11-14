
import './App.css'
import Canvas from './Canvas'
import LocomotiveScroll from 'locomotive-scroll';
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { RiVoiceprintLine } from "react-icons/ri";


import data from './data'
import { useEffect, useRef, useState } from 'react';

function App() {

  const circular = useRef<HTMLHeadingElement | null>(null)
  const [openChili , setopenChili] = useState(true)
  
  const changeChili = () =>{
    setopenChili(prev=>!prev)
  }

  useEffect(()=>{
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.50,
        touchMultiplier: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    },
  });

  const text = document.querySelector(".text p");
if(text){

  text.innerHTML = text.innerText
	.split("")
	.map(
    (char, i) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
    )
    .join("");
  }
    console.log(circular.current)
  },[])

 

  
  
  const [theme, settheme] = useState(true)
  const changeTheme = ()=>{
    setopenChili(false)
    settheme(prev=>!prev)
  }

  return (
    <>
    <div className={`w-full transition-all duration-300  ease-in min-h-screen relative ${openChili ? "bg-[#FD2C2A] text-black" :  (theme ?  "bg-[#FFFAFA] text-black" : "bg-black text-white" ) }`}>
      {openChili && 
      <>
      {data[0].map((item,i)=>(
        <Canvas dets={item} />
        ))}
      </>
      }

      <div className='h-[23%]  text-white items-center  py-3 w-[3.5%] bg-black absolute flex flex-col justify-between right-0 top-1/2 -translate-y-1/2'>
          <h1 className='font-bold text-center'>N.</h1>
          <div className=' absolute bottom-10 -rotate-90 text-center'>
          <p >Nikochan</p>
          </div>
      </div>
          <div className='w-full  h-fit py-[11.5px]   px-[10px] '>
            {/* this si the starting navigation section */}
            <nav className='flex items-center border-b-[1px] border-white/30 pb-3'>
              {/* this is the left side of the nav bar  */}
              <div className='w-1/2 f1  text-[0.94rem] flex items-center '>
                {/* this is the logo text area  */}
                <div className='w-1/2'>

                <h1>Thirtysixstudio</h1>
                </div>

                {/* this is the toggle for the color theme */}
                <div className='w-1/2 flex items-start'>
                  <div onClick={()=>changeTheme()} className={`w-[4.995rem] flex justify-between items-center px-[11px] relative h-[28px] rounded-full border-[1px] ${theme ?  "border-black/10" : "border-white/40" }`}>
                    <div className={`text-lg relative z-10 ${theme && "text-white"  } `} >
                    <MdSunny/>
                    </div>
                    <div className={`text-[15px] relative z-10 ${theme ? "text-black" : "text-black"  } `}  >
                    <IoMoon/>
                    </div>

                      <div className={`w-[50%] h-[94%] absolute z-0  top-1/2 transition-all duration-300 -translate-y-1/2 ${theme ?  "bg-black left-[1px] " : "bg-[#FFFAFA] right-[1px]"} rounded-full`}></div>

                  </div>
                </div>

              </div>

              {/* this is the right side of the nav bar  */}


              <div className='w-1/2 flex justify-between items-center '>
                    <div className='flex f1 text-[0.95rem] gap-[37px] w-[76%] justify-end '>
                          <h1>What we do</h1>
                          <h1>Who we are</h1>
                          <h1>How we give back</h1>
                          <h1>Talk to us</h1>
                    </div> 
              <div className='w-[24%] flex justify-end'>
                <div className='w-7 h-7 flex items-center justify-center rounded-full '>
                <svg  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle opacity="0.1" cx="15" cy="15" r="14.5" stroke="black"></circle>
                  <path d="M11.9091 9V21M9 13.3636V16.6364M15 11.9091V18.0909M18.0909 10.4545V19.5455M21 13.3636V16.6364" stroke="black" stroke-linecap="round"></path>
                </svg>
                </div>
              </div>
              </div>

            </nav>

            {/* this is the main text and the circular text area */}

            <div className='w-full h-[50%] flex '>
              {/* this is the left side */}
                  <div className='w-1/2 h-full flex pt-[49px] flex-col items-end pr-[9px]'>
                    <p className='f2 font-light w-[50%] text-[2.1rem] tracking-[0.01em] leading-[2.3rem]'>At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.</p>
                        <div className='w-full flex justify-end pl-8'>

                    <p className='text-[0.94rem] w-[52%]  leading-[1.2rem] f2 mt-7 tracking-[0.01em]'>We’re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.</p>
                        </div>
                        <div className='w-full flex justify-end pr-6'>

                    <p className='text-md w-[48%] f1 mt-7 '>Scroll</p>
                        </div>
                  </div>  

                {/* ṭhis is the right circular text side */}
                  <div className='w-1/2 h-full flex items-end justify-center'>
     
                  </div>
            </div>
        {/* this is the main text of the first page  name of the studio */}
            <div onClick={()=>changeChili()} className='w-full  mt-40 overflow-hidden'>
              <h1 className='text-[14.7rem] f2 tracking-[0.007em] '>Thirtysixstudio</h1>
            </div>
          </div>
    </div>
    </>
  )
}

export default App

// now the only things that are left to do is to add the circular text and then to add the nomine sticky thingy and then to add the final reveal animation 

// doing the circular text thingy first 
