import React from 'react'

const BlogCard = ({ src, title }) => {
    return (
        <a  href="" target='_blank' rel="noreferrer">
            <img className='hover'
                src={src}
                alt={`blog logo`}
            />
            <p>{title}</p>
        </a>
    )
}

export default BlogCard
