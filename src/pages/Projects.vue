<template>
  <q-page class="flex page-container column col-12">

    <drawer
      active="projects"
    />

    <div
      class="q-pa-xl text-h4 text-center">
      Projects
    </div>

    <div class="q-pa-md row items-start justify-center q-gutter-md">
      
      <!-- VE-GAN -->
      <project
        img_file="VEGAN.png"
        title="VEGAN - Visual Enhancement Generative Adversarial Networks for Deblurring"
        source="2018 - MRSD Class of 2018"
        short_abstract="The problem of blurry images has existed since the advent of cameras. Deblurring an image is directly useful for photography but is also useful for preprocessing inputs to deep learning networks. Classical deblurring techniques as well as various deep learning techniques have been used to deblur images in the past. We have used a Generative Adversarial Network to deblur images in the self-driving domain. We have followed the work of Kupyn et. al but have improved their model by applying various loss function and data augmentation tricks. We have also applied three evaluation metrics different from Kupyn’s to more accuratelyquantify the effect of deblurring."
        link="https://github.com/son-of-a-gan/vegan-paper/blob/master/ve-gan.pdf"
        abstract="In recent years deep learning has made great strides in performing various complex computer vision tasks (e.g. classification, segmentation, etc.). However, the world is imperfect and image classification networks often have to classify noisy images. One form of noise is motion blur. Because the majority of these networks are trained and tested on carefully curated datasets which only contain clear, sharp images, the networks perform poorly on blurry images. If the blur in the images could be removed, then the networks could improve their accuracy. A classical strategy to deblur images is to select a deblurring kernel and then convolve the kernel across the image to restore it. Selecting the deblurring kernel is often a difficult and imprecise task. The optimal deblurring kernel is unique to the motion blur in the image, and selecting the wrong kernel produces inaccurate results. Kupyn et al. have recently presented DeblurGAN, which aims to solve this problem of motion blurred images through the use of a Generational Adversarial Network (GAN). In this project we will implement DeblurGAN and then adapt it to work with new datasets and validation methods. Link to full paper, https://raw.githubusercontent.com/son-of-a-gan/vegan-paper/master/ve-gan.pdf"
      />

      <!-- Wayve Demo -->
      <project
        img_file="Perception.png"
        title="Driving Computer Vision with Deep Learning"
        source="2018 - Internship at Wayve"
        short_abstract="This demo showcased the developments of scene understanding using a single monocular camera mounted on a vehicle, while performing real-time single-shot depth, semantic segmentation and optical flow estimation using constrained onboard compute. Full blog post at https://www.wayve.ai/blog/driving-computer-vision-with-deep-learning/"
        link="https://www.youtube.com/watch?v=SskSDjUG8ZY"
        abstract="During my internship at Wayve, I was tasked to perform scene understanding in the form of depth, semantic segmentation and optical flow estimation onboard the vehicle's minimal compute, at real-time performance. From these requirements, the team and I used Nvidia's TensorRT libraries to further serialize and optimize the various neural networks required to run onboard, which would not fit all 3 models at the same time in normal circumstances. Inference speed was also great improved through the use of this library, allowing us to perform real-time estimation while the vehicle navigated through traffic, which allowed us to visualize how the vehicle could understand the world around it. I had an amazing summer with the team, and would like to thank them for all the lessons and support. Full blog post here, https://www.wayve.ai/blog/driving-computer-vision-with-deep-learning/"
      />

      <!-- Clearfield Robotics -->
      <project
        img_file="ClearfieldRobotics.jpg"
        title="Variable Stiffness Spring Actuators for Low-Energy-Cost Human Augmentation"
        source="2017 - MRSD Class of 2018"
        short_abstract="Landmines are a tragic remnant of war that the threaten economic security, mobility, and lives of people around the world. Though there has been a plethora of research in landmine sensing in the last few decades, most methods are expensive, energy-intensive, and result in a high number of false positives. ClearField Robotics aims to improve outcomes in the field by reducing the time and cost of land surveying."
        link="https://www.youtube.com/watch?v=m2MoFOFM4Ng"
        abstract="Landmines are a tragic remnant of war that the threaten economic security, mobility, and lives of people around the world. Though there has been a plethora of research in landmine sensing in the last few decades, most methods are expensive, energy-intensive, and result in a high number of false positives. ClearField Robotics aims to improve outcomes in the field by reducing the time and cost of land surveying. By incorporating multi-modal sensing systems, we can reduce the need for singular, highly sensitive, and expensive equipment with sensor fusion. The goal of ClearField Robotics is to develop a low cost, user-friendly, and adoptable method of landmine detection without sacrificing accuracy. We combine a traditional metal detector (for broad sweeping) and an automated probing mechanism (to classify the shape of any detected metal objects) to reduce the number of false positives, increase demining speed, reduce demining costs."
      />

      <!-- Variable Stiffness -->
      <project
        img_file="VariableStiffness.jpg"
        title="Variable Stiffness Spring Actuators for Low-Energy-Cost Human Augmentation"
        source="2019 - IEEE Transactions on Robotics"
        short_abstract="This article presents a prototype variable-length leaf-spring actuator capable of large-range stiffness modulation. The key feature of the actuator is that it provides intrinsically low-energy-cost stiffness modulation even for large output deflection, by keeping the force on the driving motor low."
        link="https://ieeexplore.ieee.org/document/8833513"
        abstract="Theoretical studies suggest and experimental evidence confirms that maintaining and changing human joint stiffness by coactivated antagonistic muscles are metabolically expensive, even if muscles do not perform net mechanical work. Based on this observation, we posit that effective human augmentation can be achieved by actuators operated in parallel to human joints, even if these actuators only supplement joint stiffness without doing net mechanical work. In this article, we present a prototype variable-length leaf-spring actuator capable of large-range stiffness modulation. The key feature of the actuator is that it provides intrinsically low-energy-cost stiffness modulation even for large output deflection, by keeping the force on the driving motor low. Variable stiffness actuators use two motors to provide both stiffness and equilibTheoretical studies suggest and experimental evidence confirms that maintaining and changing human joint stiffness by coactivated antagonistic muscles are metabolically expensive, even if muscles do not perform net mechanical work. Based on this observation, we posit that effective human augmentation can be achieved by actuators operated in parallel to human joints, even if these actuators only supplement joint stiffness without doing net mechanical work. In this article, we present a prototype variable-length leaf-spring actuator capable of large-range stiffness modulation. The key feature of the actuator is that it provides intrinsically low-energy-cost stiffness modulation even for large output deflection, by keeping the force on the driving motor low. Variable stiffness actuators use two motors to provide both stiffness and equilibrium position modulation as they are designed to do net mechanical work. The proposed actuator conceptually differs from variable stiffness actuators because first, it uses a single motor to only provide stiffness modulation, second, it does not provide equilibrium position modulation, and third, unless externally loaded, it cannot do net mechanical work. Using this actuator, we demonstrate stiffness augmentation during human-machine collaboration in challenging postural stabilization and weight-bearing tasks. Our results indicate that the proposed actuator can be used to complement a biological system by restoring or extending its functionality with low energy cost, and that variable stiffness spring actuators could effectively augment humans by doing no or a limited amount of mechanical work.rium position modulation as they are designed to do net mechanical work. The proposed actuator conceptually differs from variable stiffness actuators because first, it uses a single motor to only provide stiffness modulation, second, it does not provide equilibrium position modulation, and third, unless externally loaded, it cannot do net mechanical work. Using this actuator, we demonstrate stiffness augmentation during human-machine collaboration in challenging postural stabilization and weight-bearing tasks. Our results indicate that the proposed actuator can be used to complement a biological system by restoring or extending its functionality with low energy cost, and that variable stiffness spring actuators could effectively augment humans by doing no or a limited amount of mechanical work."
      />

      <!-- Stiffness modulator -->
      <project
        img_file="StiffnessModulator.jpg"
        title="Stiffness Modulator: A Novel Actuator for Human Augmentation"
        source="2018 - IEEE ICRA"
        short_abstract="In this paper, we present a compact, lightweight, and self-contained stiffness modulator. Using this device, we demonstrate stiffness augmentation of the human knee joint in a sit to stand task."
        link="https://ieeexplore.ieee.org/document/8463186"
        abstract="Stiffness modulators are devices that promote a novel means of actuation; they provide stiffness modulation without deliberately doing mechanical work. These type of compliant actuators may be used for human augmentation to complement co-contracted antagonistic muscles and as such reduce muscle activity and metabolic energy cost. Despite the theoretical appeal of this concept, its implementation remains elusive in practical applications. This is particularly true for human augmentation which requires a portable stiffness modulator. In this paper, we present a compact, lightweight, and self-contained stiffness modulator. Using this device, we demonstrate stiffness augmentation of the human knee joint in a sit to stand task. The experimental results indicate that the proposed device is able to assist a human by reducing muscle activity while drawing minimal battery power."
      />

      <!-- Analytical Design -->
      <project
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
  name: 'Projects',
  components: {
    'drawer': require('components/Drawer.vue').default,
    'project': require('components/Project.vue').default
  }
}
</script>

<style lang="scss">
  .active {
    color: #26A69A;
  }
</style>

