import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import uniqid from "uniqid";
export default function Skills(props) {
	const [skillsArr, setSkillsArr] = useState([]);
	const [skill, setSkill] = useState("");

	function handleFocusOnReadOnly() {
		return props.isReadOnly ? "" : "focus-input";
	}

	function handleDelete(event) {
		const id = event.currentTarget.dataset.remove;
		setSkillsArr(skillsArr.filter((elem) => elem.id !== id));
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (skill) {
			setSkillsArr(
				skillsArr.concat({
					value: skill,
					id: uniqid(),
				})
			);
			setSkill("");
		}
	}

	function handleEdit(event) {
		const id = event.target.parentNode.id;
		setSkillsArr(
			skillsArr.map((elem) => {
				if (elem.id === id) {
					elem.value = event.target.value;
				}
				return elem;
			})
		);
	}

	return (
		<div className="cv-sections">
			<Typography variant="h3" className="heading">
				Skills
			</Typography>
			<Divider variant="middle" className="dividers" />
			<div className="cv-section">
				<div className="container">
					<ul>
						{skillsArr.map((elem) => (
							<li key={elem.id}>
								<div className="d-flex" id={elem.id}>
									<InputBase
										className={`${handleFocusOnReadOnly()} skill-font-size`}
										defaultValue={elem.value}
										readOnly={props.isReadOnly}
										inputProps={{ "aria-label": "skill" }}
										onBlur={handleEdit}
									/>
									{!props.isReadOnly && (
										<IconButton
											aria-label="delete"
											color="secondary"
											onClick={handleDelete}
											data-remove={elem.id}
										>
											<DeleteIcon />
										</IconButton>
									)}
								</div>
							</li>
						))}
					</ul>
				</div>
				{!props.isReadOnly && (
					<form onSubmit={handleSubmit}>
						<TextField
							label="Skill"
							name="skill"
							type="text"
							onChange={(event) => setSkill(event.target.value)}
							value={skill}
							required
						/>
						<Button variant="contained" color="primary" type="submit">
							Submit
						</Button>
					</form>
				)}
			</div>
		</div>
	);
}
