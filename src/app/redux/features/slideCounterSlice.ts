import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SlideCounterState {
  slideNo: number;
  totalSlide: number;
}

const initialState: SlideCounterState = {
  slideNo: 0,
  totalSlide: 0,
};

const slideCounterSlice = createSlice({
  name: "slidecounter",
  initialState,
  reducers: {
    prevSlide: (state) => {
      state.slideNo =
        state.slideNo === 0 ? state.totalSlide - 1 : state.slideNo - 1;
    },
    nextSlide: (state) => {
      state.slideNo = (state.slideNo + 1) % state.totalSlide;
    },
    jumpToSlide: (state, action: PayloadAction<number>) => {
      state.slideNo = action.payload;
    },
    setTotalSlide: (state, action: PayloadAction<number>) => {
      state.totalSlide = action.payload;
    },
  },
});

export const { prevSlide, nextSlide, jumpToSlide, setTotalSlide } =
  slideCounterSlice.actions;
export default slideCounterSlice.reducer;
