<template>
  <div id="login">
    <p class="page">login page</p>
    <div>
      <img src="../assets/img/002.jpg" alt>
    </div>
    <router-link to="/home" tag="button">主页面</router-link>
    <div class="flex"></div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
#login {
  .page {
    color: #09f;
  }
  .flex {
    position: relative;
    width: 50px;
    height: 50px;
    opacity: 0.5;
    border: none;
    // resolve 1px problem
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid #000;
      border-radius: 10px;
      box-sizing: border-box;
      width: 200%;
      height: 200%;
      transform: scale(0.5);
      transform-origin: left top;
    }
  }
}
</style>
