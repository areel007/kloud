<template>
    <footer class="flex items-center justify-end gap-2 py-40px">
        <div class="text-12 text-body-text">
            <span
                ><span class="font-semibold text-heading">1 - 50</span> of
                <span class="font-semibold text-heading">2000</span>
                Entries</span
            >
        </div>
        <Pagination />
        <SelectRow />
    </footer>
</template>

<script setup>
import Pagination from './Pagination.vue';
import SelectRow from './selectRow.vue';
</script>
