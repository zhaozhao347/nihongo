<template>
<div class="body-div">
<Nav />
<div >
<img src="" alt="logo">
</div>
<div>
    <h1>黑木词卡</h1>
    <p>简单轻松背单词！</p>
</div>
</div>
    <FooterAbout />
</template>
<script setup>
import { useRouter } from 'vue-router';
import Nav from './Nav.vue';
import FooterAbout from './FooterAbout.vue';
const router = useRouter();


</script>
<style>
.body-div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgb(8, 8, 8);
}
.word-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    margin-top: 20px;
}
</style>