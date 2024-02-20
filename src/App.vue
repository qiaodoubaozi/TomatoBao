<template>
  <div>
    <div>
      <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">
          Danger
          <el-icon class="el-icon--right"></el-icon>
        </el-button>
      </el-row>
    </div>
    <div>
      <el-alert title="success alert" type="success" show-icon />
      <el-alert title="info alert" type="info" show-icon />
      <el-alert title="warning alert" type="warning" show-icon />
      <el-alert title="测试" type="error" show-icon />
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'

let hello = () => {
  console.log("Hello World")
}

hello()
</script>

<style scoped></style>
