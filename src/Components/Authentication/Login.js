import React from "react";
import { Link } from "react-router-dom";
import "./Authentication.css"

function Login() {
  return (
    <>
      <div class="login">
        <div class="container login-form">
          <div class="row">
            <div class="col ">
              <h2 class="mt-4 mb-4">Member Login</h2>
              <input type="text" placeholder="Username" class="w-100 mb-4 form-control"></input>
              <input type="password" placeholder="password" class="w-100 form-control"></input>

              <div class="row">
                <div class="col">
                  <Link to="/create/account" class="mt-4 btn btn-link">create account</Link>
                </div>

                <div class="col">
                  <Link to="/forgot/password"> <button class="mt-4 btn btn-link">forgot password</button> </Link>
                </div>

              </div>


             <Link to = "/product/list"><button class="mt-4 btn btn-primary w-100">Login</button></Link> 
            </div>


            <div class="col-8 p-0">
              <img class="w-100" src="https://th.bing.com/th/id/OIP.nd1-8qpnUfDIbbrfsTYKeQHaEK?pid=ImgDet&rs=1" alt="img"></img>
            </div>
          </div>
        </div>

      </div>






    </>
  );
}

export default Login;
