import './index.css'

import Header from '../Header'

import LogoutButton from '../LogoutButton'

const Home = () => {
  console.log('home')

  return (
    <div className="container">
      <Header />
      <div className="home-container">
        <h1 className="heading">Home Route</h1>
        <LogoutButton />
      </div>
    </div>
  )
}
export default Home
