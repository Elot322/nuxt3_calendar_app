<template>
  <div
    :class="$style['modal']">
    <div
      :class="$style['modal__content']">
      <input
        v-model="title"
        :disabled="!isEdit"
        :class="$style['input__title']"
        type="text" 
        placeholder="Заголовок"/>
      <textarea
        v-model="description"
        :disabled="!isEdit"
        :class="$style['input__description']"
        placeholder="Описание..."/>
      <div
        :class="$style['button']">
        <button
          v-if="isEdit"
          @click="onSaveButtonClick"
          :class="$style['button__save']">Сохранить</button>
        <button
          @click="onCloseButtonClick"
          :class="$style['button__close']">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useModalStore } from '~/store/modal'
import { useEventsStore } from '~/store/events'

import { storeToRefs } from 'pinia'

const modalStore = useModalStore()
const eventStore = useEventsStore()

const { isEdit, getDay, getMonth, getId } = storeToRefs(modalStore)


const title = ref(eventStore.getEventById(getId.value)?.title ?? '')
const description = ref(eventStore.getEventById(getId.value)?.description ?? '')

function onSaveButtonClick() {
  eventStore.addEvent(getMonth.value, getDay.value, title.value, description.value)
  modalStore.closeModal()
}

function onCloseButtonClick() {
  modalStore.closeModal()
}

</script>

<style lang="scss" module>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    background-color: rgb(66, 66, 66);
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .input {
    &__title {
      border-radius: 5px;
      width: 200px;
      margin-bottom: 5px;
    }

    &__description {
      border-radius: 5px;
      width: 400px;
      height: 300px;
      margin-bottom: 5px;
    }
  }

  .button {

    &__close {
      background-color: rgb(148, 57, 57);
      border: none;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }

    &__save {
      background-color: rgb(71, 71, 253);
      border: none;
      color: white;
      border-radius: 4px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
</style>