import React from 'react'
import "../styles/sass/home.scss"
import TaskListComponent from '../components/containers/TaskListComponent'
import Navbar from '../components/containers/navbar'

const Home = (props) => {
  return (
    <div className="home-container">
      <Navbar></Navbar>
      <div className="home-main">
        <div className="home-blur-background"></div>
        <div className="home-hero">
          <h1 className="Headline1">Organize Your Task</h1>
          <div className="home-container01"></div>
          <TaskListComponent></TaskListComponent>

        </div>
      </div>
      <div className="home-c-t-a"></div>
      <div className="home-footer">
        <footer className="footer-container">
          <div className="footer-container2">
            <a href=""><span className="footer-text">Home</span></a>
            <a href="https://www.linkedin.com/in/carlos-jose-cruz-luengas/" target="_blank"><span className="footer-text"><i class="bi bi-linkedin" style={{ fontSize: "1.2rem" }} ></i></span></a>
            <a href="https://github.com/CarlosCruz1503" target="_blank"><span className="footer-text"><i class="bi bi-github" style={{ fontSize: "1.2rem" }} ></i></span></a>
          </div>
          <div className="home-divider"></div>

          <span className="home-copyrigth-text Body2">
            <h5>© 2023 Make with <i class="bi bi-heart-fill" style={{ color: "red" }}></i> by Carlos Cruz</h5>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Home
