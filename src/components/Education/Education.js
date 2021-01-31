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
			newForm: false,
		};
		this.handleEducationChange = this.handleEducationChange.bind(this);
		this.handleEducationButton = this.handleEducationButton.bind(this);
	}

	handleEducationChange(event) {
		this.setState({
			newForm: !this.state.newForm,
		});
	}

	handleEducationButton() {
		if (this.state.newForm || this.props.readOnly) {
			return false;
		}
		return true;
	}

	render() {
		return (
			<div className="cv-sections">
				<Typography variant="h3" className="heading">
					Education
				</Typography>
				<Divider variant="middle" className="dividers" />
				<div className="justify-center">
					{this.state.newForm && (
						<EducationForm handleEducationChange={this.handleEducationChange} />
					)}
				</div>
				{this.handleEducationButton() && (
					<Button
						color="primary"
						className="float-right add-edu"
						onClick={this.handleEducationChange}
						disabled={this.state.newForm}
					>
						Add Education
					</Button>
				)}
			</div>
		);
	}
}
