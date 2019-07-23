<template>
  <div id="app">
    <el-container>
  <el-container>
    <el-header class="navbar">
      <router-view></router-view>
    </el-header>
    <el-main> 
      <el-button v-on:click="greet">点击</el-button>
      {{ name }}
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
    data() {
      return {
       name:"ssss"
      }
    },
    methods:{
      greet:function(event){
        console.log("response");
    //     alert(ss);
        this.$axios.post('https://87298455.yuhouchuxing.cn/iem/index.php/Test/test', {
         
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    })
      }
      
  }

    }
    
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.el-header, .el-footer {
    background-color: #f0f9eb;
    color: rgb(126, 19, 19);
    text-align: left;
    line-height: 80px;
  }
.navbar {
    z-index: 20;
    right: 0;
    height: 3.6rem;
    text-align: left;
    background-color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #eaecef;
}
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

</style>
