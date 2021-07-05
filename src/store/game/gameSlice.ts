import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITableItem } from 'src/components/Table/TableItem';
import { DUMMY_LEADER_BOARD } from 'src/constants';

interface State {
  leaderBoard: ITableItem[];
  score: number;
  name: string;
}

const initialState: State = {
  score: 0,
  leaderBoard: DUMMY_LEADER_BOARD,
  name: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setScore(state, { payload }: PayloadAction<number>) {
      state.score = payload;
    },
    resetScore(state) {
      state.score = 0;
    },
    setName(state, { payload }: PayloadAction<string>) {
      state.name = payload;
    },
    resetName(state) {
      state.name = '';
    },
    updateLeaderBoard(state, { payload }: PayloadAction<ITableItem>) {
      state.leaderBoard = [...state.leaderBoard, payload];
    },
    clearLeaderBoard(state) {
      state.leaderBoard = [];
    },
    resetSlice(state) {
      state = initialState;
    },
  },
});

export const { setScore, resetScore, clearLeaderBoard, updateLeaderBoard, resetName, setName, resetSlice } =
  gameSlice.actions;

export default gameSlice.reducer;
