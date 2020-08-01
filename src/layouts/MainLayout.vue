<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container
      class="flex flex-center">

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
