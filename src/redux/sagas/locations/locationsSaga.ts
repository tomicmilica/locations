import { call, put, StrictEffect, takeEvery } from "redux-saga/effects";
import { LocationApi } from "../../../api/locationsApi";
import Location from "../../../types/location";
import {
  GET_LOCATIONS_FAILED,
  GET_LOCATIONS_REQUESTED,
  GET_LOCATIONS_SUCCESS,
  LOCATIONS_INCREASE_VIEWS,
} from "../../types/types";

function* fetchLocations(action: any): Generator<StrictEffect, void, any> {
  try {
    const response = yield call(LocationApi.getLocations);
    const locations = response.data;

    yield put({ type: GET_LOCATIONS_SUCCESS, payload: locations });
  } catch (e) {
    yield put({ type: GET_LOCATIONS_FAILED, message: e });
  }
}

function* locationsSaga() {
  yield takeEvery(GET_LOCATIONS_REQUESTED, fetchLocations);
}

export default locationsSaga;
