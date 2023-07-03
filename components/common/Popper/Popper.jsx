import React from 'react'
import { PopperStyled } from './Popper.styled'

const Popper = ({children, positionY, positionX}) => {
  return (
    <PopperStyled className="popper" positionY={positionY} positionX={positionX}>{children}</PopperStyled>
  )
}

export default Popper