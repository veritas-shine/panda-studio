<template>
  <Col span="8" class="card">
    <Card title="Welcome to Panda Studio!">
      <template #extra>
        <a href="https://github.com/PandaCatStudio/PandaCatStudio/releases" target="_blank">
          Release Notes(v0.0.1)
        </a>
      </template>
      <Space direction="vertical" class="content">
        Panda Studio enables you develop and experiment with Large Language Models (LLMs) in your
        local computer environment, fully offline.
        <div class="tip">
          <InfoCircleOutlined class="icon" />
          Tip: Start with very small LLMs and move up to larger models depending on your hardware's
          capabilities.
        </div>
        <Space direction="vertical">
          <div class="item"><Button>Search</Button> Search and download compatible model files</div>
          <div class="item"><Button>Chat</Button> Chat with local LLMs fully offline</div>
          <div class="item">
            <Button>Local Server</Button> Run an OpenAI-like HTTP server on localhost
          </div>
          <div class="item"><Button>My Models</Button> Manage your downloaded models</div>
        </Space>
      </Space>
    </Card>
  </Col>
</template>
<script setup lang="ts">
import { Col, Button, Card, Space } from 'ant-design-vue'
import { InfoCircleOutlined } from '@ant-design/icons-vue'
</script>
<style scoped lang="scss">
.card {
  .content {
    padding: 0;

    .tip {
      font-size: 12px;
    }

    .item {
      display: flex;
      font-size: 14px;
      margin-bottom: 8px;
      align-items: center;

      button {
        width: 120px;
        margin-right: 8px;
      }
    }
  }
}
</style>
