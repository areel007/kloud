<template>
    <div class="w-full h-screen fixed top-0 left-0 z-30" v-if="showDeleteUserModal">
        <div
            class="w-full h-full absolute top-0 left-0 bg-black opacity-70"
        ></div>
        <div
            class="absolute w-11/12 lg:w-300 p-27px bg-white left-50% top-50% -translate-y-2/4 -translate-x-2/4 z-20"
            v-if="!showSuccess"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 cursor-pointer fixed right-2 top-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                @click="$emit('close-delete-user-modal')"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            <div>
                <p class="text-center mb-5 text-14 text-input-text leading-5">
                    Are you sure you want to Disable User
                </p>
                <div class="flex gap-5 justify-center">
                    <button
                        class="bg-primary py-8px px-16px text-16 text-white rounded"
                        @click="deleteUser(userIdentity)"
                    >
                        Yes
                    </button>
                    <button
                        class="py-8px px-16px text-16 text-body-text rounded"
                        @click="$emit('close-delete-user-modal')"
                    >
                        No, Cancel
                    </button>
                </div>
            </div>
        </div>
        <div
            class="w-400 h-300 p-5 fixed bg-white top-50% left-50% -translate-x-2/4 -translate-y-2/4 z-40 flex flex-col gap-3 justify-center items-center"
            v-if="showSuccess"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 absolute top-4 right-4 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                @click="closeSuccess"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            <img src="../assets/success.svg" alt="kloud" />
            <span class="text-20 text-input-text font-semibold"
                >Successful</span
            >
            <span class="text-16 text-body-text"
                >You have successfully deleted this user</span
            >
        </div>
    </div>
</template>

<script>
export default {
    props: ['showDeleteUserModal', 'userIdentity'],
    data() {
        return {
            showSuccess: false,
        }
    },
    methods: {
        deleteUser(e) {
            this.$store.dispatch('deleteUser', e)
            this.showSuccess = true
        },
        closeSuccess() {
            this.showSuccess = false
        }
    },
}
// import { ref } from '@vue/reactivity';
// import { useStore } from 'vuex';

// const store = useStore()

// const props = defineProps({
//     showDeleteUserModal: Boolean,
//     userIdentity: Number
// })

// const deleteUser = () => {
//     alert(userIdentity.value)
// }
</script>
