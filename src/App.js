import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/search" element={<SearchPage />}></Route>
				</Routes>
			</Router>
			<div></div>
		</div>
	);
}

export default App;
