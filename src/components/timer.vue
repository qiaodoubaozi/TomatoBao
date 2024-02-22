<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <el-row>
      <el-col :span="8"></el-col>
      <el-col :span="8">
        <el-button type="primary" @click="reset">
          Reset
        </el-button>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-col :span="8"></el-col>
      <el-col :span="2">
        <el-text>番茄时长：</el-text>
      </el-col>
      <el-col :span="2">
        <el-input v-model="tomatoTime" size="small"></el-input>
      </el-col>
      <el-col :span="2">
        <el-text>休息时长：</el-text>
      </el-col>
      <el-col :span="2">
        <el-input v-model="breakTime" size="small"></el-input>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>

    <el-row style="margin-top: 10px;">
      <el-col :span="8"></el-col>
      <el-col :span="8">
        <el-progress
          :percentage="percentage"
          :text-inside="true"
          :stroke-width="20"
          status="exception"
          striped
          striped-flow
          :duration="duration"
        >
          <span>{{ progressContent }}</span>
        </el-progress>
        <el-button class="countdown-footer" type="primary" @click="reset">
          Reset
        </el-button>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const value1 = ref(0)
const percentage = ref(40)
const duration = ref(10)
const progressContent = ref(`剩余${duration.value}秒`)
const tomatoTime = ref(25)
const breakTime = ref(5)

function reset() {
  value1.value = Date.now() + 5000
}
</script>

<style scoped>
.el-col {
  text-align: center;
}

.countdown-footer {
  margin-top: 8px;
}
</style>
