<template>
  <div class="topbar">
    <span class="sign">O</span>
    <span class="center-info">2020 Folio</span>
    <div class="menu">
      <router-link to="/">Works</router-link>
      <router-link to="about">About Me</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.topbar {
  position: sticky;
  text-align: center;
  width: 100%;

  .sign {
    position: absolute;
    left: 4vh;
    top: 3vh;
    font-family: Axiforma;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 53px;
    color: #ffffff;
    float: left;
  }

  .center-info {
    position: relative;
    top: 4vh;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }

  .menu {
    position: absolute;
    float: right;
    right: 4vh;
    top: 4vh;

    a {
      cursor: none;
      text-decoration: none;
      color: white;
      margin-left: 38px;
      opacity: 0.3;
      transition: opacity 0.3s;

      &:hover {
        opacity: 1;
      }

      &.router-link-exact-active {
        opacity: 1;
      }
    }
  }
}
</style>