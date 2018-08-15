<template>
  <div id="app">
    <transition  name="custom-classes-transition"  enter-active-class="animated slideInRight"  >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body,#app {height: 100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
}
img{
  width: 100%;
}
  a:link {color: #000}     /* 未访问的链接 */
  a:visited {color: #000}  /* 已访问的链接 */
  a:hover {color: #000}    /* 当有鼠标悬停在链接上 */
  a:active {color: #000}   /* 被选择的链接 */

</style>
