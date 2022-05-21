import type { NextPage } from 'next'
import Organizations from '../components/Organizations'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
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
