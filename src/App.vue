<script setup>
import NavBar  from "./components/NavBar.vue";
import Test from "./views/test.vue";
import CommitButton from "./components/Transform/CommitButton.vue";
import EmailCommit from "./components/EmailCommit.vue";

</script>

<template>
<div>
    <div><NavBar></NavBar></div>
<!--    邮箱验证的页面-->
    <div><EmailCommit></EmailCommit></div>
</div>



<!--    <CommitButton></CommitButton>-->


</template>

<style scoped>

</style>
