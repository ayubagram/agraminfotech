<template>
  <v-container>
    <div style="font-size: 25px; font-weight: 500;" class="mb-6 text-center">Benefits of Working With Us</div>
    <div class="benefits">
      <div class="benfit d-flex flex-column align-center text-center px-3 py-5" v-for="(b, i) in benefits" :key="i">
        <img :src="b.img" :alt="b.title" height="80">
        <div style="font-size: 15px; font-weight: 500; margin-top: 8px; line-height: 1.25;" v-text="b.title" />
      </div>
    </div>
    <!-- <div style="border-left: 2px solid red; background-color: rgb(289 83 80 / 10%);" class="mt-6 pa-3 red--text">We don't have any openings currently, please visit us again soon.</div> -->
    <div style="font-size: 25px; font-weight: 500;" class="mt-8 mb-4">Available Opening Jobs</div>
    <div class="jobs">
      <div class="job__item pa-4 pa-md-5 pa-lg-6" v-for="(j, a) in jobs" :key="a">
        <div class="job__title" style="line-height: 1.2; letter-spacing: .5px; font-weight: bold;">{{ j.title }}</div>
        <div class="caption mt-2" style="line-height: 1;">Vacancy :- <b>{{ j.vacancy }}</b></div>
        <div class="caption my-1" style="line-height: 1;">Experiance :- <b>{{ j.experience }} yrs. / {{ j.level }}</b></div>
        <div class="job__description pc my-3">{{ j.description }}</div>
        <div class="d-flex" style="grid-gap: 6px;">
          <v-btn color="primary" elevation="0" @click.stop="apply">apply</v-btn>
        </div>
      </div>
    </div>
    <div class="job__item text-center caption pa-3" v-if="jobs.length <= 0">No jobs available currently.</div>  
  </v-container>
</template>

<script>
import { db } from '@/firebase'
export default {
  firestore: () => ({
    jobs: db.collection('jobs').where('status', '==', true).orderBy('createdAt', 'desc')
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
  }),
  methods: {
    apply() { console.log('apply') }
  }
}
</script>

<style scoped>
.benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));
  grid-gap: 12px;
}
.benfit {
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
}
.jobs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-gap: 12px;
}
.job__item {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
}
.jobs button { animation: none !important; }
.job__description {
  -webkit-line-clamp: 5;
  font-size: 13px; 
  font-weight: 400; 
  color: rgb(0 0 0 / 70%);
}
</style>