import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import EducationForm from "./EducationForm";
import DeleteIcon from "@material-ui/icons/Delete";
export default function RenderEducation(props) {
  const [isEditable, setIsEditable] = useState(false);
  
	function handleForm() {
		setIsEditable(!isEditable);
	}

	function displayEdu() {
		if (isEditable && !props.isReadOnly) {
			return (
				<div>
					<IconButton
						aria-label="delete"
						color="secondary"
            className="float-right pb-0"
            onClick={() => props.deleteEducation(props.id)}
					>
						<DeleteIcon />
					</IconButton>
					<EducationForm
						addEducation={props.editEducation}
						id={props.id}
						school={props.school}
						study={props.study}
						degree={props.degree}
						startDate={props.startDate}
						endDate={props.endDate}
						closeForm={handleForm}
						isReadOnly={props.isReadOnly}
					/>
				</div>
			);
		}
		return (
			<div className="d-flex">
				<div>
					<Typography className="subtitle1 info-text">
						{props.degree}: {props.study}
					</Typography>
					<Typography className="heading subtitle2 info-text">
						{props.school}
					</Typography>
					<Typography className="info-text body-1">
						{props.startDate} - {props.endDate}
					</Typography>
				</div>
				{!props.isReadOnly && (
					<IconButton
						aria-label="edit"
						className="icon-btn"
						onClick={handleForm}
						id={props.id}
					>
						<EditIcon />
					</IconButton>
				)}
			</div>
		);
	}

	return displayEdu();
}
