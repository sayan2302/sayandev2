import React from 'react'

const BlogCard = ({ src, title }) => {
    return (
        <a style={{ border: "1px solid white" }} href="https://medium.com/@sayanpramanick/optimizing-react-performance-with-memoization-264e0bfe6ac6" target='_blank' rel="noreferrer">
            <img className='hover'
                src={src}
                alt={`blog logo`}
            />
            <p>{title}</p>
        </a>
    )
}

export default BlogCard
