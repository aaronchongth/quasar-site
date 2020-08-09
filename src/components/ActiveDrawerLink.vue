<template>

  <q-item
    clickable
    v-ripple
    class="active"
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
  name: 'ActiveDrawerLink',
  props: {
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
