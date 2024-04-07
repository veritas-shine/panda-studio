<template>
  <div class="search-item-container">
    <Flex vertical>
      <span class="title"><FolderOutlined :style="secondaryTextStyle" />{{ info.id }}</span>
      <span :style="secondaryTextStyle">{{ info.lastModified }}</span>
    </Flex>
    <div>
      <Tag class="tag"><HeartOutlined :style="secondaryTextStyle" />{{ info.likes }}</Tag>
      <Tag class="tag"><DownloadOutlined :style="secondaryTextStyle" />{{ info.downloads }}</Tag>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, CSSProperties } from 'vue'
import { Flex, Tag, Space, theme } from 'ant-design-vue'
import { SearchItemInfo } from './type'
import { FolderOutlined, HeartOutlined, DownloadOutlined } from '@ant-design/icons-vue'

const props = defineProps<{ info: SearchItemInfo }>()
const { token } = theme.useToken()

const secondaryTextStyle: CSSProperties = {
  color: token.value.colorTextSecondary
}

onMounted(() => {
  console.warn(props.info)
})
</script>
<style scoped lang="scss">
.search-item-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgb(66, 66, 66);
  padding: 8px;
  cursor: pointer;
  .title {
    font-size: 16px;
    .anticon {
      font-size: 16px;
      margin-right: 8px;
    }
  }
  &:hover {
    border-color: rgb(60, 137, 232);
  }
  .tag {
    .anticon {
      margin-right: 4px;
    }
  }
}
</style>
