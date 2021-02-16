import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ExperienceForm from "./ExperienceForm";
import RenderExperience from "./RenderExperience";
export default function Experience(props) {
	const [isNewForm, setIsNewForm] = useState(false);
	const [experienceArr, setExperienceArr] = useState([]);

	function deleteExperience(id) {
		setExperienceArr(experienceArr.filter((exp) => exp.id !== id));
	}

	function handleForm() {
		setIsNewForm(!isNewForm);
	}

	function editExperience(editedExp) {
		setExperienceArr(
			experienceArr.map((exp) => {
				if (exp.id === editedExp.id) {
					exp = editedExp;
				}
				return exp;
			})
		);
	}

	function addNewExperience(newExp) {
		setExperienceArr(experienceArr.concat(newExp));
	}

	function handleExperienceButton() {
		if (isNewForm || props.isReadOnly) {
			return false;
		}
		return true;
	}

	return (
		<div className="cv-sections">
			<Typography variant="h3" className="heading">
				Work Experience
			</Typography>
			<Divider variant="middle" className="dividers" />
			<div className="cv-section">
				<div className="container">
					{experienceArr.map((exp) => (
						<RenderExperience
							organisation={exp.organisation}
							position={exp.position}
							description={exp.description}
							startDate={exp.startDate}
							endDate={exp.endDate}
							deleteExperience={deleteExperience}
							id={exp.id}
							key={exp.id}
							editExperience={editExperience}
							isReadOnly={props.isReadOnly}
						/>
					))}
				</div>
				{isNewForm && (
					<ExperienceForm
						addExperience={addNewExperience}
						closeForm={handleForm}
						isReadOnly={props.isReadOnly}
					/>
				)}
			</div>
			{handleExperienceButton() && (
				<Button
					color="primary"
					className="float-right add-btn"
					startIcon={<AddIcon />}
					onClick={handleForm}
				>
					Add Work Experience
				</Button>
			)}
		</div>
	);
}
