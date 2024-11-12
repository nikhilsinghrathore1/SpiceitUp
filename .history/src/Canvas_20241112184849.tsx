import React, { useEffect, useRef } from 'react'
import canvasImages from './canvasImages';


const Canvas = () => {
               const canvasref = useRef<HTMLCanvasElement |null>(null )

               useEffect(() => {

                const canvas = canvasref.current;
                if(canvas !== null){

                  const ctx = canvas.getContext("2d")
                  const img = new Image();
                  img.src = canvasImages[0]
                  img.onload = () =>{
                    canvas.width = img.width,
                    canvas.height = img.height,
                    ctx?.drawImage(img,0,0)

                  }
                }

               }, [])
               
  return (
               <canvas ref={canvasref} className="w-[18rem] h-[18rem]" id='canvasId'></canvas>
  )
}

export default Canvas