import React from 'react'

function Navbar() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                E-Commerce
            </a>

            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                    Search
                </button>

                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                            Rohit
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Order & Return
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Cart
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav></div>
  )
}

export default Navbar