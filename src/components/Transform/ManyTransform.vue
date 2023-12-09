<script setup>
import {defineEmits, ref, onBeforeMount, inject, watch, onMounted, computed, reactive} from 'vue';
import CommitButton from "./CommitButton.vue";


const unitLeft = ref([])
const unitRight = ref([]);
const id = ref(4);
const To = ref([
    '1','2','3'
]);
const data = reactive([
    1, 2, 3
])
const scroll = ref("");
const currentIndex = ref(1);
const inputs = ref([]);
watch(() => currentIndex.value, () => {
    setTimeout(() => {
        inputs.value[currentIndex.value].focus();
        console.log(inputs.value[currentIndex.value]);

    }, 100);
})
onMounted(() => {
})
//每在我的input里面按enter以后的话要聚焦到下一个input
const isFocus = ref(false);
</script>
<template>
    <div class="w-full h-full flex justify-center items-center flex-col px-[5px]">
        <div class="w-[492px] h-full">
            <div class="flex flex-row   ">
                <div class="ml-[140px]">单位</div>
                <div class="ml-[116px]">换算得</div>
                <div class="ml-[34px]">单位</div>
            </div>
            <div class="w-[492px] top-[30px] bg-white" @keyup.up="currentIndex--" @keyup.down="currentIndex++">
                <form ref="scroll" class="w-auto h-[600px] overflow-y-auto">
                    <div v-for="index in data" :key="index" class="h-[26px]">
                        <div class="flex flex-row items-center justify-center mt-[40px] "
                             :class="index===data.length&&!isFocus?'opacity-20':''">
                            <h1 class=" text-xl front-weight:700">1</h1>
                            <select v-model="unitLeft[0]"
                                    class="w-[60px] h-[25px] border ml-[40px] border   border-[#000] ">
                                <option v-for="category in ['mm','cm','m','in','ft-us','ft','mi']">{{ category }}
                                </option>
                            </select>
                            <span class="text-xl front-weight:700  ml-[40px]">=</span>
                            <!--                          <input v-model="To[0]"   placeholder="1" type="number" class="w-[71px] h-[25px] border no-rounded text-center  ml-[40px]">-->
                            <input
                                   v-model.lazy="data[index-1]"
                                   @focus="currentIndex=index;"
                                   :class="currentIndex===index?'text-blue-400 scale-100':''"
                                   class="transition-all w-[71px] h-[25px] border no-rounded text-center border border-[#000] ml-[40px]"
                                   :ref="el => inputs[index] = el"
                                   type="number"
                                   @keydown.enter="scroll.scrollTop = currentIndex * 65;console.log(data);
                                   currentIndex===data.length - 1?currentIndex++&&data.push(id++):currentIndex++;"
                                 >

                            <select v-model="unitRight[0]" class="w-[60px] h-[25px]  border border-[#000] ml-[10px]">
                                <option v-for="category in ['mm','cm','m','in','ft-us','ft','mi']">{{ category }}
                                </option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    </div>
</template>
<style scoped>
.no-rounded .el-select-dropdown {
    border-radius: 0;
}
</style>