<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="900px" transition="dialog-top-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="quote-btn" color="primary" v-bind="attrs" v-on="on">Request A Quote</v-btn>
      </template>
      <div class="quote-div">
        <v-row>
          <v-avatar class="close" color="primary" size="40" @click="close">
            <v-icon size="20" dark>mdi-close</v-icon>
          </v-avatar>
          <v-col cols="12" sm="12" md="6" class="pr-0">
            <v-card class="py-8 px-4">
              <v-card-title>
                <span class="headline">Tell Us About Your Project</span>
              </v-card-title>
              <v-card-text>
                <v-container class="pa-0">
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field label="First Name*" v-model="form.name" outlined hide-details required :rules="[ v => !!v || 'Name is required.' ]" />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Mobile Number*" v-model="form.mobile" outlined hide-details required :rules="[ v => !!v || 'Mobile Number is required.' ]" />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Email*" v-model="form.email" outlined hide-details :rules="emailRules" required />
                      </v-col>
                      <v-col cols="12">
                        <v-textarea v-model="form.message" label="Message" outlined hide-details />  
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions class="pa-4">
                <v-btn class="primary" dark large text @click="submit" block :disabled="!valid">submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="d-none d-sm-none d-md-block pl-0">
            <div class="fill-height white--text pa-4 d-flex flex-column justify-center" style="background-color: rgba(25, 118, 210, .5);">
              <div style="font-size: 25px; font-weight: 500;">We Love To Support You</div>
              <div v-for="(item, i) in items" :key="i" class="mb-2">
                <v-avatar color="primary" size="40">
                  <v-icon size="20" dark>{{ item.icon }}</v-icon>
                </v-avatar>
                <span class="ml-2" style="line-height: 1.25;">{{ item.title }}</span>
              </div>

              <div style="height: 1px;" class="white mt-2"></div>
              <div class="social text-center align-center mt-5">
                <a v-for="(social, s) in socials" :key="s" target="_blank" :href="social.href">
                  <v-icon size="20" class="icon white--text">{{ social.icon }}</v-icon>
                </a>  
              </div>
            </div>
          </v-col>
        </v-row>
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
      email: null,
      mobile: null,
      message: null
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    items: [
      { title: 'Agram Infotech Pvt. Ltd Company Panitanki Birgunj, Nepal', icon: 'mdi-map-marker' },
      { title: 'info@agraminfotech.com', icon: 'mdi-email' },
      { title: '+977 98550 21475', icon: 'mdi-phone' }
    ],
    socials: [
      { title: 'Facebook', icon: 'mdi-facebook', href: 'https://www.facebook.com' }  ,
      { title: 'Linkedin', icon: 'mdi-linkedin', href: 'https://www.linkedin.com' }  ,
      { title: 'Twitter', icon: 'mdi-twitter', href: 'https://www.twitter.com' }  ,
      { title: 'Instagram', icon: 'mdi-instagram', href: 'https://www.instagram.com' }  
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
        this.$store.dispatch({ type: 'sendMessage', form: this.form })
        .then( () => this.$refs.form.reset())
      }
      else console.log('nope')
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
.btn { animation: none !important; }
.quote-div {
  background-image: url('../assets/quote.jpeg');
  background-size: cover;
  background-repeat: no-repeat; 
  background-position: center center;
  position: relative;
}
.social a {
  padding: 10px;
  border: 1px solid white;  
  margin-right: 10px;
  transition: 250ms ease-in-out;
  text-decoration: none;
}
.social a:last-child { margin-right: 0 !important; }
.social a:hover {
  background-color: white;
  border-radius: 50%;  
}
.social a:hover .icon { color: blue !important; }
a {
  text-decoration: none;
  color: white !important;
  margin-bottom: 10px;
  line-height: 1;
}
.close {
  background-color: rosybrown;
  position: fixed;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
</style>