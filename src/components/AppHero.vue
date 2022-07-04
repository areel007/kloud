<template>
    <div class="w-full h-200 relative mb-2">
        <Carousel class="w-full h-full relative">
            <Slide v-for="(slide, index) in slideColors" :key="index">
                <div
                    v-show="currentSlide === index + 1"
                    :class="`w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center gap-5 ${slide.bg}`"
                >
                    <span class="text-18 md:text-48 font-semibold text-white text-center"
                        >KLOUD COMMERCE CHALLENGE</span
                    >
                    <span class="text-white text-18 md:text-25">{{ slide.details }}</span>
                    <div class="flex gap-2 items-center">
                        <div
                            v-for="(slideCount, index) in getSlideCount"
                            :key="index"
                            class="w-20 h-5 bg-gray-500"
                            :class="{'!bg-white': index + 1 === currentSlide}"
                        ></div>
                    </div>
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script setup>
import Carousel from '../components/Carousel.vue'
import Slide from '../components/Slide.vue'
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from 'vue'

const slideColors = reactive([
    {
        bg: 'bg-primary',
        details: 'Have fun',
    },
    {
        bg: 'bg-primary',
        details: 'Create',
    },
    {
        bg: 'bg-primary',
        details: 'Explore',
    },
])

const currentSlide = ref(1)
const getSlideCount = ref(null)

const nextSlide = () => {
    if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1
    } else currentSlide.value += 1
}

onMounted(() => {
    getSlideCount.value = document.querySelectorAll('.slide').length
    setInterval(() => nextSlide(), 5000)
})
</script>
