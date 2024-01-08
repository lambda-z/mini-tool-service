<template>
  Home Page
  {{model}}

  <el-card>
    <el-button>按钮</el-button>
  </el-card>
</template>

<script setup lang="ts">

import {ref} from "vue";

const model = ref("111")

</script>

<style scoped>

</style>
