<template>
  <Flex justify="space-between" class="filter-container" vertical>
    <Space class="search-item-container">
      <Flex vertical>
        <span class="title">aisensiy/Qwen-72B-Chat-GGUF</span>
        <span>
          <Tag>GGUF</Tag>
          <Tag>Architecture Qwen</Tag>
        </span>
      </Flex>
      <div>
        <Tag>Open Model Card in Browser</Tag>
      </div>
    </Space>
    <Flex></Flex>
    <Flex></Flex>
    <Space> </Space>
  </Flex>
</template>
<script setup lang="ts">
// import { ref } from 'vue'
import { Flex, Space, Tag } from 'ant-design-vue'

// const sortOption = ref<string>('')

// const provider = ref('')
</script>
<style scoped lang="scss">
.filter-container {
  margin-bottom: 12px;
  width: 100%;
  flex: 1;
}

.select {
  width: 180px;

  ::deep(.ant-select-item-option-content) {
    font-size: 12px !important;
  }
}

.search-item-container {
  display: flex;
  justify-content: space-between;
}
</style>
