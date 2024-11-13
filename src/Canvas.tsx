import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react'
import canvasImages from './canvasImages';


interface val {
 dets:{
  startIndex: number,
  numImages: number,
  duration: number,
  size: number,
  top: number,
  left: number,
  zIndex: number,
 }
}

const Canvas:React.FC<val> = ({dets}) => {
               const [index, setindex] = useState({value:dets.startIndex})
               const canvasref = useRef<HTMLCanvasElement |null>(null )


              useGSAP(()=>{
                gsap.to(index,{
                  value:dets.startIndex + 149,
                  repeat:-1,
                  duration:dets.duration,
                  ease:"linear",
                  onUpdate:()=>{
                    setindex({value: Math.round(index.value)})
                  }
                })
              })

               useEffect(() => {

                const canvas = canvasref.current;
                if(canvas !== null){
                   const scale = window.devicePixelRatio; 
                  const ctx = canvas.getContext("2d")
                  const img = new Image();
                  img.src = canvasImages[index.value]
                  img.onload = () =>{
                    canvas.width = canvas.offsetWidth * scale,
                    canvas.height = canvas.offsetHeight * scale,
                    canvas.style.width = canvas.offsetWidth +"px"
                    canvas.style.height = canvas.offsetHeight +"px"
                    ctx?.scale(scale,scale)
                    ctx?.drawImage(img,0,0, canvas.offsetWidth, canvas.offsetHeight)


                  }
                }

               }, [index])
               
  return (
               <canvas data-scroll data-scroll-speed={Math.random().toFixed(1)} style={{width:`${dets.size *1.3}px` , height:`${dets.size *1.3}px` , top:`${dets.top}%` , left:`${dets.left}%` , zIndex:`${dets.zIndex}`}} className="absolute" ref={canvasref}   id='canvasId'></canvas>
  )
}

export default Canvas