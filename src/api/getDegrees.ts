import axios from "axios";

import type { Degree } from "@/api/types";

const getDegrees = async (): Promise<Degree[]> => {
  try {
    const baseUrl = import.meta.env.VITE_APP_API_URL;

    if (!baseUrl) {
      console.warn("VITE_APP_API_URL environment variable is not set");
      return [];
    }

    const url = `${baseUrl}/degrees`;
    const response = await axios.get<Degree[]>(url);

    if (!response.data || !Array.isArray(response.data)) {
      console.warn("Invalid response format from degrees API");
      return [];
    }

    return response.data;
  } catch (error) {
    console.error("Failed to fetch degrees:", error);

    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          "API responded with error:",
          error.response.status,
          error.response.statusText,
        );
      } else if (error.request) {
        console.error("No response received from API. Is the backend running?");
      } else {
        console.error("Error setting up request:", error.message);
      }
    }

    return [];
  }
};

export default getDegrees;
