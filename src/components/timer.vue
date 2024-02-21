<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-row>
    <el-col :span="8">
      <el-countdown title="Start to grab" :value="value" />
    </el-col>
    <el-col :span="8">
      <el-countdown
        format="HH:mm:ss"
        :value="value1"
        :finish="(value:any) => console.log('test')"
        value-style="color: #f56c6c; font-size: 40px;"
      />
      <el-button class="countdown-footer" type="primary" @click="reset">
        Reset
      </el-button>
    </el-col>
    <el-col :span="8">
      <el-countdown format="DD [days] HH:mm:ss" :value="value2">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Still to go until next month
          </div>
        </template>
      </el-countdown>
      <div class="countdown-footer">{{ value2.format("YYYY-MM-DD") }}</div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import dayjs from "dayjs"

const value = ref(Date.now() + 1000 * 60 * 60 * 7)
const value1 = ref(0)
const value2 = ref(dayjs().add(1, "month").startOf("month"))

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
