<template>
  <div class="sider col-xs-2">
  	<div class="panel panel-default">
  		<h4 class="panel-heading text-center">价格</h4>
  		<ul class="panel-body" >
  			<li class="text-center" v-for="price in priceFilter"><a href="">{{price.startPrice}}-{{price.endPrice}}</a></li>	
  		</ul>
  	</div>
	
  </div>
</template>
<script>
	export default{
		data(){
			return{
				priceFilter:[
					{
						startPrice:'0.00',
						endPrice:'10.00'
					},
					{
						startPrice:'10.00',
						endPrice:'20.00'
					},
					{
						startPrice:'20.00',
						endPrice:'30.00'
					}
				]
			}
		}
	}
</script>
<style lang="less">
	
</style>
