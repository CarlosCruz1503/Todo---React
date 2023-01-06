import React, { useRef } from 'react';
import "../../styles/sass/navbar.scss"

const Navbar = () => {

    const dropMenu = useRef()

    return (
        <div className='navbar'>
            <header className='header'>
                <a href="https://icons.getbootstrap.com/" target="_blank" className='a-nav'><button className="header-options">Home</button></a>
                <a href="https://icons.getbootstrap.com/" target="_blank" className='a-nav'><button className="header-options header-options-title">More Projects Make For Me:</button></a>
                <a href="https://calculadoracarloscruz.netlify.app" target="_blank" className='a-nav'><button className="header-options-projects">Calculadora JS</button></a>
                <button className="header-options-projects header-django" data-bs-toggle="modal" data-bs-target="#exampleModal">Crud En Django</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div class="modal-body text-center">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">DJANGO CRUD</h1>
                                </div>

                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-center">
                                <h3>La web se demora un poco en cargar(30 segundos) porque es BackEnd en un server gratuito</h3>
                                <div className="django-modal-button">
                                    <a href="https://coto-qqma.onrender.com/" target="_blank" className='a-nav'><button className="header-options-projects">Ir a la web</button></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <a href="/" target="_blank" className='a-nav'><button className="header-options-projects">Comming Soon</button></a>
                <label class="dropdown">
                    <div class="dd-button">
                        More projects make for me
                    </div>
                    <input type="checkbox" class="dd-input" id="test" />
                    <ul class="dd-menu">
                        <a href="https://calculadoracarloscruz.netlify.app/" target="_blank"><li>Calculadora en JS</li></a>
                        <a href="https://coto-qqma.onrender.com/">
                            <li>Crud En Django
                                <p className='text-django'>La web se demora un poco en cargar</p>
                                <p className='text-django'>es BackEnd en un server gratuito</p>
                            </li>
                        </a>
                        <a href=""><li>Something else here</li></a>
                        <a href=""><li class="divider"></li></a>
                        <li>
                            <a href="">HOME</a>
                        </li>
                    </ul>
                </label>
            </header>
        </div>
    );
}

export default Navbar;
