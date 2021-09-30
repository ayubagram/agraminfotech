<template>
  <div class="Home">
    <div class="home-banner">
      <!-- <div class="home-banner-text white--text" :style="{ padding: padding == 'xs' ? '50px' : padding == 'sm' ? '80px' : padding == 'md' ? '100px' : '200px' }">
        <div class="mb-5 banner-title" :style="{ fontSize: padding == 'xs' ? '30px' : padding == 'sm' ? '34px' : padding == 'md' ? '42px' : '50px' }">
          ENABLING TECHNOLOGY <br> TO TRANSFORM
        </div>
        <v-btn color="primary" large rounded max-width="300" @click="() => this.$store.commit('SET_REQUEST_QUOTE', true)">get a free consultation</v-btn>
      </div> -->
      <v-carousel :show-arrows="true" :cycle="true" hide-delimiters height="100%">
        <v-carousel-item v-for="(item, i) in slides" :key="i" :src="item.img">
          <div style="height: 100%; width: 100%; background-color: rgb(0 0 0 / 50%);" class="d-flex flex-column justify-center align-center text-center white--text pa-3">
            <div class="display-1 mb-0 mb-md-2">{{ item.title }}</div>
            <div class="mx-auto" style="max-width: 500px;">{{ item.desc }}</div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  
    <!-- Who we are -->
    <div class="light-blue lighten-5 mt-6 mt-sm-8 mt-md-11 mt-lg-14 py-6 py-sm-8 py-md-11 py-lg-14">
      <v-container>
        <v-row align="center">
          <v-col cols="12" sm="12" md="6">
            <h1 style="line-height: 1;" class="mb-3">Who We Are</h1>
            <p align="justify">
              Agram Infotech is a leading software company based in Birgunj, Nepal. Agram strives for developing
              intelligent and very cost effective software, apps, IoT and any customized software at a client’s request.
              Agram has highly skilled development team and focuses on quality, cost and timely delivering of any projects.
            </p>
            <v-btn color="primary" large rounded width="200" to="/company/about-us">learn more</v-btn>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-carousel :show-arrows="false" cycle hide-delimiters height="40vh">
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item"></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Our Memories -->
    <!-- <div class="py-6 pb-sm-8 pb-md-11 pb-lg-14" style="min-height: 30vh;">
      <v-container> 
        <div class="mb-4 d-flex justify-space-between">
          <div style="font-size: 25px; font-weight: 500;">Some of Our Memories</div>
          <v-btn outlined color="primary" small style="animation: none !important; background-color: transparent;" to="/company/gallery">
            <span>more</span>
            <v-icon small right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="(gal, g) in gallery" :key="g">
            <div class="gallery img-back" :style="{ backgroundImage: `url(${gal.image})` }" />
          </v-col>
        </v-row>
      </v-container>
    </div> -->
    <!-- Home Services -->
    <div class="py-6 pb-sm-8 pb-md-11 pb-lg-14">
      <v-container> 
        <div style="font-size: 25px; font-weight: 500;">Our Services</div>
        <div class="three__line__grid mt-2">
          <div v-for="(service, t) in services" :key="t">
            <div class="service pa-4 d-flex flex-column justify-center align-center" @click.prevent="() => $router.push(service.to)">
              <img :src="service.img" :alt="service.title">
              <div class="mt-3">{{ service.title }}</div>
            </div>
          </div>
        </div>
      </v-container>
    </div>
    <!-- Home Products -->
    <div class="pb-6 pb-sm-8 pb-md-11 pb-lg-14" style="min-height: 30vh;">
      <v-container> 
        <div class="mb-4 d-flex justify-space-between">
          <div style="font-size: 25px; font-weight: 500;">Our Best Products</div>
          <v-btn outlined color="primary" small style="animation: none !important; background-color: transparent;" to="/products">
            <span>more</span>
            <v-icon small right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
        <div class="three__line__grid">
          <div v-for="(product, t) in products" :key="t">
            <v-hover v-slot="{ hover }">
              <div class="portfolio white" @click.prevent="() => $router.push(product.to)" :style="{ backgroundImage: `url(${product.img})` }">
                <v-expand-transition>
                  <div v-if="hover" class="transition-fast-in-fast-out portfolio-reveal pa-4 white--text" style="height: 100%; background-color: rgba(0, 0, 0, .5);">
                    <div class="display-1">{{ product.title }}</div>
                    <div class="text-justify mt-2">{{ product.desc }}</div>
                  </div>
                </v-expand-transition>
              </div>
            </v-hover>
          </div>
        </div>
      </v-container>
    </div>
    <!-- Our Team -->
    <div class="pb-6 pb-sm-8 pb-md-11 pb-lg-14">
      <v-container>
        <h1 style="line-height: 1;">Our Management Team</h1>
        <div class="grid mt-4">
          <v-hover v-slot="{ hover }" v-for="(m, a) in teams" :key="a">
            <div class="img-div" :style="{ backgroundImage: `url(${m.image})` }" @click.stop="openCard(m)">
              <v-expand-transition>
                <div v-if="hover" class="img-content flex-column white--text transition-fast-in-fast-out v-card--reveal">
                  <div class="title" style="border-bottom: 1px solid white;">{{ m.name }}, {{ m.position }}</div>
                  <div class="d-flex flex-wrap mt-2" style="grid-gap: 10px;">
                    <div class="img-social white" v-for="(social, s) in m.socials" :key="s">
                      <a class="d-flex justify-center align-center" target="_blank" :href="social.link">
                        <v-icon color="primary" size="20">{{ social.icon }}</v-icon>
                      </a>
                    </div>
                  </div>
                  <div class="pa-3 pc">{{ m.description }}</div>
                </div>
              </v-expand-transition>
            </div>
          </v-hover>
        </div>
      </v-container>
    </div>
    <!-- Blogs -->
    <!-- <div class="pb-6 pb-sm-8 pb-md-11 pb-lg-14" style="min-height: 30vh;">
      <v-container>
        <div class="mb-4 d-flex justify-space-between">
          <div style="font-size: 25px; font-weight: 500;">Read Our Latest Posts</div>
          <v-btn outlined color="primary" small style="animation: none !important; background-color: transparent;" to="/blogs">
            <span>more</span>
            <v-icon small right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="(blog, b) in blogs" :key="b">  
            <div class="blog" @click="more(blog['.key'])">
              <div class="img img-back d-flex align-end" :style="{ backgroundImage: `url(${blog.image})` }">
                <div class="pa-4" style="background-color: rgba(0, 0, 0, .3); width: 100%;">
                  <div class="blog-title pc mb-2">{{ blog.title }}</div>  
                </div>
              </div> 
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div> -->

    <v-dialog v-model="dialog" max-width="600px" transition="dialog-transition">
      <div class="white pa-3 pa-sm-4 pa-md-5 pa-lg-6">
        <div class="mx-auto dialog-img" :style="{ backgroundImage: `url(${info.image})` }" />
        <div class="text-center my-1">
          <span class="title">{{ info.name }}</span> | 
          <span class="caption">{{ info.position }}</span>
        </div>
        <div class="pc">{{ info.description }}</div>
      </div>
    </v-dialog>

  </div>
