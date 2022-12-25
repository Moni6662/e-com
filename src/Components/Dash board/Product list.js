

import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

import axios from "axios";

function Productlist() {

  const [data, setdata] = useState([])

  const navigator = useNavigate()

  // axios.get("https://fakestoreapi.com/products")
  // .then(responce => {
  //   // console.log(responce.data)
  //   setdata (responce.data)

  // })
  // .catch(error =>{
  //   // console.log(error)
  // })

  useEffect(() => {

    axios.get("https://fakestoreapi.com/products")
      .then(responce => {
        console.log(responce.data)
        setdata(responce.data)
      })


      .catch(error => {
        console.log(error)
      })

  }, [])

  // const moreInfo=(x)=>{
  //     //  console.log("MMMMMMMMMMMMMMMMMMMMMM",x)
  //      navigator(`product/details/${x}`)

  // }


  return (
    <>
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
      </nav>

      <div class="container">
        <div class="row mt-4">

          {data && data.map(item => {
            return (
              <div class="col-3" key={item.id}>


                <div class="card">
                  <img src={item.image} class="card-img-top image-height" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title"> {item.title}</h5>
                    <p class="card-text"> {item.description} </p>
                    <p class="card-text"> {item.price} </p>
                    <p class="card-text"> {item.rating.rate} </p>
                  </div>

                  <div class="card-body">

                    <button onClick={() => navigator(`/product/details/${item.id}`)}>  More Info </button>




                  </div>
                </div>




              </div>
            )
          })}









        </div>
      </div>

    </>
  );
}

export default Productlist;








