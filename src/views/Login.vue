<template>
    <div class="Login">
        <div class="logincard">
            <h1>请登录</h1>
            <hr>
            <el-row>
                <el-col :span="2"><el-icon>
                        <User />
                    </el-icon></el-col>
                <el-col :span="20"><el-input  v-model="username" type="text" placeholder="账号"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="2"><el-icon>
                        <Lock />
                    </el-icon></el-col>
                <el-col :span="20"><el-input  v-model="password" type="password" placeholder="密码"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="2"></el-col>
                <el-button type="primary">登录</el-button>
                <el-button type="warning" @click="regButton">注册</el-button>
            </el-row>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router/router';
import { ref } from 'vue';

const username = ref('')
const password = ref('')
const loginButton = async() => {
    try {
        const response = await loginAPI({ username: username.value, password: password.value });
        console.log('登陆成功')
        router.push('home')
    } catch (error) {
        console.log('登陆失败')
    }
}
const regButton = () => {
    console.log('前往注册页')
    router.push('reg')
}
</script>
<style scoped>
.Login {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #a2ffde46, #3999ff57);;
}

.logincard {
    background-color: rgba(240, 248, 255, 0.642);
    padding: 50px;
    border-radius: 25px;
    backdrop-filter:blur(25px);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.377);
    transition-duration: 0.5s;
}
.logincard:hover {
    transform: scale(1.05) ;
    transition-duration: 0.4;
}
.el-row {
    margin-bottom: 10px;
}

</style>