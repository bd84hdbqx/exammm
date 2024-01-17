import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {routers} from "../src/routs/rout"
import { store } from '../src/redux/store/store'
import { Provider } from 'react-redux'


const router = createBrowserRouter(routers)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}><RouterProvider router={router} /></Provider>
     
    </>
  )
}

export default App
