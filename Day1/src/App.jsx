
import './App.css'
import Login from './Pages/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Forgotpassword from './Pages/Forgotpassword'
import Home from './Pages/Home'
import UserPayment from './Pages/Users/UserPayment'
import Contactus from './Pages/Contactus'
import UserDetails from './Pages/Users/UserDetails'
import Reviewpage from './Pages/Reviewpage'
import Products from './Pages/Products'
import Recentorder from './Pages/Users/Recentorder'
import UserPaymentdetails from './Pages/Users/UserPaymentdetails'
import Birthdaygifts from './Pages/Gifts/Birthdaygifts'
import WeddingGifts from './Pages/Gifts/WeddingGifts'
import FlowerBokkey from './Pages/Gifts/FlowerBokkey'
import Frames from './Pages/Gifts/Frames'
import AdminNavbar from './Pages/Admin/AdminNavbar'
import AdminGifts from './Pages/Admin/AdminGifts'
import Adminpaymenthistory from './Pages/Admin/AdminPaymentHistory'
import Adminthemes from './Pages/Admin/Adminthemes'
import Adminviewoders from './Pages/Admin/Adminviewoders'
import Adminsidebar from './Pages/Admin/Adminsidebar'

function App() {


  return (
    <div className='font-varela'>
          <BrowserRouter>
          <Routes>
          
            <Route path="/product" element={<Products/>} />
            <Route path="/adminthemes" element={<Adminthemes/>} />
            
            <Route path="/adminnavbar" element={<AdminNavbar/>} />
            <Route path="/admingifts" element={<AdminGifts/>} />
            <Route path="/adminpaymenthistory" element={<Adminpaymenthistory/>} />
            <Route path="/adminvieworders" element={<Adminviewoders/>} />
            <Route path="/adminsidebar" element={<Adminsidebar/>} />

            <Route path="/userpayemnthistory" element={<UserPaymentdetails/>} />
            <Route path="/feedbackpage" element={<Reviewpage/>} />
            <Route path="/contactuspage" element={<Contactus/>} />
            <Route path="/recentorder" element={<Recentorder/>} />
            <Route path="/homepage" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/gotoforgotpasswordpage" element={<Forgotpassword/>} />
            <Route path="/userdetails" element={<UserDetails/>} />
            <Route path='/userpayment' element={<UserPayment/>}/>

            <Route path='/birthdaygifts' element={<Birthdaygifts/>}/>
            <Route path='/weddingpage' element={<WeddingGifts/>}/>
            <Route path='/flowerbokkey' element={<FlowerBokkey/>}/>
            <Route path='/framespage' element={<Frames/>}/>
          </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App
