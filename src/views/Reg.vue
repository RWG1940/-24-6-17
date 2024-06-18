<template>
    <div class="Login">
        <div class="logincard">
            <h1>注册页</h1>
            <hr>
            <el-row>
                <el-col :span="2"><el-icon>
                        <User />
                    </el-icon></el-col>
                <el-col :span="20"><el-input  v-model="username" type="text" placeholder="账号"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="2"><el-icon>
                        <Message />
                    </el-icon></el-col>
                <el-col :span="20"><el-input  v-model="email" type="text" placeholder="邮箱"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="2"><el-icon>
                        <Lock />
                    </el-icon></el-col>
                <el-col :span="20"><el-input  v-model="password" type="password" placeholder="密码"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="2"></el-col>
                <el-col :span="22"><el-button @click="regButton" type="success" style="width: 160px;">注册</el-button></el-col>
                
            </el-row>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router/router';
import { ref } from 'vue';

const username = ref('')
const password = ref('')
const email = ref('')

const regButton = async() => {
    try {
        const response = await regAPI({ username: username.value, password: password.value,email:email.value });
        console.log('登陆成功，前往登录页')
        router.push('login')
    } catch (error) {
        console.log('登陆失败')
    }
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