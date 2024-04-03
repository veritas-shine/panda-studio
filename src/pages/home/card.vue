<template>
  <Col span="8">
    <Card :title="info.sponsor">
      <template #extra>
        <Space>
          <Tag>{{ info.parameters }}</Tag>
          <Tag>{{ info.type }}</Tag>
          <Tag>{{ info.ram }}</Tag>
        </Space>
      </template>
      <Space direction="vertical">
        <div class="title">{{ info.title }}</div>
        <div class="description">{{ info.description }}</div>
        <Card>
          <Button type="primary">Download</Button>
        </Card>
      </Space>
    </Card>
  </Col>
</template>
<script setup lang="ts">
import { Col, Card, Space, Tag, Button } from 'ant-design-vue'
import { CardInfo } from './config'
const props = defineProps<{ info: CardInfo }>()
</script>
<style scoped lang="scss"></style>
