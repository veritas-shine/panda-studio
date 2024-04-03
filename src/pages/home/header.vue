<template>
  <div class="header">
    <Button size="small" @click="checkForUpdates">Check for updates...</Button>
    <div>
      <Button class="link-button" size="small" type="link" href="https://pandacat.ai"
        >PandaCat AI</Button
      >
      <Divider type="vertical" />
      <Button class="link-button" size="small" type="link" href="https://pandacat.ai"
        >GitHub</Button
      >
      <Divider type="vertical" />
      <Button class="link-button" size="small" type="link" href="https://pandacat.ai"
        >Terms of use</Button
      >
    </div>
  </div>
  <Divider :style="{ margin: '0' }" />
</template>
<script setup type="ts">
import { Button, Divider } from 'ant-design-vue'
const checkForUpdates = () => {}
</script>
<style scoped lang="scss">
.header {
  display: flex;
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  .link-button {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
