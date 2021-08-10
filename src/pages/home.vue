<template>
  <q-page class="flex page-container column col-12">

    <div class="q-ma-lg q-pa-md row items-start justify-center q-gutter-md">

      <project
        v-for="project in projects"
        :key="project.title"
        :img_name="project.img_name"
        :title="project.title"
        :source="project.source"
        :markdown="project.markdown"
      />
      
    </div>

  </q-page>
</template>

<script>
import vegan_md from '../markdown/vegan.md'
import perception_md from '../markdown/perception.md'
import clearfield_robotics_md from '../markdown/clearfield_robotics.md' 
import variable_stiffness_md from '../markdown/variable_stiffness.md'
import stiffness_modulator_md from '../markdown/stiffness_modulator.md'
import analytical_design_md from '../markdown/analytical_design.md' 
export default {
  name: 'home',
  components: {
    'project': require('components/project.vue').default
  },
  data() {
    return {
      projects: [
        {
          img_name: 'vegan.png',
          title: 'VEGAN - Visual Enhancement Generative Adversarial Networks for Deblurring',
          source: '2018 - MRSD Class of 2018',
          markdown: vegan_md
        },
        {
          img_name: 'perception.png',
          title: 'Driving Computer Vision with Deep Learning',
          source: '2018 - Internship at Wayve',
          markdown: perception_md
        },
        {
          img_name: 'clearfield_robotics.jpg',
          title: 'Clearfield Robotics',
          source: '2017 - MRSD Class of 2018',
          markdown: clearfield_robotics_md
        },
        {
          img_name: 'variable_stiffness.jpg',
          title: 'Variable Stiffness Spring Actuators for Low-Energy-Cost Human Augmentation',
          source: '2019 - IEEE Transactions on Robotics',
          markdown: variable_stiffness_md
        },
        {
          img_name: 'stiffness_modulator.jpg',
          title: 'Stiffness Modulator: A Novel Actuator for Human Augmentation',
          source: '2018 - IEEE ICRA',
          markdown: stiffness_modulator_md
        },
        {
          img_name: 'analytical_design.jpg',
          title: 'Analytical conditions for the design of variable stiffness mechanisms',
          source: '2017 - IEEE ICRA',
          markdown: analytical_design_md
        }
      ], 
      expanded: false
    }
  }
}
</script>
