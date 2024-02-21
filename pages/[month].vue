<template>
  <div>
    <CalendarComponent 
      :month="month"/>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute()
  const month = ref(route.params.month.toString())
</script>
