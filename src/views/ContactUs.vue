<template>
  <v-container class="d-flex flex-column" style="grid-gap: 30px;">
    <div class="contact__us">
      <div class="contact__info">
        <div style="font-size: 25px; font-weight: 500;">GET IN TOUCH</div>
        <div class="my-3">Feel free to contact us anytime. We will get back to you as soon as possible.</div>
        <div class="contacts d-flex flex-column my-6" style="grid-gap: 20px;">
          <div v-for="(inf, i) in contacts" :key="i" class="d-flex align-center">
            <div class="contact__circle primary">
              <v-icon color="white">{{ inf.icon }}</v-icon>
            </div>
            <div style="line-height: 1;" class="ml-3">
              <div class="title mb-1" style="line-height: 1;">{{ inf.head }}</div>  
              <small>{{ inf.title }}</small>
            </div>
          </div>
        </div> 
        <div class="d-flex flex-wrap mt-6">
          <v-btn large v-for="(social, s) in socials" :key="s" icon :color="social.color" target="_blank" :href="social.to">
            <v-icon v-text="social.icon" size="24" :color="social.color" />
          </v-btn>
        </div>
      </div>
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.475286597595!2d84.88296471436823!3d27.01514346217793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993558b671d2faf%3A0x8922702ad8a7ddf5!2sAgram%20InfoTech%20Pvt.%20Ltd%2C%20Panitanki%2C%20Birgunj!5e0!3m2!1sen!2snp!4v1613635250851!5m2!1sen!2snp" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Agram Infotech"></iframe>  
      </div>
    </div>
    <v-form ref="form" lazy-validation v-model="valid" class="d-flex flex-column" style="grid-gap: 12px;">
      <div style="font-size: 22px;">Message Us</div>
      <div class="d-flex flex-wrap" style="grid-gap: 12px;">
        <v-text-field v-model="form.name" label="Full Name" hide-details dense outlined :rules="[ v => !!v || '' ]" prepend-inner-icon="mdi-account" />
        <v-text-field v-model="form.email" label="Email" hide-details dense outlined :rules="emailRules" prepend-inner-icon="mdi-email" />
        <v-text-field v-model="form.mobile" type="number" hide-details outlined label="Mobile Number" dense :rules="mobileRules" prepend-inner-icon="mdi-phone" />
      </div>
      <v-textarea v-model="form.message" label="Message..." hide-details outlined dense rows="4" prepend-inner-icon="mdi-message" />
      <v-btn :disabled="!valid" @click="submit" large color="primary" rounded max-width="200">submit</v-btn>       
    </v-form>  
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    contacts: [
      { icon: 'mdi-email', head: 'Email', title: 'info@agraminfotech.com' },
      { icon: 'mdi-phone', head: 'Phone Number', title: '+977 9802057014' },
      { icon: 'mdi-map-marker', head: 'Address', title: 'Agram Infotech Pvt. Ltd Panitanki Birgunj, Nepal' }  
    ],  
    socials: [
      { color: '#3b5998', icon: 'mdi-facebook', to: 'https://www.facebook.com/agraminfotechbirgunj/' },
      { color: '#00acee', icon: 'mdi-twitter', to: 'https://www.twitter.com/agraminfotech/' },
      { color: '#9c59c4', icon: 'mdi-instagram', to: 'https://www.instagram.com/agraminfotech/' },
      { color: '#0e76a8', icon: 'mdi-linkedin', to: 'https://www.linkedin.com/company/agraminfotech/' }, 
    ],
    valid: true,
    form: {
      name: '',
      email: '',
      mobile: '',
      message: ''  
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    mobileRules: [
      v => !!v || 'Mobile Number is required',
      v => v.length == 10 || 'Enter your 10 digit mobile number'
    ]

  }),
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.$store.dispatch({ type: 'sendMessage', form: this.form }).then( () => this.$refs.form.reset())
      } 
    }  
  }
}
</script>

<style scoped>
.contact__us {
  display: grid; 
  grid-template-columns: calc(50% - 15px) calc(50% - 15px);
  grid-gap: 30px;
}
.map {
  overflow: hidden;
  border-radius: 10px;  
  min-height: 40vh;
}
.form-div {
  box-shadow: 0 1px 10px 0 rgb( 0 0 0 / 20%);  
  overflow: hidden;
  border-radius: 6px;
}
.contact__circle {
  height: 48px;
  width: 48px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;  
}
button { 
  animation: none !important; 
  background-color: transparent; 
}
@media (max-width: 760px) {
  .contact__us { grid-template-columns: 100%; }
}
</style>