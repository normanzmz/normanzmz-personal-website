---
title: LIMMS:Latching Intelligent Modular Mobility System  
hide:
  - toc
  - navigation
---

<!-- # LIMMS: Latching Intelligent Modular MObility System -->
<div class="two-column" style="display:flex; gap:2.5rem; align-items:flex-start; flex-wrap:wrap;">

  <!-- Left column -->
  <div class="left" style="flex:1 1 45%; min-width:400; text-align:justify">
    <p style="margin-top:0;">
        In this paper, we present LIMMS, a modular robotic system designed for versatile last-mile delivery through multi-agent collaboration. We developed a robust latching system that allows identical robotic modules to autonomously assemble into various configurations, enabling wheeled, bipedal, or quadrupedal locomotion. By integrating these diverse modes with collaborative manipulation, we demonstrate a flexible platform capable of navigating complex environments and handling various cargo tasks. Our work validates that this reconfigurable approach provides the necessary adaptability to overcome the physical constraints of traditional, single-purpose delivery robots.
  </div>

  <!-- Right column -->
  <div class="right" style="flex:1 1 40%; min-width:240px; max-width:900px; padding-left:1rem">
    <figure style="margin:0; width:100%;">
      <img
        src="/Project/LIMMS/limms_first_figure.png"
        alt="MERLIN robotic hand system overview"
        style="width:100%; height:auto; display:block; border-radius:8px;"
      />
      <!-- Optional caption -->
      <figcaption style="font-size:0.85em; color:#666; margin-top:0.4rem;">
        Assembled quadruped mode (left) and single LIMMS module (right)
      </figcaption>
    </figure>
  </div>
</div>

## Peronal Contribution
I transformed the initial latching concept into a robust, flight-ready module that serves as the critical interface for the LIMMS system. I spearheaded the full-stack integration of the latch, including the mechanical latch blades, micro-servos, motor drivers, and an onboard camera for vision-based processing. To ensure unrestricted 360-degree operation, I connected the module to the main LIMMS body via a slip ring, enabling stable power and data transmission. The final design delivers highly reliable latching performance, capable of supporting the module's own weight even under maximum cantilever (moment arm) conditions.


<figure style="margin:1.5rem auto; max-width:1100px;">

  <div style="
    display:flex;
    gap:1.5rem;
    justify-content:center;
    align-items:flex-start;
  ">
    <!-- Image 1 -->
    <figure style="
      margin:0;
      width:320px;
      display:flex;
      flex-direction:column;
      align-items:center;
      text-align:center;
    ">
      <img src="/Project/LIMMS/limms_cad.png"
           alt="ROH-Hand exoskeleton overview"
           style="height:320px; width:auto; object-fit:contain;" />
      <figcaption style="font-size:0.85em; color:#666; margin-top:0.4rem;">
        (a) Latch module CAD 
      </figcaption>
    </figure>
    <!-- Image 2 -->
    <figure style="
      margin:0;
      width:320px;
      display:flex;
      flex-direction:column;
      align-items:center;
      text-align:center;
    ">
      <img src="/Project/LIMMS/limms_inner.jpg"
           alt="Exoskeleton prototype"
           style="height:320px; width:auto; object-fit:contain;" />
      <figcaption style="font-size:0.85em; color:#666; margin-top:0.4rem;">
        (b) Latch module internal view
      </figcaption>
    </figure>
    <!-- Image 3 -->
    <figure style="
      margin:0;
      width:320px;
      display:flex;
      flex-direction:column;
      align-items:center;
      text-align:center;
    ">
      <video controls muted playsinline
            style="height:320px; width:auto; display:block; object-fit:contain;">
        <source src="/Project/LIMMS/limms_latch_video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <figcaption style="font-size:0.85em; color:#666; margin-top:0.4rem;">
        (c) Latching demonstration
      </figcaption>
    </figure>

  </div>
</figure>

## Video Demonstration
<div align="center">
  <video width="80%" controls>
    <source src="/Project/LIMMS/Demo_video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>
