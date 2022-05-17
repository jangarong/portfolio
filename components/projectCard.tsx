import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = (props: { project: Project }) => {
    const project = props.project

    return (
        <div className="card">
            <Image
                src={project.imgUrl}
                width="400%"
                height="250%"
            />
            <div className="body">
                <h1>
                    {project.name}
                </h1>
                <p>
                    {project.description}
                </p>
            </div>
            <div className="card-icon-menu">
                {project.zipUrl ?
                    <Link href={project.zipUrl}>
                        <div className="download" />
                    </Link>
                    : <div />}
                {project.githubUrl ?
                    <Link href={project.githubUrl}>
                        <div className="github" />
                    </Link>
                    : <div />}
                {project.kaggleUrl ?
                    <Link href={project.kaggleUrl}>
                        <div className="kaggle" />
                    </Link>
                    : <div />}
            </div>
        </div>
    )
}

export default ProjectCard
