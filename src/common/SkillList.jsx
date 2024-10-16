import React from 'react'

const SkillList = ({ src, skill }) => {
    return (
        <span className=''>
            <img src={src} alt="Checkmark icon" />
            <p>{skill}</p>
        </span>
    )
}

export default SkillList
