import { Component } from "react";
import { ICellProps } from "../types/Cell";
import "./cell.css";

class Cell extends Component<ICellProps> {
	constructor(props: ICellProps) {
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
