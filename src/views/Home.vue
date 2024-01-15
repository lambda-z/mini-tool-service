<template>

    <h2>
        字段设置
    </h2>

    <el-card style="display: flex; flex-direction: row;  margin-bottom: 15px; margin-top: 15px">

        <el-input v-model="count" style="width: 100px; margin-right: 10px;">
        </el-input>

        <el-input v-model="name" style="width: 100px; margin-right: 10px;">
        </el-input>

        <el-button type="primary" @click="generate">
            Generate
        </el-button>

        <el-button type="primary" @click="collect">
            Collect
        </el-button>

    </el-card>


    <el-card>
        <div style="display: flex; flex-direction: row">
            <div v-for="x in columns" style="margin-right: 180px; font-size: 14pt;">
                {{x.label}}
            </div>
        </div>

        <div style="display: flex; flex-direction: column">

            <div v-for="item in tableData" style="margin-right: 180px;">

                <!--one row-->
                <div style="display: flex; flex-direction: row; margin-bottom: 10px">
                    <div style="margin-right: 10px; width: 210px">
                        <el-input v-model="item.field">

                        </el-input>

                    </div>
                    <div style="margin-right: 10px; width: 210px">
                        <el-input v-model="item.type">

                        </el-input>
                    </div>
                    <div style="margin-right: 10px; width: 210px">
                        <el-input v-model="item.length">

                        </el-input>
                    </div>
                </div>

            </div>

        </div>
    </el-card>

    <el-card style="margin-top: 15px; height: 400px">
        <d-code-editor
            v-model="result"
            auto-height="true"
            :options="{ language: 'json' }"
            style="align-items: flex-start;"
            arco-theme="dark"
        >

        </d-code-editor>
    </el-card>



</template>

<script setup lang="ts">
import {ref} from "vue";


const count = ref(5);
const name = ref("");
const result = ref("");

const columns = ref([
    {
        label: "Field",
    },
    {
        label: "Type",
    },
    {
        label: "Length",
    },
])


class Column {
    field: string;
    type: string;
    length: number;
    constructor(field: string, type: string, length: number) {
        this.field = field;
        this.type = type;
        this.length = length;
    }
}

const tableData = ref([]);

const generate = () => {
    const data = [];
    for (let i = 0; i < count.value; i++) {
        data.push(new Column(ref(""), ref(""), ref(0)));
    }
    tableData.value = data;
}

// 收集表格中数据
const collect = () => {
    const data = [];
    for (let i = 0; i < count.value; i++) {
        data.push({
            field: tableData.value[i].field,
            type: tableData.value[i].type,
            length: tableData.value[i].length,
        });
    }
    console.log(data);
    // result.value = JSON.stringify(data);
    result.value = "";
    for (let i = 0; i < data.length; i++) {
        result.value += "INSERT INTO " + name.value + data[i].field + " " + data[i].type + "(" + data[i].length + ")" + ",\n";
    }
}


</script>

<style scoped>

</style>
