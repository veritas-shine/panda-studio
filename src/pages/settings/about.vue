<template>
  <Flex vertical>
    <PageHeader title="About Settings" />
    <Flex class="item-container">
      <List>
        <ListItem>
          <Skeleton :title="false" :loading="false" active>
            <ListItemMeta>
              <template #title>
                <a href="https://www.antdv.com/" target="_blank">Feedback</a>
              </template>
              <template #avatar>
                <QuestionCircleOutlined />
              </template>
            </ListItemMeta>
          </Skeleton>
        </ListItem>
        <ListItem>
          <Skeleton :title="false" :loading="false" active>
            <ListItemMeta>
              <template #title>
                <a href="https://www.antdv.com/" target="_blank">Changelog</a>
              </template>
              <template #avatar>
                <HistoryOutlined />
              </template>
            </ListItemMeta>
          </Skeleton>
        </ListItem>
        <ListItem>
          <Skeleton :title="false" :loading="false" active>
            <ListItemMeta>
              <template #title>
                <a href="https://www.antdv.com/" target="_blank">About</a>
              </template>
              <template #avatar>
                <HeartOutlined />
              </template>
            </ListItemMeta>
          </Skeleton>
        </ListItem>
      </List>
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
import { QuestionCircleOutlined, HistoryOutlined, HeartOutlined } from '@ant-design/icons-vue'
import { Flex, PageHeader, Card, List, ListItem, Skeleton, ListItemMeta } from 'ant-design-vue'
</script>
<style scoped lang="scss">
.item-container {
  width: 50vw;
  margin-left: 60px;
  .ant-list {
    width: 100%;
  }
}
</style>
