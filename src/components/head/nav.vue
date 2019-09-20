<template>
  <div class="container-fuliter" id="nav">
    <nav class="container navbar navbar-expand-md navbar-dark">
      <!-- Brand -->

      <!-- Toggler/collapsibe Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blogList" class="nav-link">Blog</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Life</a>
          </li>
          <li class="nav-item">
            <router-link to="/blogManagerment" class="nav-link">blogManagerment</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/userLogin" class="nav-link">login</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Mynav",
  data() {
    return {
      model: {}
    };
  },
  created() {
    console.log(localStorage.token);
  }
};
</script>

<style scoped>
#nav {
  background: rgba(52, 52, 53, 0.5);
  position: relative;
  z-index: 5;
  width: 100%;
}
a {
  margin-left: 25px;
  /* border: 1px solid red; */
  color: #ffffff;
}
</style>
