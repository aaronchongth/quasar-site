<template>
  <q-page class="flex flex-center page-container column">

    <q-drawer
      v-model="drawer"
      :width="240"
      :breakpoint="500"
      overlay
      class="mobile-hide"
    >
      <div 
        class="flex flex-center">
        <div class="q-mx-xl q-mt-xl q-mb-sm">
          <q-avatar
            v-model="home"
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
          </div>
        </div>
      </div>

      <q-scroll-area 
        style="height: 150px"
        class="q-pa-md">
        <q-list>

          <q-item clickable v-ripple>
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
            class="active">
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

  </q-page>
</template>

<script>
export default {
  name: 'Publications',
  data() {
    return {
      drawer: true
    }
  }
}
</script>

<style lang="scss">
  .active {
    color: #26A69A;
  }
</style>

