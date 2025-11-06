import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchBlogsRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    fetchBlogsSuccess: (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    },
    fetchBlogsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBlogsRequest, fetchBlogsSuccess, fetchBlogsFailure } = blogSlice.actions;
export default blogSlice.reducer;
