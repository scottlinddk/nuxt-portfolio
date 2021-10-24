<template>
<main class="my-5">
    <section>
        NOT FOUND PAGE
  </section>
</main>
</template>

<script>
import axios from 'axios';
export default {
  name: 'NotFound',

  data () {
      return {
        projects: [],
        casesAPI: process.env.VUE_APP_CASES,
        errors: [],
      }
  },
    async mounted () {
    try {
      const response = await axios.get(this.casesAPI)
      this.projects = response.data
      console.log(this.projects)
    } catch (e) {
      this.errors.push(e)
    }
  },
}
</script>
