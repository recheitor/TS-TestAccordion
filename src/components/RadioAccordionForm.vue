<script lang="ts">
import { defineComponent } from 'vue'
import RadioAccordion from './RadioAccordion.vue'

interface Option {
    id: string
    title: string
    subtitle: string
    customSubOptions: string[]
}

export default defineComponent({
    components: {
        RadioAccordion,
    },
    data() {
        const options: Option[] = [
            {
                id: '1',
                title: `I'm looking to sell a property I own`,
                subtitle: `Awesome, we can get your listing published right now.`,
                customSubOptions: ['Create a listing now', 'Explore active listings in your area'],
            },
            {
                id: '2',
                title: `I'm looking for a good deal to buy`,
                subtitle: `Great! We're so glad you're here. Start browsing and happy hunting.`,
                customSubOptions: ['Create a listing now', 'Explore active listings in your area'],
            },
            {
                id: '3',
                title: `I'm just exploring`,
                subtitle: `No problem, we'd love to help you learn about Aloha My Home.`,
                customSubOptions: ['Create a listing now', 'Explore active listings in your area'],
            },
        ]

        return {
            options,
            modelValue: undefined,
        }
    },
})
</script>

<template>
    <div class="radio-accordion-form">
        <div class="text-start">
            <p class="text-[#767676]">What are you looking to do?</p>
        </div>
        <div>
            <RadioAccordion v-for="option in options" :key="option.id" v-model="modelValue" :option="option" />
        </div>
    </div>
</template>

