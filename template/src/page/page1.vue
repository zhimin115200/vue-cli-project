<template>
  <div class="hello">
    <a v-on:click="goback">返回</a>
    directive:<input v-focus/>
    <h1>传参：{{ msg }}</h1>
    <button v-on:click="callService">调用service</button>
    <h3>父组件{{myButtonData}}</h3>
    <MyButton></MyButton>
    <button v-on:click="restApi">调用RestApi</button>
  </div>
</template>

<script>
import PageService from '../service/page1.service.js'
import MyButton from '../components/MyButton.vue'
import RestApi from 'xk-restapi'
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
    },
    restApi: function () {
      var options = {
        operatorType: 'withdraw_testPostSign',
        config: {
          mode: 'dev',
          baseUrl: 'http://3u7mm4.natappfree.cc/chwealth/api/v1',
          authEnable: true,
          authSecret: '123'
        },
        pathParams: [{id: '1'}, {a: 'sdf'}],
        queryParams: {age: '123', zoom: '你好', token: 'qwesdf', f: 'as', d: '123', b: 152},
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        requestBody: {businessCode: '1', ownerCode: '娶你'}
      }
      RestApi.call(options, function (res) {
        console.log('withdraw_testPostSign' + JSON.stringify(res))
      })
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
