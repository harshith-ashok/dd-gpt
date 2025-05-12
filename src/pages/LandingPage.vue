<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const login = () => {
  router.push('/login')
}
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center gap-10">
    <div class="font-bold text-8xl text-center">
      Browser-Based Sandbox for <br />
      Building GPT Versions
    </div>
    <button
      @click="login"
      class="px-6 py-3 font-semibold rounded-[64px] cursor-pointer hover:text-white transition-all hover:bg-black w-64 border-1 border-black"
    >
      Login
    </button>
  </div>
</template>