</template>


<script>
import { db } from '@/firebase'
export default {
  metaInfo: () => ({
    title: 'Home - Agram Infotech',
    meta: [
      { name: 'description', content: 'This is agram infotech home content description' },
      { property: 'og:title', content: 'Home - Agram Infotech' },
      { property: 'og:site_name', content: 'Agram Infotech'},
      { property: 'og:description', content: 'This is home content' },
      { property: 'og:type', content: 'home' },
      { property: 'og:url', content: 'https://agraminfotech.com/' },   
    ]
  }),
  data: () => ({
    items: [ require('../assets/products/img1.png'), require('../assets/products/img2.png'), require('../assets/products/img3.png'), require('../assets/products/img4.png'), require('../assets/products/img5.png')],
    services: [
      { title: 'Mobile App Development', img: require('@/assets/icons/mobile.png'), to: '/services/mobile-app-development' },
      { title: 'Web App Development', img: require('@/assets/icons/web.png'), to: '/services/web-app-development' },
      { title: 'Digital Marketing', img: require('@/assets/icons/dm.png'), to: '/services/digital-marketing' },
      { title: 'Ecommerce', img: require('@/assets/icons/ecommerce.png'), to: '/services/ecommerce' },
      { title: 'On Demand App', img: require('@/assets/icons/demand.png'), to: '/services/on-demand-app' }
    ],
    products: [
      { title: 'Agram Lab (Pathology)', img: require('../assets/icons/digital-pathology.png'), desc:'Developed by a team of specialized engineers and pathologists. Anatomical pathology procedures management system processes the whole workflow and digitalizes your lab.', to: '/products/agram-lab' },
      { title: 'Dairy Management System', img: require('../assets/icons/dairy-mgmt.png'), desc:'Centrally controlled Web-Application manages all aspects of a complete accounting software with detailed options for milk procurement billings, deductions, incentives and commissions.', to: '/products/dairy-management' },
      { title: 'Health Post Management System', img: require('../assets/icons/hospital-mgmt.png'), desc:'Health Post Management Software improves quality of care and, ultimately, patient experience by optimizing the coordination of care across the health posts, practices, or ancillary care clinics.', to: '/products/hospital-management' },
      { title: 'Industry Management System', img: require('../assets/icons/industry.jpg'), desc:'An advanced software application that works as a comprehensive and one stop solution for all your business development needs', to: '/products/industry-management' },
      { title: 'Payroll Management System', img: require('../assets/icons/payroll-mgmt.png'), desc:'With Payroll Management System, time tracking, and Human Capital Management (HCM) in one payroll management system, it’s easier than ever to flexibly manage your processes and pay your workforce with confidence.', to: '/products/payroll-management' },
      // { title: 'UI & UX Design', img: require('../assets/icons/ui.png'), desc:'Design interactive prototypes for Android, iOS, Web and Desktop as per your business demand. Customised user interface which includes designing, prototyping, animating, and sharing user experiences.', to: '/products/ui-ux' }
    ],
    slides: [],
    teams: [],
    gallery: [],
    blogs: [],

    // team info
    dialog: false,
    info: {}
  }),
  methods: {
    getDate(date) {
      return new Date(date).toLocaleDateString()  
    },
    more(key) {
      this.$router.push({ name: 'Single Blog', params: { id: key } })
    },
    async get() {
      this.$store.commit('SET_OVERLAY', true)
      await this.$binding("teams", db.collection('members').orderBy('createdAt'))
      await this.$binding("gallery", db.collection('gallery').orderBy('createdAt', 'desc'))
      await this.$binding("blogs", db.collection('blogs').orderBy('createdAt', 'desc'))
      this.$store.commit('SET_OVERLAY', false)
    },
    openCard(team) {
      this.info = team
      this.dialog = true
    }
  },
  created () {
    this.get()
    this.slides = this.products
    this.slides.unshift({ title: 'Welcome to Agram Infotech', img: require('../assets/banner.png'), desc: '(Enabling Technology To Transform)' })
  },
  computed: {
    padding () {
      return this.$vuetify.breakpoint.name
    },
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 100
        case 'sm': return 110
        case 'md': return 120
        case 'lg': return 130
        case 'xl': return 140
        default: return 150
      }
    },
  },
}
</script>

