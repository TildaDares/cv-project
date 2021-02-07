import React from "react";
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

	render() {
		return (
			<div className="cv-sections">
				<Typography variant="h3" className="heading">
					Skills
				</Typography>
				<Divider variant="middle" className="dividers" />
				<div className="cv-section">
					<div className="container"></div>
					<form>
						<TextField
							label="Skill"
							name="skill"
							type="text"
							required
						/>
						<Button variant="contained" color="primary" type="submit">
							Submit
						</Button>
					</form>
				</div>
			</div>
		);
	}
}
