import { computed, ref } from "vue";
import { defineStore } from "pinia";

import getDegrees from "@/api/getDegrees";
import type { Degree } from "@/api/types";

export const useDegreesStore = defineStore("degrees", () => {
  const degrees = ref<Degree[]>([]);
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const lastFetchTime = ref<Date | null>(null);

  const FETCH_DEGREES = async (): Promise<void> => {
    if (isLoading.value) {
      return;
    }

    isLoading.value = true;
    error.value = null;

    try {
      const receivedDegrees = await getDegrees();
      degrees.value = receivedDegrees;
      lastFetchTime.value = new Date();

      if (receivedDegrees.length === 0) {
        console.warn("No degrees returned from API");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      error.value = `Failed to fetch degrees: ${errorMessage}`;
      console.error("Error in FETCH_DEGREES store action:", err);
    } finally {
      isLoading.value = false;
    }
  };

  const UNIQUE_DEGREES = computed(() =>
    degrees.value.map((degree) => degree.degree),
  );

  return {
    degrees,
    isLoading,
    error,
    lastFetchTime,
    FETCH_DEGREES,
    UNIQUE_DEGREES,
  };
});
