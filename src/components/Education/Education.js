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
		this.handleEducationButton = this.handleEducationButton.bind(this);
		this.addNewEducation = this.addNewEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
	}

  deleteEducation(id){
    this.setState({
			educationArr: this.state.educationArr.filter((edu) => edu.id !== id),
		});
  }

	addNewEducation(newEdu) {
		this.setState({
			educationArr: this.state.educationArr.concat(newEdu),
		});
	}

  handleForm() {
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
								deleteEducation={this.deleteEducation}
								id={edu.id}
								key={edu.id}
								editEducation={this.editEducation}
								isReadOnly={this.props.isReadOnly}
							/>
						))}
					</div>
					{this.state.isNewForm && (
						<EducationForm
							addEducation={this.addNewEducation}
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
						Add Education
					</Button>
				)}
			</div>
		);
	}
}
