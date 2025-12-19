import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from "react";           // ✅ add this
import About from './pages/About'
import Contact from './pages/Contact'
import Course from './pages/Course'
import CourseDetails from './pages/CourseDetails'
import Events from './pages/Event'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Trainers from './pages/Trainer'
import Footer from './user/layout/Footer'
import Header from './user/layout/Header'
import Master from './user/layout/Master'
import Login from './auth/Login'
import RegisterTutor from './auth/RegisterTutor'
import RegisterUser from './auth/Register'
import AdminMaster from './admin/layout/AdminMaster'
import ManageUsers from './admin/components/ManageUsers'
import ManageTutors from './admin/components/ManageTutors'
import TutorMaster from './Tutors/layout/TutorMaster'
import ViewTutors from './user/components/ViewTutors'
import BookingPage from './user/components/Booking'
import ViewReq from './Tutors/components/ViewReq'
import ViewBookingUser from './user/components/ViewBookingUser'
import JitsiMeet from './auth/Jitsi'
import ReviewPage from './user/components/Review'
import ViewReviews from './user/components/ViewReview'
import ViewReviewsTutor from './Tutors/components/ViewReviewTutor'
import ViewReviewsAdmin from './admin/components/ViewReviewAdmin'
import UserDashboard from './admin/layout/DashBoard'
import TutorDashboard from './Tutors/layout/TutorDashBoard'
import { ToastContainer } from 'react-toastify'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Master/>}>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="/TutorReg" element={<RegisterTutor/>}/>
            <Route path="/register" element={<RegisterUser/>}/>
            <Route path='Book/:id' element={<BookingPage/>} />
            <Route path="/viewTutors" element={<ViewTutors/>}/>
            <Route path="/viewBookingUser" element={<ViewBookingUser/>}/>
            <Route path="jitsi/:id" element={<JitsiMeet/>}/>
            <Route path="review/:id" element={<ReviewPage/>}/>
            <Route path="review" element={<ReviewPage/>}/>
            <Route path="ViewReview" element={<ViewReviews/>}/>
          </Route>

          <Route path='/admin' element={<AdminMaster/>}>
            <Route index element={<UserDashboard/>} />
            <Route path='manageUser' element={<ManageUsers/>} />
            <Route path='manageTutor' element={<ManageTutors/>} />
            <Route path="viewReview" element={<ViewReviewsAdmin/>}/>
          </Route>

          <Route path='/tutor' element={<TutorMaster/>}>
            <Route index element={<TutorDashboard/>} />
            <Route path='viewReq' element={<ViewReq/>} />
            <Route path="jitsi/:id" element={<JitsiMeet/>}/>
            <Route path="viewReview" element={<ViewReviewsTutor/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* Global toast container is a good idea */}
      <ToastContainer />
    </>
  )
}

export default App
