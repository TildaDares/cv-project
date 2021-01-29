import React from "react";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import "../styles/main.css";

class App extends React.Component {
  constructor() {
    super();
    this.state {
      
    }  
  }

	render() {
		return (
			<div>
				<NavBar/>
				<Resume />
			</div>
		);
	}
}

export default App;
