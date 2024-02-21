<template>
  <div>
    <select
      :class="$style['select']"
      v-model="selected">
      <option 
        v-for="(item, index) in options"
        :key="index">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { month } from '~/config/month'

const router = useRouter()

const options = ref(month)
const selected = ref('')

watch(selected, () => {
  router.push(selected.value)
})

</script>

<style lang="scss" module>
.select {
  width: 25%;
  height: 30px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  border-radius: 5px;
}
</style>