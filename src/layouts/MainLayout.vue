<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="container">
      <q-tabs
        v-model="tab"
        inline-label
        narrow-indicator
        class="bg-primary text-black"
      >
        <q-route-tab
          icon="home"
          label="Home"
          to="/"
          exact
          dense
        />
        <q-route-tab
          icon="face"
          label="About"
          to="/about"
          exact
          dense
        />

        <q-space />

        <div class="dense q-px-md text-weight-medium">
          aaronchong.dev
        </div>

        <q-btn
          flat
          dense
          class="q-pa-xs"
          type="a"
          href="https://github.com/aaronchongth"
          target="__blank_github">
          <i class="fab fa-github-square fa-2x"></i>                              
        </q-btn>
        <q-btn
          flat
          dense
          class="q-pa-xs"
          type="a"
          href="https://www.linkedin.com/in/aaronchongth"
          target="__blank_linkedin">
          <i class="fab fa-linkedin fa-2x"></i>
        </q-btn>
        <q-btn
          flat
          dense
          class="q-pa-xs"
          type="a"
          href="https://scholar.google.com/citations?user=ueV22wEAAAAJ&hl=en&oi=ao"
          target="__blank_google_scholar">
          <i class="ai ai-google-scholar-square ai-2x"></i>
        </q-btn>
        
      </q-tabs>
    </q-header>

    <q-page-container
      class="flex flex-center container q-mx-lg"
    >

      <transition
        leave-active-class="animated fadeOut"
        enter-active-class="animated fadeIn"
        :duration="{ enter: 400, leave: 400 }"
      >
        <router-view />
      </transition>

    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {}
  }
}
</script>
