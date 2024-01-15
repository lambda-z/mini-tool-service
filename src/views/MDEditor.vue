<template>
<!--    <input v-model="content" />-->
    <d-editor-md
        v-model="content"
        :md-rules="mdRules"
        base-url="https://test-base-url"
        @content-change="valueChange">
    </d-editor-md>
</template>

<script setup lang="ts">
import { defineComponent, reactive, ref } from 'vue';

const content = ref('# This is the title');
const mdRules = reactive({
    linkify: {
        fuzzyLink: false,
    },
});

const valueChange = (val: any) => {
    console.log(val);
};


</script>
