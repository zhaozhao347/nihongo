<template>
    <div class="NAV">
    <Nav />
    </div>
    <div class="admin-body">
    <div class="admin-Option">
        <div >

        </div>
    </div>
    <div class="page">
        <h1>Admin Page</h1>
    </div>
    </div>
    <FooterAbout />
</template>
<script>
import Nav from './Nav.vue';
import FooterAbout from './FooterAbout.vue';
export default {
    name: 'Admin',
    components: {
        Nav,
        FooterAbout
    }
}
</script>
<style scoped>
.NAV{
    margin-left: 40px;
    margin-bottom: -20px;
}
.admin-body{
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;
    margin-left: 60px;
}
.admin-Option{
    width: 25%;
    height: 75%;
    margin-left: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: beige;
    margin-left: 80px;
}
.admin-Option div{
    width: 90%;
    height: 50px;
    margin-top: 20px;
    background-color: rgb(201, 168, 124, 0.8);
    transition: background-color 0.3s ease-in-out;
}
.page{
    width: 50%;
    height: 75%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 70px;
    background-color: rosybrown;
}
</style>