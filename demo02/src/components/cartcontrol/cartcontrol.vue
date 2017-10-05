<template>
  <div class="cartcontrol">
      <div class="cart-decrease" @click="decreaseCart">
        <transition name="move">
          <span v-if="food.count>0"  class="inner icon-remove_circle_outline"></span>
        </transition>
      </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default{
    props:{
        food:{
            type:Object
        }
    },

    methods:{
        addCart(){
            if(!this.food.count){
                Vue.set(this.food,'count',1);
            }else{
                this.food.count++;
            }
        },
        decreaseCart(){
          if(this.food.count){
              this.food.count--;
          }
        }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size :0
    .cart-decrease
      display: inline-block
      .inner
        padding: 6px
        line-height:24px
        font-size :24px
        color:rgb(0,160,220)
      .move-enter-active, .move-leave-active
        transition :all 2s ease
      .fade-enter, .fade-leave-to
        opacity :0
      /*
      &.move-enter-avtive, &.move-leave-avtive
        opacity: 0
        transform : translate3D(24px,0,0)
      */
    .cart-count
      display: inline-block
      vertical-align :top
      width:12px
      padding-top :6px
      line-height:24px
      text-align :center
      font-size :10px
      color:rgb(147,153,159)
    .cart-add
      display: inline-block
      padding:6px
      line-height:24px
      font-size :24px
      color:rgb(0,160,220)
</style>