<style scoped>
.home-banner {
  /* background-image: url('../assets/banner.png'); */
  height: 90vh;
}
@media (max-width: 1250px) {
  .home-banner { height: 75vh; }
}
@media (max-width: 1100px) {
  .home-banner { height: 60vh; }
}
@media (max-width: 960px) {
  .home-banner { height: 45vh; }
}
@media (max-width: 750px) {
  .home-banner { height: 35vh; }
}
@media (max-width: 600px) {
  .home-banner { height: 30vh; }
}
.home-banner-text {
  height: 100%;
  background-color: rgba(0, 0, 0, .25);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.banner-title { line-height: 1.25; }
/* Memory */
.gallery { height: 35vh; }

/* Services */
.service {
  min-height: 30vh;
  background-color: rgba(128, 128, 128, .05) !important;
  cursor: pointer;
  transition: ease-in-out 250ms;
  border: none;
  font-size: 22px;
}
.service:hover { box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .25) !important; }
/* Products */
.products {
  min-height: 35vh;
  width: 100%;
  transition: ease-in-out 250ms;
  overflow: hidden;
  cursor: pointer;
}
.products:hover { 
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, .25);
  border-radius: 15px;
}
.content {
  background-color: rgba(0, 0, 0, .6);
  width: 100%;
  color: white;
}
.content-title {
  height: 25px;   
  font-weight: 500;
  font-size: 20px;
  -webkit-line-clamp: 1;
  text-transform: capitalize; 
}
.content-desc { -webkit-line-clamp: 3; }
/* Home Team card social */
.home-social { grid-gap: 5px; }
.home-social div {
  height: 40px;
  width: 40px;
}
.home-social a {
  height: 100%;
  width: 100%;
  text-decoration: none;
  display: inline-block;
  border: 1px solid #1976d2;
  transition: ease-in-out 250ms;
}
.home-social .icon { color: #1976d2; }
.home-social a:last-child { margin-right: none !important; }
.home-social a:hover {
  background-color: #1976d2;
  border-radius: 50%;
}
.home-social a:hover .icon { color: white; }

/* Blogs */
.blog {
  overflow: hidden;  
  cursor: pointer;
  transition: 250ms ease-in-out;
}
.blog:hover {
  border-radius: 10px;
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, .25);  
  background-color: #1976d2;
}
.blog-title { 
  font-weight: 400;
  font-size: 20px;
  text-transform: capitalize;  
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: white;
}
.img { height: 35vh; }


/* Home Team Image */
.grid { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: stretch;
  grid-gap: 15px;
}
.grid .img-div {
  cursor: pointer;
  transition: 250ms ease-in-out;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 300px;
  overflow: hidden;
}
.img-content {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .4);
  transition: 250ms ease-in-out;
}
.img-content .pc { max-height: 70px; }
.grid .img-div:hover { 
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .3); 
  border-radius: 10px;
}
.img-social { 
  border-radius: 5px;
  padding: 10px;
}
.img-social a {
  text-decoration: none;
  color: white;
  display: block;
  width: 100%;
  height: 100%;
}
@media (max-width: 1250px) {
  .grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
  .grid .img-div { height: 280px; }
}
@media (max-width: 1100px) {
  .grid { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
  .grid .img-div { height: 260px; }
}
@media (max-width: 960px) {
  .grid { grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); }
  .grid .img-div { height: 230px; }
}
@media (max-width: 750px) {
  .grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
  .grid .img-div { height: 200px; }
}
@media (max-width: 600px) {
  .grid { grid-template-columns: repeat(auto-fill, minmax(175px, 1fr)); }
  .grid .img-div { height: 175px; }
}
.dialog-img {
  height: 200px; 
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}
 </style>