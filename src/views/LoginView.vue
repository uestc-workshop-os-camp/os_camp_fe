<template>
    <!-- 壁纸 -->
    <img src="@/assets/wallpaper/wallpaper1.png" alt="" class="h-screen w-screen -z-10">
    <img src="/img/logo.png" alt="" class="z-10 absolute top-4 left-4 w-[300px]">
    <!-- OS icon -->
    <div class="w-[25vw] absolute left-1/2 -translate-x-1/2 top-[18vh] z-10 flex justify-between animate_slidedown">
        <div class="" v-for="(item, index) in OS_icon" :key="index">
            <img :src="item" alt=""
                class="w-[64px]  hover:scale-125 hover:-translate-y-12 transition duration-300 ease-in-out">

        </div>
    </div>
    <!-- 登录界面 -->
    <div class="loginMenu flex shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3"
        style="width: 50rem; height: 30rem;">

        <!-- 左侧图像部分 -->
        <div class="loginMenuLeft w-1/2 h-full">
            <img src="/img/login.png" alt="login.png" class="object-cover h-full w-full">
        </div>
        <!-- 右侧表单部分 背景-->
        <div
            class="loginMenuRight bg-amber-500 w-1/2 h-full flex flex-col justify-center items-center content-center overflow-hidden">
            <!-- 表单 -->
            <div class="loginMenuRightForm w-2/3 h-60 bg-white rounded-md shadow-md">
                <!-- 表单上方选项 -->
                <div class="loginMenuRightFormTop w-full h-9 shadow-md">
                    <div
                        class="loginMenuRightFormTopAlreadymembers h-full leading-10 text-xs align-middle font-bold ml-6 text-amber-500 active:text-blue-500">
                        Already members</div>
                </div>
                <!-- 表单内容 -->
                <div class="loginMenuRightFormUserform">
                    <form class="flex flex-col justify-center items-center">
                        <!-- 用户账号填写 -->
                        <div
                            class="userformInput w-5/6 h-10 mt-6 bg-white border border-slate-200 border-solid rounded-lg flex overflow-hidden hover:border-blue-300 focus:border-blue-500">
                            <div class="inputTypeSvg w-1/5 border-r border-slate-300 pr-2.5 pl-2.5 pb-2.5 pt-1.5"><img
                                    src="@/assets/svg/login.svg" alt="登录" class="object-cover h-full w-full">
                            </div>
                            <input class="w-4/5 pl-2 outline-none text-xs" type="text" placeholder="Username or email">
                        </div>
                        <!-- 用户密码填写 -->
                        <div
                            class="userformInput w-5/6 h-10 mt-2 bg-white border border-slate-200 border-solid rounded-lg flex overflow-hidden hover:border-blue-300 focus:border-blue-500">
                            <div class="inputTypeSvg w-1/5 border-r border-slate-300 p-2.5"><img
                                    src="@/assets/svg/password.svg" alt="登录" class="object-cover h-full w-full">
                            </div>
                            <input class="w-4/5 pl-2 outline-none text-xs" type="password" placeholder="Password">
                        </div>
                        <!-- 登录按钮 -->
                        <div @click="login"
                            class="userformButton w-5/6 h-10 bg-blue-700 text-white text-center leading-10 rounded-md text-xs mt-8 font-bold active:bg-blue-900">
                            SIGN IN</div>
                    </form>
                </div>
            </div>
            <!-- 注册选项 -->
            <div class="loginMenuRightRegister">
                <div class="registerWordsOne text-xs text-white font-bold mt-5 text-center">Don't have an account yet?
                </div>
                <div
                    class="flex items-center justify-between registerWordsTwo text-xs text-blue-700 font-bold mt-3 text-center active:text-blue-500">
                    <p class="">sign in By Github</p><button @click="handleGitHubLogin"
                        class="socialLoginButton bg-white  text-white rounded-md p-1 flex items-center justify-center">
                        <img src="@/assets/svg/github.svg" alt="GitHub Login" class="w-6 h-6">
                    </button>
                </div>
            </div>
            <!-- GitHub登录按钮 -->
            <div class="loginMenuRightSocialLogin mt-4">

            </div>
        </div>
    </div>


</template>
<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
// import axios from 'axios';
// 操作系统icon
const OS_icon = reactive(['src/assets/svg/icon/windows.svg', 'src/assets/svg/icon/Android.svg', 'src/assets/svg/icon/HarmonyOS.svg', 'src/assets/svg/icon/Linux.svg', 'src/assets/svg/icon/macOS.svg'])
const handleGitHubLogin = () => {
    alert('哈哈，不需要登录哦')
    router.push('/')
    // GitHub OAuth URL
    // const githubOAuthURL = 'https://github.com/login/oauth/authorize';
    // // 客户端 ID
    // const clientId = 'Ov23liwBsRbAqy6QgNoC';
    // // 客户端密码：aac5ff08e67f0caf9b2cc1f559a37f5644d7dc1f
    // // 回调地址
    // const redirectUri = 'http://localhost:5173/Index'; // Change this to your actual callback URL

    // // Construct the full authorization URL
    // const authUrl = `${githubOAuthURL}?client_id=${clientId}&redirect_uri=${redirectUri}`;
    // console.log(authUrl)
    // // exchangeCodeForAccessToken()
    // // Redirect to the GitHub OAuth page
    // window.location.href = authUrl;
};
// 向github拿令牌
// const exchangeCodeForAccessToken = async (code) => {
//     const githubTokenURL = 'https://github.com/login/oauth/access_token';
//     const clientId = 'Ov23liwBsRbAqy6QgNoC';
//     const clientSecret = 'aac5ff08e67f0caf9b2cc1f559a37f5644d7dc1f'; // WARNING: This should NOT be in the frontend.
//     const redirectUri = 'http://localhost:5173/Index';

//     const response = await axios({
//         method: 'post',
//         url: githubTokenURL,
//         data: {
//             client_id: clientId,
//             client_secret: clientSecret,
//             code: code,
//             redirect_uri: redirectUri,
//             grant_type: 'authorization_code'
//         },
//         headers: {
//             Accept: 'application/json' // Request JSON response format
//         }
//     });

//     if (response.status === 200) {
//         console.log(response.data.access_token)
//         return response.data.access_token;
//     } else {
//         throw new Error('Failed to fetch access token');
//     }
// };

function login() {
    alert('哈哈，不需要登录哦')
    router.push('/')
}
</script>
<style scoped>
.animate_slidedown {
    animation: slidedown 1s ease-out forwards
}

@keyframes slidedown {
    from {
        opacity: 0;
        top: 10vh;
    }

    to {
        opacity: 1;
        top: 18vh
    }
}
</style>