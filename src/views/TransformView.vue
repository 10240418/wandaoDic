<!-- 父组件 -->
<template>
    <div class="  flex  justify-center items-center w-[800px] h-[40px] mt-[40px] ml-[100px]">
        <h1  class="text-xl ">贡献-进制转化</h1>
        <h2 class="ml-[300px] text-xs">类型</h2>
        <select class="h-[22px] w-[90px] border text-xs ml-[20px]">
            <option v-for="category in categories" :key=category.id>{{category.category}}</option>
        </select>
        <button @click="IsAddTypeShow" class="border ml-[10px] w-[50px] h-[22px] text-xs ">新增</button>

    </div>
    <div v-show="AddTypeShow" class="flex justify-center items-center w-full h-full mt-[30px]">
        <AddType  @ChangeshowDialog="IsAddTypeShow"></AddType>

    </div>



</template>

<script setup>
import AddType from '../components/transform/AddType.vue';
import { getBase_conversion } from "../api/index.js";
import {ref, onMounted, onBeforeMount} from "vue";


const AddTypeShow = ref(false);
const dialogResult = ref(null);
const categories = ref([]);

// 显示弹出框
const IsAddTypeShow = () => {
    AddTypeShow.value = !AddTypeShow.value;
};



onBeforeMount(async () => {
    try {
        const result = await getBase_conversion()
       for(let i=0;i<result.data.length;i++) {
           categories.value.push(result.data[i])
       }


    } catch (error) {
        console.error('Error fetching categories:', error);
    }
});
</script>
