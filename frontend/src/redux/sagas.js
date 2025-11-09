import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchBlogsRequest, fetchBlogsSuccess, fetchBlogsFailure } from "./blogSlice";

function* fetchBlogsSaga(action) {
  try {
    yield delay(500);
    const response = yield call(fetch, "/blogs.json");

    const data = yield response.json();
    const keyword = action.payload.toLowerCase();
    const filtered = data.filter(
      (blog) =>
        blog.title.toLowerCase().includes(keyword) ||
        blog.content.toLowerCase().includes(keyword)
    );
    yield put(fetchBlogsSuccess(filtered));
  } catch (error) {
    yield put(fetchBlogsFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchBlogsRequest.type, fetchBlogsSaga);
}
