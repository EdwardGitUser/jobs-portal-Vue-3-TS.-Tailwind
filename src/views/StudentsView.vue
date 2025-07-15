<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Students & Graduates</h1>
    </template>

    <template #subtitle>
      <h2 class="my-4 w-full text-base font-light">
        Start your career journey with UA Careers
      </h2>
    </template>
  </header-container>

  <div class="mx-auto max-w-6xl px-8 py-12">
    <div class="space-y-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold text-brand-blue-1 mb-4">
            Internship Program
          </h3>
          <p class="text-gray-600 mb-4">
            Gain real-world experience with our comprehensive internship program
          </p>
          <ul class="text-gray-600 space-y-2">
            <li>• 10-12 week programs</li>
            <li>• Mentorship opportunities</li>
            <li>• Competitive compensation</li>
          </ul>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold text-brand-blue-1 mb-4">
            Graduate Program
          </h3>
          <p class="text-gray-600 mb-4">
            Fast-track your career with our structured graduate development
            program
          </p>
          <ul class="text-gray-600 space-y-2">
            <li>• 24-month rotational program</li>
            <li>• Leadership training</li>
            <li>• Clear career progression</li>
          </ul>
        </div>
      </div>

      <div class="text-center bg-brand-gray-2 p-8 rounded-lg">
        <h3 class="text-2xl font-semibold mb-4">Ready to Apply?</h3>
        <p class="text-gray-600 mb-6">
          Browse our current openings for students and recent graduates
        </p>
        <router-link
          :to="{ name: 'JobResults' }"
          class="inline-block bg-brand-blue-1 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Student Jobs
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
</script>
