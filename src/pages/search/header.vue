<template>
  <Flex justify="space-between" class="header-container">
    <Flex>Logo</Flex>
    <Flex>
      <InputSearch
        class="search-input"
        allow-clear
        @search="onSearch"
        :placeholder="t('search.header.placeholder')"
      />
    </Flex>
    <Flex>
      <Tag>{{ ram }}</Tag>
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { Flex, InputSearch, Tag } from 'ant-design-vue'
import { IConfigService, ISearchService } from '../../interfaces'

const { t } = useI18n()

const ram = ref('')
const configService = IConfigService.resolve()
const searchService = ISearchService.resolve()

watch(
  () => configService.estimatedRAM,
  () => {
    ram.value = t('search.header.estimated-ram', { n: configService.estimatedRAM })
  }
)

const onSearch = async (keyword: string) => {
  await searchService.searchModel(keyword)
}
</script>
<style scoped lang="scss">
.header-container {
  height: 60px;
  padding: 12px;
  align-items: center;
  border-bottom: 1px solid rgb(66, 66, 66);
  .search-input {
    width: 40vw;
  }
}
</style>
