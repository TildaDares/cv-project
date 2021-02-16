import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import ExperienceForm from "./ExperienceForm";
import DeleteIcon from "@material-ui/icons/Delete";
export default function RenderExperience(props) {
	const [isEditable, setIsEditable] = useState(false);

	function handleForm() {
		setIsEditable(!isEditable);
	}

	function displayExp() {
		if (isEditable && !props.isReadOnly) {
			return (
				<div>
					<IconButton
						aria-label="delete"
						color="secondary"
						className="float-right pb-0"
						onClick={() => props.deleteExperience(props.id)}
					>
						<DeleteIcon />
					</IconButton>
					<ExperienceForm
						addExperience={props.editExperience}
						id={props.id}
						organisation={props.organisation}
						position={props.position}
						description={props.description}
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
						{props.position}
					</Typography>
					<Typography className="heading subtitle2 info-text">
						{props.organisation}
					</Typography>
					<Typography className="body-1">
						{props.startDate} - {props.endDate}
					</Typography>
					<Typography className="info-text body-1">
						{props.description}
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

	return displayExp();
}
