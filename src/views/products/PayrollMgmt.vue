<template>
  <div class="mb-5">
    <div class="banner" />
    <v-container class="mt-5">
      <div class="display-4 text-center">Payroll Management</div>
      <p  class="mt-5 font-weight-thin text-justify" style="font-size: 25px;">
        Payroll Management makes it easy to onboard, pay, insure, and support your hardworking team. This software is designed
        to simplify the complex processes involving payroll, benefits, and HR for modern businesses.
        It delivers a solid set of payroll features, along with a well-designed user interface,
        and innovation and automation functionalities. Plus, businesses get to use it at a fair price tailored
        to their exact needs. Gusto ensures that businesses can pay through bank deposit or check options,
        automated calculations, year-end forms, and taxation to avoid critical errors, and save even more time to handle bookkeeping on its own.
      </p>
    </v-container>
    <v-container class="text-center mt-10">
      <div class="display-2"> Overview</div>
      <p class="mt-5" align="justify" style="font-size: 20px">
        This software is user friendly and is designed for non technical person. With our premium offering,
        you’ll have features like bank reconciliation, recurring invoices, and user permissions. Streamline
        your accounting process even further with custom invoice templates and invoice payment reminders.
        The software helps to set up wages, fees, taxes, deductibles and other critical data that affect the
        employee’s salary. If you avail of the full-service package, calculating local, state and federal taxes
        is also accurate as the vendor has a team of experts to do this for you. This helps you to avoid costly regulatory penalties.<br><br>
        It not only focuses on the payroll process but also helps in getting insights, automating daily tasks, engaging the workforce.
        The software helps to store employee details and documents to the cloud securely. One can use this software from anywhere and anytime
        if the device has an internet connection. This software automatically updates the employee’s details, leaves, absentees, etc.
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
        ['Payroll Management', 'Invoice Management', 'Work Hours Tracker', 'Project Management'],
        ['Attendance and Leave Management', 'Document management', 'Request Management', 'Client Management'],
        ['Reports and Analytics', 'Hourly and Salary-based Computations', 'Customizable Payroll', 'Expense Management']
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
.banner { background-image: url('../../assets/products/img10.png'); }
ul.b {
  list-style-type: square;
  font-size: large;
}
</style>