import { Link } from "react-router-dom"


function Forgotpassword() {
  return (

    <>
      
      <div class="parent-forgotpassword">

        <div class="container forgot-password">
          <div class="row">
            <div class="col-4 mt-4">
              <div class="id">
                <input type="email" placeholder="email id" class="w-100 form-control"></input>

                <div class="row">

                <div class="col">
                  <Link to="/"> <button class="mt-4 btn btn-info">Back</button> </Link>
                  </div>
                  <div class="col">
                    <button class="mt-4 btn btn-primary "> Next</button>
                  </div>
                  
                </div>

                
              </div>
            </div>



            <div class="col-8 p-0">
              <img alt="img" src="https://as2.ftcdn.net/v2/jpg/01/65/01/77/1000_F_165017799_byNziC85xNVTe02EYwwnl9LaAgctQPFr.jpg" class="image w-100"></img>
            </div>

          </div>
        </div>
      </div>


    </>


  )
}

export default Forgotpassword





