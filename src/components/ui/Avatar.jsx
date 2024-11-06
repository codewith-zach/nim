import React from 'react'

const Avatar = ({ src, alt, className }) => {
  return (
    <div className={`overflow-hidden rounded-full ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  )
}

export default Avatar