import React, { useEffect, useRef } from 'react'


const Canvas = () => {
               const canvasref = useRef<HTMLCanvasElement |null>(null )

               useEffect(() => {

                const canvas = canvasref.current;
                if(canvas !== null){

                  const ctx = canvas.getContext("2d")
                  const img = new Image()
                }

               }, [])
               
  return (
               <canvas ref={canvasref} id='canvasId'></canvas>
  )
}

export default Canvas