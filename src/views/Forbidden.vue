<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-red-600 mb-4">Forbidden Access</h2>
        <p class="text-gray-600 mb-4">Sorry, you are not authorized to access this page.</p>
        <div class="flex justify-end">
          <button @click="goBack" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
            Go Back
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import router from "../router";
  export default {
    methods: {
      goBack() {
        router.push('/home')
      }
    }
  };
  </script>
  