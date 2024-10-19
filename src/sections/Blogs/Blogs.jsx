import { useEffect, useRef } from 'react';
import styles from './BlogsStyles.module.css';
import { blogList } from '../../utils/blogData';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';

const Blogs = () => {
    const blogsContainerRef = useRef(null);

    const scrollLeft = () => {
        if (blogsContainerRef.current) {
            blogsContainerRef.current.scrollLeft -= 300;
        }
    };

    const scrollRight = () => {
        if (blogsContainerRef.current) {
            blogsContainerRef.current.scrollLeft += 300;
        }
    };

    useEffect(() => {
        setInterval(() => {
            if (blogsContainerRef.current) {
                blogsContainerRef.current.scrollLeft += 300;
            }
        }, 10000);


    }, [])


    return (
        <section id="blogs" className={styles.container}>
            <h1 className="sectionTitle">Blogs</h1>
            <div className={styles.slider}>

                <FaAnglesLeft onClick={scrollLeft} className={styles.scrollButtonLeft} />
                <div className={styles.blogsContainer} ref={blogsContainerRef}>
                    {blogList.map((item, key) => (
                        <a key={item.id + key} href={item.link} target="_blank" rel="noreferrer">
                            <img className="hover" src={item.image} alt={`blog logo`} />
                            <p>{item.title}</p>
                        </a>
                    ))}
                </div>
                <FaAnglesRight onClick={scrollRight} className={styles.scrollButtonRight} />

            </div>
        </section>
    );
};

export default Blogs;
