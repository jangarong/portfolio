import type { NextPage } from 'next'
import Organizations from '../components/organizations'
import Profile from '../components/profile'
import Projects from '../components/projects'

const Home: NextPage = () => {
  return (
    <div id="sections">
      <Profile />
      <Projects />
      <Organizations />
    </div>
  )
}

export default Home
