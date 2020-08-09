<template>
  <q-page class="flex page-container column col-12">

    <drawer
      active="publications"
    />

    <div
      class="q-pa-xl text-h4 text-center">
      Publications
    </div>

    <div class="q-pa-md row items-start justify-center q-gutter-md">

      <!-- Variable Stiffness -->
      <publication
        img_file="VariableStiffness.jpg"
        title="Variable Stiffness Spring Actuators for Low-Energy-Cost Human Augmentation"
        source="2019 - IEEE Transactions on Robotics"
        short_abstract="This article presents a prototype variable-length leaf-spring actuator capable of large-range stiffness modulation. The key feature of the actuator is that it provides intrinsically low-energy-cost stiffness modulation even for large output deflection, by keeping the force on the driving motor low."
        link="https://ieeexplore.ieee.org/document/8833513"
        abstract="Theoretical studies suggest and experimental evidence confirms that maintaining and changing human joint stiffness by coactivated antagonistic muscles are metabolically expensive, even if muscles do not perform net mechanical work. Based on this observation, we posit that effective human augmentation can be achieved by actuators operated in parallel to human joints, even if these actuators only supplement joint stiffness without doing net mechanical work. In this article, we present a prototype variable-length leaf-spring actuator capable of large-range stiffness modulation. The key feature of the actuator is that it provides intrinsically low-energy-cost stiffness modulation even for large output deflection, by keeping the force on the driving motor low. Variable stiffness actuators use two motors to provide both stiffness and equilibTheoretical studies suggest and experimental evidence confirms that maintaining and changing human joint stiffness by coactivated antagonistic muscles are metabolically expensive, even if muscles do not perform net mechanical work. Based on this observation, we posit that effective human augmentation can be achieved by actuators operated in parallel to human joints, even if these actuators only supplement joint stiffness without doing net mechanical work. In this article, we present a prototype variable-length leaf-spring actuator capable of large-range stiffness modulation. The key feature of the actuator is that it provides intrinsically low-energy-cost stiffness modulation even for large output deflection, by keeping the force on the driving motor low. Variable stiffness actuators use two motors to provide both stiffness and equilibrium position modulation as they are designed to do net mechanical work. The proposed actuator conceptually differs from variable stiffness actuators because first, it uses a single motor to only provide stiffness modulation, second, it does not provide equilibrium position modulation, and third, unless externally loaded, it cannot do net mechanical work. Using this actuator, we demonstrate stiffness augmentation during human-machine collaboration in challenging postural stabilization and weight-bearing tasks. Our results indicate that the proposed actuator can be used to complement a biological system by restoring or extending its functionality with low energy cost, and that variable stiffness spring actuators could effectively augment humans by doing no or a limited amount of mechanical work.rium position modulation as they are designed to do net mechanical work. The proposed actuator conceptually differs from variable stiffness actuators because first, it uses a single motor to only provide stiffness modulation, second, it does not provide equilibrium position modulation, and third, unless externally loaded, it cannot do net mechanical work. Using this actuator, we demonstrate stiffness augmentation during human-machine collaboration in challenging postural stabilization and weight-bearing tasks. Our results indicate that the proposed actuator can be used to complement a biological system by restoring or extending its functionality with low energy cost, and that variable stiffness spring actuators could effectively augment humans by doing no or a limited amount of mechanical work."
      />
      
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'Publications',
  data() {
    return {
      variable_stiffness_expanded: false,
      stiffness_modulator_expanded: false,
      analytical_design_expanded: false
    }
  },
  components: {
    'drawer': require('components/Drawer.vue').default,
    'publication': require('components/Publication.vue').default
  }
}
</script>

<style lang="scss">
  .active {
    color: #26A69A;
  }
</style>

