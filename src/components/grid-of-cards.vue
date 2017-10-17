<template>
  <div class="margin-side">
    <div class="grid-wrapper">
      <status-card v-for="app in apps" :app="app" :key="app.name"></status-card>
    </div>
  </div>
</template>

<script>
// Import status-card for passing data to child compnent
import StatusCard from './status-card.vue'

// PASS DATA TO CHILD COMPONENT (status-card)
export default {
  components: { StatusCard },
  name: 'grid-of-cards',
  data () {
    return {
      apps: []
    }
  },
  created: function() {
    // Get apps to check on load
    this.getChecks();
  },
  methods: {
    // Gets app check configs from /status endpoints
    getChecks: function() {
      // var vm = this;
      this.$http.get('/demo/check-config.json').then(response => {
        // Set app
        this.apps = response.body.apps;
      }, response => {
        // Error
        console.error('Something went wrong');
      })
    }
  }
}
</script>

<style lang="scss">
.margin-side {
  margin: 0 auto;

  .grid-wrapper {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-gap: 15px;
    justify-content: center;

    @media (min-width: 615px) {
      grid-template-columns: 300px 300px;
    }

    @media (min-width: 938px) {
      grid-template-columns: 300px 300px 300px;
    }
  }
}
</style>
