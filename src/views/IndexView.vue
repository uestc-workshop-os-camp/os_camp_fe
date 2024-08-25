<template>
    <div>
        这是首页
        <button @click="exchangeCodeForAccessToken">获取令牌</button>
    </div>
</template>

<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route.query)

const exchangeCodeForAccessToken = async (code) => {
    const githubTokenURL = 'https://github.com/login/oauth/access_token';
    const clientId = 'Ov23liwBsRbAqy6QgNoC';
    const clientSecret = 'aac5ff08e67f0caf9b2cc1f559a37f5644d7dc1f'; // WARNING: This should NOT be in the frontend.
    const redirectUri = 'http://localhost:5173/Index';

    const response = await axios({
        method: 'post',
        url: githubTokenURL,
        data: {
            client_id: clientId,
            client_secret: clientSecret,
            code: code,
            redirect_uri: redirectUri,
            grant_type: 'authorization_code'
        },
        headers: {
            Accept: 'application/json' // Request JSON response format
        }
    });

    if (response.status === 200) {
        console.log(response.data.access_token)
        return response.data.access_token;
    } else {
        throw new Error('Failed to fetch access token');
    }
};
</script>

<style lang="less" scoped></style>