<template>
    
    <Nav></Nav>
<div class="book-body">
    <h1 class="book-title">词书页面</h1>
            <p class="book-title-p">词书一级分类</p>
            <div class="books-list">
                <div class="books-list-div">
                    <h2>JLPT N5</h2>
                    <p>适合新手</p>    
                </div>
                <div class="books-list-div">
                    <h2>JLPT N4</h2>  
                    <p>适合初级学习者</p>
                </div> 
                <div class="books-list-div">
                    <h2>JLPT N3</h2>    
                    <p>适合中级学习者</p>
                </div> 
                <div class="books-list-div">
                    <h2>JLPT N2</h2>  
                    <p>适合高级学习者</p>  
                </div>
                <div class="books-list-div">
                    <h2>JLPT N1</h2>    
                    <p>适合专业学习者</p>
                </div>  
            </div>
            <p class="book-title-p">词书一级分类</p>
            <div class="books-list">
                <div class="books-list-div">
                    <h2>JLPT N5</h2>
                    <p>适合新手</p>    
                </div>
                <div class="books-list-div">
                    <h2>JLPT N4</h2>  
                    <p>适合初级学习者</p>
                </div> 
                <div class="books-list-div">
                    <h2>JLPT N3</h2>    
                    <p>适合中级学习者</p>
                </div> 
                <div class="books-list-div">
                    <h2>JLPT N2</h2>  
                    <p>适合高级学习者</p>  
                </div>
                <div class="books-list-div">
                    <h2>JLPT N1</h2>    
                    <p>适合专业学习者</p>
                </div>  
            </div>
            <p class="book-title-p">词书一级分类</p>
            <div class="books-list">
                <div class="books-list-div">
                    <h2>JLPT N5</h2>
                    <p>适合新手</p>    
                </div>
                <div class="books-list-div">
                    <h2>JLPT N4</h2>  
                    <p>适合初级学习者</p>
                </div> 
                <div class="books-list-div">
                    <h2>JLPT N3</h2>    
                    <p>适合中级学习者</p>
                </div> 
                <div class="books-list-div">
                    <h2>JLPT N2</h2>  
                    <p>适合高级学习者</p>  
                </div>
                <div class="books-list-div">
                    <h2>JLPT N1</h2>    
                    <p>适合专业学习者</p>
                </div>
                <div class="books-list-div">
                    <h2>JLPT N1</h2>    
                    <p>适合专业学习者</p>
                </div>  
                <div class="books-list-div">
                    <h2>JLPT N1</h2>    
                    <p>适合专业学习者</p>
                </div>    
            </div>
</div>

<FooterAbout></FooterAbout>
</template>
<script setup>
import Nav from './Nav.vue';
import FooterAbout from './FooterAbout.vue';
</script>
<style scoped>
.color{
    color: rgb(8, 8, 8);
}
.book-body{
    width: 100%;
    height: auto;
    margin-bottom: 200px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: rgb(8, 8, 8);
}
.book-title{
    font-size: 30px;
    color: rgb(201, 168, 124);
    margin-left: 85px;
    margin-top: 50px;
}
.books-list{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 90%;
    margin-left: 85px;

}
.book-title-p{
    margin-top: 50px;
    margin-left: 85px;
    font-size: 20px;
    color: whitesmoke;
}
.books-list-div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 250px;
    height: 200px;
    margin-right: 40px;
    margin-top: 30px;
    padding: 15px;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(50, 50, 50, 0.9), rgba(30, 30, 30, 0.9));
    border: 1px solid rgb(201, 168, 124);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
}
.books-list-div:hover{
    background: linear-gradient(135deg, rgba(60, 60, 60, 0.9), rgba(40, 40, 40, 0.9));
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.7);
    transform: translateY(-5px);
}
</style>