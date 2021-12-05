import { Routes, Route } from "react-router-dom";

import "./App.css";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Rooms from "./pages/Rooms";

import Header from "./components/Header";

const App: React.FC = (): JSX.Element => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/rooms" element={<Rooms />} />
				<Route path="/room/:id" element={<Room />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default App;
