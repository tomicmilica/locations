import axios, { AxiosResponse } from "axios";
import Location from "../Location";

const baseUrl = "https://6033c4d8843b15001793194e.mockapi.io/api/locations";

interface LocationApiType {
  getLocations(): Promise<AxiosResponse<Location[]>>;
}

export const LocationApi: LocationApiType = {
  getLocations(): Promise<AxiosResponse<Location[]>> {
    return axios.get(`${baseUrl}`);
  },
};
