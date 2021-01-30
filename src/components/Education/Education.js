import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import EducationForm from "./EducationForm";
import "../../styles/education.css";

export default class Education extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editForm: false,
		};
		this.handleEducationChange = this.handleEducationChange.bind(this);
	}

	handleEducationChange(event) {
		this.setState({
			editForm: !this.state.editForm,
		});
		event.target.disabled = this.state.editForm;
	}

	render() {
		return (
			<div className="cv-sections">
				<Typography variant="h3" className="heading">
					Education
				</Typography>
				<Divider variant="middle" className="dividers" />
				<div className="justify-center">
					<EducationForm />
				</div>
				<Button
					color="primary"
					className="float-right"
					variant="contained"
					onClick={this.handleEducationChange}
				>
					Add Education
				</Button>
			</div>
		);
	}
}
