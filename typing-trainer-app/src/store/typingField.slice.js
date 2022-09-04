import { createSlice } from "@reduxjs/toolkit";

const textValue = "Type me to find out how many words per minute you can type";

let typingText = [];

for (let word of textValue) {
  typingText.push(word);
}

const initialState = {
  textValue: typingText,
};

export const typingFieldReducer = createSlice({
  name: "typingField",
  initialState,
  reducers: {
    restart: (state) => {
      state.textValue = typingText;
    },
    changeTextField: (state, { payload }) => {
      state.textValue = state.textValue.filter((el, i) => i !== payload);
    },
  },
});

export const { restart, changeTextField } = typingFieldReducer.actions;

export default typingFieldReducer.reducer;
