<template>
  <div
    :class="$style['container']">
    <div
      @click="onOpenClick"
      :class="$style['container__text']">
      {{ title }}
    </div>
    <p
      @click="onDeleteClick"
      :class="$style['container__delete-icon']">✖</p>
  </div>
</template>

<script lang="ts" setup>
import { useModal } from '~/hooks/use-modal'
import { useEventsStore } from '~/store/events'

const props = defineProps({
  title: {
    type: String,
    default: 'Заголовок'
  },
  id: {
    type: String,
    required: true
  }
})

const modal = useModal()
const store = useEventsStore()


function onDeleteClick() {
  store.deleteEventById(props.id)
}

function onOpenClick () {
  modal.openModalForView(props.id)
}

</script>

<style lang="scss" module>

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__text {
    cursor: pointer;
    text-align: center;
    color: white;
    width: 100%;
    margin: 2px;
    padding: 2px;
    background-color: rgb(71, 71, 253);
    border-radius: 2px;
    &:hover {
      background-color: rgb(133, 133, 255);
    }
  }

  &__delete-icon {
    color: white;
    cursor: pointer;
    margin-left: 4px;

    &:hover {
      color: rgb(233, 79, 79)
    }
  }
}
</style>