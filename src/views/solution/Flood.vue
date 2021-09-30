<template>
<div class="IoTSolutions">
    <div class="banner">
      <div class="banner-text d-flex justify-center align-center text-center px-3">
        <div style="font-size: 25px; font-weight: 500;">Smart IoT Flood Monitoring and Detection System</div>
        <p class="mt-3 mb-5">We offer a smart IoT flood monitoring system to measure the river level early warning remote flood detection.</p>
        <v-btn large rounded color="primary" @click="() => this.$store.commit('SET_REQUEST_QUOTE', true)">request a free consultation</v-btn>
      </div>
    </div>
    <v-container>
      <div style="font-size: 25px; font-weight: 500;" class="my-4 text-center ">Flood monitoring system</div>
      <p>Flood is one of the major natural disasters that causes a huge amount of loss to the environment and living beings. So it is most crucial to get the alerts of river level status at different conditions.  Agram IoT System detects the water level of the river and alerts about the flood risk with real-time data. Smart IoT flood monitoring system developed by Agram transmits real and accurate information about the risk to protect the most vulnerable areas; this helps public administrations to generate statistical data for providing optimal protection.</p>
      <div style="font-size: 25px; font-weight: 500;" class=" my-4 text-center mt-4">Work flow of IoT Flood Monitoring System </div>
      <v-img src="../../assets/smart-agriculture.webp"></v-img>
      <p class="my-4">IoT-powered flood monitoring systems implemented in River consist of IoT Devices/Sensors, IoT Gateways, cloud servers, and mobile or web app. Wireless sensor (Ultrasonic) captures River's flow level and sends it to Agram IoT cloud server. Agram IoT cloud server transforms those real-time data into actionable reports, which a public administration can access on their mobile devices or PCs.</p>
      <div style="font-size: 25px; font-weight: 500;" class="my-4 text-center">Benefits of Using IoT Flood Monitoring System</div>
      <div v-for="(service, t) in services" :key="t" class="sol mb-4 mb-sm-6 mb-md-8 mb-lg-10">
        <v-row class="d-flex align-center" :class=" t % 2 == 0 ? 'flex-row-reverse' : ''">
          <v-col cols="12" sm="12" md="6">
            <div class="sol-img" :style="{ backgroundImage: `url(${service.img})` }" />
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <div style="font-size: 25px; font-weight: 500;" class="mb-2">{{ service.title }}</div>
            <p>{{ service.desc }}</p>
          </v-col>
        </v-row>
      </div>

      <div class="text-justify my-8">
        <div style="font-size: 25px; font-weight: 500;" class="mb-2">Advantages of Using Agram IoT Flood Monitoring System</div>
        <div>
          <ul class="b">
            <li v-for="(a, i) in advantages" :key="i">{{ a }}</li>
          </ul>
        </div>
      </div>
      
      <ContactForm title="Ready to Implement IoT Flood Monitoring System Consult with our Experts to discuss your project." />
    </v-container>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
export default {
  components: { ContactForm },
  metaInfo: () => ({
    title: 'IoT River and Flood Monitoring System | Agram Infotech',
    meta: [
      { name: 'description', content: 'Agram provides end-to-end IoT Solutions for flood management. Interested in IoT flood monitoring solutions? Contact us to get this solution.' },
      { property: 'og:title', content: 'IoT River and Flood Monitoring System | Agram Infotech' },
      { property: 'og:site_name', content: 'Agram Infotech'},
      { property: 'og:description', content: 'This is home content' },
      { property: 'og:type', content: 'home' },
      { property: 'og:url', content: 'https://agraminfotech.com/solutions/iot-solution-for-flood-monitor' },   
    ]
  }),
  data: () => ({
    services: [
      { title: 'River Flow Monitoring', desc: 'This system gives you the water level notifications by using the latest depth, pressure, and flow sensor and delivers volumetric outputs as they change at specified increments of time or water depth of the river.', img: require('@/assets/solution/river_flow_monitoring.jpg') },
      { title: 'Warning System', desc: 'The system can be integrated with the early flood warning systems of Public Administrations. If a water level is surpassed, it gives an alert through a notification on mobile devices (app) or PCs (web app).', img: require('@/assets/solution/warning_system.jpeg') },
    ],
    advantages: [
      'Custom tailored solution that can be integrated with level/flow sensors, gateways and cloud.',
      'Generates real-time data of level/flow of river.',
      'Long working life of sensors/devices.',
      'Low energy consumption.',
      'Integration of multiple devices on a single platform.',
      'Generates actionable reports for public administration.'  
    ]
  })
}
</script>

<style scoped>
.banner { background-image: url('https://www.octalsoftware.com/blog/public/storage/img/blog/15840950660_curaKursPnWZQZo9.jpg'); }
.sol-img {
  min-height: 50vh;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>