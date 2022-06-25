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
        locations: state.locations.map((location: Location) => {
          if (location.id === action.payload) {
            return {
              ...location,
              views: location.views ? location.views + 1 : 1,
            };
          } else return location;
        }),
      };
    default:
      return state;
  }
};

export default locationReducer;
