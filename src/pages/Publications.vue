<template>
  <q-page class="flex page-container column col-12">

    <q-header
      class="text-dark">
      <q-toolbar>
        <q-btn
          flat 
          @click="drawer = !drawer" 
          round
          dense
          icon="menu"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      :width="240"
      :breakpoint="500"
      show-if-above
      class="mobile-hide"
    >
      <div 
        class="flex flex-center">
        <div class="q-mx-xl q-mt-xl q-mb-sm">
          <q-avatar
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
            <q-btn
              flat
              dense
              class="q-pa-xs"
              type="a"
              href="https://scholar.google.com/citations?user=ueV22wEAAAAJ&hl=en&oi=ao"
              target="__blank_google_scholar">
              <i class="ai ai-google-scholar-square ai-2x"></i>
            </q-btn>
          </div>
        </div>
      </div>

      <q-scroll-area 
        style="height: 150px;"
        class="q-pa-md">
        <q-list>

          <q-item
            clickable
            v-ripple
            to="/"
            class="text-dark"
          >
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
            class="active"
          >
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

    <div
      class="q-pa-xl text-h4 text-center">
      Publications
    </div>

    <div class="q-pa-md row items-start justify-center q-gutter-md">

      <!-- Variable Stiffness -->
      <q-card
        flat
        bordered
        class="q-pa-md q-ma-sm col-12 col-lg-5"
      >
        <img 
          src="~assets/VariableStiffness.jpg"
        >

        <q-card-section>
          <div class="text-h6">Variable Stiffness Spring Actuators for Low-Energy-Cost Human Augmentation</div>
          <div class="text-subtitle2 q-pt-xs">2019 - IEEE Transactions on Robotics</div>
        </q-card-section>

        <div class="text-caption text-dark q-px-md">
          This article presents a prototype variable-length leaf-spring actuator capable of large-range stiffness modulation. The key feature of the actuator is that it provides intrinsically low-energy-cost stiffness modulation even for large output deflection, by keeping the force on the driving motor low.
        </div>

        <q-card-actions>
          <q-btn 
            flat color="dark" 
            icon="open_in_new" 
            label="link"
            type="a"
            href="https://ieeexplore.ieee.org/document/8833513"
            target="__blank_variable_stiffness"
          />
          <q-space />
          <q-btn
            color="dark"
            round
            flat
            dense
            :icon="variable_stiffness_expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="variable_stiffness_expanded = !variable_stiffness_expanded"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="variable_stiffness_expanded">
            <q-separator />
            <q-card-section class="text-subitle2">
              Theoretical studies suggest and experimental evidence confirms that maintaining and changing human joint stiffness by coactivated antagonistic muscles are metabolically expensive, even if muscles do not perform net mechanical work. Based on this observation, we posit that effective human augmentation can be achieved by actuators operated in parallel to human joints, even if these actuators only supplement joint stiffness without doing net mechanical work. In this article, we present a prototype variable-length leaf-spring actuator capable of large-range stiffness modulation. The key feature of the actuator is that it provides intrinsically low-energy-cost stiffness modulation even for large output deflection, by keeping the force on the driving motor low. Variable stiffness actuators use two motors to provide both stiffness and equilibrium position modulation as they are designed to do net mechanical work. The proposed actuator conceptually differs from variable stiffness actuators because first, it uses a single motor to only provide stiffness modulation, second, it does not provide equilibrium position modulation, and third, unless externally loaded, it cannot do net mechanical work. Using this actuator, we demonstrate stiffness augmentation during human-machine collaboration in challenging postural stabilization and weight-bearing tasks. Our results indicate that the proposed actuator can be used to complement a biological system by restoring or extending its functionality with low energy cost, and that variable stiffness spring actuators could effectively augment humans by doing no or a limited amount of mechanical work.
            </q-card-section>
          </div>
        </q-slide-transition>

      </q-card>

      <!-- Stiffness modulator -->
      <q-card
        flat
        bordered
        class="q-pa-md q-ma-sm col-12 col-lg-5"
      >
        <img 
          src="~assets/StiffnessModulator.jpg"
        >

        <q-card-section>
          <div class="text-h6">Stiffness Modulator: A Novel Actuator for Human Augmentation</div>
          <div class="text-subtitle2 q-pt-xs">2018 - IEEE ICRA</div>
        </q-card-section>

        <div class="text-caption text-dark q-px-md">
          In this paper, we present a compact, lightweight, and self-contained stiffness modulator. Using this device, we demonstrate stiffness augmentation of the human knee joint in a sit to stand task.
        </div>

        <q-card-actions>
          <q-btn 
            flat color="dark" 
            icon="open_in_new" 
            label="link"
            type="a"
            href="https://ieeexplore.ieee.org/document/8463186"
            target="__blank_stiffness_modulator"
          />
          <q-space />
          <q-btn
            color="dark"
            round
            flat
            dense
            :icon="stiffness_modulator_expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="stiffness_modulator_expanded = !stiffness_modulator_expanded"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="stiffness_modulator_expanded">
            <q-separator />
            <q-card-section class="text-subitle2">
              Stiffness modulators are devices that promote a novel means of actuation; they provide stiffness modulation without deliberately doing mechanical work. These type of compliant actuators may be used for human augmentation to complement co-contracted antagonistic muscles and as such reduce muscle activity and metabolic energy cost. Despite the theoretical appeal of this concept, its implementation remains elusive in practical applications. This is particularly true for human augmentation which requires a portable stiffness modulator. In this paper, we present a compact, lightweight, and self-contained stiffness modulator. Using this device, we demonstrate stiffness augmentation of the human knee joint in a sit to stand task. The experimental results indicate that the proposed device is able to assist a human by reducing muscle activity while drawing minimal battery power.
            </q-card-section>
          </div>
        </q-slide-transition>

      </q-card>

      <!-- Analytical Design -->
      <q-card
        flat
        bordered
        class="q-pa-md q-ma-sm col-12 col-lg-5"
      >
        <img 
          src="~assets/AnalyticalDesign.jpg"
        >

        <q-card-section>
          <div class="text-h6">Analytical conditions for the design of variable stiffness mechanisms</div>
          <div class="text-subtitle2 q-pt-xs">2017 - IEEE ICRA</div>
        </q-card-section>

        <div class="text-caption text-dark q-px-md">
          This paper introduces an analytical approach for the design of variable stiffness mechanisms. The basis of this approach is a general model - representing the potential energy function and the physical constraints - covering the design space of variable stiffness mechanisms.
        </div>

        <q-card-actions>
          <q-btn 
            flat color="dark" 
            icon="open_in_new" 
            label="link"
            type="a"
            href="https://ieeexplore.ieee.org/document/7989147"
            target="__blank__analytical_design"
          />
          <q-space />
          <q-btn
            color="dark"
            round
            flat
            dense
            :icon="analytical_design_expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="analytical_design_expanded = !analytical_design_expanded"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="analytical_design_expanded">
            <q-separator />
            <q-card-section class="text-subitle2">
              This paper introduces an analytical approach for the design of variable stiffness mechanisms. The basis of this approach is a general model - representing the potential energy function and the physical constraints - covering the design space of variable stiffness mechanisms. Using this model, we present a systematic procedure to analytically define classes of variable stiffness mechanisms from first principles. Consequently, we identify mechanisms capable of infinite range stiffness modulation using bounded motor forces, and define the simplest mathematical model representing mechanisms in this class. A prototype mechanism consistent with this canonical model is designed, fabricated and experimentally tested. The experimental data are consistent with our theoretical predictions showing constant motor force independent of the output deflection and output stiffness when the mechanism is subject to external load.
            </q-card-section>
          </div>
        </q-slide-transition>

      </q-card>

      <!-- empty just for even number -->
      <q-card 
        flat
        class="q-pa-md q-ma-sm col-12 col-lg-5"
      >
      </q-card>

    </div>

  </q-page>
</template>

<script>
export default {
  name: 'Publications',
  data() {
    return {
      drawer: false,
      variable_stiffness_expanded: false,
      stiffness_modulator_expanded: false,
      analytical_design_expanded: false
    }
  }
}
</script>

<style lang="scss">
  .active {
    color: #26A69A;
  }
</style>

