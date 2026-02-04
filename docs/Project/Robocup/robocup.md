---
title: null
hide:
  - title
  - toc
  - navigation
---

<div class="project-banner">
  <img src="/Project/Robocup/Robocup_banner.jpg" alt="Robocup banner">
  <div class="project-banner-overlay">
    <h1 class="project-title">2024 RoboCup Humanoid World Champions! 
</h1>
  </div>
</div>

## Overview

<div class="two-column" style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">

  <!-- Left column -->
  <div class="left" style="flex:1 1 25%; min-width:260px; text-align:justify">
    <p style="margin-top:0;">
      RoboCup is a fully autonomous humanoid robot soccer competition. As a core team member, I participated in RoboCup 2023 and 2024, winning the 2024 championship with ARTEMIS (Advanced Robotic Technology for Enhanced Mobility and Improved Stability), a fully integrated adult-sized humanoid soccer platform. 
    </p>
    <h3 style="margin-top:1rem;">Highlights</h3>
    <ul style="margin:0.5rem 0 0 1.2rem;">
        <li>45 goals scored across 6 matches</li>
        <li>State-of-the-art high-speed locomotion on a robust hardware platform</li>
        <li>Advanced path planning, tracking, and real-time obstacle avoidance</li>
        <li>Exceptionally powerful and dynamic in-gait kicking</li>
        <li>Highly robust and accurate vision-based perception and localization</li>
    </ul>
  </div>

  <!-- Right column -->
  <div class="right" style="flex:1 1 65%; min-width:320px; max-width:900px;">
    <figure style="margin:0; width:100%;">
      <video controls style="width:100%; height:auto; aspect-ratio:16/9; display:block;">
        <source src="/Project/Robocup/robocup_shortcut.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <figcaption style="
        width:100%;
        max-width:100%;
        margin-top:0.5rem;
        text-align:center;
        line-height:1.4;
      ">
        <em>RoboCup 2024 highlights of ARTEMIS.</em> The robot showcases seamless integration of vision-based ball and landmark tracking, robust localization, and advanced path planning to execute self-passes and powerful kicks from anywhere on the field.
      </figcaption>
    </figure>
  </div>

</div>

## Hardware Maintenance
I helped maintain the ARTEMIS hardware platform from 2023 onward, supporting both routine operation and competition deployment. My responsibilities included assembly and disassembly for transport and on-site staging, actuator testing and encoder calibration, wiring and harness management, and the design and development of a mobile gantry system for safely servicing ARTEMIS.

<div class="media-row"
     style="display:flex; gap:1rem; align-items:center; justify-content:center;flex-wrap:wrap; margin-top:0.8rem;">

  <!-- Image 1 -->
  <figure style="margin:0;">
    <img src="/Project/Robocup/artemis_pose.jpg"
         alt="ARTEMIS pose"
         style="height:400px; width:auto; object-fit:contain; display:block;">
  </figure>

  <!-- Image 2 -->
  <figure style="margin:0;">
    <img src="/Project/Robocup/hardware_fix1.jpg"
         alt="Hardware repair"
         style="height:400px; width:auto; object-fit:contain; display:block;">
  </figure>

  <!-- Image 3 -->
  <figure style="margin:0;">
    <img src="/Project/Robocup/hardware_fix2.jpg"
         alt="Harnessing"
         style="height:400px; width:auto; object-fit:contain; display:block;">
  </figure>

  <!-- Video -->
  <figure style="margin:0;">
    <video controls
           style="height:400px; width:auto; object-fit:contain; display:block;">
      <source src="/Project/Robocup/motor_test.mp4" type="video/mp4">
    </video>
  </figure>
</div>

## Trajectory Planning and Tracking

