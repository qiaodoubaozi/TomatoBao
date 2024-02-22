<template>
  <div>
    <div class="container">
      <div class="item-container">
        <el-row>
          <el-col :span="4" :xs="0" />
          <el-col :span="16" class="timer-container" :xs="24">
            <el-card>
              <timer />
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="title-container">
        <img src="@/assets/tomato_logo.png" alt="logo" style="height: 20vh" />
        <h1 style="color: #ef4015; font-size: 2vh">===番茄包===</h1>
      </div>
    </div>

    <div class="common-layout" style="height:40vh">
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import timer from "@/components/timer.vue"
// import { ref } from "vue"
</script>

<style scoped lang="scss">
.container {
  position: relative;
  top: 20vh;
  height: 100vh;
  background-color: #fff;
  .item-container {
    z-index: 1;
    height: 60vh;
    background-color: #fff;
    position: sticky;
    top: 0;
  }
  .title-container {
    height: 20vh;
    position: relative;
    background-color: #ffe57f;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.footer {
  height: 1000px;
  background-color: #ff0000;
}
</style>
