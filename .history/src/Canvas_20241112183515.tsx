import React, { useEffect, useRef } from 'react'


const Canvas = () => {
               const canvasref = useRef(null)

               useEffect(() => {
              const ctx = canvas.getContext("2d")
               }, [])
               
  return (
               <canvas ref={canvasref} id='canvasId'></canvas>
  )
}

export default Canvas