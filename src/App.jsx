import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Workout from './pages/Workout'
import FoodDiary from './pages/FoodDiary'
import GoalsStats from './pages/GoalsStats'
import { Routes, Route } from "react-router-dom"

function App() {

  return <>
     <Navbar />
     <div className="routes">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/workout" element={<Workout />}></Route>
        <Route path="/food-diary" element={<FoodDiary />}></Route>
        <Route path="/goals-stats" element={<GoalsStats />}></Route>
      </Routes>
     </div>
  </>
 
}

export default App
