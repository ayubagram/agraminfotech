<template>
  <v-container>
    <div style="font-size: 25px; font-weight: 500;" class="mb-5">Benefits of Working With Us</div>
    <div class="benefits">
      <div class="benfit d-flex flex-column align-center text-center pa-4" v-for="(b, i) in benefits" :key="i">
        <img :src="b.img" :alt="b.title" height="80">
        <div style="font-size: 15px; font-weight: 500; margin-top: 8px; line-height: 1.25;" v-text="b.title" />
      </div>
    </div>
    <div style="border-left: 2px solid red; background-color: rgb(289 83 80 / 10%);" class="mt-6 pa-3 red--text">We don't have any openings currently, please visit us again soon.</div>
    <!-- <div style="font-size: 25px; font-weight: 500;" class="mt-8 mb-4">Available Opening Jobs</div>
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
    </v-row> -->
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
      { title: 'Real Impact', img: require('@/assets/benefits/impact.png') },
      { title: 'Flexible Hours', img: require('@/assets/benefits/flexible.png') },
      { title: 'Dynamic WorkSpace', img: require('@/assets/benefits/workspace.png') },
      { title: 'Education & Training', img: require('@/assets/benefits/education.png') },
      { title: 'Relationships', img: require('@/assets/benefits/relationship.png') }
    ]
  })
}
</script>

<style scoped>
.benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18%, 1fr));
  grid-gap: 20px;
}
.benfit {
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
}
.jobs {
  overflow: hidden;
  height: 18vh;
  background-color: rgba(128, 128, 128, .05);
  transition: ease-in-out 250ms;
  cursor: pointer;
}
.jobs:hover {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .25);
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
@media (max-width: 960px) {
  .benefits { grid-template-columns: repeat(auto-fit, minmax(23%, 1fr)); grid-gap: 12px; }
}
@media (max-width: 760px) {
  .benefits { grid-template-columns: repeat(auto-fit, minmax(30%, 1fr)); grid-gap: 12px; }
}
@media (max-width: 560px) {
  .benefits { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); grid-gap: 12px; }
}
</style>