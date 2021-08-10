<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Alert" color="primary" @click="alert = true" />

    <q-dialog v-model="alert">
      <q-card style="width: 1000px; max-width: 80vw;">
      <q-markdown
        class="q-ma-xl col"
        :src="testmd"
        toc
        @data="onToc"
      />
      </q-card>
    </q-dialog>

  </div>

</template>

<script>
import testmd from '../markdown/analytical_design.md'
export default {
  data() {
    return {
      testmd: testmd,
      alert: false,
    }
  }
}

</script>
