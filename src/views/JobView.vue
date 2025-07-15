<template>
  <div class="bg-brand-gray-2 min-h-screen">
    <!-- Header with back button -->
    <div class="bg-white border-b border-brand-gray-1">
      <div class="max-w-4xl mx-auto px-8 py-6">
        <button
          @click="goBack"
          class="flex items-center text-brand-blue-1 hover:text-brand-blue-2 transition-colors duration-200 mb-4"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Jobs
        </button>
        <h1 v-if="job" class="text-3xl font-bold text-gray-900">
          {{ job.title }}
        </h1>
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="isLoading" class="max-w-4xl mx-auto px-8 py-12 text-center">
      <div class="text-lg text-gray-600">Loading job details...</div>
    </div>

    <!-- Job not found -->
    <div v-else-if="!job" class="max-w-4xl mx-auto px-8 py-12 text-center">
      <div class="text-lg text-gray-600 mb-4">Job not found</div>
      <button
        @click="goBack"
        class="px-6 py-3 bg-brand-blue-1 text-white rounded hover:shadow-blue transition-shadow duration-200"
      >
        Back to Jobs
      </button>
    </div>

    <!-- Job details -->
    <div v-else class="max-w-4xl mx-auto px-8 py-8">
      <div
        class="bg-white rounded-lg shadow-sm border border-brand-gray-2 overflow-hidden"
      >
        <!-- Job header info -->
        <div class="px-8 py-6 border-b border-brand-gray-2">
          <div class="flex flex-wrap items-center gap-6 text-gray-600">
            <div class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-brand-blue-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="font-medium">{{ job.organization }}</span>
            </div>
            <div class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-brand-blue-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>{{ job.locations.join(", ") }}</span>
            </div>
            <div class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-brand-blue-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>{{ job.jobType }}</span>
            </div>
            <div class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-brand-blue-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                />
              </svg>
              <span>{{ job.degree }}</span>
            </div>
          </div>
        </div>

        <!-- Job description -->
        <div class="px-8 py-6">
          <h2 class="text-xl font-semibold mb-4 text-gray-900">
            Job Description
          </h2>
          <div class="prose prose-gray max-w-none">
            <p
              v-for="(paragraph, index) in job.description"
              :key="index"
              class="mb-4 text-gray-700 leading-relaxed"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <!-- Qualifications -->
        <div class="px-8 py-6 bg-gray-50">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Minimum Qualifications -->
            <div>
              <h3 class="text-lg font-semibold mb-4 text-gray-900">
                Minimum Qualifications
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="qualification in job.minimumQualifications"
                  :key="qualification"
                  class="flex items-start"
                >
                  <svg
                    class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-gray-700">{{ qualification }}</span>
                </li>
              </ul>
            </div>

            <!-- Preferred Qualifications -->
            <div>
              <h3 class="text-lg font-semibold mb-4 text-gray-900">
                Preferred Qualifications
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="qualification in job.preferredQualifications"
                  :key="qualification"
                  class="flex items-start"
                >
                  <svg
                    class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-gray-700">{{ qualification }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Apply section -->
        <div class="px-8 py-6 border-t border-brand-gray-2 bg-white">
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div class="text-sm text-gray-600">
              Posted on {{ formatDate(job.dateAdded) }}
            </div>
            <div class="flex gap-3">
              <button
                @click="goBack"
                class="px-6 py-3 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
              >
                Back to Jobs
              </button>
              <button
                class="px-6 py-3 bg-brand-blue-1 text-white rounded hover:shadow-blue transition-shadow duration-200"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useJobsStore } from "@/stores/jobs";

const route = useRoute();
const router = useRouter();
const jobsStore = useJobsStore();

const currentJobId = computed(() => parseInt(route.params.id as string));
const job = computed(() => jobsStore.GET_JOB_BY_ID(currentJobId.value));
const isLoading = computed(() => jobsStore.isLoading);

const goBack = () => {
  router.push("/jobs/results");
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

onMounted(async () => {
  // Fetch jobs if not already loaded
  if (jobsStore.jobs.length === 0) {
    await jobsStore.FETCH_JOBS();
  }
});
</script>
