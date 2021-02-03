import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			experienceArr: [],
		};
	}
	render() {
		return (
			<Button
				color="primary"
				className="float-right add-btn"
				startIcon={<AddIcon />}
			>
				Add Education
			</Button>
		);
	}
}
