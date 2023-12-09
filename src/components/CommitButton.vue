<template>
        <button @click="isEmailCommitShow.changeIsEmailCommitShow()"
                class="w-[188px] h-[32px] text-center border focus:bg-slate-200 hover:bg-slate-100">
            提交
        </button>
</template>

<script setup>
import {ref} from "vue";
import {useIsEmailCommitShowStore} from "../store/EmailCommit/index.js";
const isEmailCommitShow = useIsEmailCommitShowStore();
</script>

<style scoped>
</style>