<div class="two-column" style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">

  <!-- Left column -->
  <div class="left" style="flex:1 1 25%; min-width:300px; text-align:justify">
    <p style="margin-top:0;">
        Trajectory planning and tracking are central to ARTEMIS’s ability to navigate the field and execute complex soccer maneuvers. I developed a navigation stack based on Dynamic Augmented Visibility Graphs (DAVG), which plans efficient paths while explicitly accounting for turning cost—an important constraint for humanoid robots. These paths are tracked using a collision-free MPC (cf-MPC) controller that jointly handles robot dynamics and obstacle avoidance, enabling smooth and reliable motion in dynamic competition environments. Significant effort was devoted to integrating perception, localization, and motion signals, carefully tuning the system to handle sensing noise, timing mismatches, and communication latency during real-world deployment.
    </p>
  </div>

  <!-- Right column -->
  <div class="right" style="flex:1 1 65%; min-width:320px; max-width:900px;">
    <figure style="margin:0; width:100%;">
      <img src="/Project/Robocup/midlevel_workflow.png" alt="Trajectory planning workflow" style="width:100%; height:auto; display:block;">
      <figcaption style="width:100%; max-width:100%; margin-top:0.5rem; text-align:center; line-height:1.4;">
        <em>Mid-level trajectory planning workflow.</em> High-level goals flow through path planning, feasibility checking, and trajectory optimization to produce smooth, dynamically feasible foot trajectories for the low-level controller.
      </figcaption>
    </figure>
  </div>

</div>

### Simulation & Testing

The three panels below showcase our trajectory planning validation across different environments:

<div class="media-row" style="display:flex; gap:1rem; align-items:center; justify-content:center; flex-wrap:wrap; margin-top:0.8rem;">

  <!-- Simulation -->
  <figure style="margin:0;">
    <img src="/Project/Robocup/midlevel_sim.gif"
         alt="Simulation demo"
         style="height:300px; width:auto; object-fit:contain; display:block;">
    <figcaption style="text-align:center; margin-top:0.4rem; font-size:0.9rem;">Simulation validation</figcaption>
  </figure>

  <!-- In-Lab Test -->
  <figure style="margin:0;">
    <img src="/Project/Robocup/midlevel_inlab_test.gif"
         alt="In-lab testing"
         style="height:300px; width:auto; object-fit:contain; display:block;">
    <figcaption style="text-align:center; margin-top:0.4rem; font-size:0.9rem;">In-lab testing</figcaption>
  </figure>

  <!-- Match Deployment -->
  <figure style="margin:0;">
    <img src="/Project/Robocup/midlevel_match.gif"
         alt="Match deployment"
         style="height:300px; width:auto; object-fit:contain; display:block;">
    <figcaption style="text-align:center; margin-top:0.4rem; font-size:0.9rem;">Match deployment</figcaption>
  </figure>

</div>

## Locomotion Tuning
I also helped on tuning the locomotion of ARTEMIS to ensure consistant walking and kicking performance after motor calibration or across different field textures. Thru learning from ARTEMIS locmotion stack, I gained the knowledge to develop the locomotion stack for Kid Cosmo. 

<div class="media-row" style="display:flex; gap:1rem; align-items:center; justify-content:center; flex-wrap:wrap; margin-top:0.8rem;">

  <!-- Simulation -->
  <figure style="margin:0;">
    <img src="/Project/Robocup/bad_locomotion.gif"
         alt="bad loco"
         style="height:300px; width:auto; object-fit:contain; display:block;">
    <figcaption style="text-align:center; margin-top:0.4rem; font-size:0.9rem;">Too strong kick hit the joint limit</figcaption>
  </figure>

  <!-- In-Lab Test -->
  <figure style="margin:0;">
    <img src="/Project/Robocup/good_locomotion.gif"
         alt="good loco"
         style="height:300px; width:auto; object-fit:contain; display:block;">
    <figcaption style="text-align:center; margin-top:0.4rem; font-size:0.9rem;">Tuned stable and strong kick</figcaption>
  </figure>
</div>


## Publications 
- [2026 Advanced Intelligent System (under review)](https://arxiv.org/abs/2512.09431){ target="_blank" }
- [2025 ICRA](https://ieeexplore.ieee.org/document/11128033){ target="_blank" }
- [2024 Robocup](https://link.springer.com/chapter/10.1007/978-3-031-85859-8_43){ target="_blank" }
- [2025 arXiv](https://arxiv.org/abs/2503.11020){ target="_blank" }
