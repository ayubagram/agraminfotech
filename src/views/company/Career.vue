<template>
  <v-container>
    <div style="font-size: 25px; font-weight: 500;" class="mb-6 text-center">Benefits of Working With Us</div>
    <div class="benefits">
      <div class="benfit d-flex flex-column align-center text-center px-3 py-5" v-for="(b, i) in benefits" :key="i">
        <img :src="b.img" :alt="b.title" height="80">
        <div style="font-size: 15px; font-weight: 500; margin-top: 8px; line-height: 1.25;" v-text="b.title" />
      </div>
    </div>
    <!-- <div style="border-left: 2px solid red; background-color: rgb(289 83 80 / 10%);" class="mt-6 pa-3 red--text">We don't have any openings currently, please visit us again soon.</div> -->
    <div style="font-size: 25px; font-weight: 500;" class="mt-8 mb-4">Available Opening Jobs</div>
    <div class="jobs">
      <div class="job__item pa-4 pa-md-5 pa-lg-6" v-for="(j, a) in jobs" :key="a">
        <div class="job__title text-capitalize" style="line-height: 1.2; letter-spacing: .5px; font-weight: bold;">{{ j.title }}</div>
        <div class="caption mt-2" style="line-height: 1;">Vacancy :- <b>{{ j.vacancy }}</b></div>
        <div class="caption my-1" style="line-height: 1;">Experiance :- <b>{{ j.experience }} yrs. / {{ j.level }}</b></div>
        <div class="job__description pc my-3">{{ j.description }}</div>
        <div class="d-flex" style="grid-gap: 6px;">
          <v-btn color="primary" elevation="0" @click.stop="[dialog = true, form.position = j.title]">apply</v-btn>
        </div>
      </div>
    </div>
    <div class="job__item text-center caption pa-3" v-if="jobs.length <= 0">No jobs available currently.</div>  
    <v-dialog v-model="dialog" width="400">
      <div class="white pa-4 pa-sm-5 pa-md-6 pa-lg-7">
        <div class="title mb-4" style="line-height: 1;" v-text="'Aplly for the job'" />
        <v-form ref="form" lazy-validation v-model="valid" class="d-flex flex-column" style="grid-gap: 12px;">
          <v-text-field v-model="form.name" label="Name*" dense outlined hide-details="auto" :rules="[v => !!v|| 'Name is required.']" prepend-inner-icon="mdi-account" />
          <v-text-field v-model="form.mobile" label="Mobile Number*" type="number" dense outlined hide-details="auto" :rules="mobileRules" prepend-inner-icon="mdi-cellphone" />  
          <v-text-field v-model="form.email" label="Email*" dense outlined hide-details="auto" :rules="emailRules" prepend-inner-icon="mdi-email" /> 
          <v-select v-model="form.jobId" label="Position*" dense outlined hide-details="auto" :rules="[v => !!v || 'osition is required.']" :items="jobs" :item-value="item => item['.key']" item-text="title" prepend-inner-icon="mdi-format-title" />
          <v-file-input v-model="form.resume" label="Resume*" dense outlined hide-details="auto" :rules="[v => !!v || 'Resume is required.']" prepend-inner-icon="mdi-file" />
          <v-textarea v-model="form.coverLetter" label="Cover Letter..." dense outlined hide-details prepend-inner-icon="mdi-message" />  
          <v-btn color="primary" :disabled="!valid" @click="apply">submit</v-btn>  
        </v-form>
      </div>
    </v-dialog>
  </v-container>
</template>

<script>
import { db } from '@/firebase'
export default {
  firestore: () => ({
    jobs: db.collection('jobs').where('status', '==', true).orderBy('createdAt', 'desc')
  }),
  data: () => ({
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
    benefits: [
      { title: 'Great Team', img: require('@/assets/benefits/team.png') },
      { title: 'Real Impact', img: require('@/assets/benefits/impact.png') },
      { title: 'Flexible Hours', img: require('@/assets/benefits/flexible.png') },
      { title: 'Dynamic WorkSpace', img: require('@/assets/benefits/workspace.png') },
      { title: 'Education & Training', img: require('@/assets/benefits/education.png') },
      { title: 'Relationships', img: require('@/assets/benefits/relationship.png') }
    ]
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
  }
}
</script>

<style scoped>
.benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));
  grid-gap: 12px;
}
.benfit {
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
}
.jobs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-gap: 12px;
}
.job__item {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
}
button { animation: none !important; }
.job__description {
  -webkit-line-clamp: 5;
  font-size: 13px; 
  font-weight: 400; 
  color: rgb(0 0 0 / 70%);
}
</style>