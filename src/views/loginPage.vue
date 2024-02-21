<template>
    <div>
      <el-form
      label-position="top"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="username">
        <el-input v-model="formLabelAlign.username" />
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="formLabelAlign.password" />
      </el-form-item>
    </el-form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from "vue"
  const formLabelAlign = reactive({
      username: "",
      password: ""
  })
  </script>
  
  <style scoped>
  
  </style>