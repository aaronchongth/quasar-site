<template>

  <q-card
    flat
    bordered
    class="q-pa-md q-ma-sm col-12 col-lg-5"
  >
    <img 
      :src="resolve_img_url(img_name)"
    >

    <q-card-section>
      <div class="text-h6">
        {{ title }}
      </div>
      <div class="text-subtitle2 q-pt-xs">
        {{ source }}
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn
        color="dark"
        round
        flat
        dense
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded"
      />
    </q-card-actions>

    <q-dialog v-model="expanded">
      <q-card style="width: 1000px; max-width: 80vw;">
        <q-markdown
          class="q-ma-xl col"
          :src="markdown"
          toc
          @data="onToc"
        />
      </q-card>
    </q-dialog>

  </q-card>

</template>

<script>
export default {
  name: 'project',
  props: {
    img_name: {
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
    markdown: {
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
      return 'https://raw.githubusercontent.com/aaronchongth/quasar-site/assets/' + path
    }
  }
}

</script>
