<template>
    <NewUserModal
        :show-new-user-modal="showNewUserModal"
        @close-new-user-modal="closeNewUserModal"
        @create-user="createUser"
        @close-success="closeSuccess"
    />
    <EditUserModal :show-edit-user-modal="showEditUserModal" :user-edit-identity="userEditIdentity" @close-edit-user-modal="closeEditUserModal" />
    <DeleteUserModal :show-delete-user-modal="showDeleteUserModal" @close-delete-user-modal="closeDeleteUserModal" :user-identity="userIdentity" />
    <Logo />
    <AppHero />
    <Users @open-new-user-modal="openNewUserModal" @open-delete-user-modal="openDeleteUserModal($event)" @open-edit-user-modal="openEditUserModel($event)"/>
</template>

<script setup>
import Logo from '../components/Logo.vue'
import AppHero from '../components/AppHero.vue'
import Users from '../components/Users.vue'
import NewUserModal from '../components/NewUserModal.vue'
import NewUserSuccessVue from '../components/NewUserSuccess.vue'
import { ref } from 'vue'
import DeleteUserModal from '../components/DeleteUserModal.vue'
import EditUserModal from '../components/EditUserModal.vue'
import NewUserSuccess from '../components/NewUserSuccess.vue'

const showNewUserModal = ref(false)
const showSuccess = ref(false)
const showDeleteUserModal = ref(false)
const showEditUserModal = ref(false)
const userIdentity = ref(null)
const userEditIdentity = ref(null)

const closeNewUserModal = () => {
    showNewUserModal.value = false
}
const closeDeleteUserModal = () => {
    showDeleteUserModal.value = false
}
const closeEditUserModal = () => {
    showEditUserModal.value = false
}
const openNewUserModal = () => {
    showNewUserModal.value = true
}
const openDeleteUserModal = (e) => {
    showDeleteUserModal.value = true
    userIdentity.value = e
}
const closeSuccess = () => {
    showNewUserModal.value = false
}
const openEditUserModel = (e) => {
    showEditUserModal.value = true
    userEditIdentity.value = e
}

const createUser = () => {
    if (!firstname.value || !lastname.value || !email.value || !phone.value) {
        return
    } else {
        store.dispatch('createNewUser', {
            id: 1,
            name: firstname.value + ' ' + lastname.value,
            email: email.value,
            phone: phone.value,
        })
        firstname.value = ''
        lastname.value = ''
        email.value = ''
        phone.value = ''
    }
}
</script>
