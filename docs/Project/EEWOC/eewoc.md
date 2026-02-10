# EEWOC: Extended-reach Enhanced Wheeled Orb for Climbing 
In this paper, we present a lightweight, low-cost climbing robot featuring a unique, highly extendable "zip-chain" limb that allows it to reach distant handholds far beyond its body length. To ensure secure attachment to vertical surfaces, we designed specialized magnetic grippers that provide high holding force while remaining easy to detach during movement. Experimental results demonstrate that our design successfully navigates complex steel environments, proving that high-reach capability can be achieved through a compact and cost-effective robotic platform.

---

<figure markdown="span">
  ![EEWOC's ability demonstration.](eewoc_first_figure.gif){ width="600" }
  <figcaption><b>Figure 1:</b> EEWOC's ability to extend and bend to place its magnetic grippers on complex features grants it a wide variety of mobility options on steel structures.</figcaption>
</figure>

## Personal Contribution
I designed the magnetic grippers for the EEWOC robot, focusing on a mechanically robust and controllable adhesion mechanism for climbing applications. The gripper employs a cam-driven actuation scheme in which a rotating cam switches the system between two discrete states. In the **ON** state, the cam presses the magnets flush against the contact surface to achieve maximum holding force. In the **OFF** state, the cam induces a controlled peeling motion that mechanically separates the magnets from the surface, enabling reliable and repeatable detachment without requiring active force control.

### Performance Specifications
- **Actuation Time:** 0.7 s per attach or detach cycle
- **Payload Capacity:** 2.1 kg (full robot weight)
- **Operating Angle:** Up to 90° (vertical climbing)

<figure markdown="span">
  ![EEWOC magnetic gripper CAD.](gripper.png){ width="600" }
  <figcaption><b>Figure 2:</b> CAD view of EEWOC’s magnetic grippers illustrating the cam-driven ON and OFF adhesion states.</figcaption>
</figure>

## Project Video: 
<section class="youtube-section">
  <div class="youtube-container">
    <iframe 
      width="100%" 
      height="300" 
      src="https://www.youtube.com/embed/usxON_JnEmw?si=Vsp89nqvk6zMkd5U" 
      title="EEWOC Video Demonstrations" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
    </iframe>
  </div>
</section>

## Publications 
- [2024 ReMAR](https://ieeexplore.ieee.org/abstract/document/10619924){ target="_blank" }
- [2023 IDETC-CIE](https://asmedigitalcollection.asme.org/IDETC-CIE/proceedings/IDETC-CIE2023/87363/V008T08A084/1170807){ target="_blank" }