---
title: MERLIN Hand 
hide:
  - toc
  - navigation
---

<div class="two-column" style="display:flex; gap:2.5rem; align-items:flex-start; flex-wrap:wrap;">

  <!-- Left column -->
  <div class="left" style="flex:1 1 55%; min-width:450; text-align:justify">
    <p style="margin-top:0;">
      <strong>MERLIN (Multi-sensory Electronics-integrated Robotic Limb for INtelligent manipulation)</strong>
      is a collection of next-generation robotic hand systems, including:
    </p>
    <h3 style="margin-top:1rem;">Highlights</h3>
    <ul style="margin:0.5rem 0 0 1.2rem;">
      <li>Exoskeleton-based data collection device for ROH-Hand</li>
      <li>Underactuated robotic hand for massage and physical interaction</li>
      <li>Next-generation dexterous robotic hand co-designed with a        human-wearable demonstration device (ongoing)</li>
    </ul>
  </div>

  <!-- Right column -->
  <div class="right" style="flex:1 1 40%; min-width:240px; max-width:900px; padding-left:1rem">
    <figure style="margin:0; width:100%;">
      <img
        src="/Project/Hand/hand_cover_image.png"
        alt="MERLIN robotic hand system overview"
        style="width:100%; height:auto; display:block; border-radius:8px;"
      />
      <!-- Optional caption -->
      <figcaption style="font-size:0.85em; color:#666; margin-top:0.4rem;">
        Data collection device (left) and massage hand (right)
      </figcaption>
    </figure>
  </div>
</div>

## Data Collection Exoskeleton for ROH_hand 
We develop a linkage-based data collection device for ROH-Hand that uses the human hand as a natural interface for transferring dexterous manipulation skills. Inspired by DexOP, the system physically couples human finger motion to a kinematically aligned pseudo hand, enabling direct haptic feedback during demonstration. This design improves wearability and reduces the embodiment gap between human motion and robotic execution, leading to more consistent demonstrations and higher task success rates.

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
      <img src="/Project/Hand/roh_cad.png"
           alt="ROH-Hand exoskeleton overview"
           style="height:320px; width:auto; object-fit:contain;" />
      <figcaption style="font-size:0.85em; color:#666; margin-top:0.4rem;">
        (a) Exoskeleton CAD
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
      <img src="/Project/Hand/Hand_real.jpg"
           alt="Exoskeleton prototype"
           style="height:320px; width:auto; object-fit:contain;" />
      <figcaption style="font-size:0.85em; color:#666; margin-top:0.4rem;">
        (b) Exoskeleton Prototype
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
      <img src="/Project/Hand/IMG_1134.gif"
           alt="Demonstration of grasping"
           style="height:320px; width:auto; object-fit:contain;" />
      <figcaption style="font-size:0.85em; color:#666; margin-top:0.4rem;">
        (c) Demonstration of Grasping
      </figcaption>
    </figure>

  </div>
</figure>

## Underactuated Robotic Hand for Shoulder Massaging 
The massage hand uses a minimalist actuation design—one Dynamixel servo and one N20 motor—to produce diverse massage patterns without explicit force control. A double four-bar linkage and passive springs provide compliant finger motion, while an offset cam mechanism adjusts initial contact positions. The Dynamixel servo closes the fingers and adapts contact forces through mechanical compliance and kinematic coupling.

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
      <img src="/Project/Hand/massage_hand_cad.png"
           alt="ROH-Hand exoskeleton overview"
           style="height:320px; width:auto; object-fit:contain;" />
      <figcaption style="font-size:0.85em; color:#666; margin-top:0.4rem;">
        (a) Massage hand CAD
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
      <img src="/Project/Hand/thumb_index_finger_final.gif"
           alt="Exoskeleton prototype"
           style="height:320px; width:auto; object-fit:contain;" />
      <figcaption style="font-size:0.85em; color:#666; margin-top:0.4rem;">
        (b) Thumb linkage mechanism 
      </figcaption>
    </figure>
    <!-- Video 3 -->
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
        <source src="/Project/Hand/small_servo_only.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <figcaption style="font-size:0.85em; color:#666; margin-top:0.4rem;">
        (c) Small servo only
      </figcaption>
    </figure>
    <!-- Video 4 -->
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
        <source src="/Project/Hand/hand_motion.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <figcaption style="font-size:0.85em; color:#666; margin-top:0.4rem;">
        (d) Combined hand motion
      </figcaption>
    </figure>
  </div>
</div>

