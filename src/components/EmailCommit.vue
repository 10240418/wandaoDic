<template>
    <div v-show="IsEmailCommitShowStore.getIsEmailCommitShow" class=" transform transition-all duration-300 ease-in-out flex flex-col sm:py-12 ">
        <div class="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
            <!-- 弹窗内容 -->
            <div class="w-[700px] h-[400px] ml-[100px] bg-white shadow rounded-lg">
                <div class="flex items-center mt-[70px] ml-[100px]">
                    <h1>电子邮箱</h1>
                </div>
                <!--                -->
                <div class="w-[300px] h-[34px] rounded border border-gray-200 mt-[0px] ml-[100px] px-[0px] py-[5px] left-[10px] flex flex-nowrap justify-between items-center focus:outline">
                    <input v-model="EmailValue" class=" ml-[5px] w-full h-full bg-transparent focus:outline-none"
                           required/>
                </div>
                <span class="w-full h-[24px] text-red-500 text-sm ml-[100px]"> {{ EmailError }}</span>
                <div class="flex items-center mt-[30px]">
                    <h2 class="ml-[100px]">验证码</h2>
                </div>
                <!--                -->
                <div class=" w-[300px] h-[34px] ml-[100px] flex flex-row">
                    <div class="h-[34px]  w-[150px] rounded border border-gray-200 mt-[0px] px-[0px] py-[5px] left-[10px] flex flex-nowrap justify-between items-center focus:outline">
                        <input v-model="captcha" class=" ml-[5px] w-[120px]  h-full bg-transparent focus:outline-none"
                               required/>
                    </div>
                    <button :disabled="countDown" @click="requestCaptcha"
                            class=" w-[130px] ml-[20px] border rounded hover:bg-slate-200 whitespace-nowrap">
                        {{ countDown > 0 ? `重新获取(${countDown}s)` : '获取验证码 ' }}
                    </button>
                </div>
                <span class="w-full h-[24px] text-red-500 text-sm ml-[100px]"> {{ captchaError }}</span>
                <div class="flex items-center mt-[60px] ml-[210px]">
                    <button @click="Cancel" class="w-[80px] border rounded">取消</button>
                    <button @click="EmailCommit" class="ml-[30px] w-[80px] border rounded bg-blue-200">确认</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref, onBeforeMount, onUpdated} from 'vue';
import {postConfirmation, postDo_verify} from "../api/index.js";
import {ElMessage, ElMessageBox} from "element-plus";
import router from "../../router/index.js";
// import {error} from "../utils/repoter.js";
import {useIsEmailCommitShowStore} from "../store/EmailCommit/index.js";


const IsEmailCommitShowStore = useIsEmailCommitShowStore();
console.log(IsEmailCommitShowStore);
// console.log(IsEmailCommitShowStore.getIsEmailCommitShow.value);

const countDown = ref(0);
const requestCaptcha = async () => {
    if (countDown.value > 0) {
        return;
    }
    countDown.value = 10;
    const timer = setInterval(() => {
        countDown.value--;
        if (countDown.value === 0) {
            clearInterval(timer);
        }
    }, 1000);
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(EmailValue.value)) {
        EmailError.value = '邮箱格式不正确'
        return;
    } else {
        EmailError.value = ''
    }
    const res = await postConfirmation({
        email: EmailValue.value
    });
    if (res.data.message === '验证码请求成功') {
        console.log(res);
    } else {
        await ElMessageBox.alert('验证码请求失败', '提示', {
            confirmButtonText: '确定',
            callback: action => {
                ElMessage({
                    type: 'info',
                    message: `action: ${action}`
                });
            }
        })
    }
};

const EmailValue = ref('');
const captcha = ref('');
const Cancel = () => {
    console.log("Cancel");
    IsEmailCommitShowStore.changeIsEmailCommitShow();

}

const captchaError = ref('');
const EmailError = ref('');
const EmailCommit = () => {

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(EmailValue.value)) {

        EmailError.value = '邮箱格式不正确'

    } else {
        EmailError.value = ''
    }

    if (captcha.value === '') {

        captchaError.value = '验证码不能为空';


    } else {
        captchaError.value = ''
    }

    if (EmailValue.value === '') {

        EmailError.value = '邮箱不能为空'


    }
    const res = postDo_verify({
        email: EmailValue.value,
        verifyCode: captcha.value
    }).then((res) => {
        if (res.data.message === '验证成功') {
            ElMessage.success('验证成功');
            localStorage.setItem('token', 'Bearer ' + res.data.token);
            localStorage.setItem('username', EmailValue.value);
            router.push({name: "home"});
        } else {
            ElMessage.error('验证失败');
        }
    }).catch(error => {
        ElMessage.error('验证失败');
        return false;
    });


}

</script>

<style scoped>

</style>