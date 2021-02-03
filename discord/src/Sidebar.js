import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<h3>Built by Richa</h3>
				<ExpandMoreIcon />
			</div>
		</div>
	);
}

export default Sidebar;