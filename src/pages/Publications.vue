<template>
  <q-page class="flex flex-center page-container column col-12">

    <q-header
      class="text-dark">
      <q-toolbar>
        <q-btn
          flat 
          @click="drawer = !drawer" 
          round
          dense
          icon="menu"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      :width="240"
      :breakpoint="500"
      show-if-above
      class="mobile-hide"
    >
      <div 
        class="flex flex-center">
        <div class="q-mx-xl q-mt-xl q-mb-sm">
          <q-avatar
            size="150px">
            <img src="~assets/bw.jpg">
          </q-avatar>
          <div class="q-mt-sm text-weight-bold text-center">
            Aaron Chong
          </div>
          <div class="text-center">
            @aaronchongth
          </div>
          <div class="text-center">
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
          </div>
        </div>
      </div>

      <q-scroll-area 
        style="height: 150px;"
        class="q-pa-md">
        <q-list>

          <q-item
            clickable
            v-ripple
            to="/"
            class="text-dark"
          >
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              Home
            </q-item-section>
          </q-item>

          <q-item
            clickable 
            v-ripple
            class="active"
          >
            <q-item-section avatar>
              <q-icon name="book" />
            </q-item-section>
            <q-item-section>
              Publications
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

    </q-drawer>

    <div
      class="q-pa-xl text-h3">
      Publications
    </div>

    <div class="q-pa-md row justify-center">
      
      <q-card 
        class="q-pa-sm q-ma-sm col-12 col-lg-4 col-md-6">
        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card
        class="text-white q-pa-sm q-ma-sm col-12 col-lg-4 col-md-6"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card
        dark
        bordered
        class="q-pa-sm q-ma-sm col-12 col-lg-4 col-md-6">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card
        flat
        bordered
        class="q-pa-sm q-ma-sm col-12 col-lg-4 col-md-6">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>
      </q-card>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'Publications',
  data() {
    return {
      drawer: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="scss">
  .active {
    color: #26A69A;
  }
</style>

