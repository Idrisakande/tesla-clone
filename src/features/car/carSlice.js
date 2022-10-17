import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["model s", "model 3", "model x", "model y"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
