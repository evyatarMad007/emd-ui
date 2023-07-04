import React from 'react'

interface ButtonProps {
  color?: string
  fz?: string
  children?: React.ReactNode | string
}

const Button: React.FC<ButtonProps> = ({ color, fz, children }) => {
  return (
    <div style={{color: color, fontSize: fz}}>{children}</div>
  )
}

export default Button