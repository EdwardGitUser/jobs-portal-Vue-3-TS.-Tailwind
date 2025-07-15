<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">How We Hire</h1>
    </template>

    <template #subtitle>
      <h2 class="my-4 w-full text-base font-light">
        Our transparent and fair hiring process
      </h2>
    </template>
  </header-container>

  <div class="mx-auto max-w-4xl px-8 py-12">
    <div class="space-y-8">
      <div class="flex items-start space-x-4">
        <div
          class="bg-brand-blue-1 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold"
        >
          1
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Application Review</h3>
          <p class="text-gray-600">
            We carefully review your application and resume
          </p>
        </div>
      </div>

      <div class="flex items-start space-x-4">
        <div
          class="bg-brand-blue-1 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold"
        >
          2
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Phone Screening</h3>
          <p class="text-gray-600">
            Initial conversation to discuss your background and interests
          </p>
        </div>
      </div>

      <div class="flex items-start space-x-4">
        <div
          class="bg-brand-blue-1 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold"
        >
          3
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Technical Interview</h3>
          <p class="text-gray-600">
            Assess your technical skills relevant to the role
          </p>
        </div>
      </div>

      <div class="flex items-start space-x-4">
        <div
          class="bg-brand-blue-1 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold"
        >
          4
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Team Interview</h3>
          <p class="text-gray-600">
            Meet with team members and discuss collaboration
          </p>
        </div>
      </div>

      <div class="flex items-start space-x-4">
        <div
          class="bg-brand-green-1 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold"
        >
          5
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Offer & Onboarding</h3>
          <p class="text-gray-600">Welcome to UA! We'll help you get started</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
</script>
