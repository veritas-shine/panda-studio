<script setup lang="ts">
import { Flex, Space, theme } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import {
  HomeOutlined,
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
    icon: HomeOutlined,
    label: 'Option 1',
    url: '/'
  },
  {
    key: '2',
    icon: SearchOutlined,
    label: 'Option 2',
    url: '/search'
  },
  {
    key: '3',
    icon: MessageOutlined,
    label: 'Option 3',
    url: '/chat'
  },
  {
    key: '4',
    icon: SettingOutlined,
    label: 'Option 3',
    url: '/settings'
  }
]

const containerStyle: CSSProperties = {
  backgroundColor: token.value.colorPrimaryBg,
  color: token.value.colorText,
  borderRight: `1px solid ${token.value.colorBorder}`
}

const itemStyle: CSSProperties = {}

const handleClick = (event: any) => {
  console.warn(event)
  router.push(event.item.url)
}
</script>

<template>
  <Flex justify="space-between" vertical align="center" class="sidebar" :style="containerStyle">
    <Flex vertical class="top">
      <Flex
        v-for="item in items"
        :key="item.key"
        class="item"
        @click="handleClick"
        :style="itemStyle"
      >
        <component :is="item.icon" />
      </Flex>
    </Flex>
    <Space class="bottom">0.0.1</Space>
  </Flex>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 50px;
  .item {
    height: 64px;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
