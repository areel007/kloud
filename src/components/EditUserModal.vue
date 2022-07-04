<template>
    <div
        class="w-full h-screen fixed top-0 left-0 z-30"
        v-if="showEditUserModal"
    >
        <div
            class="w-full h-full absolute top-0 left-0 bg-black opacity-70"
        ></div>
        <div
            class="absolute w-11/12 lg:w-6/12 bg-white left-50% top-50% -translate-y-2/4 -translate-x-2/4 z-30"
            v-if="!showSuccess"
        >
            <div class="flex justify-between items-center px-9 py-18px mb-10">
                <span class="text-16 text-heading"
                    >Edit User - {{ userEditIdentity.name }}</span
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    @click="$emit('close-edit-user-modal')"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center w-full lg:w-10/12 mx-auto mb-10"
            >
                <div>
                    <label class="text-12 uppercase block text-heading mb-1"
                        >First Name *</label
                    >
                    <input
                        type="text"
                        placeholder="Enter first name"
                        class="w-full border border-gray-400 p-2 text-14 rounded placeholder:text-14 placeholder:text-body-text text-input-text"
                        v-model="userEditIdentity.name.split(' ')[0]"
                    />
                </div>
                <div>
                    <label class="text-12 uppercase block text-heading mb-1"
                        >Last Name *</label
                    >
                    <input
                        type="text"
                        placeholder="Enter last name"
                        class="w-full border border-border-color p-2 text-14 rounded placeholder:text-14 placeholder:text-body-text text-input-text"
                        v-model="userEditIdentity.name.split(' ')[1]"
                    />
                </div>
                <div>
                    <label class="text-12 uppercase block text-heading mb-1"
                        >Email *</label
                    >
                    <input
                        type="email"
                        placeholder="Enter email"
                        class="w-full border border-gray-400 p-2 text-14 rounded placeholder:text-14 placeholder:text-body-text text-input-text"
                        v-model="userEditIdentity.email"
                    />
                </div>
                <div>
                    <label class="text-12 uppercase block text-heading mb-1"
                        >Phone Number *</label
                    >
                    <input
                        type="text"
                        placeholder="Enter phone number"
                        class="w-full border border-gray-400 p-2 text-14 rounded placeholder:text-14 placeholder:text-body-text text-input-text"
                        v-model="userEditIdentity.phone"
                    />
                </div>
            </div>
            <div class="w-full lg:w-10/12 mx-auto flex justify-end mb-4 gap-4">
                <button
                    class="text-14 bg-white text-red-600 border border-red-600 py-2 px-6 opacity-100"
                    @click="DeleteUser"
                >
                    Delete User
                </button>
                <button
                    class="text-14 bg-blue-600 text-white py-2 px-6 opacity-100"
                    :class="{
                        '!opacity-50':
                            !userEditIdentity.name.split(' ')[0] ||
                            !userEditIdentity.name.split(' ')[1] ||
                            !userEditIdentity.email ||
                            !userEditIdentity.phone,
                    }"
                    @click="updateUser(userEditIdentity)"
                >
                    Create User
                </button>
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
                >You have successfully created a new user</span
            >
            <button
                class="text-14 text-avatar-blue bg-success-btn w-auto px-10 py-2"
                @click="closeSuccess"
            >
                View Details
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['showEditUserModal', 'userEditIdentity'],

    methods: {
        updateUser(e) {
            alert('Sorry! I ran out of time')
        },
    },
}
</script>

//
<script setup>
// import { ref, computed } from '@vue/reactivity'
// import { useStore } from 'vuex'

// const props = defineProps({
//     showEditUserModal: Boolean,
//     userEditIdentity: Number,
// })
// const names = userEditIdentity.split(' ')
// const firstname = ref(names[0])
// const lastname = ref(names[1])
// const email = ref(userEditIdentity.email)
// const phone = ref(userEditIdentity.phone)

// const showSuccess = ref(false)

// const store = useStore()

// const users = computed(() => {
//     return store.state.user.users
// })

// const closeSuccess = () => {
//     showSuccess.value = false
// }

// const createUser = () => {
//     if (!firstname.value || !lastname.value || !email.value || !phone.value) {
//         return
//     } else {
//         store.dispatch('createNewUser', {
//             id: 1,
//             name: firstname.value + ' ' + lastname.value,
//             email: email.value,
//             phone: phone.value,
//         })
//         firstname.value = ''
//         lastname.value = ''
//         email.value = ''
//         phone.value = ''
//         showSuccess.value = true
//     }
// }
//
</script>
