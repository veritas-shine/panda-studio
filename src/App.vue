<script setup lang="ts">
import { reactive, watch, ref, CSSProperties } from 'vue'
import { theme, ConfigProvider } from 'ant-design-vue'
import SideBar from './components/sidebar.vue'
import { IConfigService } from './interfaces'

const style = ref<CSSProperties>({
  // backgroundColor: token.value.colorBgLayout,
  // color: token.value.colorText
})
const configService = IConfigService.resolve()

const algorithm = ref(theme.darkAlgorithm)
const themeInfo = ref({
  algorithm: algorithm.value
})
watch(
  () => configService.settings.theme,
  (val) => {
    algorithm.value = theme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
    themeInfo.value.algorithm = algorithm.value
  },
  { deep: true }
)
</script>

<template>
  <ConfigProvider :theme="themeInfo">
    <div class="container" :style="style">
      <SideBar />
      <router-view></router-view>
    </div>
  </ConfigProvider>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
