# VEGAN - Visual Enhancement Generative Adversarial Networks for Deblurring
## 2018 - MRSD Class of 2018

![](https://raw.githubusercontent.com/aaronchongth/quasar-site/assets/vegan.png)

In recent years deep learning has made great strides in performing various complex computer vision tasks (e.g. classification, segmentation, etc.). However, the world is imperfect and image classification networks often have to classify noisy images.

One form of noise is motion blur. Because the majority of these networks are trained and tested on carefully curated datasets which only contain clear, sharp images, the networks perform poorly on blurry images. If the blur in the images could be removed, then the networks could improve their accuracy.

A classical strategy to deblur images is to select a deblurring kernel and then convolve the kernel across the image to restore it. Selecting the deblurring kernel is often a difficult and imprecise task. The optimal deblurring kernel is unique to the motion blur in the image, and selecting the wrong kernel produces inaccurate results. Kupyn et al. have recently presented DeblurGAN, which aims to solve this problem of motion blurred images through the use of a Generational Adversarial Network (GAN). In this project we will implement DeblurGAN and then adapt it to work with new datasets and validation methods.

Link to full paper, https://raw.githubusercontent.com/son-of-a-gan/vegan-paper/master/ve-gan.pdf
