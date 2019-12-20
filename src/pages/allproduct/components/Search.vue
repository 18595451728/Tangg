<template>
    <div class="search">
        <img src="/static/img/tgicon_search.png" alt="">
        <input type="text" placeholder="请输入商品的名称或其他关键词进行搜索">
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>
    .search{
        width: 6.9rem;
        height: .6rem;
        margin: .3rem auto;
        background: #e5e5e5;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        padding: 0 .2rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
    .search img{
        width: .3rem;
        margin-right: .2rem;
    }
    .search input{
        width: 80%;
        font-family: pf;
        color: #999999;
        font-size: .24rem;
        background: none;
    }
</style>
