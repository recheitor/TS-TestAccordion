<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import CheckCircleButton from './CheckCircleButton.vue'

interface Option {
  id: string
  title: string
  subtitle: string
  customSubOptions: string[]
}

export default defineComponent({
  props: {
    modelValue: String,
    option: {
      type: Object as PropType<Option>,
      required: true,
    },
  },
  components: {
    CheckCircleButton,
  },
  setup(props, { emit }) {
    const isActive = computed(() => props.modelValue === props.option.id)

    const selectOption = () => {
      if (isActive.value) {
        emit('update:modelValue', undefined)
      } else {
        emit('update:modelValue', props.option.id)
      }
    }

    return {
      isActive,
      selectOption,
    }
  },
})
</script>
<template>
  <div class="rounded-md pt-4 pl-4 mt-6 pr-8 transition-all duration-500 shadow-md max-w-xl"
    :class="{ 'bg-[#fef8e5]': isActive, 'overflow-hidden': true }" @click="selectOption">
    <div>
      <label class="flex items-start">
        <div class="cursor-pointer my-1 mr-4">
          <CheckCircleButton :isActive="isActive" />
        </div>
        <div class="w-full text-left">
          <div class="cursor-pointer">
            <b>{{ option.title }}</b>
            <p class='m-0 text-[#505050]'>{{ option.subtitle }}</p>
          </div>
          <div class="transition-all duration-500 ease-in-out"
            :class="{ 'max-h-0': !isActive, 'max-h-[2000px]': isActive }">
            <div class="mt-5 mb-4 text-left">
              <hr />
              <div v-for="(subOption, index) in option.customSubOptions" :key="index" class="mt-3">
                <a href="#" class="group no-underline text-[#505050] hover:text-black">
                  <div class="mt-3 flex items-center justify-between">
                    <slot :name="`subOption${index + 1}`" :option="option">{{ subOption }}</slot>
                    <div
                      class="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#505050] group-hover:border-l-[#000000]">
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

