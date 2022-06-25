import { combineReducers } from "redux";
import locationReducer, { LocationState } from "./locations/locationReducer";

export interface GlobalState {
  locations: LocationState;
}

const reducer = combineReducers({
  locations: locationReducer,
});

export default reducer;
