<script setup lang="ts">
import { Flex, Space, theme } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import {
  DashboardOutlined,
  SearchOutlined,
  MessageOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'
import { CSSProperties } from 'vue'

const router = useRouter()
const { token } = theme.useToken()

const items = [
  {
    key: '1',
    icon: DashboardOutlined,
    label: 'Home',
    url: '/'
  },
  {
    key: '2',
    icon: SearchOutlined,
    label: 'Search',
    url: '/search'
  },
  {
    key: '3',
    icon: MessageOutlined,
    label: 'Chat',
    url: '/chat'
  },
  {
    key: '4',
    icon: SettingOutlined,
    label: 'Settings',
    url: '/settings'
  }
]

const containerStyle: CSSProperties = {
  // backgroundColor: token.value.colorPrimaryBg,
  color: token.value.colorText,
  borderRight: `1px solid ${token.value.colorBorder}`
}

type ItemType = (typeof items)[0]

const itemStyle = (item: ItemType): CSSProperties => ({
  backgroundColor:
    router.currentRoute.value.path === item.url ? token.value.colorPrimaryHover : undefined
})

const handleClick = (item: ItemType) => {
  router.push(item.url)
}
</script>

<template>
  <Flex justify="space-between" vertical align="center" class="sidebar" :style="containerStyle">
    <Flex vertical class="top">
      <Flex v-for="item in items" :key="item.key" :style="itemStyle(item)">
        <div class="item" @click="() => handleClick(item)">
          <div>
            <component :is="item.icon" />
          </div>
        </div>
      </Flex>
    </Flex>
    <Space class="bottom">0.0.1</Space>
  </Flex>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 50px;
  padding: 0px 0 8px 0;
  .item {
    display: flex;
    height: 64px;
    width: 48px;
    font-size: 20px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }
}
</style>
