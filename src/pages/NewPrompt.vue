<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps<{ title: string; llm: string }>()

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="flex flex-col gap-5 h-screen p-10">
    <div>
      <button class="text-blue-500 cursor-pointer hover:underline" @click="goBack">
        <i class="bi bi-arrow-left pr-2"></i>Back
      </button>
      <p class="mt-4 text-5xl font-bold">{{ title }}</p>
      <p class="mt-2">using {{ llm }}</p>
    </div>
    <div class="flex h-[34px] text-[14px] text-white/60">
      <input
        class="input w-[100%] bg-white text-black px-3 py-5 rounded-l-lg border border-grey/10 focus:outline-none focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
        name="text"
        type="text"
        placeholder="Prompt"
        required
      />
      <button
        class="text-black px-[5%] cursor-pointer py-5 flex justify-center items-center rounded-r-lg border-y border-r border-r-grey/10 border-y-grey/10 hover:bg-gray-500/40 transition-all duration-150 easy-in-out"
      >
        Send
      </button>
    </div>

    <div class="border-1 border-black p-5 rounded-md h-[100%]">[ Output ]</div>
  </div>
</template>
