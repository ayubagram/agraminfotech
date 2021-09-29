<template>
  <v-container>
    <div class="home-banner img-back">
      <div class="home-banner-text black--text" :style="{ padding: padding == 'xs' ? '50px' : padding == 'sm' ? '80px' : padding == 'md' ? '100px' : '200px' }">
        <div class="mb-5 banner-title text-center" :style="{ fontSize: padding == 'xs' ? '30px' : padding == 'sm' ? '34px' : padding == 'md' ? '42px' : '50px' }">Success Stories</div>
      </div>
    </div>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" :icon="item.icon" fill-dot>
        <template v-slot:opposite>
          <span :class="`headline font-weight-bold ${item.color}--text`">2020</span>
        </template>
        <v-card :color="item.color" dark>
          <v-card-title class="title">
            Lorem Ipsum Dolor
          </v-card-title>
          <v-card-text class="white text--primary">
            <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: 'red',
        icon: 'mdi-star',
      },
      {
        color: 'purple',
        icon: 'mdi-book-variant',
      },
      {
        color: 'green',
        icon: 'mdi-airballoon',
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
      },
    ],
  }),
}
</script>

<style scoped>
.home-banner {
  background-image: url('../../assets/icons/case-study.png');
  height: 90vh;
  width: 100%;
}
.home-banner-text {
  height: 100%;
  background-color: rgba(0, 0, 0, .25);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.banner-title { line-height: 1.25; }
</style>