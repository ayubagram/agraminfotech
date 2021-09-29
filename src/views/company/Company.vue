<template>
  <div class="company">
    <router-view />
  </div>
</template>

<script>
export default {
  metaInfo: () => ({
    title: 'Company | Agram Infotech',
    meta: [
      { name: 'description', content: 'Agram Infotech Company' },
      { property: 'og:title', content: 'Agram Infotech' },
      { property: 'og:site_name', content: 'Agram Infotech'},
      { property: 'og:description', content: 'This is home content' },
      { property: 'og:type', content: 'company' },
      { property: 'og:url', content: 'https://agraminfotech.com/company' },   
    ]
  }),
}
</script>