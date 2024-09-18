import React from 'react'

const Nav = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">LOG</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">ADD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">VIEW</a>
                            </li>
                            
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav