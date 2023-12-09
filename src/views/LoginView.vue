<template>
    <!-- component -->
    <div class="min-h-screen flex flex-col   sm:py-12">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md mt-[0px]" >
            <h1 class="font-bold text-center text-2xl mb-5">Login</h1>
            <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                <div class="px-5 py-7">
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">电子邮箱</label>
                    <input v-model="EmailValue" type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                    <span  class="w-full h-[24px] text-red-500 text-sm "> {{EmailError}}</span>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">密码</label>
                    <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                    <span  class="w-full h-[24px] text-red-500 text-sm "> {{VerifyError}}</span>
                    <button  @click="Login" type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                        <span class="inline-block mr-2">登录</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
                <div class="py-5">
                    <div class="grid grid-cols-2 gap-1">
                        <div class="text-center sm:text-left whitespace-nowrap">
                            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                </svg>
                                <span class="inline-block ml-1">Forgot Password</span>
                            </button>
                        </div>
<!--                        <div class="text-center sm:text-right  whitespace-nowrap">-->
<!--                            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">-->

<!--                                <span class="inline-block ml-1">注册</span>-->
<!--                            </button>-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
            <div class="py-5">
                <div class="grid grid-cols-2 gap-1">
                    <div class="text-center sm:text-left whitespace-nowrap">
                        <button @click="Backlast" class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span  class="inline-block ml-1">Back to last</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
// import {Login} from "../api/index.js";
import router from "../../router/index.js";
import {postConfirmation} from "../api/index.js";

const EmailValue = ref('');
const Verify = ref('');
const VerifyError = ref('');
const EmailError = ref('');
const Login = () => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(EmailValue.value)) {

        EmailError.value= '邮箱格式不正确'

    }
    else {
        EmailError.value= ''
    }

    if (Verify.value === '') {

        VerifyError.value=   '密码不能为空';


    }
    else {
        VerifyError.value= ''
    }

    if (EmailValue.value === '') {

        EmailError.value= '邮箱不能为空'


    }

};



// 写一个回到上一个路由的函数 Backlast
const Backlast = () => {
    router.go(-1);
};


</script>

<style scoped>

</style>