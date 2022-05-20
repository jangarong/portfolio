import type { NextPage } from 'next'
import Organizations from '../components/organizations'
import Profile from '../components/profile'
import Projects from '../components/projects'
import { organizations, projects } from '../constants/'

const Home: NextPage = () => {
  return (
    <div id="sections">
      <Profile />
      <Projects projects={projects} />
      <Organizations organizations={organizations} />
    </div>
  )
}

export default Home
