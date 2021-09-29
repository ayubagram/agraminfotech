<template>
  <div class="mb-5">
    <div class="banner" />
    <v-container class="mt-5">
      <div class="display-4 text-center">Health Post Management</div>
      <p  class="mt-5 font-weight-thin text-justify" style="font-size: 25px;">
        Health Post Management streamlines and integrates the operations, processes and information flow in hospitals and is designed to manage all
        the aspects of hospitals in a single platform. It combines all the information related to patients, doctors, staff,
        hospital administration into one software.
      </p>
    </v-container>
    <v-container class="text-center mt-10">
      <div class="display-2"> Overview</div>
      <p class="mt-5" align="justify" style="font-size: 20px">
        Health Post Management system automates the clinic’s work and optimizes the utilization of resources
        instead of only the storage and presentation of the information. It balances the occupancy rates and
        calculates the number of required employees. Automation helps to manage the general process, deals with
        the different healthcare services and equipment providers on its own, analyzes and sends notifications
        to the user. The purpose of the hospital information system is managing the employee and patient
        activities remotely with immediate access for the authorized users. The patient-centric and
        well-managed company will also ensure a better work environment for their employees.<br><br>
        Need to improve management in your hospital or plan to innovate healthcare with new software product?
        The hospital system software is a great solution for any medical institution. If you have any questions,
        feel free to contact us via the contact form or start the discussion in the website chat widget. We will be glad to
        provide professional consultation and find the solution for you.
      </p>
    </v-container>
    <div class="primary white--text mt-6 mt-sm-8 mt-md-11 mt-lg-14 py-6 py-sm-8 py-md-11 py-lg-14">
      <v-container>
        <h1 class="mb-3">Key Features</h1>
        <ul class="b">
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="(f, i) in features" :key="i">
              <li v-for="l in f" :key="l">{{ l }}</li>
            </v-col>
          </v-row>
        </ul>
      </v-container>
    </div>
    <v-container class="text-center mt-10">
      <h1 class="mb-4">Technology Stack</h1>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(tech, t) in techs" :key="t">
          <div class="benefit pa-4">
            <img :src="tech.img">
            <div class="benefit-desc mt-3">{{ tech.desc }}</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
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
        ['Patient Management', 'Appointment Module', 'Facility Management', 'Inventory Management'],
        ['Staff Management', 'Accounting', 'Helpdesk & Support', 'Medicine Management'],
        ['Laboratory and Tests Management', 'Reporting', '24 X 7 Customer Support', 'High-Level Customisation']
      ],
      techs: [
        { title: 'CSS3', img: require('@/assets/techs/css3.png'), desc: 'We develop extra ordinary website using most popular and well known front-end frameworks. React.js is especially useful in the development of user interface for the website applications.' },
        { title: 'HTML5', img: require('@/assets/techs/html5.png'), desc: 'Angular is a Type Script-based, open-source, front end mobile and web application framework which is great for handling your Web Pages. We use Angular.js in our toolkit for developing websites.' },
        { title: 'Java', img: require('@/assets/techs/java.png'), desc: 'PHP is a broadly used scripting language that is particularly suited for web development. Our PHP Website development service includes Designing, Database design, developing the site structure, testing, and production.' },
      ]
    }
  },
}
</script>

<style>
.banner { background-image: url('../../assets/products/img7.png'); }
ul.b {
  list-style-type: square;
  font-size: large;
}
</style>