<template>
  <div
    :class="$style['layout-container']">
    <div
      :class="$style['layout-container__header']">
      <h1>Pick month</h1>
      <MonthPicker />
    </div>
    <slot/>
  </div>
  <EventItemModal
    v-if="isOpen"/>
</template>

<script lang="ts" setup>
import { useModalStore } from '~/store/modal'
import { storeToRefs } from 'pinia'

const modalStore = useModalStore()

const { isOpen } = storeToRefs(modalStore)

</script>

<style lang="scss" module>
.layout-container {
  &__header {
    position: sticky;
    top: 0px;
    padding: 10px;
    text-align: center;
    background: black;
    color: white;
    font-size: 30px;
  }
}
</style>