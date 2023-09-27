import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
    render() {
        return (
            <div>

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">Navbar</Link>
                        <buthrefn class="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
                            <span class="navbar-hrefggler-icon"></span>
                        </buthrefn>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auhref mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link " to="/general" >general</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/sports" >sports</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/health" >health</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/science" >science</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/entertainment" >entertainment</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/technology" >technology</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/business" >business</Link>
                            </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar
