<template>
  <v-container v-if="job">
    <div class="text-h5 text-md-h4">{{ job.title }}</div>
    <div class="d-flex flex-column font-weight-bold my-2" style="font-size: 15px;">
      <div>Job Level :- {{ job.level }}</div>
      <div>Experiance :- {{ job.experience }} Years</div>
      <div>No. of Vacancy :- {{ job.vacancy }}</div>
    </div>
    <div class="font-weight-bold mb-1">DESCRIPTION</div>
    <div style="font-size: 14px;" class="text-justify">{{ job.description }}</div>
    <div class="font-weight-bold mt-4 mb-1">SKILLS</div>
    <ul>
      <li v-for="(s, i) in job.skills" :key="i">{{ s }}</li>
    </ul>
    <div class="text-center mt-4">
      <v-btn width="150" color="primary" @click.stop="[dialog = true, form.jobId = $route.params.id, form.position = job.title]">Apply</v-btn>
    </div>

    <!-- Apply Dialog -->
    <v-dialog v-model="dialog" width="400">
      <div class="white pa-4 pa-sm-5 pa-md-6 pa-lg-7">
        <div class="title mb-4" style="line-height: 1;" v-text="'Aplly for the job'" />
        <v-form ref="form" lazy-validation v-model="valid" class="d-flex flex-column" style="grid-gap: 12px;">
          <v-text-field v-model="form.name" label="Name*" dense outlined hide-details="auto" :rules="[v => !!v|| 'Name is required.']" prepend-inner-icon="mdi-account" />
          <v-text-field v-model="form.mobile" label="Mobile Number*" type="number" dense outlined hide-details="auto" :rules="mobileRules" prepend-inner-icon="mdi-cellphone" />  
          <v-text-field v-model="form.email" label="Email*" dense outlined hide-details="auto" :rules="emailRules" prepend-inner-icon="mdi-email" /> 
          <v-text-field readonly v-model="form.position" label="Position*" dense outlined hide-details="auto" prepend-inner-icon="mdi-format-title" />
          <v-file-input v-model="form.resume" label="Resume*" dense outlined hide-details="auto" :rules="[v => !!v || 'Resume is required.']" prepend-inner-icon="mdi-file" />
          <v-textarea v-model="form.coverLetter" label="Cover Letter..." dense outlined hide-details prepend-inner-icon="mdi-message" />  
          <v-btn color="primary" :disabled="!valid" @click="apply">submit</v-btn>  
        </v-form>
      </div>
    </v-dialog>
  </v-container>  
</template>

<script>
import { db } from '../../firebase'
export default {
  data: () => ({
    job: null,
    dialog: false,
    valid: true,
    form: {
      name: null,
      mobile: null,
      email: null,
      jobId: null,
      position: null,
      resume: null,
      coverLetter: null
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    mobileRules: [
      v => !!v || 'Mobile Number is required.',
      v => ( v && v.length == 10 ) || 'Mobile number must be 10 digit.'
    ],
  }),
  methods: {
    apply() { 
      if(this.$refs.form.validate()) {
        this.dialog = false
        this.form['appliedDate'] = new Date().getTime()
        this.$store.dispatch({
          type: 'save',
          collection: 'applied',
          data: this.form
        }).then(() => this.$refs.form.reset()).catch(() => this.dialog = true)
      }
    }
  },
  created() {
    this.$store.commit('SET_OVERLAY', true)
    db.collection('jobs').doc(this.$route.params.id).get().then(doc => {
      if(doc.exists) this.job = doc.data()  
      else {
        alert('This job has been expired.')
        this.$router.push('/company/career')
      }
      this.$store.commit('SET_OVERLAY', false)
    }).catch(e => {
      alert(e.message)
      this.$store.commit('SET_OVERLAY', false)  
    })
  }  
}
</script>