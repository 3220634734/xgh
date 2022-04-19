<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div class="dq">
        当前位置：产品与服务
      </div>
      <el-row :gutter="20">
        <el-col :span="8" :xs="24">
          <div class="grid-content bg-purple">
            <div class="box1">
              <img src="../../assets/index/approve.png">
            </div>
            <div class="box2">
              <p>认证</p>
              <p>当前认证状态：未认证<span class="pan">立即认证</span></p>
            </div>
          </div>
        </el-col>
        <el-col :span="8" :xs="24">
          <div class="grid-content bg-purple">
            <div class="box1">
              <img src="../../assets/index/balance.png">
            </div>
            <div class="box2">
              <p>余额<span class="pan2">账单</span></p>
              <p>当前账户余额：100<span class="pan">在线充值</span></p>
            </div>
          </div>
        </el-col>
        <el-col :span="8" :xs="24">
          <div class="grid-content bg-purple">
            <div class="box1">
              <img src="../../assets/index/information.png">
            </div>
            <div class="box2">
              <p>消息</p>
              <p>当前未读：23<span class="pan">查看消息</span></p>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="ser">
        <div class="ser_i">
          <div class="ser_i_div"></div><span class="pan">我的服务</span>
        </div>
        <div class="ser_con">
          <div v-for="li in content" class="ser_con_div">
            <div style="margin-top: 5px;">
              <img :src="li.img" />
            </div>
            <h3 style="margin-top: 10px;">{{li.title}}</h3>
            <div style="margin-top: 10px;color: gray;">{{li.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      content:[
        {
          img:require("../../assets/index/serve1.jpg"),
          title:"职业价值感评估",
          content:"职业价值感评估职业价值感评估职业价值感评估职业价值感评估职业价值感评估"
        },
        {
          img:require("../../assets/index/serve2.jpg"),
          title:"情绪管理测试",
          content:"职业价值感评估职业价值感评估职业价值感评估职业价值感评估职业价值感评估"
        },
        {
          img:require("../../assets/index/serve3.jpg"),
          title:"人家沟通风格测试",
          content:"职业价值感评估职业价值感评估职业价值感评估职业价值感评估职业价值感评估"
        },
        {
          img:require("../../assets/index/serve4.jpg"),
          title:"家长知子考卷",
          content:"职业价值感评估职业价值感评估职业价值感评估职业价值感评估职业价值感评估"
        },
      ]
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.dashboard {
  &-container {
    padding: 0px 30px;
    background-color: #EDF0F5;
    height: 1000px;
  }
  &-text {
    margin-top: 0px;
    .el-row {
      &:last-child {
        margin-bottom: 0;
      }
    }
    .dq{
      color:#00BCBA;
      background-color: white;
      margin-bottom: 15px;
      line-height: 40px;
      padding: 0px 10px;
      position: relative;
      top: 20px;
    }
    .bg-purple {
      margin-top: 20px;
      display: flex;
      padding: 10px;
      background-color: white;
      .box1{
        width: 5vw;
        img{
          width:5vw;
        }
      }
      .box2{
        line-height: 2.5vw;
        margin-left: 1.5vw;
        font-size: 1vw;
        flex: 1;
        .pan{
          color:#FF9C3B;
          display:block;
          float:right;
        }
        .pan2{
          float: right;
        }
      }
    }
    .el-tabs__content{
      background-color: #EDF0F5;
    }
    .ser{
      background-color: white;
      margin-top: 20px;
      padding: 10px 20px;
      .ser_i{
        padding-bottom: 20px;
        border-bottom:1px dashed #dddddd;
        .ser_i_div{
          display: inline-block;
          height:20px;
          width: 5px;
          border-radius:2.5px;
          background:#05BFBF;
          position: relative;
          top:3px;
        }
        .pan{
          font-size:20px;
          margin-left: 15px;
          color:#05BFBF;
        }
      }
    }
    .ser_con{
      display: flex;
      .ser_con_div{
        flex: 1;
        padding: 1.5vw;
        img{
          width: 100%;
        }
      }
    }
  }
}
</style>
