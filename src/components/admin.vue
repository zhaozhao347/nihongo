<template>
    <Nav />
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
    background: linear-gradient(135deg, rgba(50, 50, 50, 0.9), rgba(30, 30, 30, 0.9));
    border: 1px solid rgb(201, 168, 124);
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    padding: 20px;
}
.admin-Option div{
    width: 90%;
    height: 50px;
    margin-top: 20px;
    background: linear-gradient(135deg, rgba(60, 60, 60, 0.9), rgba(40, 40, 40, 0.9));
    border: 1px solid rgb(201, 168, 124);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
.admin-Option div:hover{
    background: linear-gradient(135deg, rgba(80, 80, 80, 0.9), rgba(60, 60, 60, 0.9));
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transform: translateY(-2px);
}
.page{
    width: 50%;
    height: 75%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 70px;
    background: linear-gradient(135deg, rgba(50, 50, 50, 0.9), rgba(30, 30, 30, 0.9));
    border: 1px solid rgb(201, 168, 124);
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    padding: 20px;
}
</style>