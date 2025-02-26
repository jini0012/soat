import { ImageFile } from "@/types/file";
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
  postCode: string;
  address: string;
  detailAddress: string;
  poster: ImageFile | null;
  performances: DailyPerformances;
  content: JSONContent;
  files: ImageFile[];
  isDirty: boolean; //수정 상태를 관리하는 상태
}

const initialState: EnrollState = {
  type: "irregular",
  title: "",
  category: "",
  bookingStartDate: "",
  postCode: "",
  address: "",
  detailAddress: "",
  poster: null,
  performances: {},
  content: {},
  files: [],
  isDirty: false,
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
      state.isDirty = true;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.isDirty = true;
    },
    setBookingStartDate: (state, action: PayloadAction<string>) => {
      state.bookingStartDate = action.payload;
      state.isDirty = true;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
      state.isDirty = true;
    },
    setDetailAddress: (state, action: PayloadAction<string>) => {
      state.detailAddress = action.payload;
      state.isDirty = true;
    },
    setPostCode: (state, action: PayloadAction<string>) => {
      state.postCode = action.payload;
      state.isDirty = true;
    },
    setPoster: (state, action: PayloadAction<ImageFile>) => {
      state.poster = action.payload;
      state.isDirty = true;
    },
    setContent: (state, action: PayloadAction<JSONContent>) => {
      state.content = action.payload;
      state.isDirty = true;
    },
    updateStringFormField: <T extends keyof EnrollFormFields>(
      state: EnrollState,
      action: PayloadAction<{ field: T; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
      state.isDirty = true;
    },

    addPerformance: (
      state,
      action: PayloadAction<{
        dates: string[];
        time: string;
        casting: string[];
      }>
    ) => {
      const { dates, time, casting } = action.payload;
      dates.map((date) => {
        if (!state.performances[date]) {
          state.performances[date] = [];
        }
        state.performances[date].push({
          time,
          casting,
        });
      });
      state.isDirty = true;
    },

    editPerformance: (
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
      state.isDirty = true;
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
      state.isDirty = true;
    },
    addFile: (state, action: PayloadAction<ImageFile>) => {
      state.files.push(action.payload);
      state.isDirty = true;
    },
    deleteFile: (state, action: PayloadAction<number>) => {
      state.files = state.files.filter(
        (file) => file.fileKey !== action.payload
      );
      state.isDirty = true;
    },
    resetDirty: (state) => {
      state.isDirty = false;
    },
  },
});

export const {
  setType,
  setTitle,
  setCategory,
  setBookingStartDate,
  setAddress,
  setDetailAddress,
  setPostCode,
  setPoster,
  setContent,
  addPerformance,
  editPerformance,
  removePerformance,
  updateStringFormField,
  addFile,
  deleteFile,
  resetDirty,
} = enrollSlice.actions;
export default enrollSlice.reducer;
