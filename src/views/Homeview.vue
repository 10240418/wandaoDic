<template>
    <form class="flex justify-center items-center mt-[180px]">

        <div class="w-[600px] h-[48px] rounded-lg border border-gray-200  px-[0px] py-[5px] left-[10px] flex flex-nowrap justify-between items-center focus:outline">

            <input type="search" id="default-search" class=" ml-[5px] w-full h-full bg-transparent focus:outline-none" placeholder="Search ..." required />

            <button type="submit"   class="w-[60px] h-[48px] rounded-lg  py-2 text-sm font-medium text-white hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center">
                <svg class="h-4 w-5 text-gray-500 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </button>

        </div>
    </form>

    <div class="w-full flex justify-center mt-[40px]">
        <div class="flex h-[320ppx] w-[1200px] ml-[0px] flex-row items-center justify-center bg-slate-200">
            <div class="ml-[0px] h-[240px] w-[280px] bg-slate-500">
                <!-- 第一个 div 的内容 -->
            </div>
            <div class="ml-[60px] h-[240px] w-[280px] bg-slate-500">
                <!-- 第二个 div 的内容 -->
            </div>
            <div class="ml-[60px] h-[240px] w-[280px] bg-slate-500">
                <!-- 第三个 div 的内容 -->
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: "Homeview"
}
</script>

<style scoped>

</style>