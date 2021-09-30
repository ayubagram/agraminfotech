<template>
  <div class="mb-5">
    <div class="banner" />
    <v-container class="mt-5 text-center">
      <div style="font-size: 25px; font-weight: 500;">Industry Management</div>
      <p class="mt-2 mt-sm-3 mt-md-4">
        Industry Management is a cloud-based, one-stop compliance tracking solution with
        technology that tracks your organization's compliance. We map all applicable
        laws for your organization/industry across domains like - Employment, Corporate, Industrial, and Finance.
      </p>
      <div style="font-size: 25px; font-weight: 500;" class="mt-5 mt-sm-6 mt-md-7 mt-lg-8">Overview</div>
      <p class="mt-2 mt-sm-3 mt-md-4">
        Industry Management is a comprehensive ERP solution built for multiple industries, including construction, engineering,
        casting foundry, food and beverages, metal processing, electronics, and healthcare among others. It delivers a
        modular approach, enabling users to pick and integrate core modules with features they need and then modify their core structure
        as their business requirements change. It’s core modules include Purchase Management, CRM, Planning and Production, Inventory Management,
        Machine Management, QC and Calibration Management, and Finance Management to mention some.
      </p>
    </v-container>
    <div class="primary white--text mt-6 mt-sm-8 mt-md-11 mt-lg-14 py-6 py-sm-8 py-md-11 py-lg-14">
      <v-container>
        <div class="mb-3" style="font-size: 25px; font-weight: 500;">Key Features</div>
        <ul class="b">
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="(f, i) in features" :key="i">
              <li v-for="l in f" :key="l">{{ l }}</li>
            </v-col>
          </v-row>
        </ul>
      </v-container>
    </div>
    <div class="text-center mt-10 mb-4" style="font-size: 25px; font-weight: 500;">Technology Stack</div>
    <Techs :techs="techs" />
    <!--    <div class="grey lighten-4 mt-6 mt-sm-8 mt-md-11 mt-lg-14 py-6 py-sm-8 py-md-11 py-lg-14">
          <v-container>
            <h1 class="mb-3">Client's Feedback</h1>
            <p style="font-style:italic; font-size: 25px">
              "Agram Infotech showcased great execution and communication on a project involving many stakeholders.
              I’d work with them again and would highly recommend them to get the job done."<br>
              <b>- C.E.O, Medilanee Diagnostics & Research Centre</b>
            </p>
          </v-container>
        </div>-->

    <!-- <v-container class="green">
      <v-carousel cycle class="yellow" hide-delimiters hide-delimiter-background :show-arrows="false" :interval="interval">
        <v-carousel-item v-for="i in 5" :key="i">
          <v-sheet class="py-6 py-sm-8 py-md-11 py-lg-14">
            <v-row class="fill-height" align="center" justify="center">
              <div>
                <h1>Client's Feedback</h1>
                <p style="font-style:italic; font-size: 25px">
                  "Agram Infotech showcased great execution and communication on a project involving many stakeholders.
                  I’d work with them again and would highly recommend them to get the job done."<br>
                  <b>- C.E.O, Medilanee Diagnostics & Research Centre</b>
                </p>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {src: require('@/assets/products/img1.png'),},
        {src: require('@/assets/products/img2.png'),},
        {src: require('@/assets/products/img3.png'),},
        {src: require('@/assets/products/img4.png'),},
        {src: require('@/assets/products/img5.png'),}
      ],
      interval: 3000,
      features: [
        ['Budgeting', 'Inventory Management', 'Customer Support', 'Financial Management'],
        ['CRM & Sales Reports', 'Accounting', 'Helpdesk & Support', 'Document Management'],
        ['Case Management', 'Email Integration', 'CRM Analytics', 'High-Level Customisation']
      ],
      techs: [
        { title: 'CSS3', color: 'backgroundColor: rgb(2 119 189 / 10%);', img: require('@/assets/techs/css3.png'), desc: 'We develop extra ordinary website using most popular and well known front-end frameworks. React.js is especially useful in the development of user interface for the website applications.' },
        { title: 'HTML5', color: 'backgroundColor: rgb(230 81 0 / 10%);', img: require('@/assets/techs/html5.png'), desc: 'Angular is a Type Script-based, open-source, front end mobile and web application framework which is great for handling your Web Pages. We use Angular.js in our toolkit for developing websites.' },
        { title: 'Java', color: 'backgroundColor: rgb(85 84 255 / 10%);', img: require('@/assets/techs/java.png'), desc: 'PHP is a broadly used scripting language that is particularly suited for web development. Our PHP Website development service includes Designing, Database design, developing the site structure, testing, and production.' },
      ]
    }
  },
}
</script>

<style>
.banner { background-image: url('../../assets/products/img9.png'); }
</style>