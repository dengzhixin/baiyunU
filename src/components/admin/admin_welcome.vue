<template>
<div class='welcome'>
   <h1>{{msg}}</h1>
</div>
</template>

<script>

export default {

components: {},
data () {
   return {
      msg: '欢迎使用'
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
<style>
.welcome{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
</style>
