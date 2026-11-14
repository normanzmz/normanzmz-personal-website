// Project narratives reuse the author's original docs/Project pages.
// Publication records checked against IEEE Xplore, Springer, Wiley and arXiv.
// Localization: IEEE UR 2026 (not the original, outdated ICRA submission).
// Champions Guide: RoboCup 2024 proceedings, published by Springer in 2025.

export default [
  {
    slug: 'kid-cosmo',
    title: 'Kid COSMO',
    category: 'Humanoids',
    period: '2024–2025',
    summary: 'Bringing a movie character to life through mechanical design, torque-controlled walking, and expressive full-body motion.',
    role: 'Torso design and integration; locomotion framework for coordinated walking and upper-body motion.',
    hero: 'assets/home/cosmo-preview.mp4',
    poster: 'assets/home/cosmo-poster.jpg',
    mainMedia: { kind: 'youtube', videoId: 'q2Jfq_0LHRM', caption: 'Kid COSMO walking with coordinated upper-body motion.' },
    overview: [
      'Kid COSMO is a child-sized humanoid developed at UCLA RoMeLa to bring the character from Netflix’s The Electric State into the physical world. The visual design was defined by the film, so the engineering challenge was to fit a working humanoid inside a distinctive character while preserving its proportions and mannerisms.',
      'Our team developed the robot within a year for the film’s March 2025 premiere. My work focused on integrating the torso hardware and developing a locomotion framework that supports dynamic walking alongside expressive upper-body gestures.'
    ],
    sections: [
      {
        title: 'Engineering within a character',
        paragraphs: [
          'The character’s irregular shell geometry shaped the mechanical design. Electronics, actuators, and structural components had to share a constrained volume while leaving enough joint motion for walking and performance. Packaging and appearance therefore had to be considered together throughout development.',
          'The resulting platform combines torque-controlled lower-body motion with articulated upper-body gestures. This lets the physical robot communicate through movement while retaining the recognizable form of its on-screen counterpart.'
        ],
        bullets: [
          '1.3 m tall and 24.5 kg total mass.',
          '18 quasi-direct-drive actuators on the limbs.',
          '10 micro DC motors for the hands and wrists.',
          'Two custom 24 V batteries and an onboard mini PC.'
        ],
        media: [
          { src: 'assets/projects/cosmo-robot.jpg', kind: 'image', alt: 'Assembled Kid COSMO humanoid robot', caption: 'The assembled physical robot.' }
        ]
      },
      {
        title: 'Torso integration and serviceability',
        paragraphs: [
          'I designed the torso, which houses most of the robot’s electronics. The limited, irregular internal space made dense packaging, access for maintenance, and impact mitigation central design considerations.',
          'A quick-detachable front cover provides access for battery swaps. Carbon-fiber plates and rubber washers introduce structural compliance and improve impact absorption. These details balance the character’s appearance with the practical demands of repeated operation and servicing.'
        ],
        media: [
          { src: 'assets/projects/cosmo-torso.jpg', kind: 'image', alt: 'Kid COSMO torso design showing the component packaging and detachable front cover', caption: 'Torso packaging and quick-access front cover.' }
        ]
      },
      {
        title: 'Walking with upper-body motion',
        paragraphs: [
          'I developed the locomotion framework for dynamic walking with coordinated upper-body movement. A contact-aided Invariant Extended Kalman Filter estimates the robot state, while a contact-based gait generator coordinates stance and swing timing.',
          'The footstep planner and swing trajectory generator determine touchdown locations and smooth foot motions. Inverse kinematics and a whole-body controller track the foot, center-of-mass, and upper-body trajectories, producing joint commands executed through PD control with feedforward torque.'
        ],
        media: [
          { src: 'assets/projects/cosmo-locomotion.jpg', kind: 'image', alt: 'Kid COSMO locomotion architecture from state estimation and gait generation to whole-body control', caption: 'The locomotion framework connects estimation, planning, and whole-body control.' }
        ]
      },
      {
        title: 'Physical validation',
        paragraphs: [
          'The controller was exercised through balance tests, walking demonstrations, and upper-body gestures performed while seated or moving. These tests examine the interaction between expressive motion and lower-body stability, an essential requirement for a humanoid designed to perform as a character.'
        ],
        media: [
          { src: 'assets/projects/cosmo-balance.mp4', kind: 'video', alt: 'Kid COSMO responding to disturbances during a dynamic balance test', caption: 'Dynamic balance testing on the physical robot.' },
          { src: 'assets/projects/cosmo-gestures.mp4', kind: 'video', alt: 'Kid COSMO performing upper-body gestures while seated', caption: 'Coordinated upper-body motion while seated.' }
        ]
      }
    ],
    publications: [
      {
        title: 'From Screen to Stage: Kid Cosmo, A Life-Like, Torque-Controlled Humanoid for Entertainment Robotics',
        venue: 'IEEE-RAS International Conference on Humanoid Robots (Humanoids), 2025',
        url: 'https://ieeexplore.ieee.org/abstract/document/11203026'
      }
    ],
    links: [
      { label: 'Video', url: 'https://www.youtube.com/watch?v=q2Jfq_0LHRM' },
      { label: 'Open-access paper', url: 'https://arxiv.org/abs/2508.11884' }
    ]
  },
  {
    slug: 'robocup-2024',
    title: 'RoboCup 2024 · ARTEMIS',
    category: 'Humanoids',
    period: '2023–2024',
    summary: 'Collision-aware navigation, dynamic locomotion, and competition deployment for the RoboCup 2024 adult-size humanoid world champions.',
    role: 'Navigation and trajectory tracking; locomotion tuning; hardware maintenance and competition deployment.',
    hero: 'assets/home/robocup-preview.mp4',
    poster: 'assets/home/robocup-poster.jpg',
    mainMedia: { kind: 'youtube', videoId: '0-g01n3lm80', caption: 'ARTEMIS in the RoboCup 2024 final.' },
    overview: [
      'RoboCup requires humanoid robots to perceive, plan, and play soccer autonomously in a changing, adversarial environment. I was a core member of UCLA RoMeLa’s team in 2023 and 2024, working on ARTEMIS, our adult-sized humanoid soccer platform.',
      'In 2024, our team won the adult-size humanoid championship, scoring 45 goals across six official matches. My contributions connected trajectory planning and tracking with reliable locomotion and the practical hardware work needed to deploy the robots on the competition field.'
    ],
    sections: [
      {
        title: 'Collision-aware navigation',
        paragraphs: [
          'I developed a navigation stack based on Dynamic Augmented Visibility Graphs, which plans paths while accounting for the cost of turning. This matters for a large humanoid, where changing orientation can be more demanding than following a simple geometric shortest path.',
          'A collision-free model predictive controller tracks these paths while considering robot dynamics and nearby obstacles. Integrating the planner with perception, localization, and motion required careful tuning for measurement noise, inconsistent timing, and communication latency in real matches.'
        ],
        media: [
          { src: 'assets/projects/robocup-navigation.jpg', kind: 'image', alt: 'ARTEMIS mid-level planning workflow connecting path planning, feasibility checks, and trajectory optimization', caption: 'From high-level goals to feasible trajectories for the locomotion controller.' }
        ]
      },
      {
        title: 'From simulation to the match field',
        paragraphs: [
          'We evaluated the navigation pipeline in simulation, in the laboratory, and during competition. Each setting exposed different demands: verifying the planning logic, testing the physical robot, and handling unpredictable opponents and noisy observations on the field.',
          'The deployed system combines navigation with the team’s perception, localization, behavior planning, and locomotion modules. Together, these components allow ARTEMIS to approach the ball, avoid nearby obstacles, reposition, and execute powerful kicks during autonomous play.'
        ],
        media: [
          { src: 'assets/projects/robocup-simulation.mp4', kind: 'video', alt: 'ARTEMIS trajectory planning tested in simulation', caption: 'Simulation validation.' },
          { src: 'assets/projects/robocup-match.mp4', kind: 'video', alt: 'ARTEMIS navigating during a RoboCup match', caption: 'Deployment during competition.' }
        ]
      },
      {
        title: 'Reliable hardware in the field',
        paragraphs: [
          'I helped maintain the ARTEMIS platforms from 2023 onward. My responsibilities included assembly and disassembly for transport, on-site staging, actuator testing, encoder calibration, wiring, and harness management.',
          'I also designed and developed a mobile gantry for safely servicing the robot. This work supported routine laboratory operation as well as the rapid inspection and maintenance needed between competition matches.'
        ],
        media: [
          { src: 'assets/projects/robocup-hardware.jpg', kind: 'image', alt: 'The ARTEMIS humanoid robot during hardware preparation', caption: 'ARTEMIS hardware preparation.' }
        ]
      },
      {
        title: 'Locomotion and kicking',
        paragraphs: [
          'I helped tune locomotion to preserve consistent walking and kicking performance after motor calibration and across different field surfaces. The work required considering the physical response of the robot alongside the motion commands generated by the software stack.',
          'Experience with ARTEMIS’s locomotion framework later informed my work on Kid COSMO, where dynamic walking must coexist with expressive upper-body motion.'
        ],
        media: [
          { src: 'assets/projects/robocup-kicking.mp4', kind: 'video', alt: 'ARTEMIS executing a stable, tuned kick', caption: 'Tuned locomotion for stable, powerful kicking.' }
        ]
      }
    ],
    publications: [
      {
        title: 'A Hierarchical, Model-Based System for High-Performance Humanoid Soccer',
        venue: 'Advanced Intelligent Systems, 2026',
        url: 'https://doi.org/10.1002/aisy.70594'
      },
      {
        title: 'Model Predictive Control with Visibility Graphs for Humanoid Path Planning and Tracking Against Adversarial Opponents',
        venue: 'IEEE International Conference on Robotics and Automation (ICRA), 2025',
        url: 'https://ieeexplore.ieee.org/document/11128033'
      },
      {
        title: 'Fast and Robust Localization for Humanoid Soccer Robot via Iterative Landmark Matching',
        venue: 'International Conference on Ubiquitous Robots (UR), 2026',
        url: 'https://ieeexplore.ieee.org/abstract/document/11626739'
      },
      {
        title: 'RoboCup 2024 Adult-Sized Humanoid Champions Guide for Hardware, Vision, and Strategy',
        venue: 'RoboCup 2024: Robot World Cup XXVII, Springer, published 2025',
        url: 'https://link.springer.com/chapter/10.1007/978-3-031-85859-8_43'
      }
    ],
    links: [
      { label: 'Finals video', url: 'https://www.youtube.com/watch?v=0-g01n3lm80' },
      { label: 'System paper · open access', url: 'https://arxiv.org/abs/2512.09431' },
      { label: 'Navigation paper · open access', url: 'https://arxiv.org/abs/2504.02184' },
      { label: 'Localization paper · open access', url: 'https://arxiv.org/abs/2503.11020' }
    ]
  }
];
