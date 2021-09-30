<template>
  <div class="OnDemand">
    <div class="banner">
      <div class="banner-text d-flex justify-center align-center text-center px-3">
        <div class="display-1">On Demand App Development Services and Solutions</div>
        <p class="mt-3 mb-5">We provide a robust on-demand app development technology platform to launch custom apps for any on-demand business.</p>
        <v-btn large rounded color="primary" @click="() => this.$store.commit('SET_REQUEST_QUOTE', true)">get a free consultation</v-btn>
      </div>
    </div>
    <v-container>
      <div style="font-size: 25px; font-weight: 500;" class="my-4">Why Agram Infotech for On-demand app development services</div>
      <p class="contents" v-for="(content, c) in contents" :key="c"> <span v-show="c > 0" />{{ content }}</p>
      <div style="font-size: 25px; font-weight: 500;" class="mt-8 mb-3">Next-generation on-demand app development Solutions</div>
      <p class="mb-5">Agra Infotech is a globally identified on-demand app development solutions provider that institutes your business and desires the infinite prospect of mobility solutions.</p>
      <v-row>
        <v-col cols="12" sm="12" md="6" v-for="(service, t) in services" :key="t">
          <div class="service d-flex flex-column align-center pa-4">
            <img :src="service.img">
            <div class="ml-3">
              <div style="font-size: 20px; font-weight: 500;">{{ service.title }}</div>
              <p class="mt-2">{{ service.desc }}</p>
            </div>
          </div>
        </v-col>
      </v-row>

      <div style="font-size: 25px; font-weight: 500;" class="mt-8 mb-3">Technologies - The pillar of Our Every App</div>
      <p class="mb-5">We select the prime and newest from the technology repository to create a demand application. Then, associating with the best technology providers and examining the newest trends, our expert on-demand app developers oversee brainwave sessions to decide how the application will function and what resources will be required to create a successful and flawless demand mobile app.</p>
      
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
      <ContactForm title="Ready to Make Your On-Demand App the Next History" />
    </v-container>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
