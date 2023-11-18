

<script setup>
import {defineEmits, ref, onBeforeMount, inject} from 'vue';
import CommitButton from "./CommitButton.vue";

// const convert = require('convert-units');
//  const CategoryName = inject('NowCateGory');
// // 根据名称获取对应单位
// const unit = convert().describe(CategoryName).singular;

// console.log(unit); // 输出：mile 对应的单位
const To = ref([]);
</script>
<template>
    <div class="w-full h-full flex justify-center items-center flex-col px-[5px]">
      <div class="w-[492px] h-full">
          <div class="flex flex-row   ">
              <div class="ml-[140px]">单位</div>
              <div class="ml-[116px]">换算得</div>
              <div class="ml-[34px]">单位</div>
          </div>
          <div class="flex flex-row items-center justify-center mt-[40px] ">
              <h1 class=" text-xl front-weight:700">1</h1>
              <select  class="w-[60px] h-[25px] border ml-[40px]">
                  <option v-for="category in categories" :key=category.id >{{category.category}}</option>
              </select>
              <span class="text-xl front-weight:700  ml-[40px]">=</span>
              <input v-model="To[0]"   placeholder="1" type="number" class="w-[71px] h-[25px] border no-rounded text-center  ml-[40px]">
              <select  class="w-[60px] h-[25px] border  ml-[10px]">
                  <option v-for="category in categories" :key=category.id >{{category.category}}</option>
              </select>

          </div>
          <div class="flex flex-row items-center justify-center mt-[40px] ">
              <h1 class=" text-xl front-weight:700">1</h1>
              <select  class="w-[60px] h-[25px] border ml-[40px]">
                  <option v-for="category in categories" :key=category.id >{{category.category}}</option>
              </select>
              <span class="text-xl front-weight:700  ml-[40px]">=</span>
              <input v-model="To[0]"   placeholder="1" type="number" class="w-[71px] h-[25px] border no-rounded text-center  ml-[40px]">
              <select  class="w-[60px] h-[25px] border  ml-[10px]">
                  <option v-for="category in categories" :key=category.id >{{category.category}}</option>
              </select>

          </div>

          <div class="flex flex-row items-center justify-center mt-[40px] ">
              <h1 class=" text-xl front-weight:700">1</h1>
              <select  class="w-[60px] h-[25px] border ml-[40px]">
                  <option v-for="category in categories" :key=category.id >{{category.category}}</option>
              </select>
              <span class="text-xl front-weight:700  ml-[40px]">=</span>
              <input v-model="To[0]"   placeholder="1" type="number" class="w-[71px] h-[25px] border no-rounded text-center  ml-[40px]">
              <select  class="w-[60px] h-[25px] border  ml-[10px]">
                  <option v-for="category in categories" :key=category.id >{{category.category}}</option>
              </select>

          </div>

          <div class="flex flex-row items-center justify-center mt-[40px] ">
              <h1 class=" text-xl front-weight:700">1</h1>
              <select  class="w-[60px] h-[25px] border ml-[40px]">
                  <option v-for="category in categories" :key=category.id >{{category.category}}</option>
              </select>
              <span class="text-xl front-weight:700  ml-[40px]">=</span>
              <input v-model="To[0]"   placeholder="1" type="number" class="w-[71px] h-[25px] border no-rounded text-center  ml-[40px]">
              <select  class="w-[60px] h-[25px] border  ml-[10px]">
                  <option v-for="category in categories" :key=category.id >{{category.category}}</option>
              </select>

          </div>

          <div class="flex flex-row items-center justify-center mt-[40px] ">
              <h1 class=" text-xl front-weight:700">1</h1>
              <select  class="w-[60px] h-[25px] border ml-[40px]">
                  <option v-for="category in categories" :key=category.id >{{category.category}}</option>
              </select>
              <span class="text-xl front-weight:700  ml-[40px]">=</span>
              <input v-model="To[0]"   placeholder="1" type="number" class="w-[71px] h-[25px] border no-rounded text-center  ml-[40px]">
              <select  class="w-[60px] h-[25px] border  ml-[10px]">
                  <option v-for="category in categories" :key=category.id >{{category.category}}</option>
              </select>

          </div>
          <CommitButton></CommitButton>



      </div>
    </div>
</template>
<style scoped>
.no-rounded .el-select-dropdown {
    border-radius: 0;
}
</style>