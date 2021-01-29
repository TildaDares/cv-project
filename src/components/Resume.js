import React from "react";
import Paper from "@material-ui/core/Paper";
import General from "./General"
import "../styles/main.css";
class Resume extends React.Component {
	render() {
		return (
			<Paper elevation={3} className="paper">
				<form noValidate className="form" autoComplete="off">
          <General/>
				</form>
			</Paper>
		);
	}
}

export default Resume;
