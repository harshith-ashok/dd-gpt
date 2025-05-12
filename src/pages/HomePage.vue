<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

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

const cards = [
  {
    title: 'EEE Helper',
    summary: 'LoremIpsum this is a lot of text but simply a summary of the prompt and the answers',
    subtext: 'GPT-4o',
  },
  {
    title: 'Card 2',
    summary: 'LoremIpsum this is a lot of text but simply a summary of the prompt and the answers',
    subtext: 'Ollama 3.2 (Local)',
  },
  {
    title: 'Card 3',
    summary: 'LoremIpsum this is a lot of text but simply a summary of the prompt and the answers',
    subtext: 'This is the third card.',
  },
  {
    title: 'Card 4',
    summary: 'LoremIpsum this is a lot of text but simply a summary of the prompt and the answers',
    subtext: 'This is the third card.',
  },
]

const showModal = ref(false)
const newTitle = ref('')
const selectedLLM = ref('')
const llmOptions = ['GPT-4o', 'Ollama 3.2', 'Claude 2']

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const goToNewPrompt = () => {
  if (newTitle.value && selectedLLM.value) {
    router.push({
      path: '/new-prompt',
      query: { title: newTitle.value, llm: selectedLLM.value },
    })
  } else {
    alert('Please fill in all fields.')
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
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow"
      >
        <h3 class="text-xl font-semibold">{{ card.title }}</h3>
        <p class="text-md mt-2 text-gray-600">{{ card.summary }}</p>
        <p class="text-gray-600 font-bold mt-2">{{ card.subtext }}</p>
      </div>
      <div
        class="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow flex justify-center items-center cursor-pointer"
        @click="openModal"
      >
        <h3 class="text-xl font-semibold text-center">Add New</h3>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-bold mb-4">Create New Prompt</h2>
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium">Title</label>
          <input
            id="title"
            v-model="newTitle"
            type="text"
            class="w-full px-3 py-2 border rounded mt-1"
            placeholder="Enter title"
          />
        </div>
        <div class="mb-4">
          <label for="llm" class="block text-sm font-medium">LLM</label>
          <select id="llm" v-model="selectedLLM" class="w-full px-3 py-2 border rounded mt-1">
            <option value="" disabled>Select LLM</option>
            <option v-for="llm in llmOptions" :key="llm" :value="llm">{{ llm }}</option>
          </select>
        </div>
        <div class="flex justify-end gap-4">
          <button @click="closeModal" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button
            @click="goToNewPrompt"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
