<template>
    <div
        class="w-100 flex gap-2 items-center justify-center p-8px bg-white h-30"
    >
        <span class="w-full text-12 font-semibold text-heading">Rows:</span>
        <div class="flex items-center">
          <input type="text" v-model="count" class="w-full outline-none text-12 text-body-text">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-body-text"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                @click="incrementCount"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(50)

const incrementCount = () => {
  count.value = parseInt(count.value) + 1
}
</script>
