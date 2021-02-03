import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import "../../styles/education.css";
export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			experienceArr: [],
		};
	}
	render() {
		return (
			<div className="cv-sections">
				<Typography variant="h3" className="heading">
					Experience
				</Typography>
				<Divider variant="middle" className="dividers" />
				<div className="cv-section">
					<div className="container"></div>
				</div>
				<Button
					color="primary"
					className="float-right add-btn"
					startIcon={<AddIcon />}
				>
					Add Experience
				</Button>
			</div>
		);
	}
}
