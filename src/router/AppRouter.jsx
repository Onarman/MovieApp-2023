import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Main from '../pages/Main'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MovieDetail from '../pages/MovieDetail'

const AppRouter = () => {
  return (
	<div>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/details/:id" element={<PriverRouter />} />
				<Route path="" element={<MovieDetail />} />
			</Routes>
		</BrowserRouter>
	</div>
  )
}

export default AppRouter