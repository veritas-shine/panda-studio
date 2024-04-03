<script setup lang="ts">
import { reactive, watch, ref, CSSProperties } from 'vue'
import { theme, ConfigProvider } from 'ant-design-vue'
import SideBar from './components/sidebar.vue'

// const { token } = theme.useToken()
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1']
})

watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal
  }
)

const style = ref<CSSProperties>({
  // backgroundColor: token.value.colorBgLayout,
  // color: token.value.colorText
})
</script>

<template>
  <ConfigProvider :theme="{ algorithm: theme.darkAlgorithm }">
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
