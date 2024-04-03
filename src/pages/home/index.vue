<template>
  <Flex class="home">
    <Header />
    <div class="content-container">
      <Flex class="search-container" :style="{ backgroundColor: token.colorBgElevated }">
        <div>Logo</div>
        <div class="search-input">
          <InputSearch
            placeholder="Search for models"
            enter-button
            allow-clear
            @search="onSearch"
          />
        </div>
        <div class="tip">
          Supports any <Tag class="first-tag" color="pink">Llama</Tag><Tag color="blue">Mistral</Tag
          ><Tag color="purple">Phi-2</Tag> <Tag color="orange">Falcon</Tag
          ><Tag color="green">StarCoder</Tag><Tag color="red">StableLM</Tag>
          <Tag color="cyan">GPT-NeoX</Tag> gguf <InfoCircleOutlined class="icon" /> model file
        </div>
      </Flex>
      <Row :gutter="24" class="recommendation">
        <WelcomeCard />
        <Card v-for="(item, index) in modelList" :key="index" :info="item" />
      </Row>
    </div>
  </Flex>
</template>
<script setup type="ts">
import { ref } from 'vue'
import Header from './header.vue'
import { InputSearch, Tag, Row, Flex, theme } from 'ant-design-vue'
import { InfoCircleOutlined } from '@ant-design/icons-vue'
import WelcomeCard from './welcome.vue'
import Card from './card.vue'
import { kRecommendationList } from './config'
import { useRouter } from 'vue-router'

const modelList = ref(kRecommendationList)
const { token } = theme.useToken()
const router = useRouter()
const onSearch = () => {
  router.push("/search")
}
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

  .recommendation {
    padding: 40px;
  }
}
</style>
