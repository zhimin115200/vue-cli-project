<template>
  <div class="hello">
    <a v-on:click="goback">返回</a>
    <input v-focus/>
    <h1>{{ msg }}</h1>
    <h3>{{value | plus5}}</h3>
    <button v-on:click="callService">调用service</button>
  </div>
</template>

<script>
import PageService from '../service/page1.service.js'
export default {
  name: 'page1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: 12
    }
  },
  created: function () {
    this.msg = this.$route.query.msg
  },
  methods: {
    goback: function () {
      this.$router.back()
    },
    callService: function () {
      alert(PageService.getAAA())
    }
  },
  mounted: function () {}
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
