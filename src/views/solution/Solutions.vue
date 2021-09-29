<template>
  <div class="services">
    <router-view />
  </div>
</template>

<script>
export default {
  metaInfo: () => ({
    title: 'Solutions | Agram Infotech',
    meta: [
      { name: 'description', content: 'Solutions provided by Agram Infotech' },
      { property: 'og:title', content: 'Service' },
      { property: 'og:site_name', content: 'Agram Infotech'},
      { property: 'og:description', content: 'This is home content' },
      { property: 'og:type', content: 'home' },
      { property: 'og:url', content: 'https://agraminfotech.com/solutions' },   
    ]
  })
}
</script>