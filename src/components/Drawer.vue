<template>

  <div>
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
        <q-btn
          flat
          round
          dense
          icon="home"
          :to="'/'"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      :width="240"
      :breakpoint="500"
      show-if-above
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
        style="height: 400px;"
        class="q-pa-md">
        <q-list>

          <drawer-link
            link="/"
            icon="home"
            label="Home"
          />

          <active-drawer-link
            v-if="active == 'about-me'"
            link="/about-me"
            icon="account_box"
            label="About Me"
          />
          <drawer-link
            v-else
            link="/about-me"
            icon="account_box"
            label="About Me"
          />

          <active-drawer-link
            v-if="active == 'projects'"
            link="/projects"
            icon="book"
            label="Projects"
          />
          <drawer-link
            v-else
            link="/projects"
            icon="book"
            label="Projects"
          />

        </q-list>
      </q-scroll-area>

    </q-drawer>
  </div>

</template>

<script>
export default {
  name: 'Drawer',
  props: {
    active: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      drawer: false
    }
  },
  components: {
    'drawer-link': require('components/DrawerLink.vue').default,
    'active-drawer-link': require('components/ActiveDrawerLink.vue').default
  }
}
</script>
