import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
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
				</div>
			</div>
		);
	}
}
