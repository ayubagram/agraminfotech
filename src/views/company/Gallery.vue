<template>
  <v-container style="min-height: 50vh;">
    <v-row>
      <v-col cols="12" style="font-size: 30px; font-weight: 500;">Experience Some of Our Memories</v-col>
      <v-col cols="12" sm="6" md="4" v-for="(photo, p) in photos" :key="p">
        <div class="gallery-div">
          <div class="gallery img-back" :style="{ backgroundImage: `url(${photo.image})` }" @click="openImg(photo.image)" />
        </div>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="542">
      <div class="white full-img img-back" :style="{ backgroundImage: `url(${img})` }" /> 
    </v-dialog>
  </v-container>
</template>

<script>
import { db } from '@/firebase'
export default {
  firestore: () => ({
    photos: db.collection('gallery').orderBy('createdAt', 'desc')
  }),
  data: () => ({
    dialog: false,
    img: null
  }),
  methods: {
    openImg(img) {
      this.dialog = true
      this.img = img  
    },
  }, 
}
</script>

<style scoped>
.full-img { 
  min-height: 90vh; 
  background-size: contain !important; 
}
.gallery-div { 
  height: 50vh;
  cursor: pointer;
  transition: ease-in-out 250ms;
  overflow: hidden;
}
.gallery { 
  height: 100%;
  transition: ease-in-out 250ms;
}
.gallery-div:hover {
  border-radius: 15px;
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, .25);
}
.gallery-div:hover .gallery { transform: scale(1.5); }
</style>