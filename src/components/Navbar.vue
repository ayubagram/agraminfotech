<template>
  <div class="Navbar">
    <v-app-bar app color="white" elevate-on-scroll height="64">
      <v-container class="d-flex px-0 px-lg-3">
        <div class="d-flex align-center" style="cursor: pointer;" @click="() => this.$router.push('/')">
          <v-img alt="Agram Logo" class="shrink mr-2" contain src="../assets/logo.png" transition="scale-transition" width="40" />
          <v-img alt="Agram Infotech" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="../assets/agram_text.png" width="100" />
        </div>
        
        <v-spacer />

        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-block d-sm-block d-md-none"></v-app-bar-nav-icon>
        <div class="main-menu d-none d-sm-none d-md-block">
          <!-- <ul class="d-flex">
            <li v-for="(item, i) in items" :key="i">
              <v-btn color="primary" class="text-capitalize" active-class="active__nav" tile text :to="item.to" min-height="62">{{ item.title }}</v-btn>
              <v-list class="list pa-0" v-if="item.children">
                <v-list-item-group color="primary">
                  <v-list-item style="min-height: 60px;" v-for="(child, c) in item.children" :key="c" link :to="child.to">
                    <v-list-item-content class="primary--text">{{ child.title }}</v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </li>
          </ul> -->

          <v-menu open-on-hover offset-y v-for="(item, i) in items" :key="i">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on" tile text :to="item.to" height="64">{{ item.title }}</v-btn>
            </template>
            <v-list v-if="item.children" class="py-0" dense width="250">
              <v-list-item v-for="(link, l) in item.children" :key="l" :to="link.to">
                <v-list-item-title v-text="link.title" />
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-container>
    </v-app-bar> 

    <v-navigation-drawer color='primary' dark v-model="drawer" disable-resize-watcher app mini-variant-width="10024">
      <v-list expand nav tile shaped>
        <div v-for="(item, i) in items" :key="i">
          <v-list-item :to="`${item.to}`" v-if="!item.children">
            <v-list-item-content>
              <v-list-item-title v-text="item.title" style="letter-spacing: 1px;" class="pl-3" />
            </v-list-item-content>
          </v-list-item>
          <v-list-group v-else active-class="active__nav">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" style="letter-spacing: 1px;" class="pl-3" />
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, c) in item.children" :key="c" active-class="active__nav" :to="child.to">
              <v-list-item-content>
                <v-list-item-title v-text="child.title" style="letter-spacing: 1px;" class="pl-6" />
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div> 
</template>

<script>
export default {
  data: () => ({
    drawer: false,
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
          { title: 'Health Post Management System', to: '/products/health-post-management' },
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