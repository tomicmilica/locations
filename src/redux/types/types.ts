import Location from "../../types/location";

export const GET_LOCATIONS_REQUESTED = "GET_LOCATIONS_REQUESTED";
export const GET_LOCATIONS_SUCCESS = "GET_LOCATIONS_SUCCESS";
export const GET_LOCATIONS_FAILED = "GET_LOCATIONS_FAILED";
export const LOCATIONS_INCREASE_VIEWS = "LOCATIONS_INCREASE_VIEWS";

export interface GetLocationsRequested {
  type: typeof GET_LOCATIONS_REQUESTED;
}

export interface GetLocationsFailed {
  type: typeof GET_LOCATIONS_FAILED;
  payload: any;
}

export interface GetLocationsSuccess {
  type: typeof GET_LOCATIONS_SUCCESS;
  payload: Location[];
}

export interface LocationsIncreaseViews {
  type: typeof LOCATIONS_INCREASE_VIEWS;
  payload: string;
}

export type LocationAction =
  | GetLocationsRequested
  | GetLocationsFailed
  | GetLocationsSuccess
  | LocationsIncreaseViews;
