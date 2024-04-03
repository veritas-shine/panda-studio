<script setup lang="ts">
import { useRouter } from 'vue-router'
import { reactive, watch, h } from 'vue'
import {
  HomeOutlined,
  SearchOutlined,
  MessageOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'
import { theme, ConfigProvider } from 'ant-design-vue'

const router = useRouter()
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1']
})
const items = reactive([
  {
    key: '1',
    icon: () => h(HomeOutlined),
    label: 'Option 1',
    title: 'Option 1',
    url: '/'
  },
  {
    key: '2',
    icon: () => h(SearchOutlined),
    label: 'Option 2',
    title: 'Option 2',
    url: '/search'
  },
  {
    key: '3',
    icon: () => h(MessageOutlined),
    label: 'Option 3',
    title: 'Option 3',
    url: '/chat'
  },
  {
    key: '4',
    icon: () => h(SettingOutlined),
    label: 'Option 3',
    title: 'Option 3',
    url: '/settings'
  }
])

const handleClick = (event: any) => {
  console.warn(event.item)
  router.push(event.item.url)
}

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
      <div class="sidebar">
        <a-menu
          v-model:openKeys="state.openKeys"
          v-model:selectedKeys="state.selectedKeys"
          mode="inline"
          theme="dark"
          @click="handleClick"
          inline-collapsed
          :items="items"
        >
        </a-menu>
      </div>
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

.sidebar {
  display: flex;
}
</style>
