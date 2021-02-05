import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";

function Message() {
	return (
		<div className="message">
			<Avatar />
			<div className="message__info">
				<h4>richaulivia <span className="message__timestamp">timestamp</span></h4>
				<p>The message</p>
			</div>
		</div>
	);
}

export default Message;