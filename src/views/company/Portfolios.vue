<template>
  <div>
    <v-container>
      <div style="font-size: 40px; font-weight: 500;" class="mb-5 text-center">Our Recent Works</div>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(product, t) in products" :key="t">
          <v-hover v-slot="{ hover }">
            <div class="portfolio white" @click="goto(product.to)" :style="{ backgroundImage: `url(${product.img})` }">
              <v-expand-transition>
                <div v-if="hover" class="transition-fast-in-fast-out portfolio-reveal pa-4 white--text" style="height: 100%; background-color: rgba(0, 0, 0, .5);">
                  <div class="display-1">{{ product.title }}</div>
                  <div class="text-justify mt-2">{{ product.desc }}</div>
                </div>
              </v-expand-transition>
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <div class="mt-10 py-4 py-sm-6 py-md-8 py-lg-10"  style="background-color: azure" >
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <h1>Providing Disruptive Business Solutions for Your Enterprise</h1>
            <v-btn class="mt-4" large rounded color="primary" @click="() => this.$store.commit('SET_REQUEST_QUOTE', true)">get a free consultation</v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="align-content-end d-flex">
              <img src="http://www.pngall.com/wp-content/uploads/2016/07/Web-Design-Free-PNG-Image.png" alt="Web Image">
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="py-6 pb-sm-8 pb-md-11 pb-lg-14">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="text-center">Technology We Work With</h1>
          </v-col>
          <v-col cols="12" sm="6" md="4" v-for="(service, t) in services" :key="t">
            <div class="service pa-4 d-flex flex-column justify-center align-center">
              <img :src="service.img" :alt="service.title">
              <div class="mt-3">{{ service.title }}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="mt-5">
      <ContactForm title="Let's Discuss About Your Project" />
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
export default {
  components: { ContactForm },
  metaInfo: () => ({
    title: 'Portfolio | Agram Infotech',
  }),
  data: () => ({
    products: [
      { title: 'Agram Digital Pathology', img: require('../../assets/icons/digital-pathology.png'), desc:'Developed by a team of specialized engineers and pathologist. Anatomical pathology procedures management system. Processes the whole workflow. Digitalize your lab.', to: '/products/agram-lab' },
      { title: 'Dairy Management', img: require('../../assets/icons/dairy-mgmt.png'), desc:'Centrally controlled Web-Application manages all other aspects of a complete accounting software with detailed options for milk procurement billing, deductions, incentives and commissions.', to: '/products/dairy-management' },
      { title: 'Health Post Management', img: require('../../assets/icons/hospital-mgmt.png'), desc:'Health Post Management Software improves quality of care and, ultimately, patient experience by optimizing the coordination of care across a hospital, practice, or ancillary care clinic.', to: '/products/hospital-management' },
      { title: 'Industry Management', img: require('../../assets/icons/industry.jpg'), desc:'An advanced software application that works as a comprehensive and one stop solution for all your business development needs', to: '/products/industry-management' },
      { title: 'Payroll Management', img: require('../../assets/icons/payroll-mgmt.png'), desc:'With Payroll Management, time tracking, and HCM in one payroll management system, it’s easier than ever to flexibly manage your processes and pay your workforce with confidence.', to: '/products/payroll-management' },
      { title: 'UI & UX Design', img: require('../../assets/icons/ui.png'), desc:'Design interactive prototypes for Android, iOS, Web and Desktop as per your business demand. Customised user interface which includes designing, prototyping, animating, and sharing user experiences.', to: '/products/ui-ux' }
    ],
    services: [
      { title: 'HTML5', img: require('@/assets/techs/html5.png')},
      { title: 'CSS3', img: require('@/assets/techs/css3.png')},
      { title: 'Java', img: require('@/assets/techs/java.png')},
      { title: 'Vue.JS', img: require('@/assets/techs/vue.png')},
      { title: 'Node.JS', img: require('@/assets/techs/node.png')},
      { title: 'MySql', img: require('@/assets/techs/mysql.png')},
      { title: 'Android', img: require('@/assets/techs/android.png')},
      { title: 'Firebase', img: require('@/assets/techs/firebase.png')},
      { title: 'React.JS', img: require('@/assets/techs/react.png')}
    ]
  }),
  methods: {
    goto(to) {
      this.$router.push(to)
    }
  }
}
</script>

<style scoped>
.service {
  min-height: 25vh;
  background-color: rgba(128, 128, 128, .1) !important;
  border: none;
  font-size: 22px;
}

</style>