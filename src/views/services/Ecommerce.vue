<template>
  <div class="Ecommerce">
    <div class="banner">
      <div class="banner-text d-flex justify-center align-center text-center px-3">
        <div class="display-1">Uplift Your eCommerce Business with Agram Infotech</div>
        <div class="mt-3 mb-5">We provide comprehensive Solutions for your eCommerce needs </div>
        <v-btn large rounded color="primary" @click="() => this.$store.commit('SET_REQUEST_QUOTE', true)">get a free consultation</v-btn>
      </div>
    </div>
    <v-container>
      <div style="font-size: 25px; font-weight: 500;" class="my-4">Why Choose Agram eCommerce Development Services</div>
      <div class="contents pb-3" v-for="(content, c) in contents" :key="c"> <span v-show="c > 0"></span>{{ content }}</div>
      <div style="font-size: 25px; font-weight: 500;" class="mt-8 mb-5">Our eCommerce Development Expertise:</div>
      <v-row class="mb-10">
        <v-col cols="12" sm="6" md="4" v-for="(service, t) in services" :key="t">
          <div class="dm pa-4">
            <img :src="service.img" :alt="service.title">
            <div class="dm-title my-3">{{ service.title }}</div>
            <div class="dm-desc">{{ service.desc }}</div>
          </div>
        </v-col>
      </v-row>

      <ContactForm title="Let's Discuss About Your Project" />
    </v-container>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
export default {
  components: { ContactForm },
  metaInfo: () => ({
    title: 'eCommerce Design and Development Company in Nepal | Agram Infotech',
    meta: [
      { name: 'description', content: 'Looking for eCommerce Developer? Our eCommerce experts are able to provide you peerless eCommerce services, having advanced and all the new eCommerce technologies under our belt.' },
      { property: 'og:title', content: 'Mobile App Development Service' },
      { property: 'og:site_name', content: 'Agram Infotech'},
      { property: 'og:description', content: 'This is home content' },
      { property: 'og:type', content: 'home' },
      { property: 'og:url', content: 'https://agraminfotech.com/service/mobile-app-development' },   
    ]
  }),
  data: () => ({
    contents: [
      'Agram Infotech is an emerging eCommerce web & app development company based in Nepal that recognizes your products, your customers, and your marketplace and then initiates an extensive and innovative eCommerce solution customized to your business obligation at modest prices.',
      'Our eCommerce Solutions relay you with effective functionality, straightforward and smooth transactions with a secure shopping experience for your valued clients. Agram provides progressive and exhaustive solution to all your eCommerce application/website requirements in the form of Agram’s eCommerce. Being an eCommerce service provider, we have been built platforms that include a database-driven shopping cart system with limitless product listing that can be handled through the admin panel without any web proficiency knowledge.',
      'We are an acknowledged Ecommerce Website Designing Company in Nepal offers complete services of web designing. We put our finest efforts in creating a shopping cart for your business. We will work until clients get fully satisfied. Our work is based on thorough comprehension and absolute dedication.',
      'We first adorn out the aim to create an absorbing website and then our designers use their expertise to provide smart graphics and visually magnificent info-graphics. The main objective of our planned strategy is to furnish easy navigation through web pages, a clear call to action & a secure payment gateway.',
      'We use modern technology so that visitors can effortlessly & guardedly shop from your website. We provide a safe and secure payment gateway for your online trade helping your customer to easily deliver their money while making a transaction without any agitation of losing data. The safe transaction is our key objective.',
      'Proficiency in creating innovative, collective, scalable, and gig-oriented e-commerce stores. We have a team of practiced e-commerce experts and developers with a prosperous skillet and experience. Commitment to convey to the best practices and always delivering projects within deadlines. Over the years, we have earned prominence for catering to high quality and cost-effectiveness in our solutions so we are one of the <b>best ecommerce web development company in Nepal.'
    ],
    services: [
      { title: 'Marketplace Development', img: require('@/assets/icons/mp.png'), desc: 'Our team provides you with the best marketplace development services. We build the marketplaces that includes B2B, B2C and C2C Multi Seller portal and Multi-Vendor Web/App.' },
      { title: 'Custom eCommerce Design and Development', img: require('@/assets/icons/ecommerce.png'), desc: 'From PHP to React, we have experts from every major eCommerce development technology that can provide the best structure to your online eCommerce application from a technological aspect.' },
      { title: 'Shopping Cart Development', img: require('@/assets/icons/sp.jpg'), desc: 'Our certified eCommerce development team provides shopping cart migration to popular eCommerce platforms such as OpenCart, Zen Cart, X-Cart, Pinnacle Cart and more.' },
      { title: 'Development of Multi Store eCommerce Platform', img: require('@/assets/icons/mp.png'), desc: 'We develop a multi Store ecommerce Platform that allows you to easily control different brands or websites as well as to create new specific brand and sites.' },
      { title: 'Website and App Maintenance & Support ', img: require('@/assets/icons/website-app.png'), desc: 'We have the experience of handling maintenance requirements for eCommerce app/web. Our eCommerce development methodology lets us create applications that perform high and require low maintenance time.' },
      { title: 'Optimize existing eCommerce Web and App', img: require('@/assets/icons/optimize-existing.png'), desc: 'Optimize existing eCommerce web and app: Optimizing your eCommerce store can maximize your conversion rate. We provide the best services for optimizing your existing eCommerce web and app to grow your customer base.' }
    ]
  })
}
</script>

<style scoped>
.banner { 
  background-image: url('../../assets/icons/ecommerce-marketing.png'); 
  background-size: contain !important;
}
.dm { min-height: 40vh !important; }
</style>