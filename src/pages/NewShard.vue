<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="flex p-10 flex-col justify-start gap-10">
    <div>
      <button class="text-blue-500 cursor-pointer hover:underline" @click="goBack">
        <i class="bi bi-arrow-left pr-2"></i>Back
      </button>
    </div>
    <div>
      <div>
        <div class="text-5xl font-bold">Role</div>
        <div class="pt-5 w-[75%]">
          The Role highlights important parts of your workflow that the AI should pay special
          attention to. Use it to mark key user inputs, decisions, or moments you want the AI to
          remember, act on, or respond to differently. When adding a flag, give it a short,
          meaningful name to help guide the AI's behavior more effectively.
        </div>
        <div class="mt-4">
          <input
            type="text"
            placeholder="Enter role description"
            class="w-[75%] px-4 py-3 border border-black rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
