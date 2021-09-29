<template>
  <v-footer color="white" class="py-6 py-sm-8 py-md-10 py-lg-12" elevation="6" padless>
    <v-container class="footer">
      <div class="company">
        <div class="logos">
          <img src="../assets/logo.png" height="40" alt="Agram logo">
          <img src="../assets/agram_text.png" height="40" alt="Agram logo">
        </div>   
        <div class="mt-3 mb-4 para black--text">Enabling Technology <br> To Transform</div>
        <div class="socials mt-4">
          <span class="para font-weight-bold black--text">Follow Us : </span>  
          <v-btn icon v-for="(social, s) in socials" :key="s" :color="social.color" target="_blank" :href="social.to">
            <v-icon size="18">{{ social.icon }}</v-icon>
          </v-btn>  
        </div>
      </div>
      <div class="footer__links">
        <div class="links">
          <div class="link__title">Company</div>
          <div class="para link" v-for="(inf, i) in company" :key="i" @click.stop="goto(inf.to)">{{ inf.title }}</div>
        </div>
        <div class="links">
          <div class="link__title">Products</div>
          <div class="para link" v-for="(product, p) in products" :key="p" @click.stop="goto(product.to)">{{ product.title }}</div>
        </div>
        <div class="links">
          <div class="link__title">Services</div>
          <div class="para link" v-for="(service, s) in services" :key="s" @click.stop="goto(service.to)">{{ service.title }}</div>
        </div>
        <div class="links">
          <div class="link__title">Contact</div>
          <div class="para" style="color: black !important;" v-for="(con, c) in contact" :key="c">{{ con }}</div>
        </div>  
      </div>
    </v-container>  
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    company: [
      { title: 'About Us', to: '/company/about-us' },
      { title: 'Portfolio', to: '/company/portfolio' },
      { title: 'Career', to: '/company/career' },
      { title: 'Gallery', to: '/company/gallery' }
    ],
    products: [
      { title: 'Agram Lab (Pathology)', to: '/products/agram-lab' },
      { title: 'Dairy Management System', to: '/products/dairy-management' },
      { title: 'Hospital Management System', to: '/products/hospital-management' },
      { title: 'Industry Management System', to: '/products/industry-management' },
      { title: 'Payroll Management System', to: '/products/payroll-management' },
      // { title: 'UI/UX', to: '/products/ui-ux' }
    ],
    services: [
      { title: 'Mobile App Development', to: '/services/mobile-app-development' },
      { title: 'Web App Development', to: '/services/web-app-development' },
      { title: 'Digital Marketing', to: '/services/digital-marketing' },
      { title: 'Ecommerce', to: '/services/ecommerce' },
      { title: 'On Demand App', to: '/services/on-demand-app' }
    ],
    contact: ['Agram Infotech Pvt. Ltd Panitanki Birgunj, Nepal', 'info@agramcloud.com', '+977 9802057014'],
    socials: [
      { color: '#3b5998', icon: 'mdi-facebook', to: 'https://www.facebook.com/agraminfotechbirgunj/' },
      { color: '#00acee', icon: 'mdi-twitter', to: 'https://www.twitter.com/agraminfotech/' },
      { color: '#9c59c4', icon: 'mdi-instagram', to: 'https://www.instagram.com/agraminfotech/' },
      { color: '#0e76a8', icon: 'mdi-linkedin', to: 'https://www.linkedin.com/company/agraminfotech/' }, 
    ],
  }),
  methods: {
    goto(link) {
      if(this.$route.path != link) this.$router.push(link)
    }
  } 
}
</script>

<style scoped>
.footer {
  display: grid;
  grid-template-columns: 280px calc(100% - 330px);
  grid-gap: 50px;  
}
.footer__links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));  
}
.link__title {
  font-weight: bold;
  margin-bottom: 16px;  
  letter-spacing: .5px;
  font-size: 18px;
}
.para {
  color: #1976d2;
  font-size: 13px; 
  letter-spacing: .5px;
}
.para.link { cursor: pointer; }
.links .para { margin-bottom: 8px; }
.links .para:last-child { margin-bottom: 0 !important; }
@media (max-width: 960px) {
  .footer { grid-gap: 40px; }  
  .footer__links { grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); }  
}
@media (max-width: 600px) {
  .footer { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); grid-gap: 30px;  }  
  .footer__links { row-gap: 20px; }
}
</style>