<template>

  <el-table :data="tableData" style="width: 100%">

      <el-table-column v-for="item in columns" :label="item.label" width="180">
          <template #default="scope">
              <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </div>
          </template>
      </el-table-column>

  </el-table>

</template>

<script setup lang="ts">
import {ref} from "vue";

const columns = ref([
    {
        label: "ID",
    },
    {
        label: "name",
    },
    {
        label: "height",
    },
])

</script>

<style scoped>

</style>
