<script setup lang="ts">
import { reactive, watch } from 'vue'
import { theme, ConfigProvider } from 'ant-design-vue'
import SideBar from './components/sidebar.vue'

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
</script>

<template>
  <ConfigProvider :theme="{ algorithm: theme.darkAlgorithm }">
    <div class="container">
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
