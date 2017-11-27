<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span slot="bread">励志</span>
    </nav-bread>
    <div class="container main">
      <div class="row">
        <sider></sider>
        <div class="col-xs-10">
          <ul class="row">
            <li class="col-xs-3" v-for="(item,index) in bookList">
              <img v-bind:src="'/static/images/'+item.bookImg"/>
              <div>{{item.bookName}}</div>
              <div>{{item.bookAuthor}}</div>
            </li>
          </ul>
        </div>
       
      </div>
      
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import NavHeader from "./../components/header/header.vue"
  import NavFooter from "./../components/footer/footer.vue"
  import NavBread from  "./../components/navBread/navBread.vue"
  import sider from "./../components/sider/sider.vue"
  import axios from 'axios'
  export default{
      data(){
         return {
             bookList:[]
         }
      },
    components:{
        NavHeader,
        NavFooter,
        NavBread,
        sider
    },
    mounted:function () {
      this.getGoodsList();
    },
    methods:{
          getGoodsList(){
              axios.get("/book").then((result)=>{
                  var res = result.data;
                  this.bookList = res.result;
              })
          }
    }
  }
</script>
<style lang="less">
  body{
    background: #f4f4f4;
  }
  .container{
    min-width: 1170px;
  }
  .main{
    padding: 15px;
    min-height: 800px;
    background: #fff;
    li{
      padding: 10px;
      img{
        width: 160px;
      }
    }
  }
  
</style>
