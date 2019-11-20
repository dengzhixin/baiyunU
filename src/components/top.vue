<template>
<div class=''>
   <div class="top">
       <div class="content">
           <div class="left">学校代码：10822 </div>
       </div>
   </div>
</div>
</template>

<script>

export default {

components: {},
data () {
   return {
      msg: 'Hello Vue'
      }
},

computed: {},
watch: {},
methods: {},
// 生命周期 - 创建完成（可以访问当前this实例）
created () {

},
// 生命周期 - 挂载完成（可以访问DOM元素）
mounted () {},
// 生命周期 - 创建之前
beforeCreate () {},
// 生命周期 - 挂载之前
beforeMount () {},
// 生命周期 - 更新之前
beforeUpdate () {},
// 生命周期 - 更新之后
updated () {},
// 生命周期 - 销毁之前
beforeDestroy () {},
// 生命周期 - 销毁完成
destroyed () {}
}
</script>
<style scoped>
.top{
  width: 100%;
  height: 45px;
  background-color: #014165
}
.content{
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;
}
.content .left{
    width: 200px;
    height: 100%;
    background-color: #3b89ad;
    line-height: 45px;
    color: white;
    text-align: center
}
</style>
