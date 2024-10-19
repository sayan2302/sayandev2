import styles from './BlogsStyles.module.css'
import { blogList } from '../../utils/blogData'


const Blogs = () => {
    return (
        <section id='blogs' className={styles.container}>
            <h1 className='sectionTitle'>Blogs</h1>
            <div className={styles.blogsContainer}>

                {blogList.map((item, key) => {
                    return (
                        <a key={item.id + key}
                            href={item.link} target='_blank' rel="noreferrer">
                            <img className='hover'
                                src={item.image}
                                alt={`blog logo`}
                            />
                            <p>{item.title}</p>
                        </a>
                    )
                })

                }

            </div>

        </section>
    )
}

export default Blogs
