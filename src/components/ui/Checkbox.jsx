import React from 'react'

const Checkbox = ({ checked, onChange, className }) => {
  return (
    <label className={`inline-flex items-center ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-[#010056] rounded border-gray-300 focus:ring-[#010056]"
      />
    </label>
  )
}

export default Checkbox