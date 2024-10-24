import React from 'react'

const ProjectCard = ({ src, link, h3, p }) => {
    return (
        <a href={link} target='_blank' rel="noreferrer">
            <img className='hover'
                src={src}
                alt={`${h3} logo`}
                // style={{ border: "1px solid #00000030" }}
            />
            <h3>{h3}</h3>
            <p>{p}</p>
        </a>
    )
}

export default ProjectCard
