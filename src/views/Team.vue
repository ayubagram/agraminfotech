<template>
  <div>
    <v-container class="team__container">
      <v-hover v-slot="{ hover }" v-for="(m, i) in members" :key="i">
        <div class="team__card d-flex flex-column align-center px-3 py-6">
          <div class="team__card__img" style="height: 100px; width: 100px; border-radius: 50%; overflow: hidden;">
            <img :src="m.image" :alt="m.name">
          </div>
          <div class="mt-4 mb-3 text-center">
            <div class="member__name mb-1">{{ m.name }}</div>
            <small>{{ m.position }}</small>
          </div>
          <div class="d-flex" style="grid-gap: 6px;">
            <v-btn icon v-for="(social, s) in socials" :key="s" :color="hover ? 'white' : 'primary'" target="_blank" :href="social.href">
              <v-icon size="20">{{ social.icon }}</v-icon>  
            </v-btn>
          </div>
        </div>
      </v-hover>
    </v-container>
  </div>
</template>

<script>
import { db } from '@/firebase'
export default {
  data: () => ({
    socials: [
      { title: 'Facebook', icon: 'mdi-facebook', href: 'https://www.facebook.com' }  ,
      { title: 'Linkedin', icon: 'mdi-linkedin', href: 'https://www.linkedin.com' }  ,
      { title: 'Twitter', icon: 'mdi-twitter', href: 'https://www.twitter.com' }  ,
      { title: 'Instagram', icon: 'mdi-instagram', href: 'https://www.instagram.com' }  
    ],
    members: [] 
  }),
  methods: {
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
.team__container .team__card img { 
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
button { animation: none !important; }
@media (max-width: 960px) {
  .team__container { grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); }
}
@media (max-width: 760px) {
  .team__container { grid-template-columns: repeat(auto-fill, minmax(48%, 1fr)); }
}
</style>