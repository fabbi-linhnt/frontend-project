<template>
  <div class="hello">
    <router-link to="/"><button class="btn btn-dark">Trang chủ</button></router-link>
    <div class="col-md-4 offset-md-4">
      <h2>Đăng nhập</h2>
      <form action="">
        <label for="user">Tên Đăng Nhập</label>
        <input type="text" name="user" class="form-control">
        <label for="pass">Mật khẩu</label>
        <input type="password" name="pass" class="form-control">
        <input type="submit" class="btn btn-info form-control mt-2" name="Login" value="Đăng nhập">
      </form>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: 'Login',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>