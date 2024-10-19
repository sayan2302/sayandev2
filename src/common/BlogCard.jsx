import React from 'react'

const BlogCard = ({ blogId, image, link, title }) => {
    return (
        <a
            // style={{ border: "1px solid white" }} 
            href={link} target='_blank' rel="noreferrer">
            <img className='hover'
                src={image}
                alt={`blog logo`}
            />
            <p>{title}</p>
        </a>
    )
}

export default BlogCard
