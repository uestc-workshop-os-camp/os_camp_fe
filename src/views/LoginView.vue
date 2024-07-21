<template>
    <!-- 登录界面 -->
    <div class="loginMenu flex shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style="width: 50rem; height: 30rem;">
        <!-- 左侧图像部分 -->
        <div class="loginMenuLeft w-1/2 h-full">
            <img src="@/assets/img/login.png" alt="login.png" class="object-cover h-full w-full">
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
                                    src="@/assets/svg/login.svg" alt="登录" class="object-cover h-full w-full"></img>
                            </div>
                            <input class="w-4/5 pl-2 outline-none text-xs" type="text" placeholder="Username or email">
                        </div>
                        <!-- 用户密码填写 -->
                        <div
                            class="userformInput w-5/6 h-10 mt-2 bg-white border border-slate-200 border-solid rounded-lg flex overflow-hidden hover:border-blue-300 focus:border-blue-500">
                            <div class="inputTypeSvg w-1/5 border-r border-slate-300 p-2.5"><img
                                    src="@/assets/svg/password.svg" alt="登录" class="object-cover h-full w-full"></img>
                            </div>
                            <input class="w-4/5 pl-2 outline-none text-xs" type="password" placeholder="Password">
                        </div>
                        <!-- 登录按钮 -->
                        <div
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
import { ref } from 'vue';
import axios from 'axios';

const handleGitHubLogin = () => {
    // GitHub OAuth URL
    const githubOAuthURL = 'https://github.com/login/oauth/authorize';
    // Your client ID
    const clientId = 'YOUR_GITHUB_CLIENT_ID';
    // Redirect URI, should match the one registered in your GitHub app settings
    const redirectUri = 'http://localhost:5173'; // Change this to your actual callback URL

    // Construct the full authorization URL
    const authUrl = `${githubOAuthURL}?client_id=${clientId}&redirect_uri=${redirectUri}`;

    // Redirect to the GitHub OAuth page
    window.location.href = authUrl;
};
</script>