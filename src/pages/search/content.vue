<template>
  <Flex justify="space-between" class="filter-container">
    <Space
      >Found <Tag>{{ total }}</Tag> results on <span>{{ provider }}</span></Space
    >
  </Flex>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Flex, Tag, Space, Select, theme } from 'ant-design-vue'

type Props = {
  total: number
}

const props = defineProps<Props>()
const { token } = theme.useToken()

const sortOption = ref<string>('')

const provider = ref('')
</script>
<style scoped lang="scss">
.filter-container {
  margin-bottom: 12px;
}
.select {
  width: 180px;
  ::deep(.ant-select-item-option-content) {
    font-size: 12px !important;
  }
}
</style>
