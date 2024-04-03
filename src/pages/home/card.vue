<template>
  <Col span="8">
    <Card>
      <div class="header"></div>
      <div class="title">{{ info.title }}</div>
      <div class="description">{{ info.description }}</div>
      <div class="action"></div>
    </Card>
  </Col>
</template>
<script setup lang="ts">
import { Col, Card } from 'ant-design-vue'
import { CardInfo } from './config'
const props = defineProps<{ info: CardInfo }>()
</script>
<style scoped lang="scss"></style>
