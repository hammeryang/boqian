<template>
    <div>

        <el-row>
            <el-col  :md="8" :span="8" ><div class="grid-content bg-purple hh">博谦</div></el-col>
            <el-col  :md="4" :span="8">
                <div class="grid-content bg-purple hh">
                    <el-input size="small"  v-model="input" placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search" ></el-button>
                    </el-input>
                </div>
            </el-col>
            <el-col  :md="1" :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col  :md="8"  :span="8">
                <div class="grid-content bg-purple">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">   
        <el-menu-item index="1">导航</el-menu-item>
        <el-submenu index="2">
            <template slot="title">大前端</template>
                 <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
        </el-submenu>
        <el-menu-item index="3" >大后端</el-menu-item>
        <el-menu-item index="4">修炼算法</el-menu-item>
</el-menu>
                </div>
            </el-col>
        </el-row>



      
<div class="line"></div>
       
    </div>
</template>
<script>
export default {
    name: 'Heard',
    data(){
      return {
          input: '',
          activeIndex: '1',
          activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style>
.bg-purple {
    background: #ffffff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 60px;
  }
  .hh{
      line-height: 60px;
  }
  .el-input-group__append{
          background-color : #ffffff;
  }
  .el-input--small .el-input__inner {
    height: 40px;
    line-height: 32px;
}
</style>
