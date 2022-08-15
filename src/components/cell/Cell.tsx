import React, { Component } from "react";
import "./cell.css";

interface IProps {
	flipCellsAroundMe: Function;
	isLit: boolean;
}

class Cell extends Component<IProps> {
	constructor(props: IProps) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(): void {
		this.props.flipCellsAroundMe();
	}

	render() {
		let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");

		return <td className={classes} onClick={this.handleClick} />;
	}
}

export default Cell;
