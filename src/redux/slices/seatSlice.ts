import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RowConfigs } from "@/types/seat";

interface SeatState {
  rows: number;
  rowsConfigs: RowConfigs;
  totalSeats: number;
  isDirty: boolean;
}
const initialState: SeatState = {
  rows: 5,
  totalSeats: 50,
  rowsConfigs: {
    A: {
      seats: 10,
      aisles: [],
    },
    B: {
      seats: 10,
      aisles: [],
    },

    C: {
      seats: 10,
      aisles: [],
    },
    D: {
      seats: 10,
      aisles: [],
    },
    E: {
      seats: 10,
      aisles: [],
    },
  },
  isDirty: false,
};

const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    setRows: (state, action: PayloadAction<number>) => {
      state.rows = action.payload;
    },
    setTotalSeats: (state, action: PayloadAction<number>) => {
      state.totalSeats = action.payload;
    },
  },
});

export const { setRows, setTotalSeats } = seatSlice.actions;

export default seatSlice.reducer;
