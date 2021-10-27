<!--<template>
  <v-container>
    <div class="display-1 mb-4">Meet Our Team</div>
    <v-row>
      <v-col cols="12" v-for="(m, i) in members" :key="i">
        <div class="team d-flex flex-column flex-md-row align-center align-md-start pa-3 pa-sm-4 pa-md-5 pa-lg-6">
          <div class="avatar">
            <v-avatar size="100">
              <img :src="m.image" :alt="m.name">
            </v-avatar>  
          </div>
          <div class="ml-md-5 ml-lg-6 mt-2 mt-md-0">
            <div class="team-title d-flex align-center justify-space-between">
              <div>{{ m.name }} | <span class="caption">{{ m.position }}</span></div>
              <div>
                <v-btn icon v-for="(social, s) in m.socials" :key="s" color="primary" target="_blank" :href="social.link">
                  <v-icon size="20">{{ social.icon }}</v-icon>  
                </v-btn>
              </div>
            </div>
            <div style="font-weight: 300;" class="text-justify pc mt-2">{{ m.description }}</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>  
</template>-->

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
      await this.$binding("members", db.collection('members').orderBy('createdAt'))
      this.members.forEach( m => m['show'] = false)
      this.$store.commit('SET_OVERLAY', false)
    }
  },
  created() {
    this.get()
  }
}
</script>
<style scoped>
.team { 
  border-radius: 5px;
  border-top-right-radius: 35px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .25);
}
.team-title div {
  font-size: 22px;
  font-weight: 500;  
  line-height: 1;
}
.team__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
  grid-gap: 12px;
}
.team__card {
  border: .5px solid rgb(0 0 0 / 10%);
  transition: 250ms ease-in-out;
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