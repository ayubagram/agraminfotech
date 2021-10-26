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
  <v-container>
    <div class="display-1 mb-4">Meet Our Team</div>
    <div class="teams">
      <div class="team__card pa-4" v-for="(m, i) in members" :key="i">
        <div style="height: 200px;">
          <img :src="m.image" :alt="m.name">
        </div>
        <div>
          <div class="title">{{ m.name }} <v-chip color="primary">{{ m.position }}</v-chip></div>
        </div>
      </div>
    </div>
  </v-container>
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
      this.$store.commit('SET_OVERLAY', false)
    }
  },
  created() {
    this.get()
  }
}
</script>

<style scoped>
.teams {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  grid-gap: 12px;
}
</style>

<!--<style scoped>
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
</style>-->
