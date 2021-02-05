import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ExperienceForm from "./ExperienceForm";
import "../../styles/education.css";
export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isNewForm: false,
			experienceArr: [],
		};
		this.handleForm = this.handleForm.bind(this);
		this.addNewExperience = this.addNewExperience.bind(this);
		this.handleEducationButton = this.handleEducationButton.bind(this);
	}

	handleForm() {
		this.setState({
			isNewForm: !this.state.isNewForm,
		});
	}

	addNewExperience() {}

	handleEducationButton() {
		if (this.state.isNewForm || this.props.isReadOnly) {
			return false;
		}
		return true;
	}

	render() {
		return (
			<div className="cv-sections">
				<Typography variant="h3" className="heading">
					Work Experience
				</Typography>
				<Divider variant="middle" className="dividers" />
				<div className="cv-section">
					<div className="container"></div>
					{this.state.isNewForm && (
						<ExperienceForm
							addExperience={this.addNewExperience}
							closeForm={this.handleForm}
							isReadOnly={this.props.isReadOnly}
						/>
					)}
				</div>
				{this.handleEducationButton() && (
					<Button
						color="primary"
						className="float-right add-btn"
						startIcon={<AddIcon />}
						onClick={this.handleForm}
					>
						Add Work Experience
					</Button>
				)}
			</div>
		);
	}
}
