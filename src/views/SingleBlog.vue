<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <div class="blog-img" :style="{ backgroundImage: `url(${blog.image})` }" />
      </v-col>  
      <v-col cols="12" sm="12" md="6">
        <div class="display-1">{{ blog.title }}</div>
        <div class="text-justify mt-2">{{ blog.description }}</div>  
      </v-col>
    </v-row>
  </v-container>  
</template>

<script>
import { db } from '@/firebase'
export default {
  data: () => ({
    blog: {}  
  }),
  methods: {
    async get() {
      this.$store.commit('SET_OVERLAY', true)
      await db.collection('blogs').doc(this.$route.params.id).get().then( doc => this.blog = doc.data()).catch( e => console.log(e))  
      this.$store.commit('SET_OVERLAY', false)
    }  
  },
  created() {
    this.get()  
  }
}
</script>

<style scoped>
.blog-img {
  height: 50vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;  
}
</style>