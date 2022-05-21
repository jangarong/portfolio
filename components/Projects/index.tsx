import ProjectCard from './projectCard'

const Projects = ({ projects }: { projects: Project[] }) => {

    return (
        <div>
            <div className="stripe">
            </div>
            <div className="section-stripe">
                <div className="title">
                    PROJECTS
                </div>
                <div id="projects">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.name}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
