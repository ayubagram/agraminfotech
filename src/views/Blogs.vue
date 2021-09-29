<template>
  <v-container>
    <div style="font-size: 25px; font-weight: 500;" class="mb-4">Read Our Latest Posts</div>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(blog, b) in blogs" :key="b" @click.stop="more(blog['.key'])">  
        <div class="blog">
          <div class="img img-back" :style="{ backgroundImage: `url(${blog.image})` }" />
          <div class="pa-4">
            <div class="blog-title pc mb-2">{{ blog.title }}</div>  
            <div class="caption font-weight-bold">{{ getDate(blog.createdAt) }}</div>
          </div> 
        </div>
      </v-col>
    </v-row>
  </v-container>  
</template>

<script>
import { db } from '@/firebase'
export default {
  data: () => ({
    blogs: []
  }),
  methods: {
    more(key) {
      this.$router.push({ name: 'Single Blog', params: { id: key } })
    },
    getDate(date) {
      return new Date(date).toLocaleDateString()  
    },
    async get() {
      this.$store.commit('SET_OVERLAY', true)
      await this.$binding("blogs", db.collection('blogs').orderBy('createdAt', 'desc'))
      this.$store.commit('SET_OVERLAY', false)
    }
  },
  created() {
    this.get()
  } 
}
</script>

<style scoped>
.blog {
  overflow: hidden;  
  cursor: pointer;
  transition: 250ms ease-in-out;
}
.blog:hover {
  border-radius: 10px;
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, .25);  
  background-color: #1976d2;
  color: white;
}
.blog-title { 
  height: 48px;   
  font-weight: 400;
  font-size: 20px;
  text-transform: capitalize;  
  -webkit-line-clamp: 2;
}
.img { height: 35vh; }
</style>