export default {
  components: { ContactForm }, 
  metaInfo: () => ({
    title: 'On Demand App Development Services in Nepal | Agram Infotech',
    meta: [
      { name: 'description', content: 'Agram Infotech as one of the leading on-demand app development company offering on-demand solutions like taxi app, grocery app, food service app etc. Contact us to get these services.' },
      { property: 'og:title', content: 'Home - Agram Infotech' },
      { property: 'og:site_name', content: 'Agram Infotech'},
      { property: 'og:description', content: 'Agram Infotech as one of the leading on-demand app development company offering on-demand solutions like taxi app, grocery app, food service app etc. Contact us to get these services.' },
      { property: 'og:type', content: 'on-demand app page' },
      { property: 'og:url', content: 'https://agraminfotech.com/on-demand-app' },   
    ]
  }),
  data: () => ({
    contents: [
      'Agram Infotech is one of the leading on-demand app developers in Birjung, Nepal. We provide instantaneous mobility solutions to the problems and give your enterprise the key to admit speedily and provide your customer\'s out-of-the-box services.',
      'We build ever-evolving on-demand app solutions to encourage next-generation services for inclusive business growth.',
      'Experience in all convincing, scalable, and fully integrated solutions with custom front-end UI, advanced admin dashboard, and powerful analytics panels for iOS and Android.',
      'We exhibit to your enterprise\'s industry-specific needs with innovative on-demand solutions and cutting-edge technology. We have limitless solutions to your everyday business needs, whether they are B2B or B2C. Get the complete updated technology and fully custom-built white-labeled on-demand apps for your business.'
    ],
    services: [
      { title: 'On-Demand Taxi Service', img: require('@/assets/service/taxi.png'), desc: 'On-demand, the cab business is thriving at a rapid pace all over the world. So start your own cab services business with our on-demand taxi app development solutions. We make you extremely functional, and collective Taxi Booking on-demand apps like Uber and Ola united with corporate such as tracking, support, etc.' },
      { title: 'On-Demand Food Service', img: require('@/assets/service/food.png'), desc: 'With our compatible on-demand food service, you can attract millions of foodies and permit them to have their favorite food from their favorite restaurants right at their doorsteps. We impart on-demand delivery application that works productively for the admin as well as the customers. We accurately develop on-demand food service apps with features such as booking, staff and customer management, delivery, order tracking, etc.' },
      { title: 'On-Demand Grocery Delivery', img: require('@/assets/service/grocery.png'), desc: 'Provide your customers with an up-to-date and admirably functioning on-demand grocery app and enable them to pluck the finest grocery items and receive the shopped ones right at their doorway. We develop faultless on-demand grocery delivery mobile apps for meeting diverse user demands. The users can filter their grocery items and set the location where the delivery has to be reached. Through app, we can track the real-time locations of the delivery person as well.' },
      { title: 'Doctor On-Demand Service', img: require('@/assets/service/doctor.png'), desc: 'On-demand service apps built to channelize superior comparability between doctors and patients, apps that handle appointments, reviews, medical history, medical consultancy, tracking, etc. Graceful your health business using our professional on-demand doctor appointment app development services across iOS and Android.' },
    ],
    techs: [
      { title: 'Flutter', color: 'backgroundColor: rgb(64 196 255 / 10%);', img: require('@/assets/techs/flutter.png'), desc: 'We use flutter framework for On Mobile App Development. Flutter supports cross platform, means you can create Android, iOS or Web App by writing a bar code.' },
      { title: 'React Native', color: 'backgroundColor: rgb(129 222 234 / 10%);', img: require('@/assets/techs/react.png'), desc: 'As a preferred React Native on Mobile app Development Company, we help in developing your core mobile app architecture and enable support for the required frontend & backend tools.' },
      { title: 'JAVA', color: 'backgroundColor: rgb(78 94 255 / 10%);', img: require('@/assets/techs/java.png'), desc: 'Java is an Object Oriented Programming Language used at Agra Infotech to develop Internet applications, mobile apps, and software programs. Also, it is being used in IOT & AI.' },
      { title: 'Firebase', color: 'backgroundColor: rgb(255 111 0 / 10%);', img: require('@/assets/techs/firebase.png'), desc: 'Firebase is Google\'s mobile application development platform that helps you build, improve, and grow your on demand application.' },
      { title: 'Angular.js', color: 'backgroundColor: rgb(183 28 28 / 10%);', img: require('@/assets/techs/angular.png'), desc: 'Angular.js is a Type Script-based, open-source, front end mobile application framework which is great for handling your on demand application. ' },
      { title: 'Vue.js', color: 'backgroundColor: rgb(129 199 132 / 10%);', img: require('@/assets/techs/vue.png'), desc: 'Using Vue.js framework, we develop custom front-ends, for on-demand mobile applications that enables us to build a lightweight and highly performant mobile apps.' },
      { title: 'Node.js', color: 'backgroundColor: rgb(55 71 79 / 10%);', img: require('@/assets/techs/node.png'), desc: 'Node.js is definitely the foremost when you are looking to build a lightweight, yet highly systematic website. It is used for non-blocking, event-driven servers for websites and back-end API.' },
      { title: 'MongoDB', color: 'backgroundColor: rgb(93 64 55 / 10%);', img: require('@/assets/techs/mongodb.png'), desc: 'We specialize in building PHP-powered dynamic on demand web applications using MongoDB as the data backend. Right from schema design, performance and tuning.' }
    ]
  })
}
</script>

<style scoped>
.banner {
  background-image: url('../../assets/icons/demand.png');
  background-size: contain !important;
}
.service {
  border: 2px solid rgba(128, 128, 128, 1);
}
.service img {
  height: 160px;
  background-color: white;
}
</style>