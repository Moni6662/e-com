// import logo from './logo.svg';
import './App.css';
import Login from './Components/Authentication/Login';
import Forgotpassword from './Components/Authentication/Forgotpassword';
import Createaccount from './Components/Authentication/Createaccount';
import Productlist from './Components/Dash board/Product list';
import Productdetails from './Components/Dash board/Productdetails';


import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      
  
     

     <BrowserRouter>
             <Routes>
              <Route path='/' element={<Login/>} exact></Route>
              <Route path='/forgot/password' element = {<Forgotpassword/>} exact></Route>
              <Route path= '/create/account' element = {<Createaccount/>} exact> </Route>
              <Route path = '/product/list' element = {<Productlist/>} exact> </Route>
              <Route path= '/product/details/:id' element ={<Productdetails/>} exact > </Route>
            </Routes>     
     </BrowserRouter>

    </div>
  );
}

export default App;















































































































