<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <p slot="bread">励志</p>
      <span slot="test">test</span>
    </nav-bread>
    <div>
      <ul>
        <li v-for="(item,index) in bookList">
          <img v-bind:src="'/static/images/'+item.bookImg"/>
          <div>{{item.bookName}}</div>
          <div>{{item.bookAuthor}}</div>
        </li>
      </ul>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import NavHeader from "./../components/header/header.vue"
  import NavFooter from "./../components/footer/footer.vue"
  import NavBread from  "./../components/navBread/navBread.vue"
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
        NavBread
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
  li{
    padding: 10px;
    img{
      width: 235px;
    }
  }
</style>
