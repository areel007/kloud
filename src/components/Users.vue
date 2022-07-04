<template>
    <div>
        <div class="container mx-auto border border-border-color">
            <div
                class="p-2 flex justify-between items-center border-b border-border-color"
            >
                <span class="text-16 font-medium text-heading"
                    >View All Users</span
                >
                <button
                    class="bg-blue-600 text-white p-2 text-14"
                    @click="$emit('open-new-user-modal')"
                >
                    Create New User
                </button>
            </div>
            <div class="p-2">
                <div
                    class="bg-gray-1 p-2 flex justify-between items-center mb-1"
                >
                    <div class="p-1 bg-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 text-gray-800 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <div class="flex gap-2 items-center">
                        <div class="text-12 text-body-text">
                            <span
                                ><span class="font-semibold text-heading"
                                    >1 - 50</span
                                >
                                of
                                <span class="font-semibold text-heading"
                                    >2000</span
                                >
                                Entries</span
                            >
                        </div>
                        <Pagination />
                        <SelectRow />
                    </div>
                </div>
                <div>
                    <div
                        class="grid grid-cols-5 bg-gray-1 p-12px text-14 text-heading text-left font-semibold items-center"
                    >
                        <span>S/N</span>
                        <span>Name</span>
                        <span>Email</span>
                        <span>Phone Number</span>
                        <span class="text-center">Actions</span>
                    </div>
                </div>
                <div
                    v-for="(user, index) in users"
                    :key="index"
                    class="p-18px bg-white border border-gray-1 grid grid-cols-5 text-left text-14 text-body-text items-center"
                >
                    <span>{{ user.id }}</span>
                    <div class="flex gap-2 items-center justify-start">
                        <div
                            class="bg-avatar-blue rounded-full w-28 h-28 flex items-center justify-center text-white font-semibold"
                        >
                            {{ user.name.split(' ')[0][0]
                            }}{{ user.name.split(' ')[1][0] }}
                        </div>
                        <span class="text-avatar-blue">{{ user.name }}</span>
                    </div>
                    <span>{{ user.email }}</span>
                    <span>{{ user.phone }}</span>
                    <div class="flex gap-1 justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 cursor-pointer text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            @click="$emit('open-edit-user-modal', user)"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 cursor-pointer text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            @click="$emit('open-delete-user-modal', user.id)"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                    </div>
                </div>
                <AppFooter />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import Pagination from './Pagination.vue'
import SelectRow from './selectRow.vue'
import AppFooter from './AppFooter.vue';

const store = useStore()
const users = computed(() => {
    return store.state.user.users
})
onMounted(() => {
    store.dispatch('getUsers')
    
})
</script>
