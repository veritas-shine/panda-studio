<template>
  <Flex class="layout" vertical>
    <Flex>
      <Menu v-model:selectedKeys="selectedKeys" :items="items" class="menu-container"> </Menu>
    </Flex>
    <Flex>
      <component :is="componentMap[selectedKeys[0]]" />
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Flex, Menu, ItemType } from 'ant-design-vue'
import UISetting from './ui.vue'
import AboutSetting from './about.vue'
import { SettingType } from './config'

const selectedKeys = ref<string[]>([SettingType.UI])
const items = ref<ItemType[]>([
  {
    type: 'group',
    label: 'Settings',
    children: [
      {
        key: SettingType.UI,
        label: 'UI Settings'
      },
      {
        key: SettingType.About,
        label: 'About'
      }
    ]
  }
])

const componentMap: any = {
  [SettingType.UI]: UISetting,
  [SettingType.About]: AboutSetting
}
</script>
<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: row;
  flex: 1;
  .menu-container {
    width: 200px;
  }
}
</style>
