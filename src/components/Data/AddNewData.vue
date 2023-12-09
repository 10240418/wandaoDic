<template>
    <div class=" flex flex-col sm:py-12">
        <div class="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
            <!-- 弹窗内容 -->
            <div class="w-[700px] h-[400px] ml-[100px] bg-white shadow rounded ">
                <div class="flex item-center mt-[70px] ml-[100px]">
                    <h1>名称</h1>
                </div>
                <div class="w-[410px] h-[34px] rounded border border-gray-200 mt-[0px] ml-[100px] px-[0px] py-[5px] left-[10px] flex flex-nowrap justify-between items-center focus:outline">
                    <input  v-model="NewTypeName" placeholder="输入名称" class=" ml-[5px] w-full h-full bg-transparent focus:outline-none"  required />
                </div>
                <div class="flex items-center mt-[30px]">
                    <h2 class="ml-[100px]">类别</h2>
                    <button class="ml-[115px]  shadow text-blue-300" @click="addNewCategory">新增</button>
                    <h2 class="ml-[30px]">标签</h2>
                    <h3>(选择已有或者输入新增)</h3>
                </div>
                <div class="flex items-center flex-row mt-[0px] ml-[100px]">
                    <div class="w-[190px] h-[36px]">
                        <el-tree-select
                                v-model="TypeValue"
                                :data="TypeList"
                                check-strictly
                                :render-after-expand="false"
                        />
                    </div>

                    <div class="w-[210px] h-[36px] ml-[20px]">
                        <el-select
                                v-model="TagValue"
                                multiple
                                filterable
                                allow-create
                                collapse-tags
                                :reserve-keyword="false"
                                placeholder="Select "
                                class="flex-grow"
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
                <div class="flex items-center mt-[60px] ml-[320px]">
                    <button @click="ChangeshowDialog" class="w-[80px] border rounded pointer-events-auto">取消</button>
                    <button @click="CommitAddType" class="ml-[30px] border bg-blue-200 rounded w-[80px] pointer-events-auto">确认</button>
                </div>
            </div>

        </div>
    </div>
    <div>
        <AddCategory :treeData="TypeList" v-show="isVisible" @toggleVisibility="ChangeVisibility" />
    </div>
</template>

<script setup>
import { defineEmits, ref, onBeforeMount } from 'vue';
import AddCategory from '../Transform/AddCategory.vue';
import { getCategory, getTag,addTag,addType } from '../../api/index.js';

const isVisible = ref(false);

const TypeList = ref([]);
const TypeValue = ref([]);
const NewTypeName=ref(null);

const TagValue = ref(null);
const TagList = ref(null);
const NewTagName = ref(null)
const emit = defineEmits(["ChangeshowDialog"]);//控制窗口显示界面



const transformData = (data) => {
    return data.map((item) => ({
        value: item.id,
        label: item.name,
        children: item.children ? transformData(item.children) : undefined,
    }));
};

onBeforeMount(async () => {
    try {
        const result = await getCategory();
        TypeList.value = transformData(result.data);
        const result_Tag = await getTag();
        TagList.value = result_Tag.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const addNewCategory = () => {
    isVisible.value = true;
};

const ChangeVisibility = () => {
    isVisible.value = !isVisible.value;
};

const ChangeshowDialog = () => {
    emit('ChangeshowDialog');
};
const CommitAddType=()=>{
    ChangeshowDialog();
    try {
        addTag({
            name: NewTagName.value,
            email: "dreamskyll@foxmail.com",
            verifyCode: "287652"
        }).then((res)=>{
            console.log(res);
        })
    }
    catch(error){
        console.error('Error fetching data:', error);
    }



}
if(!NewTypeName && !TagList && !TypeValue){
    try {
        //undo接口
        addType({
            name: NewTypeName.value,
            tags: TagValue.value,
            category: TypeValue.value,
        }).then((res)=>{
            console.log(res);
        })
    }
    catch(error){
        console.error('Error fetching data:', error);
    }

}
</script>
