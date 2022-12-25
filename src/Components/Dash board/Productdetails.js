
import axios from "axios"
import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import {useParams} from 'react-router-dom'



function Productdetails() {

    const [products, setproducts] = useState([])
    const {id}= useParams()
    console.log(id,"iiiiiiiiiiiiiiiiiiiiiiii")
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(responce => {
                console.log(responce)
                setproducts(responce.data)

            })

            .catch(error => {
                console.log(error)
            })
    }, [])



    console.log(products, "lllllllllllllllllll")

    return (
        <>


            <Navbar></Navbar>





            <div class="container">
                <div class="row">
                    <div class="col-3 mt-4 "> 
                        <img src={products.image} class="w-100" alt=""></img>
                    </div>



                    <div class="col-8 mt-4 "> 
                        <h2 > {products?.title} </h2>
                        <i > Description -  <br></br>{products?.description} </i>
                        <p> Rating -  {products?.rating?.rate} </p>
                        <p> Price - {products?.price} Rs. </p>


                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Quantity
                            </button>
                            <ul class="dropdown-menu">
                                <li><button class="dropdown-item" type="button">1</button></li>
                                <li><button class="dropdown-item" type="button">2</button></li>
                                <li><button class="dropdown-item" type="button">3</button></li>
                                <li><button class="dropdown-item" type="button">4</button></li>
                                
                            </ul>
                        </div>


                        <button class="btn btn-warning">add to Cart</button>
                        <button class="btn btn-primary m-4">Buy Now</button>
                    </div>



                </div>
            </div>



            {/* <h1> Product details .com...</h1> */}

        </>


    )
}

export default Productdetails