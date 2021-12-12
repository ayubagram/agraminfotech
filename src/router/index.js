import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // { path: '/webmail', redirect: 'https://agramcloud.com/webmail' },
  { path: '/', name: 'Home', component: () => import('@/views/Home') },
  // services
  { 
    path: '/services', 
    name: 'Service', 
    component: () => import('@/views/services/Service'),
    redirect: '/services/mobile-app-development',
    children: [
      { path: 'mobile-app-development', name: 'Mobile App Development', component: () => import('@/views/services/Mobile') },
      { path: 'web-app-development', name: 'Web App Development', component: () => import('@/views/services/Web') },
      { path: 'digital-marketing', name: 'Digital Marketing', component: () => import('@/views/services/DigitalMarketing') },
      { path: 'ecommerce', name: 'Ecommerce', component: () => import('@/views/services/Ecommerce') },
      { path: 'on-demand-app', name: 'On Demand App', component: () => import('@/views/services/OnDemand') },
    ]
  },
  
  // solutions
  { 
    path: '/solutions', 
    name: 'Solutions', 
    component: () => import('@/views/solution/Solutions'),
    redirect: '/solutions/iot-solution-for-agriculture',
    children: [
      { path: 'iot-solution-for-agriculture', name: 'Iot Solutions for Agriculture', component: () => import('@/views/solution/IotSolutions') },
      { path: 'iot-solution-for-flood-monitor', name: 'Iot Solutions For Flood Monitor', component: () => import('@/views/solution/Flood') },
    ] 
  },
  
  // company
  { 
    path: '/company', 
    name: 'Company', 
    component: () => import('@/views/company/Company'),
    redirect: '/company/about-us',
    children: [
      { path: 'about-us', name: 'About Us', component: () => import('@/views/company/About') },
      { path: 'success-stories', name: 'Success Stories', component: () => import('@/views/company/SuccessStories') },
      { path: 'portfolio', name: 'Portfolios', component: () => import('@/views/company/Portfolios') },
      { path: 'career', name: 'Career', component: () => import('@/views/company/Career') },
      { path: 'gallery', name: 'Gallery', component: () => import('@/views/company/Gallery') },
    ]
  },
  // products
  { 
    path: '/products', 
    name: 'Products', 
    component: () => import('@/views/products/Products'),
    redirect: '/products/agram-lab',
    children: [
      { path: 'agram-lab', name: 'Agram Lab (Pathology)', component: () => import('@/views/products/AgramLab') },
      { path: 'dairy-management', name: 'Dairy Management System', component: () => import('@/views/products/DairyMgmt') },
      { path: 'health-post-management', name: 'Health Post Management System', component: () => import('@/views/products/HospitalMgmt') },
      { path: 'industry-management', name: 'Industry Management System', component: () => import('@/views/products/IndustryMgmt') },
      { path: 'payroll-management', name: 'Payroll Management System', component: () => import('@/views/products/PayrollMgmt') },
      { path: 'ui-ux', name: 'UI & UX Design', component: () => import('@/views/products/UiDesign') },
    ]
  },
  
  { path: '/our-team', name: 'Our Team', component: () => import('@/views/Team') },
  { path: '/blogs', name: 'Blogs', component: () => import('@/views/Blogs') },
  { path: '/blogs/:id', name: 'Single Blog', component: () => import('@/views/SingleBlog') },
  { path: '/contact-us', name: 'Contact Us', component: () => import('@/views/ContactUs') }
]

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
