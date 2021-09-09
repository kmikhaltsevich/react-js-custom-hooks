import React, { useRef } from 'react'
import useHover from '../hooks/useHover'

const Block = () => {
  const ref = useRef()
  const isHover = useHover(ref)

  return (
    <div>
      <div ref={ref} className="block-hover" style={{ backgroundColor: isHover ? 'black' : 'red' }} />
    </div>
  )
}

export default Block
