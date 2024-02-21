<template>
  <div
    :class="$style['card']">
    <div>
      <p
        :class="$style['card__day']">{{ day }}</p>
    </div>
    <hr />
    <p
      :class="$style['card__button']"
      @click="addEvent()">+</p>
    <CalendarCardEventItem
      v-for="(item, index) in events"
      :key="item.id"
      :id="item.id"
      :title="item.title"/>
  </div>
</template>

<script lang="ts" setup>

import { useModal } from '~/hooks/use-modal'
import { useEventsStore, type List } from '~/store/events'

const props = defineProps({
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: String,
    required: true
  },
  events: {
    type: Array<List>
  }
})

const modal = useModal()

function addEvent() {
  modal.openModalForEdit(props.day, props.month)
}


</script>

<style lang="scss" module>
.card {
  text-align: end;
  width: 150px;
  overflow-y: auto;
  height: 150px;
  border: solid 1px;
  margin: 2px;
  padding: 3px;
  background-color: black;

  &__day {
    color: white;
  }

  &__button {
    display: inline-block;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    padding: 2px;
    color: white;
    cursor: pointer;

    &:hover {
      color: gray
    }
  }
}
</style>