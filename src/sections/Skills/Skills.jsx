import styles from './SkillsStyles.module.css'
import checkmark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

const Skills = () => {
    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkmark} skill="HTML" />
                <SkillList src={checkmark} skill="CSS" />
                <SkillList src={checkmark} skill="JavaScript" />
                <SkillList src={checkmark} skill="Python" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkmark} skill="React" />
                <SkillList src={checkmark} skill="Angular" />
                <SkillList src={checkmark} skill="Vue" />
                <SkillList src={checkmark} skill="Tailwind CSS" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkmark} skill="Redux" />
                <SkillList src={checkmark} skill="Git" />
                <SkillList src={checkmark} skill="Jest" />
                <SkillList src={checkmark} skill="Webpack" />
                <SkillList src={checkmark} skill="Bootstrap" />
            </div>
        </section>
    )
}

export default Skills
