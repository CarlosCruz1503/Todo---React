import React from 'react'
import StoreBanner from '../components/pure/store-banner'
import PrimaryButton from '../components/pure/primary-button'
import "../styles/home.css"
import TaskListComponent from '../components/containers/TaskListComponent'

const Home = (props) => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-logo1"></div>
        <div className="home-menu">
          <span className="home-text06">HOME</span>
          <span className="home-text07">More proyects make for me</span>
        </div>
        <div className="home-container06">
          <StoreBanner></StoreBanner>
        </div>
        <div data-role="BurgerMenu" className="home-burger-menu">
          <span className="home-text06">HOME</span>
          <span className="home-text07">More proyects make for me</span>
        </div>
      </header>
      <div className="home-main">
        <div className="home-blur-background"></div>
        <div className="home-hero">
          <h1 className="Headline1 home-text08">Organize Your Task</h1>

          <div className="home-container07"></div>
          <TaskListComponent></TaskListComponent>
          <PrimaryButton button="Me gusta Esta Web"></PrimaryButton>
        </div>
      </div>
      <div className="home-c-t-a"></div>
      <div className="home-footer">
        <footer className="home-container08">
          <div className="home-container09">
            <span className="home-text09">Home</span>
            <span className="home-text10">More projects make for me</span>
          </div>
          <div className="home-divider"></div>
          <div className="home-container10">
            <span className="home-text11 Body2">
              © 2023 Make with (N) por Carlos Cruz
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
