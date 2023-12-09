<template>
    <div class="flex flex-col standard-view">
        <!--       上面的一个栏目-->
        <div class="w-[1200px] h-full flex flex-col item-center justify-center">
            <div class="flex  justify-between items-center w-[880px] h-[40px] mt-[40px]  ml-[200px]">
                <h1 class="text-2xl text-[#333333] font-bold ">贡献-规范标准</h1>
                <button @click="" class="border w-[50px] h-[22px] text-xs ">快速导入(多选)</button>
            </div>
            <form action="" ref="scroll" class=" h-[400px] w-[860px] ml-[210px] mt-[100px] overflow-y-auto">
                <div class="text-xs">
                    <div v-for="index in Many" :key="index" class="h-[64px]  flex flex-row white-nowrap gap-x-[30px]">
                        <div class="flex flex-col  w-[150px] ">
                            <h1 class=" text-[#7f7f7f]">名称</h1>
                            <div class=" h-[30px] rounded border border-gray-100  px-[0px] py-[5px] left-[10px] flex flex-nowrap justify-between items-center focus:outline">
                                <input v-model="Name[index]" :ref="el => inputs[index] = el"
                                       class=" ml-[5px] w-full h-full bg-transparent focus:outline-none" required/>
                            </div>
                        </div>
                        <div class="flex flex-col w-[220px]">
                            <div class=" flex flex-row justify-between">
                                <h2 class="text-cs text-[#7f7f7f]">类别</h2>

                            </div>
                            <div  class="w-[220px] h-[28px]">
                                <el-select
                                        v-model="TypeValue[index]"
                                        :data="TypeList"
                                        check-strictly
                                        :render-after-expand="false"
                                        class="inputLogin"
                                        placeholder=""
                                />
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex flex-between">
                                <h2 class="font-size-[13px] text-[#7f7f7f]">标签</h2>
                                <h3 class="font-size-[13px] text-[#7f7f7f]">(选择已有或者输入新增)</h3>
                            </div>
                            <div class="w-[220px] h-[28px] ">
                                <el-select
                                        v-model="TagValue[index]"
                                        multiple
                                        filterable
                                        allow-create
                                        collapse-tags
                                        :reserve-keyword="false"
                                        placeholder=""
                                        style="width: 100% ;height: 100% ;border-radius: 2px"
                                >
                                    <el-option
                                            v-for="item in TagList"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id"
                                    />
                                </el-select>
                            </div>

                        </div>
                        <div class="flex flex-col w-[90px]">
                            <span class=" text-[#7f7f7f]">日期</span>
                            <div class="w-[90px] h-[30px]">
                                <el-date-picker
                                        v-model="date[index]"
                                        type="datetime"
                                        placeholder="选择日期"
                                        size="small"
                                        style="width: 100% ;height: 100% ;border-radius: 2px;border:#d7d7d7"
                                />
                            </div>


                        </div>
                        <div class="flex flex-col w-[120px]">
                            <span class="font-size-[13px] text-[#7f7f7f]">文件</span>
                            <div class="flex flex-row justify-center items-center text-sm text-[#7f7f7f]">
                                <button class="text-sm text-[#7f7f7f] border border-dashed w-[24px] flex justify-center items-center">
                                    <svg width="25" height="31" viewBox="0 0 25 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9824 5.24658V18.7456" stroke="#aaaaaa" stroke-width="1.49989"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19.7324 11.9958H6.2334" stroke="#aaaaaa" stroke-width="1.49989"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <span class="text-xs text-[#d7d7d7] ml-[5px]">点击上传</span>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
            <div class="w-[860px] h-[30px] ml-[200px] mt-[50px]">
                <button class="border border-dashed w-full flex justify-center items-center w-full h-full rounded-[3px] text-xs text-[#d7d7d7] hover:bg-slate-100" @click="Many+=1">
                    新增
                </button>
            </div>
            <div class="  mt-[16px] ml-[874px]">
                <button @click="isEmailCommitShow.changeIsEmailCommitShow()"
                        class="w-[186px] h-[30px] text-center border focus:bg-slate-200 hover:bg-slate-100">
                    提交
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onBeforeMount, ref, watch} from "vue";
import EmailCommit from "../components/EmailCommit.vue";

import {useIsEmailCommitShowStore} from "../store/EmailCommit/index.js";

const isEmailCommitShow = useIsEmailCommitShowStore();

import CommitButton from "../components/Transform/CommitButton.vue";
import ManyTransform from "../components/Transform/ManyTransform.vue";
import AddType from "../components/Transform/AddType.vue";
import {getCategory, getTag, addTag, addType} from "../api/index.js";

const date = ref([]);
const scroll = ref("");

const Name = ref([]);
const TypeValue = ref([]);
const TagValue = ref([]);
const TypeList = ref([]);
const TagList = ref([]);
const Many = ref(2);
const inputs = ref([]);
watch(() => Many.value, () => {
    setTimeout(() => {
        inputs.value[Many.value].focus();
    }, 100);
})
// 文件 导入文件
onBeforeMount(async () => {

    try {
        const result = await getCategory()
        for (let i = 0; i < result.data.length; i++) {
            TypeList.value.push(result.data[i])
        }
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
    try {
        const result = await getTag()
        for (let i = 0; i < result.data.length; i++) {
            TagList.value.push(result.data[i])
        }
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
});


const id = ref(4);
</script>

<style scoped>
.box1  {

    height: 30px;

}
</style>
<style>
.standard-view{
    .el-input__wrapper{
        padding: 0 0 0 5px;
    }
}
</style>