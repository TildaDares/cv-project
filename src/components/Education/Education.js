import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EducationForm from "./EducationForm";
import RenderEducation from "./RenderEducation";
import "../../styles/education.css";

export default class Education extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isNewForm: false,
			educationArr: [],
		};
		this.handleEducationChange = this.handleEducationChange.bind(this);
		this.handleEducationButton = this.handleEducationButton.bind(this);
		this.addNewEducation = this.addNewEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.closeForm = this.closeForm.bind(this)
	}

	addNewEducation(newEdu) {
		this.setState({
			educationArr: this.state.educationArr.concat(newEdu),
		});
	}

  closeForm() {
    this.setState({
			isNewForm: !this.state.isNewForm,
		});
  }

	editEducation(editedEdu) {
		const updatedArr = this.state.educationArr.map((edu) => {
			if (edu.id === editedEdu.id) {
				edu = editedEdu;
			}
			return edu;
		});
		this.setState({
			educationArr: updatedArr,
		});
	}

	handleEducationChange(event) {
		this.setState({
			isNewForm: !this.state.isNewForm,
		});
	}

	handleEducationButton() {
		if (
			this.state.isNewForm ||
			this.props.isReadOnly
		) {
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
				<div className="cv-section">
					<div className="container">
						{this.state.educationArr.map((edu) => (
							<RenderEducation
								school={edu.school}
								study={edu.study}
								degree={edu.degree}
								startDate={edu.startDate}
								endDate={edu.endDate}
                handleEdit={this.handleEdit}
                id={edu.id}
                key={edu.id}
                editEducation={this.editEducation}
							/>
						))}
					</div>
					{this.state.isNewForm && (
						<EducationForm
							handleEducationChange={this.handleEducationChange}
              addEducation={this.addNewEducation}
              closeForm={this.closeForm}
						/>
					)}
				</div>
				{this.handleEducationButton() && (
					<Button
						color="primary"
						className="float-right add-btn"
						startIcon={<AddIcon />}
						onClick={this.handleEducationChange}
					>
						Add Education
					</Button>
				)}
			</div>
		);
	}
}
