<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";

interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}

const spotlights = ref<Spotlight[]>([]);

const getSpotlights = async (): Promise<void> => {
  try {
    const baseUrl = import.meta.env.VITE_APP_API_URL;

    if (!baseUrl) {
      console.warn("VITE_APP_API_URL environment variable is not set");
      return;
    }

    const url = `${baseUrl}/spotlights`;
    const response = await axios.get<Spotlight[]>(url);

    if (!response.data || !Array.isArray(response.data)) {
      console.warn("Invalid response format from spotlights API");
      return;
    }

    spotlights.value = response.data;
  } catch (error) {
    console.error("Failed to fetch spotlights:", error);

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
  }
};

onMounted(getSpotlights);
</script>
