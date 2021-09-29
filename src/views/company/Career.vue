<template>
  <v-container>
    <div style="font-size: 25px; font-weight: 500;" class="mb-5">Benefits of Working With Us</div>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(benefit, b) in benefits" :key="b">
        <div class="benefit pa-4">
          <img :src="benefit.img">
          <div class="mt-3">{{ benefit.title }}</div>
        </div>
      </v-col>
    </v-row>
    <div style="font-size: 25px; font-weight: 500;" class="mt-8 mb-4">Available Opening Jobs</div>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(career, c) in careers" :key="c">
        <div class="jobs d-flex">
          <div class="jobs-img img-back" :style="{ backgroundImage: `url(${career.image})` }" />
          <div class="pa-3" style="width: calc(100% - 120px);">
            <div style="font-size: 20px; lin-height: 1.25; font-weight: 500;">{{ career.title }}</div>
            <div class="my-1" style="line-height: 1.25;">Available :- {{ career.vacancy }}</div>
            <div class="desc pc">{{ career.description }}</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from '@/firebase'
export default {
  firestore: () => ({
    careers: db.collection('jobs').orderBy('createdAt', 'desc')
  }),
  data: () => ({
    benefits: [
      { title: 'Great Team', img: require('@/assets/benefits/team.png') },
      { title: 'Ream Impact', img: require('@/assets/benefits/real.png') },
      { title: 'Extra Benefits', img: require('@/assets/benefits/benefit.png') },
      { title: 'Dynamic WorkSpace', img: require('@/assets/benefits/team.png') },
      { title: 'Education', img: require('@/assets/benefits/education.png') },
      { title: 'Relationships', img: require('@/assets/benefits/relationships.jpg') }
    ]
  })
}
</script>

<style scoped>
.benefit { min-height: 25vh !important; }
.jobs {
  overflow: hidden;
  height: 18vh;
  background-color: rgba(128, 128, 128, .05);
  transition: ease-in-out 250ms;
  cursor: pointer;
}
.jobs:hover {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .25);
  border-radius: 15px;
}
.jobs-img {
  width: 120px;
  height: 100%;
}
.jobs .desc {
  text-transform: capitalize;  
  -webkit-line-clamp: 4;
  font-size: 13px;
  line-height: 1.4 !important;
}
</style>