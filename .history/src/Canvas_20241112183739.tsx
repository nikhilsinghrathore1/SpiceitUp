import React, { useEffect, useRef } from 'react'


const Canvas = () => {
               const canvasref = useRef<HTMLElement ||null>(null )

               useEffect(() => {
                const canvas = canvasref.current;
              const ctx = canvas.getContext("2d")

               }, [])
               
  return (
               <canvas ref={canvasref} id='canvasId'></canvas>
  )
}

export default Canvas