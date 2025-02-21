import {
  DailyPerformances,
  EnrollFormFields,
  Performance,
} from "./../../types/enrollment";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JSONContent } from "@tiptap/react";
import { format } from "date-fns";

export interface EnrollState {
  type: string;
  title: string;
  category: string;
  bookingStartDate: string;
  location: string;
  poster: File | null;
  performances: DailyPerformances;
  content: JSONContent;
}

const initialState: EnrollState = {
  type: "irregular",
  title: "",
  category: "",
  bookingStartDate: "",
  location: "",
  poster: null,
  performances: {},
  content: {},
};

const enrollSlice = createSlice({
  name: "enroll",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setBookingStartDate: (state, action: PayloadAction<string>) => {
      state.bookingStartDate = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setPoster: (state, action: PayloadAction<File | null>) => {
      state.poster = action.payload;
    },
    setContent: (state, action: PayloadAction<JSONContent>) => {
      state.content = action.payload;
    },
    updateStringFormField: <T extends keyof EnrollFormFields>(
      state: EnrollState,
      action: PayloadAction<{ field: T; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },

    addPerformance: (
      state,
      action: PayloadAction<{
        date: string;
        time: string;
        casting: string[];
      }>
    ) => {
      const { date, time, casting } = action.payload;
      const formattedDate = format(new Date(date), "yyyy-MM-dd");

      if (!state.performances[formattedDate]) {
        state.performances[formattedDate] = [];
      }

      state.performances[formattedDate].push({
        time,
        casting,
      });
    },

    updatePerformance: (
      state,
      action: PayloadAction<{
        date: string;
        index: number;
        performance: Performance;
      }>
    ) => {
      const { date, index, performance } = action.payload;
      const formattedDate = format(new Date(date), "yyyy-MM-dd");

      if (state.performances[formattedDate]) {
        state.performances[formattedDate][index] = performance;
      }
    },

    removePerformance: (
      state,
      action: PayloadAction<{
        date: string;
        index: number;
      }>
    ) => {
      const { date, index } = action.payload;
      const formattedDate = format(new Date(date), "yyyy-MM-dd");

      if (state.performances[formattedDate]) {
        state.performances[formattedDate] = state.performances[
          formattedDate
        ].filter((_, i) => i !== index);

        // 해당 날짜의 공연이 모두 삭제되면 객체에서 해당 날짜 키도 제거
        if (state.performances[formattedDate].length === 0) {
          delete state.performances[formattedDate];
        }
      }
    },
  },
});

export const {
  setType,
  setTitle,
  setCategory,
  setBookingStartDate,
  setLocation,
  setPoster,
  setContent,
  addPerformance,
  updatePerformance,
  removePerformance,
  updateStringFormField,
} = enrollSlice.actions;
export default enrollSlice.reducer;
