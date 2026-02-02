---
title: null
hide:
  - title
  - toc
  - navigation
---

<div class="project-banner">
  <img src="/Project/Cosmo/Electric_State_web_banner.webp" alt="Kid Cosmo banner">
  <div class="project-banner-overlay">
    <h1 class="project-title">A Humanoid Robot Movie Character: Kid Cosmo
</h1>
  </div>
</div>

<!-- Page content starts here -->

<section class="bg-section">
  <div class="bg-left">
    <h2>Background</h2>
    <p>
      Kid Cosmo is a child-sized humanoid robot created for Netflix’s science-fiction film The Electric State. As a central character in the movie, its visual design was predefined, and our team was tasked with realizing it as a fully functional physical robot. 
    </p>
    <p>
      The robot was developed from scratch within a one-year timeline to meet the film’s March 2025 premiere. It is capable of walking and expressive full-body gestures, requiring rapid mechanical, electrical, and control system development under tight schedule constraints.
    </p>
  </div>
  <aside class="bg-right">
    <img src="/Project/Cosmo/official-poster.webp" alt="Official poster">
    <img src="/Project/Cosmo/cosmo_russo_brother.jpg" alt="Cosmo with Russo brothers">
  </aside>
</section>

## Robot Specifications

<section class="hw-section">
<div class="hw-left">
  <h3></h3>
  <table class="spec-table">
    <tbody>
      <tr>
        <th>Height</th>
        <td>1.3 m</td>
      </tr>
      <tr>
        <th>Weight</th>
        <td>24.5 kg</td>
      </tr>
      <tr>
        <th>Joint motors</th>
        <td>18 QDD actuators on limbs</td>
      </tr>
      <tr>
        <th>Hand motors</th>
        <td>10 micro DC motors for hand and wrist</td>
      </tr>
      <tr>
        <th>Power supply</th>
        <td>24 V custom battery × 2</td>
      </tr>
      <tr>
        <th>Control method</th>
        <td>Wireless / wired remote control</td>
      </tr>
      <tr>
        <th>Computing module</th>
        <td>Mini PC</td>
      </tr>
    </tbody>
  </table>
</div>
  <aside class="hw-right" aria-hidden="false">
    <figure class="hw-figure">
      <img src="/Project/Cosmo/given_model.png" alt="Given graphics model">
      <figcaption>Given graphics model</figcaption>
    </figure>
    <figure class="hw-figure">
      <img src="/Project/Cosmo/cosmo_full_shells_gif_crop.gif" alt="CAD Design">
      <figcaption>CAD Design</figcaption>
    </figure>
    <figure class="hw-figure">
      <img src="/Project/Cosmo/cosmo_figure1.png" alt="The robot Kid Cosmo">
      <figcaption>The robot Kid Cosmo</figcaption>
    </figure>
  </aside>
</section>

<section class="torso-section">
  <div class="torso-left">
    <h3>Torso Design</h3>
    <p>
      From a mechanical design perspective, my primary contribution was the design of Kid Cosmo’s torso, which houses most of the robot’s electronic components. Unlike conventional humanoids, the irregular torso geometry posed significant challenges for dense packaging, serviceability, and impact mitigation.
    </p>
    <p>
      To address these constraints, a quick-detachable front cover was implemented to enable efficient battery swapping, while carbon-fiber plates and rubber washers were incorporated to introduce structural compliance and improve impact absorption. These choices balanced aesthetics, maintainability, and robustness required for on-set performance.
    </p>
  </div>

  <aside class="torso-right" aria-hidden="false">
    <figure class="torso-figure">
      <img src="/Project/Cosmo/torso_design.png" alt="Torso design">
      <figcaption>Torso design (packaging and front cover)</figcaption>
    </figure>
  </aside>
</section>

## Control Framework
<section class="control-section">
  <div class="control-figure">
    <figure class="control-figure-main">
      <img src="/Project/Cosmo/software_architecture.png" alt="Software architecture">
      <figcaption>The software architecture of Cosmo</figcaption>
    </figure>
  </div>

  <div class="control-locomotion">
    <section class="locomotion-section">
      <div class="locomotion-row">
        <div class="locomotion-text">
          <h3>Locomotion</h3>
          <p>
            I developed Kid Cosmo's locomotion framework for dynamic walking with coordinated upper-body motion. State estimation is provided by a contact-aided Invariant Extended Kalman Filter (InEKF), and a symmetric contact-based gait generator assigns stance and swing phases according to the desired gait timing.
           </p>
           <p>
            For swing legs, a footstep planner and trajectory generator produce smooth swing motions and target touchdown locations, while stance legs enforce zero acceleration. Swing foot, center-of-mass, and upper-body trajectories are tracked by an inverse kinematics solver and a whole-body controller (WBC), which generates joint-level commands executed via PD control with feedforward torque.
          </p>
        </div>
        <aside class="locomotion-schematic">
          <img src="/Project/Cosmo/locomotion_architecture_simplified.png" alt="Locomotion architecture simplified">
          <figcaption>Locmotion framework of Cosmo</figcaption>
        </aside>
      </div>
      <div class="locomotion-videos">
        <figure class="loc-video">
          <video controls playsinline src="/Project/Cosmo/Cosmo%20Dynamic%20Balance%20Test.mp4"></video>
          <figcaption>Dynamic Balance Test</figcaption>
        </figure>
        <figure class="loc-video">
          <video controls playsinline src="/Project/Cosmo/cosmo_cocobot_test.mp4"></video>
          <figcaption>Sitting on Coco with upperbody motion</figcaption>
        </figure>
        <figure class="loc-video">
          <video controls playsinline src="/Project/Cosmo/cosmo_walking.mp4"></video>
          <figcaption>Walking Demo</figcaption>
        </figure>
      </div>
    </section>
  </div>
</section>

## Cosmo Walking with Upperbody Motions 

<section class="youtube-section">
  <div class="youtube-container">
    <iframe 
      width="100%" 
      height="300" 
      src="https://www.youtube.com/embed/q2Jfq_0LHRM" 
      title="Cosmo Walking with Upperbody Motions" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
    </iframe>
  </div>
</section>

## Publications 
- [2025 Humanoids](https://ieeexplore.ieee.org/abstract/document/11203026){ target="_blank" }