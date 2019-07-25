<template>
  <div id="app">
    <el-container>
  <el-container>
    <el-header class="navbar">

      <router-view></router-view>
    
    </el-header>
    <el-container>
    <el-aside width="250px" style="background-color: rgb(255, 255, 255)">
      <router-view name='left'></router-view>
    </el-aside>
    <el-main>主要内容</el-main>
  </el-container>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
    data() {
      return {
       name:1
      }
    },
    methods:{

      greet:function(){
        return this.name = this.name+1;
      }


    //   greet:function(event){
    //  //https://87298455.yuhouchuxing.cn/iem/index.php/Test/test
    // //     http://localhost/boqian/index.php/Welcome/test
    //     this.$axios.post('https://87298455.yuhouchuxing.cn/iem/index.php/Test/test', {
         
    //   })
    //   .then(function (response) {
    //     this.name = response.data.name;
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    // })
    //   }
      
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
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    border-bottom: 1px solid #eaecef;
}
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 461px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 461px;
  }

</style>
