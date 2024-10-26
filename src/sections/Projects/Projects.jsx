import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import sortingVisualiser from '../../assets/visualizer.webp'
import expenseTracker from '../../assets/expenseTracker.webp'
import taskManager from '../../assets/taskManagement.webp'
import qubrid from '../../assets/qubridAI.png'

const Projects = () => {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={qubrid}
                    link="https://platform.qubrid.com/"
                    h3="Qubrid AI"
                    p="AI Soultions"
                />
                <ProjectCard
                    src={expenseTracker}
                    link="https://expense-tracker-sage-seven.vercel.app/"
                    h3="Expense Tracker"
                    p="Fianance Management App"
                />
                <ProjectCard
                    src={sortingVisualiser}
                    link="https://sayan-sortingvisualiser.netlify.app"
                    h3="Sorting Visualizer"
                    p="Educational App"
                />
                {/* <ProjectCard
                    src={taskManager}
                    link="https://sayan-task-management-app.netlify.app/"
                    h3="Task Manager"
                    p="Task Management App"
                />
                */}


            </div>
        </section>
    )
}

export default Projects
