<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="900px" transition="dialog-top-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="quote-btn" color="primary" v-bind="attrs" v-on="on">Request A Quote</v-btn>
      </template>
      <div class="quote-div">
        <div class="request__close__btn">
          <v-btn icon class="red" @click="close">
            <v-icon size="20" color="white" v-text="'mdi-close'" />
          </v-btn>
        </div>
        <v-card class="py-8 px-4" style="position: static;">
          <v-card-title>
            <span class="headline">Tell Us About Your Project</span>
          </v-card-title>
          <v-card-text class="py-0">
            <v-form ref="form" v-model="valid" lazy-validation class="d-flex flex-column" style="grid-gap: 12px;">
              <v-text-field label="First Name*" v-model="form.name" outlined hide-details dense :rules="[ v => !!v || 'Name is required.' ]" />
              <v-text-field label="Mobile Number*" v-model="form.mobile" outlined hide-details dense :rules="mobileRules" />
              <v-text-field label="Email*" v-model="form.email" outlined hide-details :rules="emailRules" dense />
              <v-textarea v-model="form.message" label="Message" outlined hide-details dense rows="4" />  
            </v-form>
            <div class="mb-3"><small>*indicates required field</small></div>
            <v-btn class="primary" dark large text @click="submit" :disabled="!valid" width="160">submit</v-btn>
          </v-card-text>
        </v-card>
        <div class="request__info fill-height pa-4">
          <div style="font-size: 25px; font-weight: 500;">We Love To Support You</div>
          <div class="d-flex flex-column" style="grid-gap: 12px;">
            <div v-for="(item, i) in items" :key="i" class="d-flex align-center">
              <v-avatar color="primary" size="40">
                <v-icon size="20" dark v-text="item.icon" />
              </v-avatar>
              <span class="ml-2" style="line-height: 1.25;">{{ item.title }}</span>
            </div>
          </div>
          <div style="height: 1px;" class="white mt-2"></div>
          <div class="text-center align-center mt-5">
            <v-btn icon v-for="(social, s) in socials" :key="s" target="_blank" :href="social.to" color="white">
              <v-icon size="20" class="icon white--text" v-text="social.icon" />
            </v-btn>  
          </div>
        </div>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: true,  
    form: {
      name: null,
      email: '',
      mobile: '',
      message: null
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    mobileRules: [
      v => !!v || 'Mobile Number is required',
      v => v.length == 10 || 'Enter 10 digit mobile number'
    ],
    items: [
      { title: 'Agram Infotech Pvt. Ltd Panitanki Birgunj, Nepal', icon: 'mdi-map-marker' },
      { title: 'info@agraminfotech.com', icon: 'mdi-email' },
      { title: '+977 98550 21475', icon: 'mdi-phone' }
    ],
    socials: [
      { color: '#3b5998', icon: 'mdi-facebook', to: 'https://www.facebook.com/agraminfotechbirgunj/' },
      { color: '#00acee', icon: 'mdi-twitter', to: 'https://www.twitter.com/agraminfotech/' },
      { color: '#9c59c4', icon: 'mdi-instagram', to: 'https://www.instagram.com/agraminfotech/' },
      { color: '#0e76a8', icon: 'mdi-linkedin', to: 'https://www.linkedin.com/company/agraminfotech/' }, 
    ]
  }),
  computed: {
    dialog: {
      get () {
        return this.$store.state.request_quote
      },
      set (val) {
        this.$store.commit('SET_REQUEST_QUOTE', val)
      },
    },
  },
  methods: {
    close() {
      this.$store.commit('SET_REQUEST_QUOTE', false)
    },
    submit() {
      if(this.$refs.form.validate()) {
        this.$store.dispatch({ type: 'sendMessage', form: this.form }).then( () => this.$refs.form.reset())
      }
      this.close()
    }
  }
}
</script>

<style scoped>
.quote-btn {
  position: fixed;
  right: -50px;
  top: 50%; 
  transform: rotate(-90deg); 
}
.v-btn { animation: none !important; }
.quote-div {
  background-image: url('../assets/quote.jpeg');
  background-size: cover;
  background-repeat: no-repeat; 
  background-position: center center;
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
}
.request__info {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: rgba(25, 118, 210, .5); */
  background-color: rgb( 0 0 0 / 50%);
}
.request__close__btn {
  position: absolute;
  right: 10px;
  top: 10px;
}
@media (max-width: 731px) {
  .quote-div { grid-template-columns: 100%; }
  .request__info { display: none !important; }
}
</style>