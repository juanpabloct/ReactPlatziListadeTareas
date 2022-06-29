import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = [
  { tool: "Salir a Correr", finish: false },
  { tool: "desayunar", finish: true },
  { tool: "Sacar el perro", finish: true },
];
const value = JSON.parse(localStorage.getItem("tools"));
const toolSlider = createSlice({
  name: "Tools",
  initialState,
  reducers: {
    addTool: (state, action) => {
      state.push(action.payload.tool);
    },
    changeStateTool: (state, action) => {
      state[action.payload.index].finish = action.payload.finish;
    },
    deleteTool: (state, action) => {
      state.splice(action.payload.index, 1);
    },
  },
});
export const { addTool, changeStateTool, deleteTool, updateTool } =
  toolSlider.actions;
export default toolSlider.reducer;
