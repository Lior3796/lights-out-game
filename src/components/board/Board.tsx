import { Component } from "react";
import Cell from "../cell/Cell";
import "./board.css";
import { IBoardProps } from "../types/Board";
import { IBoardState } from "../types/Board";

class Board extends Component<IBoardProps, IBoardState> {
	constructor(props: IBoardProps) {
		super(props);
		this.state = {
			board: this.createBoard(),
			hasWon: false,
		};
		this.createBoard = this.createBoard.bind(this);
	}

	createBoard() {
		let board = [];

		for (let row = 0; row < this.props.nrows; row++) {
			let row = [];
			for (let col = 0; col < this.props.ncols; col++) {
				row.push(this.props.chanceLightStartsOn > Math.random());
			}
			board.push(row);
		}

		return board;
	}

	flipCellsAround(coord: string) {
		let { ncols, nrows } = this.props;
		let board = this.state.board;
		let [y, x] = coord.split("-").map(Number);

		function flipCell(y: number, x: number) {
			if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
				board[y][x] = !board[y][x];
			}
		}
		flipCell(y, x);
		flipCell(y - 1, x);
		flipCell(y + 1, x);
		flipCell(y, x + 1);
		flipCell(y, x - 1);

		const hasWon = this.state.board.every((row) => row.every((col) => col));
		this.setState({ hasWon, board });
	}

	render() {
		return (
			<div>
				<div className="board-title">
					<div className="neon-red">Lights </div>
					<div className="neon-blue"> out </div>
				</div>
				<table className="Board">
					<tbody>
						{this.state.hasWon ? (
							<div className="winner">
								<span className="neon-red">You </span>
								<span className="neon-blue">won!! </span>
							</div>
						) : (
							this.state.board.map((item, row) => (
								<tr>
									{item.map((i, col) => (
										<Cell
											key={`${row}-${col}`}
											flipCellsAroundMe={() =>
												this.flipCellsAround(`${row}-${col}`)
											}
											isLit={i}
										/>
									))}
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Board;
