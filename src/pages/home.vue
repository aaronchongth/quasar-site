<template>
  <q-page class="flex page-container column col-12">

    <div class="q-pa-md row items-start justify-center q-gutter-md">

      <project
        img_name="stiffness_modulator.jpg"
        title="Stiffness Modulator: A Novel Actuator for Human Augmentation"
        source="2018 - IEEE ICRA"
        :markdown="stiffness_modulator_md"
      />

      <project
        img_name="analytical_design.jpg"
        title="Analytical conditions for the design of variable stiffness mechanisms"
        source="2017 - IEEE ICRA"
        :markdown="analytical_design_md"
      />

    </div>

  </q-page>
</template>

<script>
import analytical_design_md from '../markdown/analytical_design.md' 
import stiffness_modulator_md from '../markdown/stiffness_modulator.md'
export default {
  name: 'home',
  components: {
    'project': require('components/project.vue').default
  },
  data() {
    return {
      stiffness_modulator_md,
      analytical_design_md,
      expanded: false
    }
  }
}
</script>
