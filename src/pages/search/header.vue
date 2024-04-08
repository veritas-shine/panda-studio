<template>
  <Flex justify="space-between" class="header-container">
    <Flex>Logo</Flex>
    <Flex>
      <InputSearch class="search-input" allow-clear />
    </Flex>
    <Flex>
      <Tag>{{ ram }}</Tag>
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Flex, InputSearch, Tag } from 'ant-design-vue'
import { IConfigService } from '../../interfaces'

const { t } = useI18n()

const ram = ref('')
const configService = IConfigService.resolve()

watch(
  () => configService.estimatedRAM,
  (value) => {
    ram.value = t('search.header.estimated-ram', { n: configService.estimatedRAM })
  }
)

onMounted(() => {
  console.warn(999999, configService.estimatedRAM)
})
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
