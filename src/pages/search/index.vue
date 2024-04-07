<template>
  <Flex class="layout" vertical
    >Search
    <Flex>Header</Flex>
    <Flex class="content-container">
      <Flex class="left" vertical>
        <Filter :total="resultList.length" />
        <Flex class="result-list" vertical gap="small">
          <SearchItem v-for="item in resultList" :key="item.id" :info="item" />
        </Flex>
      </Flex>
      <Flex>
        <Content />
      </Flex>
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { Flex } from 'ant-design-vue'
import { ISearchService } from '../../interfaces'
import resultList from './example.json'
import SearchItem from './search-item.vue'
import Filter from './filter.vue'
import Content from './content.vue'

onMounted(async () => {
  // const searchService = ISearchService.resolve()
  // await searchService.searchModel('GLM', '')
})
</script>
<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  .content-container {
    height: calc(100% - 60px);
    .left {
      padding: 12px 12px 0 12px;
    }
    .result-list {
      overflow-y: auto;
      height: calc(100% - 48px);
    }
  }
}
</style>
