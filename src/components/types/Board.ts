export interface IBoardProps {
	nrows: number;
	ncols: number;
	chanceLightStartsOn: number;
}

export interface IBoardState {
	board: boolean[][];
	hasWon: boolean;
}
