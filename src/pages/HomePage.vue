<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { models, shards } from '../data/constants'

const router = useRouter()
const username = ref('')

const logout = () => {
  localStorage.removeItem('auth')
  localStorage.removeItem('username') // Clear username from localStorage
  router.push('/login')
}

onMounted(() => {
  username.value = localStorage.getItem('username') || 'Guest' // Retrieve username from localStorage
})

const newShard = () => {
  router.push('/new-shard')
}

const goToPrompt = (id: number, model: string) => {
  const foundModel = models.find((m) => m.title === model)
  // const foundTitle = shards.find((m) => m.id === id)
  if (foundModel) {
    router.push({
      path: '/new-prompt',
      query: {
        id,
        modelID: foundModel.id,
      },
    })
  } else {
    console.error('Model not found')
  }
}
</script>

<template>
  <div class="h-screen flex flex-col p-10">
    <div class="text-2xl font-bold">Hello 👋, {{ username }}</div>
    <button
      @click="logout"
      class="mt-4 px-6 py-2 w-32 border-1 border-red-500 text-red-500 font-semibold rounded-[32px] cursor-pointer hover:bg-red-600 hover:text-white"
    >
      Logout
    </button>
    <div>
      <div class="text-2xl font-bold pt-10">Shards</div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-10">
        <button
          v-for="(shard, index) in shards"
          :key="index"
          @click="goToPrompt(shard.id, shard.model)"
          class="p-6 cursor-pointer border rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h3 class="text-xl font-semibold">{{ shard.title }}</h3>
          <p class="text-md mt-2 text-gray-600">{{ shard.context.role }}</p>
          <p class="text-sm mt-2 text-black font-bold">
            Input format: {{ shard.context.input_type }}
          </p>
          <p class="text-gray-600 font-medium mt-2">{{ shard.model }}</p>
        </button>
        <button
          class="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow flex justify-center items-center cursor-pointer"
          @click="newShard()"
        >
          <h3 class="text-xl font-semibold text-center">Add New</h3>
        </button>
      </div>
    </div>
    <div>
      <div class="text-2xl font-bold pt-10">Models</div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-10">
        <div
          v-for="(model, index) in models"
          :key="index"
          class="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h3 class="text-xl font-semibold">{{ model.title }}</h3>
          <p class="text-md mt-2 text-gray-600">{{ model.desc }}</p>
          <p class="text-md mt-2 text-gray-600">{{ model.isLocal ? 'Local' : 'Not Local' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
