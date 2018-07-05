<template>
  <div class="hello">
    <a v-on:click="goback">返回</a>
    directive:<input v-focus/>
    <h1>传参：{{ msg }}</h1>
    <h3>filter：{{value | plus5}}</h3>
    <button v-on:click="callService">调用service</button>
    <h3>父组件{{myButtonData}}</h3>
    <MyButton></MyButton>
  </div>
</template>

<script>
import PageService from '../service/page1.service.js'
import MyButton from '../components/MyButton.vue'
export default {
  components: {
    MyButton
  },
  name: 'page1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: 12
    }
  },
  computed: {
    myButtonData () {
      return this.$store.state.value
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
