import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import EducationForm from "./EducationForm";
import RenderEducation from "./RenderEducation";
import "../../styles/education.css";

export default class Education extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isNewForm: false,
		};
		this.handleEducationChange = this.handleEducationChange.bind(this);
		this.handleEducationButton = this.handleEducationButton.bind(this);
	}

	handleEducationChange(event) {
		this.setState({
			isNewForm: !this.state.isNewForm,
		});
	}

	handleEducationButton() {
		if (this.state.isNewForm || this.props.isReadOnly) {
			return false;
		}
		return true;
	}

	educationInfo = {
		school: "University of Boston",
		study: "Computer Science",
		degree: "Bachelor of Science",
		startDate: "January 2012",
		endDate: "June 2012",
	};

	render() {
		return (
			<div className="cv-sections">
				<Typography variant="h3" className="heading">
					Education
				</Typography>
				<Divider variant="middle" className="dividers" />
				<div className="cv-section">
					<RenderEducation education={this.educationInfo} />
					<RenderEducation education={this.educationInfo} />
					{this.state.isNewForm && (
						<EducationForm handleEducationChange={this.handleEducationChange} />
					)}
				</div>
				{this.handleEducationButton() && (
					<Button
						color="primary"
						className="float-right add-btn"
						onClick={this.handleEducationChange}
						disabled={this.state.isNewForm}
					>
						Add Education
					</Button>
				)}
			</div>
		);
	}
}
