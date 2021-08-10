# Driving Computer Vision with Deep Learning
## 2018 - Internship at Wayve

[Link to video](https://www.youtube.com/watch?v=SskSDjUG8ZY)

![](https://raw.githubusercontent.com/aaronchongth/quasar-site/assets/perception.png)

During my internship at Wayve, I was tasked to perform scene understanding in the form of depth, semantic segmentation and optical flow estimation onboard the vehicle's minimal compute, at real-time performance.

From these requirements, the team and I used Nvidia's TensorRT libraries to further serialize and optimize the various neural networks required to run onboard, which would not fit all 3 models at the same time in normal circumstances. Inference speed was also great improved through the use of this library, allowing us to perform real-time estimation while the vehicle navigated through traffic, which allowed us to visualize how the vehicle could understand the world around it.

I had an amazing summer with the team, and would like to thank them for all the lessons and support. Full blog post here, https://www.wayve.ai/blog/driving-computer-vision-with-deep-learning/
