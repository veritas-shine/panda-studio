<template>
  <Col span="8">
    <Card :title="info.sponsor">
      <template #extra>
        <Space>
          <Tag>{{ info.parameters }}</Tag>
          <Tag>{{ info.type }}</Tag>
          <Tag>{{ `${info.ram} RAM` }}</Tag>
        </Space>
      </template>
      <Space direction="vertical">
        <div class="title">{{ info.title }}</div>
        <TypographyParagraph
          class="description"
          :ellipsis="ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false"
          :content="info.description"
        />
        <Card>
          <template #title>
            <Tag>{{ info.fileSize }}</Tag>
            <Tag>{{ info.feature }}</Tag>
          </template>
          <template #extra>
            <Tag>{{ info.quant }}</Tag>
          </template>
          <Button class="download" type="primary">Download</Button>
        </Card>
      </Space>
    </Card>
  </Col>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Col, Card, Space, Tag, Button, TypographyParagraph } from 'ant-design-vue'
import { CardInfo } from './config'
const props = defineProps<{ info: CardInfo }>()
const ellipsis = ref(true)
</script>
<style scoped lang="scss">
.download {
  width: 100%;
}
</style>
