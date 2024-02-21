<template>
  <div
    :class="$style['calendar']">
    <CalendarCard
      v-for="day in monthDays"
      :events="getEventsByMonthAndDay(month, day)"
      :day="day"
      :month="month"/>
  </div>
</template>

<script lang="ts" setup>
import { month as monthCollection } from '~/config/month';
import { useEventsStore } from '~/store/events';

const props = defineProps({
  month: {
    type: String,
    default: ''
  }
})

const eventStore = useEventsStore()

const { getEventsByMonthAndDay } = storeToRefs(eventStore)

const monthIndex = ref(monthCollection.findIndex(month => month === props.month))
const monthDays = computed(() => {
  return new Date(new Date().getFullYear(), monthIndex.value + 1, 0).getDate()
})

</script>

<style lang="scss" module>
.calendar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
}
</style>