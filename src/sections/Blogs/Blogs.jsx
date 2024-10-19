import styles from './BlogsStyles.module.css'
import blogImg from '../../assets/blogImg.webp'
import BlogCard from '../../common/BlogCard'

const Blogs = () => {
    return (
        <section id='blogs' className={styles.container}>
            <h1 className='sectionTitle'>Blogs</h1>
            <div className={styles.blogsContainer}>
                    <BlogCard src={blogImg} title="Building a Responsive React Application: Key Principles and Best Practices" />
                    <BlogCard src={blogImg} title="Optimizing React Performance with Memoization" />
                    <BlogCard src={blogImg} title="333333333333" />
            </div>

        </section>
    )
}

export default Blogs
