import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layouts/Header";
import Dashboard from "./leads/Dashboard";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
	timeout: 3000,
	position: "top center"
};

import { Provider } from "react-redux";
import store from "../store";
import Alerts from "./layouts/Alerts";
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Fragment>
					<Header />
					<AlertProvider template={AlertTemplate} {...alertOptions}>
						<Alerts />
					</AlertProvider>
					<div className="container">
						<Dashboard />
					</div>
				</Fragment>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
