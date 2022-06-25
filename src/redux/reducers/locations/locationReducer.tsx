import Location from "../../../types/location";
import {
  GET_LOCATIONS_FAILED,
  GET_LOCATIONS_REQUESTED,
  GET_LOCATIONS_SUCCESS,
  LOCATIONS_INCREASE_VIEWS,
  LocationAction,
} from "../../types/types";

export interface LocationState {
  loading: boolean;
  error: any;
  locations: Location[];
}

const defaultState: LocationState = {
  loading: false,
  error: null,
  locations: [],
};

const locationReducer = (state = defaultState, action: LocationAction) => {
  switch (action.type) {
    case GET_LOCATIONS_REQUESTED:
      console.log("cao tu sam u reduceru");
      return {
        ...state,
        loading: true,
      };
    case GET_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: true,
        locations: action.payload,
      };
    case GET_LOCATIONS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOCATIONS_INCREASE_VIEWS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default locationReducer;
