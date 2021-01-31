import React from "react";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import "./styles/main.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			isReadOnly: false,
		};
		this.handleReadOnlyChange = this.handleReadOnlyChange.bind(this);
	}

	handleReadOnlyChange(event) {
		this.setState({
			isReadOnly: event.target.checked,
		});
	}

	render() {
		return (
			<div>
				<NavBar handleChange={this.handleReadOnlyChange} />
				<Resume isReadOnly={this.state.isReadOnly} />
			</div>
		);
	}
}

export default App;
