<template>
  <Flex class="layout" vertical>
    <Header />
    <Flex class="content-container">
      <Flex class="left" vertical>
        <Filter :total="resultList.length || 0" />
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
import { onMounted, ref } from 'vue'
import { Flex } from 'ant-design-vue'
import { ISearchService, SearchItemInfo } from '../../interfaces'
import resultList from './example.json'
import SearchItem from './search-item.vue'
import Filter from './filter.vue'
import Content from './content.vue'
import Header from './header.vue'

const searchResult = ref<SearchItemInfo[]>(resultList)
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
      border-right: 1px solid rgb(66, 66, 66);
    }
    .result-list {
      overflow-y: auto;
      height: calc(100% - 48px);
    }
  }
}
</style>
