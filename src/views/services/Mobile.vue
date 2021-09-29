<template>
  <div class="Mobile">
    <div class="banner">
      <div class="banner-text d-flex justify-center align-center text-center px-3">
        <div class="display-1">Top-Notch Mobile App Development Company</div>
        <div class="mt-3 mb-5" style="font-size: 18px;">Agram's mobile app developers leverages cutting-edge technology to build customer-driven mobile apps.</div>
        <v-btn large rounded color="primary" @click="() => this.$store.commit('SET_REQUEST_QUOTE', true)">get a free consultation</v-btn>
      </div>
    </div>
    <v-container>
      <div style="font-size: 25px; font-weight: 500;" class="my-4">Why Agram Infotech for Mobile App Development Services</div>
      <div class="contents pb-3" v-for="(content, c) in contents" :key="c"> <span v-show="c > 0"></span>{{ content }}</div>
      <div style="font-size: 25px; font-weight: 500;" class="mt-8 mb-5">Agram Infotech Key Services in App development</div>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(service, t) in services" :key="t">
          <div class="dm pa-4">
            <img :src="service.img" :alt="service.title">
            <div class="dm-title my-3">{{ service.title }}</div>
            <div class="dm-desc">{{ service.desc }}</div>
          </div>
        </v-col>
      </v-row>

      <div style="font-size: 25px; font-weight: 500;" class="mt-8 mb-5">Technologies we use to build Mobile Apps</div>
      <!-- <v-row class="mb-10">
        <v-col cols="12" sm="6" md="4" v-for="(tech, t) in techs" :key="t">
          <div class="benefit pa-4">
            <img :src="tech.img">
            <div class="mt-2">{{ tech.title }}</div>
            <div class="benefit-desc mt-1">{{ tech.desc }}</div>
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
export default {
  metaInfo: () => ({
    title: 'Top-Notch Mobile App Development Company in Nepal| Agram Infotech',
    meta: [
      { name: 'description', content: 'Agram Infotech is trusted App Development Company in Nepal. Connect with us to build feature rich hybrid and native applications.' },
      { property: 'og:title', content: 'Mobile App Development Service' },
      { property: 'og:site_name', content: 'Agram Infotech'},
      { property: 'og:description', content: 'This is home content' },
      { property: 'og:type', content: 'home' },
      { property: 'og:url', content: 'https://agraminfotech.com/service/mobile-app-development' },   
    ]
  }),
  data: () => ({
    contents: [
      'Agram Infotech is a well notable name of today\'s in the field of IT industry for serving the mobile apps development services in Nepal for all businesses & industries. We spotlight rather on producing superior user experience by utilizing our technical expertise in building custom mobile and web applications. From the wireframes to the designing and then implementation, our app developers emphasis on all the phases related to Mobile App designing and development.',
      'Our objective is to create a mobile application that will enhance your business productively. First of all, we will conduct business proficiency, identify the needs of the audience and evolve an idea that break into the mind of the consumer and it will make your mobile application successful. We offer concluded Hybrid and Native mobile app development solutions including custom-built Android app that will create worth for your enterprise.',
      'We issue full-cycle mobile app development services for individuals or companies across Nepal. This approach includes expert business analysis, design, and development of your mobile application from concept to launch, merge the new product into your infrastructure, and providing further accumulation and scale-up on demand.',
      'We are well primed with advanced tools & technologies, resistance them to meet business needs. Hire us as app developers in Nepal, who continuously deliver excellence in mobile app development without any compromise. Our app developers consistently provide top-notch mobile app development services in Nepal, including iOS and Android apps that satisfy clients beyond their wildest expectations.',
      'We assure to deliver you the complete apps which showcase your business effectively within audience. At Agram Infotech, our crew of app developers is accomplished in designing, developing, testing and deploying feature-rich Android apps. We have prosperously served numerous clients having different objectives, which boldly make us ready to manipulate all sorts of complicated Application issues. So consider us as an app developer is best solution for your business.'
    ],
    services: [
      { title: 'Custom Mobile Application Development', desc: 'Agram offers custom mobile application development services on our low-?code app development platform to create apps at 10x speed. We build custom mobile applications for both Android and iOS systems.', img: require('@/assets/icons/mobile.png') },
      { title: 'Enterprise Application Development', desc: 'We build next generation enterprise applications on the mobile and desktop, web to streamline business processes and enhance customer experience.', img: require('@/assets/icons/enterprise-web.png') },
      { title: 'On-Demand Application Development', desc: 'We build custom on-demand apps and services for any on-demand business vertical as food delivery app, grocery app, taxi service app, medical app', img: require('@/assets/icons/demand.png') },
      { title: 'B2B & B2C Application Development', desc: 'Agram provides B2B & B2C mobile app development services for both native as well as hybrid application development for android as well as iOS platforms.', img: require('@/assets/icons/b2b.png') },
      { title: 'Cross-Platform Application Development', desc: 'We provide services that helps businesses of all types, from small companies to large enterprises, to get the most out of their mobile apps with multi-platform mobile development.', img: require('@/assets/icons/cpad.jpg') },
      { title: '24/7 Support and Maintenance', desc: 'We are a leading software maintenance and support service providing company at agram you get 24/7 support to keep your business running at any point.', img: require('@/assets/icons/support.png') },
      { title: 'App Prototype & Strategy', desc: 'We never make the mobile app strategy a lengthy task. Agram leads the niche of mobile App prototype services offering a robust evaluating stage before moving to real-time application.', img: require('@/assets/icons/prototype.jpg') }
    ],
    techs: [
      { title: 'JAVA', color: 'backgroundColor: rgba(73 89 255 / 10%);', img: require('@/assets/techs/java.png'), desc: 'Java is an Object Oriented Programming Language used at Agram Infotech to develop Internet applications, mobile apps, and software programs. Also, it is being used in IOT & AI.' },
      { title: 'React Native', color: 'backgroundColor: rgb(128 222 234 / 10%);', img: require('@/assets/techs/react.png'), desc: 'As a preferred React Native Mobile app development company, we help in developing your core mobile app architecture and enable support for the required frontend & backend tools.' },
      { title: 'XD', color: 'backgroundColor: rgb(152 44 233 / 10%);', img: require('@/assets/techs/xd.png'), desc: 'XD is a vector-based user experience design tool used for web apps and mobile apps, developed and published by Adobe Inc. Browse the latest Adobe XD experience with us.' },
      { title: 'Flutter', color: 'backgroundColor: rgb(64 196 255 / 10%);', img: require('@/assets/techs/flutter.png'), desc: 'Flutter is basically a Mobile App Development Framework which has been developed by Google Company. Flutter supports cross platform, means you can create Android, iOS or Web App by writing a bar code.' },
      { title: 'HTML5', color: 'backgroundColor: rgb(230 81 0 / 10%);', img: require('@/assets/techs/html5.png'), desc: 'Hypertext Markup Language HTML5 is updated version of HTML which is a standard language that has been used to create a website by the developer of Agram.' },
      { title: 'Python', color: 'backgroundColor: rgb(2 119 189 / 10%);', img: require('@/assets/techs/python.png'), desc: 'Using Python an object oriented programming language; we perform tasks such as website building, app development, machine learning, data analysis, web scraping and natural language processing.' },
    ]
  })
}
</script>

<style scoped>
.banner { 
  background-image: url('../../assets/icons/mobile.png'); 
  background-size: contain !important;
}
</style>