import { createSlice } from "@reduxjs/toolkit";



  const themeReducer = createSlice(
    {
        name: "theme",
        initialState: {
            darkMode: false
        },
        reducers: {
            toggleTheme: (state) => {
                state.darkMode = !state.darkMode;
            }
        }
    }
  )


  export const { toggleTheme } = themeReducer.actions;
  export default themeReducer.reducer;