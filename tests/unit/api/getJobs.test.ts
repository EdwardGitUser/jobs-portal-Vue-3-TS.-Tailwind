import type { Mock } from "vitest";
import axios from "axios";

import getJobs from "@/api/getJobs";

vi.mock("axios");

const axiosGetMock = axios.get as Mock;

describe("getJobs", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "Java Engineer",
        },
      ],
    });
  });

  it("fetches jobs that candidates can apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  });

  it("extracts jobs from response", async () => {
    const jobs = await getJobs();
    expect(jobs).toEqual([{ id: 1, title: "Java Engineer" }]);
  });

  describe("error handling", () => {
    it("returns empty array when API request fails", async () => {
      axiosGetMock.mockRejectedValue(new Error("Network error"));

      const jobs = await getJobs();

      expect(jobs).toEqual([]);
    });

    it("returns empty array when response data is invalid", async () => {
      axiosGetMock.mockResolvedValue({ data: null });

      const jobs = await getJobs();

      expect(jobs).toEqual([]);
    });

    it("returns empty array when response data is not an array", async () => {
      axiosGetMock.mockResolvedValue({ data: "invalid data" });

      const jobs = await getJobs();

      expect(jobs).toEqual([]);
    });

    it("returns empty array when environment variable is not set", async () => {
      vi.stubGlobal("import.meta", {
        env: {
          VITE_APP_API_URL: undefined,
        },
      });

      const jobs = await getJobs();

      expect(jobs).toEqual([]);

      vi.unstubAllGlobals();
    });
  });
});
