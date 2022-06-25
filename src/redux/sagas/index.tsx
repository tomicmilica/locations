import { all } from "redux-saga/effects";
import locationsSaga from "./locations/locationsSaga";

export default function* rootSaga() {
  yield all([locationsSaga()]);
}
