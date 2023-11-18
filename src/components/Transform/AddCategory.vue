<template>
    <div class="bg-gray-100 flex flex-col sm:py-12">
        <div class="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
            <!-- 弹窗内容 -->
            <div class="w-[600px] h-[400px] ml-[100px] bg-white shadow rounded-lg">
                <div class="flex items-center mt-[70px] ml-[100px]">
                    <h1>名称</h1>
                </div>
                <div class="w-[300px] h-[34px] rounded border border-gray-200 mt-[0px] ml-[100px] px-[0px] py-[5px] left-[10px] flex flex-nowrap justify-between items-center focus:outline">

                    <input  v-model="Name" placeholder="输入名称" class=" ml-[5px] w-full h-full bg-transparent focus:outline-none"  required />
                </div>
                <div class="flex items-center mt-[30px]">
                    <h2 class="ml-[100px]">父类别</h2>
                </div>
                <div class="flex items-center mt-[0px] ml-[100px] ">

                    <div >
                        <el-tree-select
                            v-model="Parent"
                            :data="props.treeData"
                            check-strictly
                            :render-after-expand="false"
                            class="w-[300px] h-[36px]"
                        />
                    </div>

                    <!-- 其他表单元素 -->
                </div>
                <div class="flex items-center mt-[60px] ml-[210px]">
                    <button @click="toggleVisibility" class="w-[80px] border rounded">取消</button>
                    <button @click="handleSubmit" class="ml-[30px] w-[80px] border rounded bg-blue-200">确认</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onBeforeMount, onUpdated} from 'vue';
import TreeSelect from '@zanmato/vue3-treeselect';
import { addCategory } from '../../api/index.js';
import '@zanmato/vue3-treeselect/dist/vue3-treeselect.min.css';

const Name = ref(null);
const Parent = ref(null);
const props = defineProps(['treeData']);
const emit = defineEmits([ "toggleVisibility" ]);

// console.log(Parent.value);
// onUpdated(() => {
//     console.log(Parent.value);
// })

const handleSubmit = async () => {
    const data = {
        name: Name.value,
        parent: Parent.value, // 获取选中的值
        email: 'dreamskyll@foxmail.com',
        verifyCode: '287652',
    };

    try {
        await addCategory(data);
        toggleVisibility();
    } catch (error) {
        console.error(error);
    }
};


//还没有实现就是调接口的操作
//可以控制关闭和显示

const toggleVisibility =()=>{
    emit('toggleVisibility');

}
</script>

<style scoped>

</style>