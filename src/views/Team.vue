<template>
  <div>
    <v-container class="team__container">
      <div class="team__card d-flex flex-column align-center px-3 py-5" v-for="(m, i) in members" :key="i">
        <div class="team__card__img" style="height: 100px; width: 100px; border-radius: 50%; overflow: hidden;">
          <img :src="m.image" :alt="m.name">
        </div>
        <div class="mt-4 mb-3 text-center">
          <div class="member__name">{{ m.name }}</div>
          <v-chip v-text="m.position" small label color="teal" dark />
        </div>
        <div class="caption text-justify m_desc pc" style="line-height: 1.25;">{{ m.description }}</div>
        <!-- <div class="d-flex" style="grid-gap: 6px;">
          <v-btn icon v-for="(social, s) in socials" :key="s" :color="hover ? 'white' : 'primary'" target="_blank" :href="social.href">
            <v-icon size="20">{{ social.icon }}</v-icon>  
          </v-btn>
        </div> -->
        <div class="mt-1" style="width: 100%;"><v-btn outlined color="amber" x-small @click="open(m)">more</v-btn></div>
      </div>
    </v-container>
    <v-dialog width="500" v-model="dialog">
      <div class="white pa-3 caption" style="line-height: 1.4;">{{ data.description }}</div>
    </v-dialog>
  </div>
</template>

<script>
import { db } from '@/firebase'
export default {
  data: () => ({
    data: {},
    dialog: false,
    socials: [
      { title: 'Facebook', icon: 'mdi-facebook', href: 'https://www.facebook.com' }  ,
      { title: 'Linkedin', icon: 'mdi-linkedin', href: 'https://www.linkedin.com' }  ,
      { title: 'Twitter', icon: 'mdi-twitter', href: 'https://www.twitter.com' }  ,
      { title: 'Instagram', icon: 'mdi-instagram', href: 'https://www.instagram.com' }  
    ],
    members: [] 
  }),
  methods: {
    open(data) {
      this.data = data
      this.dialog= true
    },
    async get() {
      this.$store.commit('SET_OVERLAY', true)
      await this.$binding("members", db.collection('members').orderBy('createdAt', 'desc'))
      this.$store.commit('SET_OVERLAY', false)
    }
  },
  created() {
    this.get()
  }
}
</script>
<style scoped>
.team__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
  grid-gap: 12px;
}
.team__card {
  border: .5px solid #1976d24f;
  transition: 250ms ease-in-out;
  border-radius: 4px;
}
.team__card .member__name {
  font-size: 18px;
  line-height: 1.25;
  font-weight: 500;
}
.team__card:hover {
  background-color: #1976d2;
  color: white;
  border: .5px solid transparent;
}
.team__card:hover .m_desc { color: white; }
.team__container .team__card img { 
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.m_desc {
  -webkit-line-clamp: 5;
  font-size: 13px; 
  font-weight: 400; 
  color: rgb(0 0 0 / 70%);
}
button { animation: none !important; }
@media (max-width: 960px) {
  .team__container { grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); }
}
@media (max-width: 760px) {
  .team__container { grid-template-columns: repeat(auto-fill, minmax(48%, 1fr)); }
}
@media (max-width: 560px) {
  .team__container { grid-template-columns: repeat(auto-fill, minmax(100%, 1fr)); }
}
</style>