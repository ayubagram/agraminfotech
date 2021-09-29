<template>
  <div class="techs__container">
    <div v-for="(tech, t) in techs" :key="t" class="techs__item pa-3 pa-md-4" :style="tech.color">
      <img :src="tech.img" :alt="tech.title">
      <div class="techs__title" v-text="tech.title" />
      <div class="techs__desc" v-text="tech.desc" />
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    techs: Array  
  }  
}
</script>

<style>
.techs__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
}
.techs__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
}
.techs__item img { height: 75px; width: 75px; }
.techs__title {
  font-size: 20px;
  font-weight: 500;
  margin-top: 8px;
  line-height: 1;
}
.techs__desc {
  font-size: 13px;
  line-height: 1.4;
  margin-top: 6px;
}
@media (max-width: 1060px) {
  .techs__container { grid-template-columns: repeat(auto-fit, minmax(25%, 1fr)); }
}
@media (max-width: 860px) {
  .techs__container { grid-template-columns: repeat(auto-fit, minmax(30%, 1fr)); }
}
@media (max-width: 600px) {
  .techs__container { grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); }
}
</style>