<template>
  <div class="IoTSolutions">
    <div class="banner">
      <div class="banner-text d-flex justify-center align-center text-center px-3">
        <div style="font-size: 25px; font-weight: 500;">IoT in Agriculture Sector: Smart Farming Solution</div>
        <p class="mt-3 mb-5">Increase productivity and enhance operational efficiency with IoT-enabled Custom-tailored Smart Farming solutions with Agram.</p>
        <v-btn large rounded color="primary" @click="() => this.$store.commit('SET_REQUEST_QUOTE', true)">request a free consultation</v-btn>
      </div>
    </div>
    <v-container>
      <div style="font-size: 25px; font-weight: 500;" class="my-4 text-center ">Smart Farming Solution</div>
      <p>
        IoT-based smart farming system helps to monitor the agricultural land with the help of sensors and automate the irrigation process. The farmers can monitor the conditions of the field from anywhere, such as soil moisture and humidity.
        It makes precision farming possible and results in high quality and quantity production of crops and healthy cattle. Smart farming System implements hardware (Sensors/Devices) and software (IoT platforms) to capture the data and give
        actionable reports to manage all the operations on the farm, both pre and post-harvest.
      </p>
      <div style="font-size: 25px; font-weight: 500;" class=" my-4 text-center mt-4">Work Flow of Smart Farming Solution </div>
      <v-img src="../../assets/smart-agriculture.webp"></v-img>
      <div style="font-size: 25px; font-weight: 500;" class="py-4 text-center">Applications of IoT Technology for Agriculture Sector</div>
      <div  class="text-justify pt-4">
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
        <div class="text-center mt-8 mb-4">
          <v-btn large rounded color="primary">Talk to our Agriculture IoT Experts</v-btn>
        </div>
      </div>
      <div style="font-size: 25px; font-weight: 500;" class="my-4 text-center">Agram IoT Farming Solution</div>
      <div class="mb-8">
        <p>At Agram Infotech, we enable Smart Farming Solution with the help of IoT technology to help farmers save water. Our technologies are most prominently used at the pre-stage. With the use of agricultural drones and a weather condition tracking system, we empower farmers to decide what to crop for the specific season to increase the yield.</p> <br>
        With our IoT enabled Smart Farming Solutions, Farmer can:
        <div>
          <ul class="b">
            <li v-for="(a, i) in as" :key="i">{{ a }}</li>
          </ul>
        </div>
      </div>
      
      <ContactForm title="Ready to Implement Smart Farming Solution. Consult with our Experts to discuss your project." />
    </v-container>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
export default {
  components: { ContactForm },
  metaInfo: () => ({
    title: 'IoT Solution for Agriculture Sector | Agram Infotech',
    meta: [
      { name: 'description', content: 'gram IoT provides end to end IoT Solutions for Agriculture Sector. Interested in    Smart farming IoT solutions? Contact us to get this solution.' },
      { property: 'og:title', content: 'Smart Agriculture IoT Solution' },
      { property: 'og:site_name', content: 'Agram Infotech'},
      { property: 'og:description', content: 'This is home content' },
      { property: 'og:type', content: 'home' },
      { property: 'og:url', content: 'https://agraminfotech.com/solutions/iot-solution-for-agriculture' },   
    ]
  }),
  data: () => ({
    services: [
      { title: 'Precision Farming', desc: 'Precision farming is the most important application of IoT in the farming sector. It makes the farming practice more precise and controlled by realizing smart farming applications such as livestock monitoring and field observation. With the help of Precision farming, you can monitor soil conditions (Temperature, Moisture & Humidity) and other related parameters to increase operational efficiency. Precision Farming helps farmers get real-time data with the help of sensors and gateways to analyze that report to take intelligent and quick decisions.', img: require('@/assets/solution/precise_farming.jpg') },
      { title: 'Smart Greenhouse', desc: 'Greenhouse farming is a methodology that helps in enhancing the yield of crops, vegetables, fruits. Greenhouses control the environmental parameters through manual intervention, as a result, it gets production loss, high labor cost, energy loss. IoT technology helps to design a smart greenhouse which makes entire process cost-effective and increases accuracy and eliminates the need of manual intervention. IoT agricultural sensors collect and transmit real-time data, which helps to monitor the state of the greenhouse (such as humidity, temperature, and light levels) very precisely.', img: require('@/assets/solution/smart_green_house.png') },
      { title: 'Livestock Monitoring', desc: 'IoT technology plays a crucial role in helping to enhance the quality and quantity of agriculture production. IoT helps farmers to optimize their livestock health using remote monitoring and data-driven approach. IoT technology helps in identifying cattle that are sick so they can be separated from the herd. IoT-based sensors track the movements of cattle and help to optimize their grazing patterns. As a result, farmers can get high productivity and revenue by integrating a livestock monitoring system.', img: require('@/assets/solution/livestock_monitoring.jpg') },
      { title: 'Agricultural Drones', desc: 'Drones are being used in the agricultural sector in order to enhance various agricultural practices. Aerial-based drones and ground-based drones are used in the agriculture sector for crop health assessment, irrigation, crop monitoring, crop spraying, and soil and field analysis. Drones with multispectral sensors/devices identify the areas that require changes in irrigation. Smart drones collect multispectral, thermal, and visual imagery of crops during the flight and send those real-time data to the device\'s control by managers.', img: require('@/assets/solution/agricultural_drones.jpg') },
      { title: 'Climate Monitoring', desc: 'Climate condition plays a crucial role for the farming sector. A bad climate can damage crops. Integrating IoT technology enables you to get real-time data on weather conditions. IoT-based sensors detect the weather conditions and send those real-time data, which can be remotely accessed through devices such as smartphones or desktops. You can get real-time information about temperature changes, wind conditions, air pressure, rainfall, and humidity for your precise location.', img: require('@/assets/solution/climate_monitoring.png') }
    ],
    as: [
      'Check Soil Moisture Conditions.',
      'Keep tracks on Crops (Crop Monitoring).',
      'Weather Condition Monitor.',
      'Livestock Monitoring.',
      'Remote Equipment Monitoring.',
      'Get actionable reports'
    ]
  })
}
</script>

<style scoped>
.banner {
  background-image: url('https://www.octalsoftware.com/blog/public/storage/img/blog/15840950660_curaKursPnWZQZo9.jpg');
}
.sol-img {
  min-height: 50vh;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>