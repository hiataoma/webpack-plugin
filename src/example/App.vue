<template>
    <div id="app">
      <test/>
      <test2/>
    </div>
  </template>
  
  <script>
  import test2 from "../lib/test2/index.vue";
  import test from "../lib/test/index.vue";
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components: {
      test,
      test2
    },
    methods: {}
  }
  </script>
    
  <style>
  #app {
    height: 100%;
    width: 100%;
  }
  * {
    margin: 0;
  }
  </style>