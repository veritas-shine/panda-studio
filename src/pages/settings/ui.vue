<template>
  <Flex vertical>
    <PageHeader title="UI Settings" />
    <Flex class="item-container">
      <List>
        <ListItem>
          <Skeleton :title="false" :loading="false" active>
            <ListItemMeta description="Ant Design, a design language for background applications">
              <template #title>
                <a href="https://www.antdv.com/">Theme</a>
              </template>
            </ListItemMeta>
            <div>
              <Select
                :style="{ width: '120px' }"
                v-model:value="currentTheme"
                :options="themeOptions"
              />
            </div>
          </Skeleton>
        </ListItem>
        <ListItem>
          <Skeleton :title="false" :loading="false" active>
            <ListItemMeta>
              <template #title>
                <a href="https://www.antdv.com/">Language</a>
              </template>
            </ListItemMeta>
            <div>
              <Select
                :style="{ width: '120px' }"
                v-model:value="language"
                :options="languageOptions"
              />
            </div>
          </Skeleton>
        </ListItem>
      </List>
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { Flex, PageHeader, List, ListItem, ListItemMeta, Skeleton, Select } from 'ant-design-vue'
import { IConfigService } from '../../interfaces'
// theme settings
const currentTheme = ref('dark')
const themeOptions = [
  {
    label: 'Light',
    value: 'light'
  },
  {
    label: 'Dark',
    value: 'dark'
  },
  {
    label: 'Auto',
    value: 'auto'
  }
]

watch(
  () => currentTheme.value,
  (val) => {
    const configService = IConfigService.resolve()
    console.warn(99999111, val)
    configService.updateSettings({
      theme: val
    })
  }
)

// language settings
const { locale } = useI18n()
const language = ref(locale.value)
const languageOptions = [
  {
    value: 'zh',
    label: '中文'
  },
  {
    value: 'en',
    label: 'English'
  }
]

watch(
  () => language.value,
  (val) => {
    locale.value = val
  }
)
</script>
<style scoped lang="scss">
.item-container {
  width: 50vw;
  margin-left: 60px;
  .ant-list {
    width: 100%;
  }
}
</style>
