<template>
  <div>
    <div v-for="user in users" :key="user"> {{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNews } from '../api/index.js';

export default {
  data(){
    return{
      users: []
    }
  },
   created() {
    fetchNews()
      .then(response => this.users = response.data)
      .catch(error => console.log(error));
  }
}
  
</script>

<style>
</style>

// views에는 가급적이면 페이지 라우팅에 대한 정보만 넣자
// 로직,패치,데이터 등은 별도의 컴포넌트로 빼자