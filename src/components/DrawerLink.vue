<template>

  <q-item
    clickable
    v-ripple
    :to="link"
    class="text-dark"
  >
    <q-item-section avatar>
      <q-icon 
        :name="icon" />
    </q-item-section>
    <q-item-section>
      {{ label }}
    </q-item-section>
  </q-item>

</template>

<script>
export default {
  name: 'DrawerLink',
  props: {
    link: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>
