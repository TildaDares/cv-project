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
			educationArr: [],
		};
		this.handleEducationChange = this.handleEducationChange.bind(this);
		this.handleEducationButton = this.handleEducationButton.bind(this);
		this.addNewEducation = this.addNewEducation.bind(this);
	}

	addNewEducation(newEdu) {
		this.setState({
			educationArr: this.state.educationArr.concat(newEdu),
			isNewForm: !this.state.isNewForm,
		});
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
		school: "",
		study: "",
		degree: "",
		startDate: "",
		endDate: "",
	};

	render() {
		return (
			<div className="cv-sections">
				<Typography variant="h3" className="heading">
					Education
				</Typography>
				<Divider variant="middle" className="dividers" />
				<div className="cv-section">
					{this.state.educationArr.map((edu, index) => (
						<RenderEducation
							school={edu.school}
							study={edu.study}
							degree={edu.degree}
							startDate={edu.startDate}
							endDate={edu.endDate}
							key={index}
						/>
					))}
					{this.state.isNewForm && (
						<EducationForm
							handleEducationChange={this.handleEducationChange}
							education={this.educationInfo}
							addNewEducation={this.addNewEducation}
						/>
					)}
				</div>
				{this.handleEducationButton() && (
					<Button
						color="primary"
						className="float-right add-btn"
						onClick={this.handleEducationChange}
					>
						Add Education
					</Button>
				)}
			</div>
		);
	}
}
