import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import { useEffect, useRef, useState } from 'react'
import { validateBaseChain } from 'web3/lib/commonjs/eth.exports';
import canvasImages from './canvasImages';


const Canvas = () => {
               const [index, setindex] = useState({value:0})
               const canvasref = useRef<HTMLCanvasElement |null>(null )


              useGSAP(()=>{
                gsap.to(index,{
                  value:149,
                  repeat:-1,
                  duration:3,
                  ease:"linear",

                  onUpdate:()=>{
                    setindex({value: Math.round(index.value)})
                  }
                })
              })

               useEffect(() => {

                const canvas = canvasref.current;
                if(canvas !== null){

                  const ctx = canvas.getContext("2d")
                  const img = new Image();
                  img.src = canvasImages[index.value]
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