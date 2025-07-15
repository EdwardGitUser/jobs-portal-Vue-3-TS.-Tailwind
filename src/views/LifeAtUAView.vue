<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Life at UA</h1>
    </template>

    <template #subtitle>
      <h2 class="my-4 w-full text-base font-light">
        Discover what makes UA Careers a great place to work
      </h2>
    </template>
  </header-container>

  <div class="mx-auto max-w-6xl px-8 py-12">
    <div class="space-y-12">
      <div class="text-center">
        <h3 class="text-2xl font-semibold text-brand-blue-1 mb-4">
          Our Culture
        </h3>
        <p class="text-gray-600 max-w-3xl mx-auto">
          At UA, we foster innovation and collaboration. Our diverse team works
          together to create amazing solutions while maintaining work-life
          balance.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-brand-gray-2 p-6 rounded-lg">
          <h4 class="text-lg font-semibold mb-3">Flexible Work</h4>
          <p class="text-gray-600">Remote-first culture with flexible hours</p>
        </div>

        <div class="bg-brand-gray-2 p-6 rounded-lg">
          <h4 class="text-lg font-semibold mb-3">Learning & Growth</h4>
          <p class="text-gray-600">
            Continuous learning opportunities and career development
          </p>
        </div>

        <div class="bg-brand-gray-2 p-6 rounded-lg">
          <h4 class="text-lg font-semibold mb-3">Benefits</h4>
          <p class="text-gray-600">
            Comprehensive health coverage and competitive packages
          </p>
        </div>

        <div class="bg-brand-gray-2 p-6 rounded-lg">
          <h4 class="text-lg font-semibold mb-3">Team Events</h4>
          <p class="text-gray-600">
            Regular team building and social activities
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
</script>
