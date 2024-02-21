<template>
  <div>
    <div class="container">
      <div class="item-container">
        <el-row>
          <el-col :span="4" />
          <el-col :span="16" class="timer-container">
            <el-card></el-card>
          </el-col>
        </el-row>
      </div>
      <div class="title-container">
        <img src="@/assets/tomato_logo.png" alt="logo" style="height: 20vh" />
        <h1 style="color: #ef4015; font-size: 2vh">===番茄包===</h1>
      </div>
    </div>
    <div class="footer">
      <div class="content-container"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue"
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  background-color: #fff;
  .item-container {
    z-index: 1;
    height: 80vh;
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
