export default [
  {
    slug: 'trimi', title: 'TriMI', category: 'Robotic hands', period: 'Sep 2026 – Present',
    summary: 'One manipulation interface for direct demonstration, joint-level haptic teleoperation, and robotic execution.',
    hero: 'assets/home/trimi-preview.mp4', poster: 'assets/home/trimi-poster.jpg',
    mainMedia: { kind: 'youtube', videoId: 'Q4nurIYnOPQ', caption: 'TriMI — full project video.' },
    overview: [
      'TriMI brings three modes of manipulation into a shared hardware interface: collecting demonstrations through direct physical interaction, teleoperating robotic hands with joint-level haptic feedback, and executing learned policies.',
      'The four-finger design has 13 degrees of freedom, including four in the thumb. The hardware bill of materials is approximately $800, excluding the tracking device and wrist camera.'
    ],
    sections: [
      { title: 'Three modes, one interface', paragraphs: [], bullets: [
        'Direct demonstration: manipulate objects through the interface to collect examples of a task.',
        'Haptic teleoperation: send joint-level commands to a robotic hand and receive force feedback.',
        'Robotic execution: use the same interface hardware to perform manipulation on the robot.'
      ] },
      { title: 'From demonstrations to execution', paragraphs: [
        'The project demonstrates in-hand manipulation, tool use, and cross-hand teleoperation. Direct demonstrations also provide training data for diffusion policies evaluated on cube pick-and-place and cap unscrewing.',
        'TriMI placed in the top 3 of the device track at the CoRL 2026 UMI Workshop. The project website includes hardware views, demonstration videos, and policy rollouts.'
      ] }
    ],
    publications: [],
    links: [
      { label: 'Project website', url: 'https://trimi-hand.github.io/' },
      { label: 'Full video', url: 'https://www.youtube.com/watch?v=Q4nurIYnOPQ' }
    ]
  },
  {
    slug: 'midas', title: 'MIDAS Hand', category: 'Robotic hands', period: 'Apr 2026 – Jun 2026',
    summary: 'A modular, low-impedance, direct-drive hand with integrated tactile sensing for dexterous manipulation.',
    hero: 'assets/home/midas-preview.mp4', poster: 'assets/home/midas-poster.jpg',
    mainMedia: { kind: 'youtube', videoId: 'nTVTRLSyhjI', caption: 'MIDAS Hand — full system video.' },
    overview: [
      'MIDAS stands for Modular low-Impedance Direct-drive Anthropomorphic Sensing Hand. It is an open-source dexterous hand platform for robot learning, teleoperation, manipulation experiments, and simulation-to-real development.',
      'The human-scale design combines direct-drive actuation with integrated tactile sensing. Its modular hardware and accompanying software make it possible to study hand mechanics, sensing, and control together.'
    ],
    sections: [
      { title: 'Hardware platform', paragraphs: [], bullets: [
        '16 total degrees of freedom, with 13 actively actuated.',
        '283 three-axis tactile sensing taxels.',
        'Approximately 700 g total hand weight.',
        'A published bill of materials of approximately $3,000.'
      ] },
      { title: 'An open research workflow', paragraphs: [
        'The release includes CAD exports, printable components, assembly guidance, MuJoCo models, and software for control, retargeting, and teleoperation.',
        'Project demonstrations cover tool handling, in-hand motion, tactile feedback, and coordinated manipulation. The website provides the detailed hardware documentation and full system video.'
      ] }
    ],
    publications: [{ title: 'MIDAS Hand: Modular low-Impedance Direct-drive Anthropomorphic Sensing Hand', venue: 'Preprint · 2026', url: 'https://arxiv.org/abs/2607.14487' }],
    links: [
      { label: 'Project website', url: 'https://midas-hand.com/' },
      { label: 'Full video', url: 'https://www.youtube.com/watch?v=nTVTRLSyhjI' }
    ]
  },
  {
    slug: 'dexexo', title: 'DexEXO', category: 'Robotic hands', period: 'Dec 2025 – Mar 2026',
    summary: 'A wearable dexterous exoskeleton that connects natural hand demonstrations with robot learning.',
    hero: 'assets/home/dexexo-preview.mp4', poster: 'assets/home/dexexo-poster.jpg',
    mainMedia: { kind: 'video', src: 'assets/projects/dexexo-full.mp4', caption: 'DexEXO — full project video.' },
    overview: [
      'DexEXO is a wearability-first hand exoskeleton for collecting demonstrations across different operators. It aligns the demonstration interface and robot at the hardware level, connecting visual appearance, contact geometry, and kinematics.',
      'A slider-based finger interface and pose-tolerant thumb mechanism accommodate different hand sizes. A passive hand matches the deployed robot, allowing learning from wrist-camera observations with less visual processing.'
    ],
    sections: [
      { title: 'Wearability through mechanism design', paragraphs: [
        'The hardware combines a linkage-driven exoskeleton, a passive data-capture hand, and onboard sensing and power. Finger sliders accommodate different users, while parallel four-bar linkages transmit motion.'
      ], media: [{ src: 'assets/projects/dexexo-hardware.jpg', kind: 'image', alt: 'DexEXO hardware design showing finger sliders, thumb coupling, and four-bar linkages', caption: 'The wearable mechanism and passive data-capture hand.' }] },
      { title: 'Demonstration to policy deployment', paragraphs: [
        'The visually aligned passive hand allows wrist-mounted RGB observations to be used directly for policy training. Demonstrations include tool use and everyday manipulation; learned policies are evaluated on bottle grasping, carton opening, and pick-and-place tasks.'
      ], media: [{ src: 'assets/projects/dexexo-learning.jpg', kind: 'image', alt: 'DexEXO pipeline from demonstrations to policy training and robot deployment', caption: 'From operator demonstrations to visually aligned policy deployment.' }] }
    ],
    publications: [{ title: 'DexEXO: A Wearability-First Dexterous Exoskeleton for Operator-Agnostic Demonstration and Learning', venue: 'IEEE IROS · 2026', url: 'https://arxiv.org/abs/2603.17323' }],
    links: [{ label: 'Project website', url: 'https://dexexo-research.github.io/' }]
  }
];
