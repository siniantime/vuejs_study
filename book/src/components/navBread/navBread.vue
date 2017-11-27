<template>
  <nav class="container ">
  	<ul class="breadcrumb">
  		<li>当前位置：</li>
  		<li><a href="">首页</a></li>
  		<li class="active"><slot name="bread"></slot></li>
  	</ul>
  </nav>
</template>
<script>

</script>
<style lang="less">
	.breadcrumb{
		margin-bottom: 0;
		li{
			padding: 10px 0;
		}
	}
</style>
