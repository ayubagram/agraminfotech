<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="6">
        <div class="img" />
      </v-col>
      <v-col cols="12" md="6">
        <div style="font-size: 25px; font-weight: 500;">About The Company</div>
        <p class="mt-6">
          Agram Infotech is a leading software company based in Birgunj, Nepal. Agram strives for developing intelligent and very cost effective softwares, apps, IoT and any customized softwares at client’s requests. Agram has highly skilled development team and focuses on quality, cost and timely delivering of any projects. <br><br>
          The company looks forward to working with you or for you.
        </p>
      </v-col>
      <v-col cols="12" class="text-center">
        <div style="font-size: 25px; font-weight: 500;">Why Agram InfoTech?</div>
        <p class="mt-4">We help business build an intelligently designed digital future. Tell us about your idea, and we’ll offer the most fitting technological solution.</p>
      </v-col>
    </v-row>
    <div class="about__container">
      <div :style="{ borderLeft: `2px solid rgb(${color[i]} / 100%)`, color: `rgb(${color[i]} / 100%)`, boxShadow: `0 4px 10px 0 rgb(${color[i]} / 10%)` }" class="about__item pa-4" v-for="(item, i) in items" :key="i" v-text="item" />
    </div>
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
      '“Real-world” experienced engineers',
      'Focus on dependable, quality solutions',
      'Agile capabilities to support your needs',
      'Full-systems assessments'
    ],
    color: ['38 166 154', '171 71  188', '66 165 254', '239 83 80', '102 187 106', '255 238 88', '236 64 122', '255 152 0']
  }),
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
.about__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  grid-gap: 20px;
}
.about__item { 
  border-radius: 4px;
  font-size: 15px;
}
@media (max-width: 900px) {
  .about__container { grid-template-columns: repeat(auto-fit, minmax(30%, 1fr)); grid-gap: 16px; }
}
@media (max-width: 600px) {
  .about__container { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); grid-gap: 12px; }
}
</style>