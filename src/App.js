import React from "react";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import "../styles/main.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			readOnly: false,
		};
		this.handleReadOnlyChange = this.handleReadOnlyChange.bind(this);
	}

	handleReadOnlyChange(event) {
		this.setState({
			readOnly: event.target.checked,
		});
	}

	render() {
		return (
			<div>
				<NavBar handleChange={this.handleReadOnlyChange} />
				<Resume />
			</div>
		);
	}
}

export default App;
