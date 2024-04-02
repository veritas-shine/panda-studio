<template>
  <Col span="8">
    <div class="title">
      <span>Welcome to Panda Studio!</span>
      <a href="https://github.com/PandaCatStudio/PandaCatStudio/releases" target="_blank"
        >Release Notes(v0.0.1)</a
      >
    </div>
    <div>
      Panda Studio enables you develop and experiment with Large Language Models (LLMs) in your
      local computer environment, fully offline.
      <div class="tip">
        <InfoCircleOutlined class="icon" />
        Tip: Start with very small LLMs and move up to larger models depending on your hardware's
        capabilities.
      </div>
      <div class="actions">
        <div><Button>Search</Button> Search and download compatible model files</div>
        <div><Button>Chat</Button> Chat with local LLMs fully offline</div>
        <div><Button>Local Server</Button> Run an OpenAI-like HTTP server on localhost</div>
        <div><Button>My Models</Button> Manage your downloaded models</div>
      </div>
    </div>
  </Col>
</template>
<script setup lang="ts">
import { Col, Button } from 'ant-design-vue'
import { InfoCircleOutlined } from '@ant-design/icons-vue'
</script>
<style scoped lang="scss"></style>
