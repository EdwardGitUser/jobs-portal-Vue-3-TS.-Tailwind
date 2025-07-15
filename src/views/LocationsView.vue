<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Our Locations</h1>
    </template>

    <template #subtitle>
      <h2 class="my-4 w-full text-base font-light">
        Find UA Careers offices around the world
      </h2>
    </template>
  </header-container>

  <div class="mx-auto max-w-6xl px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-brand-blue-1 mb-3">New York</h3>
        <p class="text-gray-600 mb-2">123 Business Ave</p>
        <p class="text-gray-600 mb-2">New York, NY 10001</p>
        <p class="text-gray-500">Main headquarters</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-brand-blue-1 mb-3">
          San Francisco
        </h3>
        <p class="text-gray-600 mb-2">456 Tech Street</p>
        <p class="text-gray-600 mb-2">San Francisco, CA 94105</p>
        <p class="text-gray-500">West Coast hub</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-brand-blue-1 mb-3">London</h3>
        <p class="text-gray-600 mb-2">789 Innovation Road</p>
        <p class="text-gray-600 mb-2">London, UK EC1A 1BB</p>
        <p class="text-gray-500">European operations</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
</script>
