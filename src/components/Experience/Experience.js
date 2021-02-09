import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ExperienceForm from "./ExperienceForm";
import RenderExperience from "./RenderExperience";
export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isNewForm: false,
			experienceArr: [],
		};
		this.handleForm = this.handleForm.bind(this);
		this.addNewExperience = this.addNewExperience.bind(this);
		this.handleExperienceButton = this.handleExperienceButton.bind(this);
		this.deleteExperience = this.deleteExperience.bind(this);
		this.editExperience = this.editExperience.bind(this);
	}

	deleteExperience(id) {
		this.setState({
			experienceArr: this.state.experienceArr.filter((exp) => exp.id !== id),
		});
	}

	handleForm() {
		this.setState({
			isNewForm: !this.state.isNewForm,
		});
	}

	editExperience(editedExp) {
		const updatedArr = this.state.experienceArr.map((exp) => {
			if (exp.id === editedExp.id) {
				exp = editedExp;
			}
			return exp;
		});
		this.setState({
			experienceArr: updatedArr,
		});
	}

	addNewExperience(newExp) {
		this.setState({
			experienceArr: this.state.experienceArr.concat(newExp),
		});
	}

	handleExperienceButton() {
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
					<div className="container">
						{this.state.experienceArr.map((exp) => (
							<RenderExperience
								organisation={exp.organisation}
								position={exp.position}
								description={exp.description}
								startDate={exp.startDate}
								endDate={exp.endDate}
								handleEdit={this.handleEdit}
								deleteExperience={this.deleteExperience}
								id={exp.id}
								key={exp.id}
								editExperience={this.editExperience}
								isReadOnly={this.props.isReadOnly}
							/>
						))}
					</div>
					{this.state.isNewForm && (
						<ExperienceForm
							addExperience={this.addNewExperience}
							closeForm={this.handleForm}
							isReadOnly={this.props.isReadOnly}
						/>
					)}
				</div>
				{this.handleExperienceButton() && (
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
