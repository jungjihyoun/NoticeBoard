<template>
  <div class = "header">
      <router-link to = "/news">News</router-link> |
      <router-link to = "/ask">Ask</router-link> |
      <router-link to = "/jobs">Jobs</router-link> 
  </div>
</template>

<script>
export default {

}
</script>

// 해당 컴포넌트에만 스타일 적용 scoped
<style scoped>
    .header{
        color: white;
        background-color: #42b883;
        display: flex;
        padding: 8px;
        justify-content: center;

    }

    .header .router-link-exact-active{
        color: #35495e;

    }
    .header a {
        color: white;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>