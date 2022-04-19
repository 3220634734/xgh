<template>
  <div class="user">
    <div style="margin-top: 20px;font-size: 18px;color: white;">你好Super Admin</div>
    <div style="margin-top: 20px;">
      <img :src="logo" width="100px" height="95px" style="border-radius:50%;"/>
    </div>
    <div style="margin-top: 20px;font-size: 18px;color: aqua;">账号：admin</div>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: 'Vue Admin Template',
      logo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
    }
  }
}
</script>

<style lang="scss" scoped>
  .user{
    text-align: center;
  }
</style>
