
<template>
  <div class="DigitalMarketing">
    <div class="banner">
      <div class="banner-text d-flex justify-center align-center text-center px-3">
        <div class="display-1">Agram Digital Marketing Services To Leverage Your Business </div>
        <div class="mt-3 mb-5">Engage your target customers at the right time on the right platform by opting our Digital Marketing Solutions. </div>
        <v-btn large rounded color="primary" @click="() => this.$store.commit('SET_REQUEST_QUOTE', true)">get a free consultation</v-btn>
      </div>
    </div>
    <v-container>
      <div style="font-size: 25px; font-weight: 500;" class="my-4">Why Agram Infotech for Digital Marketing Services</div>
      <p class="contents" v-for="(content, c) in contents" :key="c"> <span v-show="c > 0" />{{ content }}</p>
      <div style="font-size: 25px; font-weight: 500;" class="mt-8 mb-5">Agram’s Digital Marketing Services</div>
      <v-row class="mb-10">
        <v-col cols="12" sm="6" md="4" v-for="(service, t) in services" :key="t">
          <div class="dm pa-4">
            <img :src="service.img" :alt="service.title">
            <div class="my-3 dm-title">{{ service.title }}</div>
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
    title: 'Best Digital Marketing Services in Nepal | Agram Infotech',
    meta: [
      { name: 'description', content: 'Agram Infotech follows a systematic approach to ensure all our online marketing efforts deliver profitable results. Leverage Agram\'s marketing services today and let us help to boost your customer business.' },
      { property: 'og:title', content: 'Mobile App Development Service' },
      { property: 'og:site_name', content: 'Agram Infotech'},
      { property: 'og:description', content: 'This is home content' },
      { property: 'og:type', content: 'home' },
      { property: 'og:url', content: 'https://agraminfotech.com/service/digital-marketing' },   
    ]
  }),
  data: () => ({
    contents: [
      'At Agram Infotech, we have years of experience navigating the fast-evolving digital landscape and delivering quality digital marketing services in Nepal. We take a tactical, data-driven and user-focused approach to digital marketing, guarantee that your marketing is outreach to the right audience and adapt to deliver the results you need.',
      'In this grinding digital era building brand awareness, increasing customer engagement and driving traffic and sales requires a data driven digital marketing techniques. Thus, selecting the right digital marketing company in Nepal is the most important commitment for your business everlasting growth.',
      'We are a one-stop solution for your digital marketing demands. We will help you to advertise your business by promoting it online on various online platforms like Facebook, Instagram, Google etc. which will help you grow your dense online reputation so we are consider as the emerging advertising agency in Nepal.',
      'From website development to Search Engine Optimization and online brand reputation management, we always offer standard services. For all the digital marketing services we have expert and hard-working teams. Devoted teams work on specific tasks to ensure guaranteed improvements in client’s online business.',
      'We provide marketing services like SEO, SMO, SEM, SMM, etc at minimum budget. If you are looking for an online marketing company in Nepal to promote your business, then we are here to help you.',
      'As experts in the digital marketing industries, the management and employees of Agram Infotech have a proven track record for crafting effective Internet marketing strategies with measurable, long-term results which shows that we are providing best digital marketing services in Nepal.',
      'So if you are looking for hiring SEO experts in Nepal to promote your business digitally, we ensure you to provide the best. Our objective is client satisfaction and to provide them the services above their expectations. Just give us a chance & be ready to regulate the graph of your business drastically.'
    ],
    services: [
      { title: 'Search Engine Optimization (SEO)', img: require('@/assets/icons/seo.png'), desc: 'Consider our SEO services that are equipped with professional paid tools that will help you generate organic traffic on Google search results.' },
      { title: 'Social Media Optimization (SMO)', img: require('@/assets/icons/smo.png'), desc: 'Social media optimization helps to increase the awareness of your product, brand, by using social media outlets and communities for viral publicity..' },
      { title: 'Search Engine Marketing (SEM)', img: require('@/assets/icons/dm.png'), desc: 'Agra Infotech offers the most comprehensive SEM Services to boost your brand and increase revenue by placing ads on different search engines.' },
      { title: 'Social Media Marketing (SMM)', img: require('@/assets/icons/smm.png'), desc: 'We promote your brand or service on different social platforms like Facebook, Instagram, and LinkedIn etc and generate Leads.' },
      { title: 'Email Marketing', img: require('@/assets/icons/email-marketing.jpg'), desc: 'Email marketing can help you to reach your customer directly with the help of email marketing. Email marketing is a pace to success.' },
      { title: 'Content Writing', img: require('@/assets/icons/content-writing.jpg'), desc: 'Content marketing is based on creating, publishing, and distributing new content on your websites for being unique on Google.' },
      { title: 'eCommerce Marketing', img: require('@/assets/icons/ecommerce-marketing.png'), desc: 'The main feature of e-commerce marketing is that you can sell your product internationally on Amazon, eBay, Flipkart, Myntra easily.' }
    ]
  })
}
</script>

<style scoped>
.banner {
  background-image: url('https://www.octalsoftware.com/blog/public/storage/img/blog/15840950660_curaKursPnWZQZo9.jpg');
}
</style>