<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        isActive: Boolean,
        checkedIconSrc: String,
    },
})
</script>

<template>
    <div class="relative flex items-center m-[0.3rem]" v-if="!isActive">
        <div class="w-4 h-4 rounded-full border-2 border-[#B17583] bg-transparent"></div>

    </div>
    <div class="relative flex items-center m-[0.3rem]" v-else>
        <div class="w-4 h-4 rounded-full border-2 border-[#B17583] bg-transparent"></div>
        <img class="absolute transform -translate-x-1/2 w-2 h-2 m-[0.5rem] fill-[#B17583]" src="/src/assets/radioButton.svg"
            alt="">
    </div>
</template>
