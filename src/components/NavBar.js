import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import logo from '../logo.png';
import '../styles/navbar.css';
import '../styles/main.css'
function NavBar() {
  return (
		<AppBar color="default">
			<ToolBar className="d-flex justify-around">
				<div className="d-flex">
					<img src={logo} alt="logo" className="main-logo" />
					<Typography variant="h6">CV Maker</Typography>
				</div>
				<Button
					color="primary"
					variant="contained"
					startIcon={<VisibilityIcon />}
				>
					Preview
				</Button>
			</ToolBar>
		</AppBar>
	);
}
export default NavBar