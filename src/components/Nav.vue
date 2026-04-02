<template>
  <div class="nav">
    <div class="nav-inner">
      <div class="nav-left">
        <h1>黑木词卡</h1>
      </div>
      <div class="nav-right">
        <router-link to="/">首页</router-link>
        <router-link to="/wordbooks">词书</router-link>
        <router-link to="/review">复习</router-link>
        <router-link to="/about">关于</router-link>
        <img src="/public/admin.png" alt="admin" @click="goToAdmin" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToAdmin = () => {
  router.push('/admin');
};
</script>

<style>
.nav {
  width: 100%;
  background: rgb(8, 8, 8);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(100%, 1060px);
  margin: 0 auto;
  padding: 12px 88px; /* 再加30px */
  border-radius: 12px;
  background: rgba(20, 20, 20, 0.75);
}

.nav-left, .nav-right {
  flex: 0 1 auto;
}

.nav-left {
  margin-left: -20px; /* 左侧向左移动20px */
}

.nav-right {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-right: -20px; /* 右侧向右移动20px */
}

.nav-left h1 {
  color: rgb(201, 168, 124);
  font-size: 28px;
  margin: 0;
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 30px; /* 改大一些 */
}
.nav-right a {
  color: whitesmoke;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.25s ease;
}
.nav-right a:hover {
  color: rgb(201, 168, 124);
}
.nav-right img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(255,255,255,0.2);
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));
  cursor: pointer;
}
</style>