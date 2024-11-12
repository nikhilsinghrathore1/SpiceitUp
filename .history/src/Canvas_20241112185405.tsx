import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react'
import canvasImages from './canvasImages';


const Canvas = () => {
               const [index, setindex] = useState(0)
               const canvasref = useRef<HTMLCanvasElement |null>(null )


              useGSAP(()=>{
                gsap.to(index,{
                  value:149,
                  duration:3,
                  ease:Linear,
                  
                })
              })

               useEffect(() => {

                const canvas = canvasref.current;
                if(canvas !== null){

                  const ctx = canvas.getContext("2d")
                  const img = new Image();
                  img.src = canvasImages[index]
                  img.onload = () =>{
                    canvas.width = img.width,
                    canvas.height = img.height,
                    ctx?.drawImage(img,0,0)

                  }
                }

               }, [index])
               
  return (
               <canvas ref={canvasref} className="w-[18rem] h-[18rem] " id='canvasId'></canvas>
  )
}

export default Canvas