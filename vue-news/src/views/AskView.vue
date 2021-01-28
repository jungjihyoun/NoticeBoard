<template>
 <div>
    <div v-for="ask in asks" :key="ask">{{ask.title}}</div>
 </div>

</template>

<script>
import { fetchAsk } from '../api/index.js';
export default {
  data(){
    return{
      asks: []
    }
  },
  created() {
    fetchAsk()
    .then(response => this.asks = response.data)
    .catch(error => console.log(error));
  },
  
}
</script>

<style>
</style>