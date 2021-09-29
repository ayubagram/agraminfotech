<template>
  <div class="contact-form pa-10">
    <div style="font-size: 25px; font-weight: 500;" class="text-center mb-4">{{ title }}</div>
    <div class="text-center mb-8">Feel free to contact us whenever you want. Just tell us your query and we will revert back with a solution shortly.</div>
    <v-form ref="form" lazy-validation v-model="valid">
      <v-row>
        <v-col cols="12" md="6">
          <div class="d-flex mb-2" style="opacity: .75;">
            <v-icon size="30">mdi-account-outline</v-icon>
            <span class="ml-3" style="font-size: 20px;">Your Name*</span>
          </div>
          <v-text-field v-model="form.name" outlined :rules="[ v => !!v || 'Name is required.' ]" />
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex mb-2" style="opacity: .75;">
            <v-icon size="30">mdi-at</v-icon>
            <span class="ml-3" style="font-size: 18px;">Your Email*</span>
          </div>
          <v-text-field v-model="form.email" outlined :rules="emailRules" />
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex mb-2" style="opacity: .75;">
            <v-icon size="30">mdi-cellphone</v-icon>
            <span class="ml-3" style="font-size: 18px;">Your Mobile Number*</span>
          </div>
          <v-text-field v-model="form.mobile" outlined :rules="[ v => !!v || 'Mobile Number is required.' ]" />
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex mb-2" style="opacity: .75;">
            <v-icon size="30">mdi-view-dashboard-outline</v-icon>
            <span class="ml-3" style="font-size: 18px;">Your Interest*</span>
          </div>
          <v-select v-model="form.interest" :items="items" outlined :rules="[ v => !!v || 'Interest is required.' ]" />
        </v-col>
        <v-col cols="12">
          <div class="d-flex mb-2" style="opacity: .75;">
            <v-icon size="30">mdi-chat-outline</v-icon>
            <span class="ml-3" style="font-size: 18px;">Your Message</span>
          </div>
          <v-textarea v-model="form.message" outlined hide-details />
        </v-col>
        <v-col cols="12" class="mt-2">
          <v-btn class="btn" width="200" rounded large color="primary" elevation="0" @click="submit" :disabled="!valid">Get in Touch</v-btn>
        </v-col>
      </v-row>  
    </v-form>
  </div>  
</template>

<script>
export default {
  props: { 
    title: String
  },
  data: () => ({
    valid: true,
    form: {
      name: null,
      email: null,
      mobile: null,
      interest: null,
      message: null
    },
    items: ['Mobile App Development', 'Web App Development', 'Digital Marketing', 'Ecommerce'],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    submit() {
      if(this.$refs.form.validate()) this.$store.dispatch({ type: 'sendMessage', form: this.form }).then( () => this.$refs.form.reset())
    }
  }
}
</script>

<style scoped>
.contact-form {
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, .25);  
  border-radius: 5px;
  max-width: 1100px;
  margin: auto;
}
.btn {
  background-color: royalblue !important;
  animation: tween-color 2s 3s infinite ease-in-out !important;
}
</style>