<template>
  <div class="Navbar">
    <v-app-bar app color="white" elevate-on-scroll>
      <v-container class="d-flex px-0 px-lg-3">
        <div class="d-flex align-center" style="cursor: pointer;" @click="() => this.$router.push('/')">
          <v-img alt="Agram Logo" class="shrink mr-2" contain src="../assets/logo.png" transition="scale-transition" width="40" />
          <v-img alt="Agram Infotech" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="../assets/agram_text.png" width="100" />
        </div>
        
        <v-spacer />

        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-block d-sm-block d-md-none"></v-app-bar-nav-icon>
        <div class="main-menu d-none d-sm-none d-md-block">
          <ul class="d-flex">
            <li v-for="(item, i) in items" :key="i">
              <v-btn color="primary" class="text-capitalize" style="font-weight: 400;" tile text :to="item.to" min-height="62">{{ item.title }}</v-btn>
              <v-list class="list pa-0" v-if="item.children">
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item style="min-height: 60px;" v-for="(child, c) in item.children" :key="c" link :to="child.to">
                    <v-list-item-content class="primary--text">{{ child.title }}</v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </li>
          </ul>
        </div>
      </v-container>
    </v-app-bar> 

    <v-navigation-drawer color='primary' dark v-model="drawer" app disable-resize-watcher>
      <v-list expand nav tile shaped>
        <v-list-item-group v-model="selectedItem">
          <v-list-item v-for="(item, i) in items" :key="i" :to="`${item.to}`">
            <v-list-item-icon class="mx-3">
              <v-icon size='20' v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title" style="letter-spacing: 1px;" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div> 
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    selectedItem: 0,
    items: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { 
        title: 'Company', icon: 'mdi-information', to: '/company',
        children: [
          { title: 'About Us', to: '/company/about-us' },
          { title: 'Portfolio', to: '/company/portfolio' },
          { title: 'Career', to: '/company/career' },
          // { title: 'Gallery', to: '/company/gallery' },
        ]
      },
      { 
        title: 'Services', icon: 'mdi-cog', to: '/services',
        children: [
          { title: 'Mobile App Development', to: '/services/mobile-app-development' },
          { title: 'Web App Development', to: '/services/web-app-development' },
          { title: 'Digital Marketing', to: '/services/digital-marketing' },
          { title: 'Ecommerce', to: '/services/ecommerce' },
          { title: 'On Demand App', to: '/services/on-demand-app' },
        ]
      },
      {
        title: 'Solutions', icon: 'mdi-console', to: '/solutions',
        children: [
          { title: 'IoT Solution For Agriculture', to: '/solutions/iot-solution-for-agriculture' },
          { title: 'IoT Solution For Flood Monitor', to: '/solutions/iot-solution-for-flood-monitor' },
        ]
      },
      { 
        title: 'Products', icon: 'mdi-check-decagram', to: '/products',
        children: [
          { title: 'Agram Lab (Pathology)', to: '/products/agram-lab' },
          { title: 'Dairy Management System', to: '/products/dairy-management' },
          { title: 'Hospital Management System', to: '/products/hospital-management' },
          { title: 'Industry Management System', to: '/products/industry-management' },
          { title: 'Payroll Management System', to: '/products/payroll-management' },
          // { title: 'UI/UX', to: '/products/ui-ux' },
        ] 
      },
      { title: 'Our Team', icon: 'mdi-account-group', to: '/our-team' },
      // { title: 'Blogs', icon: 'mdi-post', to: '/blogs' },
      { title: 'Contact Us', icon: 'mdi-account-box', to: '/contact-us' }
    ]
  }), 
  watch: {
    selectedItem () {
      this.drawer = false
    }
  },
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0 !important;
}
ul li { list-style: none; }

/* main menu */
.main-menu ul .list { 
  display: none; 
  position: absolute;
  flex-direction: column;
  top: 65px;
  min-width: 250px;
  background-color: white;
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, .25);
}
.main-menu li:hover ul { display: flex; }
.main-menu li:hover .list { display: block; }
button { animation: none !important; }
</style>