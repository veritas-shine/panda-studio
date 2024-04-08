<template>
  <div class="search-item-container" @click="onClick" :style="containerStyle">
    <Flex vertical>
      <span class="title"><FolderOutlined :style="secondaryTextStyle" />{{ info.id }}</span>
      <span :style="secondaryTextStyle">{{ dayText(info.lastModified) }}</span>
    </Flex>
    <div>
      <Tag class="tag"><HeartOutlined :style="secondaryTextStyle" />{{ info.likes }}</Tag>
      <Tag class="tag"><DownloadOutlined :style="secondaryTextStyle" />{{ info.downloads }}</Tag>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CSSProperties, watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Flex, Tag, theme } from 'ant-design-vue'
import dayjs from 'dayjs'
import { SearchItemInfo, ISearchService } from '../../interfaces'
import { FolderOutlined, HeartOutlined, DownloadOutlined } from '@ant-design/icons-vue'

const props = defineProps<{ info: SearchItemInfo }>()
const { token } = theme.useToken()
const { t } = useI18n()
const searchService = ISearchService.resolve()

const secondaryTextStyle: CSSProperties = {
  color: token.value.colorTextSecondary
}

const containerStyle = ref<CSSProperties>({})

watch(
  () => searchService.selectedSearchItem?._id,
  (id) => {
    console.warn(8888888, id, props.info._id)
    containerStyle.value.backgroundColor =
      id === props.info._id ? token.value.colorPrimaryBg : undefined
  }
)

const dayText = (dayString: string) => {
  const lastModified = dayjs(dayString)
  const diff = dayjs().diff(lastModified, 'day')
  let suffix = ''

  if (diff < 30 && diff > 0) {
    suffix = t('common.date.day-ago', { n: diff })
  } else if (diff >= 30 && diff < 365) {
    suffix = t('common.date.month-ago', { n: Math.ceil(diff / 30) })
  } else if (diff >= 365) {
    suffix = t('common.date.year-ago', { n: Math.ceil(diff / 365) })
  }

  return `${lastModified.format('YYYY-MM-DD')} (${suffix})`
}

const onClick = () => {
  searchService.setCurrentModel(props.info)
}
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
