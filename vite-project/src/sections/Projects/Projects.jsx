import styles from './ProjectsStyles.module.css';
import todolist from '../../assets/todolist.jpg';
import quizapp from '../../assets/quizapp.jpg';
import weatherapp from '../../assets/weatherapp.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={todolist}
          link={'https://github.com/thedarhon/To-do-list'}
          h3={'Todolist'}
          p={'Organization app'}
        />
        <ProjectCard
          src={quizapp}
          link={'https://github.com/thedarhon/Quiz-App'}
          h3={'Quiz-App'}
          p={'Quiz MiniGame'}
        />
        <ProjectCard
          src={weatherapp}
          link={'https://github.com/thedarhon/Quiz-App'}
          h3={'Weather-App'}
          p={'Check your weather'}
        />
      </div>
    </section>
  );
}

export default Projects;
