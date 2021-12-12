<template>
  <v-app>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
    <Navbar />
    <v-main class="mb-10">
      <router-view :key="$route.path" />
    </v-main>
    <Footer />
    <RequestQuote />
  </v-app>
</template>

<script>
import RequestQuote from '@/components/RequestQuote'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: { RequestQuote, Navbar, Footer },
  metaInfo: () => ({
    title: 'Agram Infotech - You Dream, We Make IT Happen',
    meta: [
      { name: 'description', content: 'Agram Infotech - You Dream, We Make IT Happen' },
      { property: 'og:title', content: 'Home - Agram Infotech' },
      { property: 'og:site_name', content: 'Agram Infotech'},
      { property: 'og:description', content: 'This is home content' },
      { property: 'og:type', content: 'home' },
      { property: 'og:url', content: 'https://agraminfotech.com/' },   
    ]
  }),
  computed: {
    overlay() {
      return this.$store.state.overlay
    }
  }
};
</script>

<style>
::-webkit-scrollbar { display: none; }
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.v-input__prepend-outer { display: none; }
.v-input__icon.v-input__icon--prepend button, .v-input__icon--clear button { animation: none !important; }

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
iframe {
  width: 100%;
  height: 100%;
}
.v-toolbar__content { padding: 0 12px !important; }

.container {
  max-width: 1250px !important;
  margin-right: auto !important;
  margin-left: auto !important;
  padding: 12px !important;
}

p {
  font-size: 14px;
  text-align: justify;
  letter-spacing: .5px;
}
ul.b {
  list-style-type: square;
  font-size: 14px;
  letter-spacing: .5px;
}

/* Three Line grid */
.three__line__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31%, 1fr));
  grid-gap: 12px;
}

/* Button Ripple Effect */
@keyframes tween-color {
  0% { box-shadow: 0 0 0 0 rgb(51 152 204 / 50%); }
  50% { box-shadow: 0 0 0 20px rgb(51 152 204 / 0%); }
  100% { box-shadow: 0 0 0 0 rgb(51 152 204 / 0%); }
}

/* Career benefits and services */
.benefit {
  background-color: rgba(128, 128, 128, .05);
  font-size: 20px;
  font-weight: 500;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .25);
  border-radius: 15px;
}
.benefit-desc {
  font-size: 14px;
  font-weight: 400;
}
.benefit img, .service img { height: 100px; }
.service {
  box-shadow: none !important;
  border-radius: 0 !important;
  background-color: transparent !important;
  border: 2px solid black;
  text-align: center;
}

/* Text Overlow ellipsis */
.pc {
  line-height: 1.25; 
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
}
/* Image Back */
.img-back {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
/* DM */
.dm {
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 30vh;
  transition: ease-in-out 250ms;
  overflow: hidden;
}
.dm img { height: 100px; }
.dm:hover { 
  background-color: #4169e1;
  color: white;
  border: 2px solid transparent;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .25);
}
.dm-title {
  font-size: 20px; 
  line-height: 1.25;
  font-weight: 500;
}
.dm-desc { 
  font-size: 14px;
  line-height: 1.4;
  text-align: justify;
}

.contents span { margin-left: 100px; }

/* Products */
.products {
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: ease-in-out 250ms;
  overflow: hidden;
  cursor: pointer;
}
.products:hover { 
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, .25);
  border-radius: 15px;
}
.content {
  background-color: rgba(0, 0, 0, .6);
  width: 100%;
  color: white;
}
.content-title {
  height: 25px;   
  font-weight: 500;
  font-size: 20px;
  -webkit-line-clamp: 1;
  text-transform: capitalize; 
}
.content-desc { -webkit-line-clamp: 3; }

/* Banner */
.banner {
  height: 75vh;
  background-image: url('https://cdn.educba.com/academy/wp-content/uploads/2019/12/Advantages-of-Web-Service.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.banner-text {
  position: relative;
  background-color: rgba(0, 0, 0, .25);
  height: 100%;
  color: white;
  flex-direction: column;
}
button {
  padding: 10px 30px;
  animation: tween-color 3s infinite ease-in-out !important;
}

/* Portfolio */
.portfolio {
  height: 40vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: ease-in-out 250ms;
  overflow: hidden;
}
.portfolio:hover {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, .25);
  border-radius: 8px;
}
.portfolio-reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}

/* Company Div */
.company-div {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.v-btn span { 
  font-weight: 300 !important;
  text-transform: capitalize !important; 
}

/* Input Fields */
.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot { border-radius: 0 !important; }
.v-text-field input, .v-input .v-label {
  font-size: 14px !important;
  color: rgb(0 0 0 / 80%) !important;
  letter-spacing: 1px !important;
}
.v-input input { font-size: 14px !important; }
.v-input .v-label { 
  line-height: 1 !important;
  font-size: small !important;
}
.v-text-field--outlined.v-input--is-focused fieldset { border: 1px solid #1976d2 !important; }
.v-text-field--outlined.v-input--has-state fieldset { border: 1px solid #ff5252 !important; }
.v-input .v-icon.v-icon { font-size: 18px !important; }
.v-text-field--outlined.v-input--dense .v-label { top: 14px !important; }

.active__nav {
  color: #fff !important;
  background-color: rgba(255, 255, 255, .25) !important;
}

/* Media Quaries */
@media (max-width: 1060px) {
  .benefits { grid-template-columns: repeat(auto-fit, minmax(18%, 1fr)) !important; }
}
@media (max-width: 960px) {
  .three__line__grid { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
  .benefits { grid-template-columns: repeat(auto-fit, minmax(23%, 1fr)) !important; }
  .jobs { grid-template-columns: repeat(auto-fill, minmax(48%, 1fr)); }
}
@media (max-width: 860px) {
  .jobs { grid-template-columns: repeat(auto-fit, minmax(45%, 1fr)) !important; }
}
@media (max-width: 760px) {
  .benefits { grid-template-columns: repeat(auto-fit, minmax(30%, 1fr)) !important; }
  /* .jobs { grid-template-columns: repeat(auto-fit, minmax(45%, 1fr)) !important; } */
}
@media (max-width: 660px) {
  .three__line__grid { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
  .jobs { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}
@media (max-width: 560px) {
  .benefits { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)) !important; }
  .jobs { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)) !important; }
}
</style>