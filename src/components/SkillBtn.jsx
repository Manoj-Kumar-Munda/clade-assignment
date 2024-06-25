import React from 'react'

const SkillBtn = ({ icon, btnTitle}) => {
  return (
    <div className='flex items-center gap-2 shadow-skills-btn py-1 px-2 border border-[#D0D5DD] rounded-lg'>
        <img src={icon} alt={btnTitle} className='w-4 h-4' />
        <span className='text-xs'>{btnTitle}</span>

    </div>
  )
}

export default SkillBtn