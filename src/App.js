import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import "./styles/main.css";

export default function App() {
	const [isReadOnly, setIsReadOnly] = useState(false);

	return (
		<div className="main-container">
			<NavBar handleChange={(event) => setIsReadOnly(event.target.checked)} />
			<Resume isReadOnly={isReadOnly} />
		</div>
	);
}
