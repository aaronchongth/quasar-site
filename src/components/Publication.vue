<template>

  <q-card
    flat
    bordered
    class="q-pa-md q-ma-sm col-12 col-lg-5"
  >
    <img 
      :src="resolve_img_url(img_file)"
    >

    <q-card-section>
      <div class="text-h6">
        {{ title }}
      </div>
      <div class="text-subtitle2 q-pt-xs">
        {{ source }}
      </div>
    </q-card-section>

    <div class="text-caption text-dark q-px-md">
      {{ short_abstract }}
    </div>

    <q-card-actions>
      <q-btn 
        flat color="dark" 
        icon="open_in_new" 
        label="link"
        type="a"
        :href="link"
        target="__blank"
      />
      <q-space />
      <q-btn
        color="dark"
        round
        flat
        dense
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded"
      />
    </q-card-actions>

    <q-slide-transition>
      <div v-show="expanded">
        <q-separator />
        <q-card-section class="text-subitle2">
          {{ abstract}}
        </q-card-section>
      </div>
    </q-slide-transition>

  </q-card>

</template>

<script>
export default {
  name: 'Publication',
  props: {
    img_file: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    },
    short_abstract: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    abstract: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      expanded: false
    }
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context('../assets/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    }
  }
}
</script>
