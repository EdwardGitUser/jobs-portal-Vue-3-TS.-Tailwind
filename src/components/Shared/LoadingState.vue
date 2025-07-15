<template>
  <div v-if="isLoading || error" class="p-4 rounded-lg">
    <div v-if="isLoading" class="flex items-center space-x-2 text-blue-600">
      <div
        class="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"
      ></div>
      <span>{{ loadingMessage || "Loading..." }}</span>
    </div>

    <div
      v-if="error"
      class="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md"
    >
      <font-awesome-icon :icon="['fas', 'exclamation-triangle']" />
      <span>{{ error }}</span>
      <button
        v-if="onRetry"
        @click="onRetry"
        class="ml-auto px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
      >
        Retry
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  isLoading?: boolean;
  error?: string | null;
  loadingMessage?: string;
  onRetry?: () => void;
}

defineProps<Props>();
</script>
