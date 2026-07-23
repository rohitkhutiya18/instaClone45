import Layout from '../Layout/Layout'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <Layout>
        <Outlet/>
      </Layout>
    </div>
  )
}

export default Home