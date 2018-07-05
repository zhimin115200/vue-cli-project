<template>
  <div>
    <h1>子组件{{value}}</h1>
    <button style="color: red;width: 100px;height: 100px" v-on:click="click">子组件点我</button>
  </div>
</template>
<script>
export default {
  name: 'MyButton',
  data () {
    return {
    }
  },
  computed: {
    value () {
      return this.$store.state.value
    }
  },
  methods: {
    click: function () {
      this.$store.commit('inc')
    }
  }

}
</script>
