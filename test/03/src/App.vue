<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <!--
        <a href="#" v-link="{path:'/goods'}">商品</a>
        -->
        <router-link to="/goods">商品</router-link>
      </div>
      <!--
      <div class="tab-item">
        <a href="#" v-link="{path:'/ratings'}">评论</a>
      </div>
       <div class="tab-item">
        <a href="#" v-link="{path:'/seller'}">商家</a>
      </div>
      -->
    </div>
    <router-view></router-view>   
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default{
    components:{
      'v-header':header
    }
  }
</script>

<style>
  #app .tab {display:flex; width: 100%; height: 40px; line-height: 40px;  }
  #app .tab .tab-item{flex: 1; text-align: center; }
</style>
