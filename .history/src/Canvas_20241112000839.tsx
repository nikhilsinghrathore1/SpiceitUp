import React, { useRef } from 'react'


const Canvas = () => {
               const canvasref = useRef(null)
  return (
               <canvas ref={canvasref} id='canvasId'></canvas>
  )
}

export default Canvas