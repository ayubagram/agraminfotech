<template>
  <div class="Mobile">
    <div class="banner">
      <div class="banner-text d-flex justify-center align-center text-center px-3">
        <div style="font-size: 25px; font-weight: 500;">Top Rated Web Development Company</div>
        <p class="mt-3 mb-5">We are best in class web development agency offering fully-customized solutions that stands out among thousands of competitors.</p>
        <v-btn large rounded color="primary" @click="() => this.$store.commit('SET_REQUEST_QUOTE', true)">get a free consultation</v-btn>
      </div>
    </div>
    <v-container>
      <div style="font-size: 25px; font-weight: 500;" class="my-4">Why Agram Infotech for Web Development Services</div>
      <p class="contents" v-for="(content, c) in contents" :key="c"> <span v-show="c > 0" />{{ content }}</p>
      <div style="font-size: 25px; font-weight: 500;" class="mt-8 mb-5">Agram Infotech Key Services in Web development</div>
      <v-row>
        <v-col cols="12" sm="6" v-for="(service, t) in services" :key="t">
          <div class="dm pa-4">
            <img :src="service.img" :alt="service.title" >
            <div class="dm-title my-3">{{ service.title }}</div>
            <p class="dm-desc">{{ service.desc }}</p>
          </div>
        </v-col>
      </v-row>

      <div style="font-size: 25px; font-weight: 500;" class="mt-8 mb-5 text-center">Technologies we use to build Website</div>
      <!-- <v-row class="mb-10">
        <v-col cols="12" sm="6" md="4" v-for="(tech, t) in techs" :key="t">
          <div class="benefit pa-4">
            <img :src="tech.img">
            <div class="my-2">{{ tech.title }}</div>
            <div class="benefit-desc mt-3">{{ tech.desc }}</div>
          </div>
        </v-col>
      </v-row> -->
    </v-container>
    <Techs :techs="techs" />
    <v-container>
      <ContactForm title="Let's Discuss About Your Project" />
    </v-container>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
export default {
  components: { ContactForm },
  metaInfo: () => ({
    title: 'Top-Rated Web Development Company in Nepal | Agram Infotech',
    meta: [
      { name: 'description', content: 'Looking for the best Web Development Company in Nepal? Agram Infotech is a pioneer Web Development Company offering Responsive Website Design & Custom Web Development Services at cost-effective price.' },
      { property: 'og:title', content: 'Web Development Service' },
      { property: 'og:site_name', content: 'Agram Infotech'},
      { property: 'og:description', content: 'This is home content' },
      { property: 'og:type', content: 'home' },
      { property: 'og:url', content: 'https://agraminfotech.com/service/web-app-development' },   
    ]
  }),
  data: () => ({
    contents: [
      'Agram Infotech is foremost Web Development Company in Nepal that focuses on delivering effective Web services that will capture your brand, increase your conversion rates and maximizes your revenue with customer satisfaction. Our specialist web designers build inspiring and brand focused design solutions that influence and provide a fantastic user experience.',
      'When it comes to web development services, we have the experience of building a large number of websites! Over the years, we have catered to almost every industry such as Web-based enterprise solutions, Web application, portal development, and e-commerce website development. Our designs are unique and quick-loading, with effective navigation.',
      'We help your business in getting a unique identity for itself in today\'s internet-era. Your business is imperceptible if you don\'t have an internet existence on digital platforms. Without an on-screen presence, you can\'t reach your target audience.',
      'Agram Infotech is a professional Web Development Company in Nepal that offers services according to the requirements of customers. In today\'s scenario when everyone is experiencing the power of the internet and moving towards digitization, Our Web Design Company in Nepal, Birgung is here to help you in uplift your sales and raise your brand awareness.',
      'Our well qualified and professional developer understands your business intention and then accordingly guides you to generate a distinctive identity on the internet for your business.  A Website Development Company in Birgunj helps you in keeping your website up to date, secured, and makes changes in designs and templates according to the trends.',
      'We consistently keep an eye on the market and monitor the going on, so that we can offer the best web design in Nepal. With the changing modern-day technologies, Agram Infotech provides you mobile-friendly websites that fit on all desktop and tablet screens. The Website designers at Agram Infotech do not only focus on user-experience but also gives a stunning visual design to the Website. Our team comprises MEAN & MERN certified developers, skilled professionals in HTML5, CSS3, Angular, React, Node, WordPress, PHP, JavaScript, ASP.NET. They will be worth your time and dollars.'
    ],
    services: [
      { title: 'Custom Web Development', desc: 'When it comes to creative website designs, then Agram proves to be the best custom website design company who selects an appropriate design that is unique and fits for all kinds of businesses.', img: require('@/assets/icons/custom-web.png') },
      { title: 'Enterprise Web Development', desc: 'We develop your enterprise portal with a business-centric approach. We deliver you standardized services for developing, configuring, and customizing the various web and enterprise portals.', img: require('@/assets/icons/enterprise-web.png') },
      { title: 'Customer Relationship Management (CRM)', desc: 'Implementing a customer relationship management (CRM) solution might involve considerable time and expense. We\'ve examined the best customer relationship management (CRM) services for every businesses.', img: require('@/assets/icons/crm.png') },
      { title: 'B2B & B2C Web Development', desc: 'We understand that the design of your B2C & b2c website can help guide users toward becoming new customers. We are experienced in designing websites for B2C & B2c clients of all types, from local businesses to international corporations.', img: require('@/assets/icons/b2b.png') }
    ],
    techs: [
      { title: 'React JS', color: 'backgroundColor: rgba(128 222 234 / 10%);', img: require('@/assets/techs/react.png'), desc: 'We develop extra ordinary website using most popular and well known front-end frameworks. React.js is especially useful in the development of user interface for the website applications.' },
      { title: 'Angular', color: 'backgroundColor: rgba(183 28 28 / 10%);', img: require('@/assets/techs/angular.png'), desc: 'Angular is a Type Script-based, open-source, front end mobile and web application framework which is great for handling your Web Pages. We use Angular.js in our toolkit for developing websites.' },
      { title: 'PHP', color: 'backgroundColor: rgba(141 108 158 / 10%);', img: require('@/assets/techs/php.png'), desc: 'PHP is a broadly used scripting language that is particularly suited for web development. Our PHP Website development service includes Designing, Database design, developing the site structure, testing, and production.' },
      { title: 'WordPress', color: 'backgroundColor: rgba(1 87 155 / 10%);', img: require('@/assets/techs/wordpress.png'), desc: 'Acquire fully efficient attractive & impressive WordPress websites for your business with our WordPress website development services.' },
      { title: 'Laravel', color: 'backgroundColor: rgba(232 42 57 / 10%);', img: require('@/assets/techs/laravel.png'), desc: 'If you are looking to take care of the back-end e-commerce web development tools, Laravel is one of the tools that are an absolute must in your toolkit for high quality website.' },
      { title: 'Node JS', color: 'backgroundColor: rgba(55 71 79 / 10%);', img: require('@/assets/techs/node.png'), desc: 'Node.js is definitely the foremost when you are looking to build a lightweight, yet highly systematic website. It is used for non-blocking, event-driven servers for websites and back-end API.' },
    ]
  })
}
</script>

<style scoped>
.banner {
  background-image: url('../../assets/icons/enterprise-web.png');
  background-size: contain !important;
}
</style>