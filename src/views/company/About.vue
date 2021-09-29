<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="6">
        <div class="img" />
      </v-col>
      <v-col cols="12" md="6">
        <div style="font-size: 25px; font-weight: 500;">About The Company</div>
        <div class="mt-6" style="font-size: 18px;">
          Agram Infotech is a startup company based in Birgunj, Nepal. Agram strives for developing intelligent and very cost effective software, apps, IoT and any customized software at a client’s request. Agram has highly skilled development team and focuses on quality, cost and timely delivering of any projects. <br><br>
          The company looks forward to working with you or for you.
        </div>
      </v-col>
      <v-col cols="12" class="text-center">
        <div style="font-size: 25px; font-weight: 500;">Why Agram InfoTech?</div>
        <div class="mt-4">We help business build an intelligently designed digital future. Tell us about your idea, and we’ll offer the most fitting technological solution.</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(item, i) in items" :key="i">
        <div class="why d-flex justify-center align-center pa-4">{{ item }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      'Fast, dependable, considerate response',
      'Proactive planning to identify needs',
      'Single point of contact experience',
      'Predictable, consistent team of IT experts',
      '“Real-world” experienced service technicians',
      'Focus on dependable, quality solutions',
      'Agile capabilities to support your needs',
      'Full-systems assessments'
    ]
  })
}
</script>

<style scoped>
.img {
  background-image: url('../../assets/about.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 50vh;
}
.why {
  min-height: 20vh;
  font-size: 20px;
  text-align: center;
  background-color: #1976d2;
  color: white;
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, .3)
}
</style>