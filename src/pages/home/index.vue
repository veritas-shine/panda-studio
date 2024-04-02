<template>
  <div class="home">
    <Header />
    <div class="content-container">
      <div class="search-container">
        <div>Logo</div>
        <div class="search-input">
          <Input placeholder="Search for models" />
        </div>
        <div class="tip">
          Supports any <Tag class="first-tag" color="pink">Llama</Tag><Tag color="blue">Mistral</Tag
          ><Tag color="purple">Phi-2</Tag> <Tag color="orange">Falcon</Tag
          ><Tag color="green">StarCoder</Tag><Tag color="red">StableLM</Tag>
          <Tag color="cyan">GPT-NeoX</Tag> gguf <InfoCircleOutlined class="icon" /> model file
        </div>
      </div>
      <Row gutter="24">
        <WelcomeCard />
        <Card v-for="(item, index) in modelList" :key="index" :info="item" />
      </Row>
    </div>
  </div>
</template>
<script setup type="ts">
import { ref } from 'vue'
import Header from './header.vue'
import { Input, Tag, Row } from 'ant-design-vue'
import { InfoCircleOutlined } from '@ant-design/icons-vue'
import WelcomeCard from './welcome.vue'
import Card from './card.vue'
// import { kASCIILog } from './config'

const modelList = ref([])
</script>
<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  .content-container {
    width: 100%;
  }
  .search-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #ccc;
    padding-bottom: 40px;
  }

  .search-input {
    width: 50vw;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .first-tag {
    margin-left: 8px;
  }

  .tip {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .icon {
    margin-left: 4px;
    margin-right: 4px;
  }
}
</style>
