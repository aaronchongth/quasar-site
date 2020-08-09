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
      
      <!-- Stiffness modulator -->
      <publication
        img_file="StiffnessModulator.jpg"
        title="Stiffness Modulator: A Novel Actuator for Human Augmentation"
        source="2018 - IEEE ICRA"
        short_abstract="In this paper, we present a compact, lightweight, and self-contained stiffness modulator. Using this device, we demonstrate stiffness augmentation of the human knee joint in a sit to stand task."
        link="https://ieeexplore.ieee.org/document/8463186"
        abstract="Stiffness modulators are devices that promote a novel means of actuation; they provide stiffness modulation without deliberately doing mechanical work. These type of compliant actuators may be used for human augmentation to complement co-contracted antagonistic muscles and as such reduce muscle activity and metabolic energy cost. Despite the theoretical appeal of this concept, its implementation remains elusive in practical applications. This is particularly true for human augmentation which requires a portable stiffness modulator. In this paper, we present a compact, lightweight, and self-contained stiffness modulator. Using this device, we demonstrate stiffness augmentation of the human knee joint in a sit to stand task. The experimental results indicate that the proposed device is able to assist a human by reducing muscle activity while drawing minimal battery power."
      />

      <!-- Analytical Design -->
      <publication
        img_file="AnalyticalDesign.jpg"
        title="Analytical conditions for the design of variable stiffness mechanisms"
        source="2017 - IEEE ICRA"
        short_abstract="This paper introduces an analytical approach for the design of variable stiffness mechanisms. The basis of this approach is a general model - representing the potential energy function and the physical constraints - covering the design space of variable stiffness mechanisms."
        link="https://ieeexplore.ieee.org/document/7989147"
        abstract="This paper introduces an analytical approach for the design of variable stiffness mechanisms. The basis of this approach is a general model - representing the potential energy function and the physical constraints - covering the design space of variable stiffness mechanisms. Using this model, we present a systematic procedure to analytically define classes of variable stiffness mechanisms from first principles. Consequently, we identify mechanisms capable of infinite range stiffness modulation using bounded motor forces, and define the simplest mathematical model representing mechanisms in this class. A prototype mechanism consistent with this canonical model is designed, fabricated and experimentally tested. The experimental data are consistent with our theoretical predictions showing constant motor force independent of the output deflection and output stiffness when the mechanism is subject to external load."
      />

    </div>

  </q-page>
</template>

<script>
export default {
  name: 'Publications',
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

