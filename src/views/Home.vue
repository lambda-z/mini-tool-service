<template>
    <div style="display: flex;
    flex-direction: column;
    align-items: center;
    background-color:darkslategrey;
    width: 200%;
    height: 100%">

    <div style="width: 80%">

    <el-card style="margin-top: 15px; height: 360px; width: 100%">
        <div style="height: 100%; background-color: whitesmoke">
<!--            <el-input v-model="result"-->
<!--                      type="textarea"-->
<!--                      rows="15"-->
<!--                      style="border-radius: 8px"-->
<!--            >-->
<!--            </el-input>-->
            <div v-html="result" style="height: 320px; text-align: left"></div>
        </div>
    </el-card>

    <el-card style="display: flex; flex-direction: row;  margin-bottom: 15px; margin-top: 15px">
        <el-input v-model="count" style="width: 100px; margin-right: 10px;">
        </el-input>
        <el-input v-model="tableName" style="width: 100px; margin-right: 10px;">
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
                        <el-select v-model="item.type" filterable>
                            <el-option
                                v-for="item in types"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                    </div>
                    <div style="margin-right: 10px; width: 210px">
                        <el-input v-model="item.length">
                        </el-input>
                    </div>
                </div>

            </div>
        </div>
    </el-card>

        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";


const count = ref(5);
const tableName = ref("");
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

const types = ref([
    {
        label: "int",
        value: "int",
    },
    {
        label: "varchar",
        value: "varchar",
    },
    {
        label: "datetime",
        value: "datetime",
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
    result.value = "CREATE TABLE " + "<span style='color: #646cff'>" + tableName.value + "</span>" + " (\n"

    for (let i = 0; i < data.length; i++) {
        result.value += "<p>" + data[i].field + " " + data[i].type +  "</p>";
    }

    result.value += ");"
}


</script>

<style scoped>

</style>
