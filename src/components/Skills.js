import React from "react";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import uniqid from "uniqid";
export default class Skills extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			skillsArr: [],
			skill: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleFocusOnReadOnly() {
		return this.props.isReadOnly ? "" : "focus-input";
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.skill) {
			this.setState({
				skillsArr: this.state.skillsArr.concat({
					value: this.state.skill,
					id: uniqid(),
				}),
			});
		}
	}

	handleChange(event) {
		this.setState({
			skill: event.target.value,
		});
	}

	render() {
		return (
			<div className="cv-sections">
				<Typography variant="h3" className="heading">
					Skills
				</Typography>
				<Divider variant="middle" className="dividers" />
				<div className="cv-section">
					<div className="container">
						<ul>
							{this.state.skillsArr.map((skill) => (
								<li key={skill.id}>
									<div className="d-flex">
										<InputBase
											className={`${this.handleFocusOnReadOnly()}`}
											value={skill.value}
											readOnly={this.props.isReadOnly}
											inputProps={{ "aria-label": "skill" }}
										/>
										<IconButton
											aria-label="delete"
											color="secondary"
											className=""
											onClick={this.handleDelete}
										>
											<DeleteIcon />
										</IconButton>
									</div>
								</li>
							))}
						</ul>
					</div>
					{!this.props.isReadOnly && (
						<form onSubmit={this.handleSubmit}>
							<TextField
								label="Skill"
								name="skill"
								type="text"
								onChange={this.handleChange}
								value={this.state.skill}
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
}