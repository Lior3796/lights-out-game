import React, { Component } from "react";
import Board from "./components/board/Board";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Board chanceLightStartsOn={0.26} nrows={4} ncols={6} />
			</div>
		);
	}
}

export default App;
