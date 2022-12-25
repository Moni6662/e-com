



function Createaccount() {
  return (
    <>

      <div class="Parent-creat-account">

        <div class="container create-account-form ">
          <h3 class="mt-4 mb-4">CREATE   ACCOUNT</h3>
          <div class="row create-account-row">

            <div class="col-6">
              <input type="text" placeholder="Username" class="mb-4 form-control"></input>
            </div>
          </div>
          <div class="row create-account-row">
            <div className="col-6">
              <input type="email" placeholder="Email" class="mb-4 form-control"></input>
            </div>

          </div>
          <div class="row create-account-row">
            <div class="col-6">
              <input type="password" placeholder="Password" class="mb-4 form-control"></input>
            </div>

          </div>
          <div class="row create-account-row">
            <div class="col-6">
              <input type="password" placeholder=" confirm Password" class="mb-4 form-control"></input>
            </div>

          </div>
          <div class="row create-account-row">
            <div class="col-3 ml-4 mb-4">
              <button class="mt-4 btn btn-primary w-100">Submit</button>
            </div>

          </div>
        </div>

      </div>



    </>


  );
}

export default Createaccount;
