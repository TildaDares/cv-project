import React from "react";
import Resume from "./components/Resume";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import logo from "../logo.png";
import "../styles/navbar.css";
import "../styles/main.css";

class App extends React.Component {
	render() {
		return (
			<div>
				<AppBar color="default">
					<ToolBar className="d-flex justify-around">
						<div className="d-flex">
							<img src={logo} alt="logo" className="main-logo" />
							<Typography variant="h6">CV Maker</Typography>
						</div>
						<Button
							color="primary"
							variant="contained"
							startIcon={<VisibilityIcon />}
						>
							Preview
						</Button>
					</ToolBar>
				</AppBar>
				<Resume />
			</div>
		);
	}
}

export default App;
