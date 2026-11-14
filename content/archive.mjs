// Project descriptions adapted from the owner's original project pages.
// Publication metadata is checked against the linked publisher or university record.
export default [
  {
    slug: 'limms',
    title: 'LIMMS: Latching Intelligent Modular Mobility System',
    category: 'Mechanisms & devices',
    period: '2023–2024',
    summary: 'A reconfigurable delivery robot built around a compact, integrated latching interface.',
    role: 'Latching mechanism design and integration',
    hero: 'assets/projects/limms-preview.mp4',
    poster: 'assets/projects/limms-poster.jpg',
    mainMedia: { kind: 'video', src: 'assets/projects/limms-full.mp4', caption: 'LIMMS — full system demonstration.' },
    overview: [
      'LIMMS is a modular robotic system for last-mile delivery. Identical robot modules connect through a latching interface and assemble into different configurations, combining wheeled, bipedal, and quadrupedal locomotion with collaborative manipulation.',
      'The system explores how a common set of modules can handle both moving cargo and navigating the environment around it. Reconfiguration allows the same hardware to take on different roles instead of assigning each delivery task to a separate, specialized robot.'
    ],
    sections: [
      {
        title: 'My contribution',
        paragraphs: [
          'I developed the initial latching concept into an integrated module for the LIMMS platform. My work brought together the mechanical latch blades, micro-servos, motor drivers, and an onboard camera for vision-based processing.',
          'A slip ring connects the latch to the main robot body, maintaining power and data transmission while allowing unrestricted 360-degree rotation. The final mechanism supports the module’s own weight even at its maximum cantilever, where the load produces the largest moment arm.'
        ],
        media: [
          { src: 'assets/projects/limms-latch-cad.jpg', kind: 'image', alt: 'CAD model of the LIMMS latching module', caption: 'Latching module CAD.' },
          { src: 'assets/projects/limms-latch-interior.jpg', kind: 'image', alt: 'Internal components of the LIMMS latching module', caption: 'Mechanical and electronic integration inside the latch.' },
          { src: 'assets/projects/limms-latch.mp4', kind: 'video', alt: 'LIMMS latching mechanism demonstration', caption: 'Latching mechanism demonstration.' }
        ]
      },
      {
        title: 'A shared interface for multiple configurations',
        paragraphs: [
          'The latch is the physical connection that makes the modular platform possible. Reliable attachment lets individual modules work together as a larger robotic system, while the integrated sensing, actuation, and rotating electrical connection keep the interface compact.'
        ],
        media: [
          { src: 'assets/projects/limms-overview.jpg', kind: 'image', alt: 'Assembled LIMMS quadruped configuration beside a single robot module', caption: 'An assembled quadruped configuration and a single LIMMS module.' }
        ]
      }
    ],
    publications: [],
    links: []
  },
  {
    slug: 'eewoc',
    title: 'EEWOC: Extended-reach Enhanced Wheeled Orb for Climbing',
    category: 'Mechanisms & devices',
    period: '2023–2024',
    summary: 'A lightweight climbing robot with an extending limb and switchable magnetic grippers for steel structures.',
    role: 'Magnetic gripper design',
    hero: 'assets/projects/eewoc-poster.jpg',
    poster: 'assets/projects/eewoc-poster.jpg',
    mainMedia: { kind: 'youtube', videoId: 'usxON_JnEmw', caption: 'EEWOC — project demonstration video.' },
    overview: [
      'EEWOC combines a long-reach, extendable and bendable tape-spring limb with magnetic grippers to move across steel structures. The limb places its grippers beyond the robot’s body and around obstacles, corners, and ledges, while wheels provide mobility on horizontal surfaces.',
      'The platform investigates a compact approach to climbing: use reach and switchable attachment mechanisms to navigate surface features without the mass and complexity of many conventional limbed robots.'
    ],
    sections: [
      {
        title: 'My contribution',
        paragraphs: [
          'I designed the magnetic grippers, focusing on a mechanically robust attachment mechanism with predictable engagement and release. A rotating cam switches each gripper between two states.',
          'In the attached state, the cam presses the magnets flush against the steel surface to provide holding force. To release, the cam produces a controlled peeling motion that separates the magnets from the surface. This mechanical switching enables repeatable detachment without explicit force control.'
        ],
        media: [
          { src: 'assets/projects/eewoc-gripper.jpg', kind: 'image', alt: 'CAD diagram showing the attached and detached states of EEWOC’s cam-driven magnetic gripper', caption: 'Cam-driven magnetic gripper in its attachment and release states.' }
        ]
      },
      {
        title: 'Gripper performance',
        paragraphs: [
          'The original project demonstrations report the following specifications for the gripper and climbing setup.'
        ],
        bullets: [
          '0.7 seconds per attachment or detachment cycle.',
          '2.1 kg supported load, corresponding to the full robot weight reported in the project material.',
          'Operation on surfaces up to 90 degrees, including vertical climbing.'
        ]
      }
    ],
    publications: [
      {
        title: 'Re-Examining Climbing Robots: Design and Performance of a Lightweight, Low-Cost Robot with a Highly Extendable Limb',
        venue: 'IEEE ReMAR · 2024',
        url: 'https://doi.org/10.1109/ReMAR61031.2024.10619924'
      },
      {
        title: 'A Lightweight Mobile Robot for Climbing Steel Structures With an Extending and Bending Tape Spring Limb',
        venue: 'ASME IDETC-CIE · 2023',
        url: 'https://doi.org/10.1115/detc2023-115048'
      }
    ],
    links: [
      { label: 'Project video', url: 'https://www.youtube.com/watch?v=usxON_JnEmw' }
    ]
  },
  {
    slug: 'endoscopic-device',
    title: 'Optical Fiber Coupling for Steerable Endoscopic Instruments',
    category: 'Mechanisms & devices',
    period: '2021',
    summary: 'Coupling a surgical laser into a thinner optical fiber to enable tighter bending in steerable endoscopic probes.',
    hero: 'assets/projects/endoscopic-device-poster.jpg',
    poster: 'assets/projects/endoscopic-device-poster.jpg',
    overview: [
      'This project develops an optical coupling system that transfers light from a commercial surgical laser fiber into a thinner multimode fiber. The goal is to deliver laser energy through a steerable endoscopic probe in confined spaces, where a thick fiber limits the achievable bend.',
      'The system couples a 400 µm Endostat fiber to a 200 µm multimode fiber using reflective and achromatic collimators. The thinner fiber enables a bending radius of approximately 6 mm, compared with a 12 mm minimum radius for the commercial fiber tested in the study.'
    ],
    sections: [
      {
        title: 'Experimental characterization',
        paragraphs: [
          'Optical power measurements characterized the coupling performance across different laser power settings. The experiments achieved approximately 50% coupling efficiency, demonstrating that the smaller fiber could carry a substantial portion of the input laser energy.',
          'Tissue ablation experiments used tissue-mimicking agar to test whether the transmitted energy remained sufficient for cutting. These benchtop results established the feasibility of the coupling approach for future steerable, fiber-based endoscopic instruments.'
        ]
      },
      {
        title: 'Design objective',
        paragraphs: [
          'By separating the laser-delivery interface from the flexible distal fiber, the system connects existing laser hardware with the bending requirements of a miniature steerable instrument. The work focuses on the optical and mechanical constraints of that connection.'
        ]
      }
    ],
    publications: [
      {
        title: 'Optical Fiber Coupling System for Steerable Endoscopic Instruments',
        venue: 'IEEE EMBC · 2021',
        url: 'https://doi.org/10.1109/EMBC46164.2021.9629658'
      }
    ],
    links: [
      { label: 'Open-access paper', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9234471/' }
    ]
  },
  {
    slug: 'massage-hand',
    title: 'Underactuated Robotic Hand for Shoulder Massaging',
    category: 'Robotic hands',
    period: '',
    summary: 'A mechanically compliant hand that produces massage motions with two actuators and coupled finger linkages.',
    hero: 'assets/projects/massage-hand-preview.mp4',
    poster: 'assets/projects/massage-hand-poster.jpg',
    mainMedia: { kind: 'video', src: 'assets/projects/massage-hand-full.mp4', caption: 'Combined motion of the underactuated massage hand.' },
    overview: [
      'This underactuated robotic hand explores a small actuator set for shoulder massaging and physical interaction. One Dynamixel servo and one N20 motor drive the mechanism, producing different massage motions through linked finger movement and mechanical compliance.',
      'The design uses a double four-bar linkage and passive springs to provide compliant finger motion. An offset cam changes the initial contact positions, while the Dynamixel servo closes the fingers. Contact forces adapt through the mechanism’s compliance and kinematic coupling, without explicit force control.'
    ],
    sections: [
      {
        title: 'Mechanism design',
        paragraphs: [
          'The hand combines the finger-closing motion with adjustment of the initial contact geometry. These two actuation paths produce the combined hand motion shown in the prototype demonstration.',
          'The CAD model and thumb-linkage demonstration show how the linked mechanism coordinates motion within the hand. Passive elements provide compliance as the fingers close, allowing the structure itself to participate in adapting the contact.',
          'The accompanying demonstrations show both the small-servo-only movement and the full hand’s combined motion.'
        ],
        media: [
          { src: 'assets/projects/massage-hand-cad.jpg', kind: 'image', alt: 'CAD model of the underactuated shoulder massage hand', caption: 'Massage hand mechanism and finger linkage CAD.' },
          { src: 'assets/projects/massage-hand-thumb.mp4', kind: 'video', alt: 'Animation of the massage hand’s thumb and finger linkage', caption: 'Thumb linkage mechanism.' },
          { src: 'assets/projects/massage-hand-servo.mp4', kind: 'video', alt: 'Massage hand demonstration using the small servo alone', caption: 'Small-servo-only demonstration.' }
        ]
      }
    ],
    publications: [],
    links: []
  }
];
