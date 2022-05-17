import type { NextComponentType } from 'next'
import ProjectCard from './projectCard'
import { useEffect, useState } from 'react'

const Projects: NextComponentType = () => {

    const [projects, setProjects] = useState<Project[]>([])

    const fetchProjects = async () => {
        // TODO: Add pagination if applicable
        const data = await fetch('/api/projects/1')
        setProjects(await data.json())
    }

    useEffect(() => {
        fetchProjects()
    }, [])

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
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
