import axios from "axios";
import { Lecture } from "./Modals/lecture";
const CODEYOGI_BASE_URL = "https://api.codeyogi.io/";

export const getLectures = async () => {
  const response = await axios.get<Lecture[]>(
    CODEYOGI_BASE_URL + "batches/1/sessions",
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const getAssignments = async () => {
  const response = await axios.get(
    CODEYOGI_BASE_URL + "batches/1/assignments",
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const getAssignmentsDetails = () => {
  return axios.get(` https://api.codeyogi.io/batches/1/assignments `, {
    withCredentials: true,
  });
};
