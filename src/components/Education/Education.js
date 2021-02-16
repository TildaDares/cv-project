import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EducationForm from "./EducationForm";
import RenderEducation from "./RenderEducation";

export default function Education(props) {
	const [isNewForm, setIsNewForm] = useState(false);
	const [educationArr, setEducationArr] = useState([]);

	function deleteEducation(id) {
		setEducationArr(educationArr.filter((edu) => edu.id !== id));
	}

	function addNewEducation(newEdu) {
		setEducationArr(educationArr.concat(newEdu));
	}

	function handleForm() {
		setIsNewForm(!isNewForm);
	}

	function editEducation(editedEdu) {
		setEducationArr(
			educationArr.map((edu) => {
				if (edu.id === editedEdu.id) {
					edu = editedEdu;
				}
				return edu;
			})
		);
	}

	function handleEducationButton() {
		if (isNewForm || props.isReadOnly) {
			return false;
		}
		return true;
	}

	return (
		<div className="cv-sections">
			<Typography variant="h3" className="heading">
				Education
			</Typography>
			<Divider variant="middle" className="dividers" />
			<div className="cv-section">
				<div className="container">
					{educationArr.map((edu) => (
						<RenderEducation
							school={edu.school}
							study={edu.study}
							degree={edu.degree}
							startDate={edu.startDate}
							endDate={edu.endDate}
							deleteEducation={deleteEducation}
							id={edu.id}
							key={edu.id}
							editEducation={editEducation}
							isReadOnly={props.isReadOnly}
						/>
					))}
				</div>
				{isNewForm && (
					<EducationForm
						addEducation={addNewEducation}
						closeForm={handleForm}
						isReadOnly={props.isReadOnly}
					/>
				)}
			</div>
			{handleEducationButton() && (
				<Button
					color="primary"
					className="float-right add-btn"
					startIcon={<AddIcon />}
					onClick={handleForm}
				>
					Add Education
				</Button>
			)}
		</div>
	);
}
