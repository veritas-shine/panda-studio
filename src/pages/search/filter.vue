<template>
  <Flex justify="space-between" class="filter-container">
    <Space
      >Found <Tag>{{ total }}</Tag> results on <span>{{ provider }}</span></Space
    >
    <Select class="select" size="small" v-model:value="sortOption" :options="kSortOptions" />
  </Flex>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Flex, Tag, Space, Select } from 'ant-design-vue'

type Props = {
  total: number
}

defineProps<Props>()

const kSortOptions = [
  { label: 'Sort: Most Likes', value: 'ml' },
  { label: 'Sort: Least Likes', value: 'll' },
  { label: 'Sort: Most Downloads', value: 'md' },
  { label: 'Sort: Least Downloads', value: 'ld' },
  { label: 'Sort: Most Recent', value: 'mr' },
  { label: 'Sort: Least Recent', value: 'lr' },
  { label: 'Sort: A -> Z', value: 'asc' },
  { label: 'Sort: Z -> A', value: 'desc' }
]

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
