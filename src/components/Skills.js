import React from "react";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export default class Skills extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			skillsArr: [],
		};
	}

	handleFocusOnReadOnly() {
		return this.props.isReadOnly ? "" : "focus-input";
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
								<li>
									<InputBase
										className={`${this.handleFocusOnReadOnly()}`}
										value={skill.value}
										readOnly={this.props.isReadOnly}
										inputProps={{ "aria-label": "skill" }}
									/>
								</li>
							))}
						</ul>
					</div>
					{!this.props.isReadOnly && (
						<form>
							<TextField label="Skill" name="skill" type="text" required />
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
