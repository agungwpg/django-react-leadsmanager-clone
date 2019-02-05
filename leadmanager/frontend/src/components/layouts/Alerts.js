import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Alerts extends Component {
	static propTypes = {
		error: PropTypes.object.isRequired,
		message: PropTypes.object.isRequired
	};
	componentDidUpdate(prevProps) {
		const { error, alert, message } = this.props;
		if (error !== prevProps.error) {
			if (Object.keys(error.msg).includes("name")) {
				let nameErrors = error.msg.name;
				nameErrors.forEach(element => {
					alert.error("Name: " + element);
				});
			}
			if (Object.keys(error.msg).includes("email")) {
				let emailErrors = error.msg.email;
				emailErrors.forEach(element => {
					alert.error("Email: " + element);
				});
			}
			if (Object.keys(error.msg).includes("message")) {
				let messageErrors = error.msg.message;
				messageErrors.forEach(element => {
					alert.error("Message: " + element);
				});
			}
		}
		if (message !== prevProps.message) {
			alert.success(message.msg);
		}
	}
	render() {
		return <Fragment />;
	}
}

const mapStateToProps = state => ({
	error: state.errors,
	message: state.messages
});

export default connect(mapStateToProps)(withAlert(Alerts));
