<template>
    <div class="flex flex-col  w-full overflow-y-auto">
<!--        数据库表格-->
        <div class="flex flex-row justify-center items-center ml-[200px] mt-[100px] Table-view overflow-y-auto" :class="tableHeader.length===3?'w-[840px]':tableHeader.length===4?'w-[900px]':'w-[940px]'">
            <el-table :data="tableData" style="width: 100%" border  >
                <el-table-column
                        v-for="(col, colIndex) in tableHeader"
                        :key="colIndex"
                        :prop="col.prop"
                        :label="col.label"
                        :width="colIndex === 1 &&tableHeader.length===3? '350' : colIndex === 2 &&tableHeader.length===3?'300':colIndex === 1 &&tableHeader.length===4?'300':col.width"
                >
                    <!--                可修改就是每一个单元格的值,动态绑定的v-model-->
                    <template #default="{ row, column, $index }">
                        <el-input v-model="row[column.property]" @change="updateData(row, column.property)"></el-input>
                    </template>
                </el-table-column>
            </el-table>
            <!--        右边的按钮-->
            <button class="border border-dashed flex justify-center items-center w-[31px]  whitespace-normal ml-[30px] h-full rounded-[3px] text-xs text-[#d7d7d7] white-space hover:bg-slate-100"
                    @click="addColumn"
            >
              <span class=" text-col "> 新增
              </span>
            </button>

        </div>
        <button class="mt-[30px]  ml-[200px] border border-dashed  flex justify-center items-center h-[31px]  rounded-[3px] text-xs text-[#d7d7d7] white-space hover:bg-slate-100"
                @click="addRow"
                :class="tableHeader.length===3?'w-[780px]':tableHeader.length===4?'w-[840px]':'w-[880px]'"
        >
           <span style="width: 108px;letter-spacing: 10px ;justify-items: center" class=" flex justify-center items-center"  > 新增</span>
        </button>

    </div>

</template>

<script  setup>

import {ref, watch} from "vue";
const tableHeader = ref([
    { prop: "major", label: "主键", width: "180" },
    { prop: "field1", label: "字段1", width: "180" },
    { prop: "field2", label: "字段2", width: "180" },
]);
const tableData = ref([
    { major: "2016-05-03", field1: "Tom", field2: "California" },
    { major: "2016-05-02", field1: "Jerry", field2: "New York" },
]);

const rightButtonHeight = ref();
watch((tableData.value.length),(newVal,oldVal)=>{
    rightButtonHeight.value=30*(newVal+1)+'px';
})
const bottomButtonWidth = ref();
watch((tableHeader.value.length),(newVal,oldVal)=>{
    if(tableHeader.value.length===3){
        bottomButtonWidth.value='780px';
    }
    else if(tableHeader.value.length===4){
        bottomButtonWidth.value='840px';
    }
    else{
        bottomButtonWidth.value='880px';
    }

})
const bottomButtonWidthSet=()=>{
    return 'h-[31px] w-'+bottomButtonWidth.value;
}
const rightButtonHeightSet=()=>{
    return 'w-[31px] h-'+rightButtonHeight.value;
}
function addRow() {
    const newRow = {};
    tableHeader.value.forEach((col) => {
        newRow[col.prop] = "";
    });
    tableData.value.push(newRow);
    console.log(tableData);
}

function addColumn() {
    const newColumn = { prop: `field${tableHeader.value.length}`, label: `字段${tableHeader.value.length}`, width: "180" };
    tableHeader.value.push(newColumn);
    tableData.value.forEach((row) => {
        row[newColumn.prop] = "";
    });
    console.log(tableData);
}

function updateData(row, prop) {
    console.log(`更新数据：row=${JSON.stringify(row)}, prop=${prop}`);
}
</script>
<style>
.text-col{
    width: 20px;
    margin: 0 auto;
    line-height: 24px;
}
.Table-view{
    .el-input__wrapper {
        border: none;
        padding: 0 0 0 0 ;
        box-shadow: 0 0 0 0 ;
        border-radius: 0;
    }
    .el-table .el-table__cell {
        padding:0 0 0 0;
        --el-table-border: 1px solid #797979;


    }
    .el-table .cell {
        padding:0 0 0 0;
        width: auto;


    }
    .el-input__inner {
     border: none;
    }
    .el-table{
        --el-table-border-color: #797979;
    }

   .el-table thead {
    color: #333333;
}

}

</style>
