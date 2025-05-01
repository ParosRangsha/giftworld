import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Createaccount from './Components/Createaccount'
import Login from './Components/Login'
import Account from './Components/Account'
import Errorpage from './Components/Errorpage'

let multipage = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='*' element={<Errorpage/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<Login/>}/>
    <Route path='/login' element={<Createaccount/>}/>
    <Route path='/account' element={<Account/>}/>
  </>
))
function App() {

 
  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App
