import Link from 'next/link'
import styles from './card.module.scss'

const ProjectCard = (props: { project: Project }) => {
    const project = props.project

    return (
        <div className={styles["card"]}>
            <img
                src={project.imgUrl}
                alt={project.imgUrl}
            />
            <div className={styles["body"]}>
                <h1>
                    {project.name}
                </h1>
                <p>
                    {project.description}
                </p>
            </div>
            <div className={styles["card-icon-menu"]}>
                {project.zipUrl ?
                    <Link href={project.zipUrl}>
                        <div className={styles["download"]} />
                    </Link>
                    : <div />}
                {project.githubUrl ?
                    <Link href={project.githubUrl}>
                        <div className={styles["github"]} />
                    </Link>
                    : <div />}
                {project.kaggleUrl ?
                    <Link href={project.kaggleUrl}>
                        <div className={styles["kaggle"]} />
                    </Link>
                    : <div />}
            </div>
        </div>
    )
}

export default ProjectCard
