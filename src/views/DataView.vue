<template>
    <div class="flex flex-col item-center  justify-center ">
        <!--       上面的一个栏目-->
        <div class="w-[1200px] h-full flex flex-col ">
            <div class=" flex justify-between items-center w-[920px] h-[40px] mt-[40px] ml-[200px] ">
                <h1  class="text-2xl text-[#333333] font-bold w-[156px] ">贡献-数据库</h1>
                <div class="flex flex-row justify-center items-center">
                    <h2 class="text-xs front-size:24px">数据库</h2>
                    <select class="h-[22px] w-[90px] border text-xs ml-[20px]">
                        <option v-for="category in categories" :key=category.id >{{category.category}}</option>
                    </select>
                    <button @click="IsAddDataShowChange" class="border ml-[10px] w-[50px] h-[22px] text-xs ">新数据库</button>
                </div>
            </div>
            <div v-show="!IsAddDataShow" class="flex justify-center items-center w-full h-full mt-[30px] absolute">
                <AddNewData @ChangeshowDialog="IsAddDataShowChange"></AddNewData>
            </div>
            <div>
                <Table></Table>
            </div>


            <div class="  mt-[16px] ml-[855px]">
                <button @click="isEmailCommitShow.changeIsEmailCommitShow()" class="w-[186px] h-[32px] text-center border focus:bg-slate-200 hover:bg-slate-100">
                    提交
                </button>
            </div>
        </div>



    </div>
</template>

<script setup>
import ManyTransform from "../components/Transform/ManyTransform.vue";
import AddType from "../components/Transform/AddType.vue";
import { ref } from 'vue'
import dayjs from 'dayjs'
import Table from "../components/Data/Table.vue";
const isEmailCommitShow = useIsEmailCommitShowStore();
import { useIsEmailCommitShowStore } from "../store/EmailCommit/index.js";

import AddNewData from "../components/Data/addNewData.vue";
const IsAddDataShowChange = (() =>{
    IsAddDataShow.value= !IsAddDataShow.value;
})

const IsAddDataShow = ref(false);

const now = new Date()

const tableData = ref([
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
])

const deleteRow = (index, number) => {
    tableData.value.splice(index, 1)
}

const onAddItem = () => {
    now.setDate(now.getDate() + 1)
    tableData.value.push({
        date: dayjs(now).format('YYYY-MM-DD'),
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    })
}
</script>

<style scoped>

</style>