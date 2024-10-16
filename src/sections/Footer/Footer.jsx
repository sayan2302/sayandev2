import styles from './FooterStyles.module.css'

const Footer = () => {
    return (
        <section id='footer' className={styles.container}>
            <p>
                &copy; {new Date().getFullYear()} Sayan pramanick.
                <br />
                All rights reserved.
            </p>
        </section>
    )
}

export default Footer
