// Metadata checked against arXiv, the official project sites, IEEE/Springer
// publication records and publisher-supplied Crossref metadata in November 2026.
// Year follows the publication record: the RoboCup 2024 volume was issued in
// 2025, and the first EEWOC paper appeared at ASME IDETC-CIE in 2023.
const author = (name, equal = false) => ({
  name,
  ...(name === 'Mingzhang Zhu' ? { highlight: true } : {}),
  ...(equal ? { equal: true } : {})
});

export default [
  {
    id: 'midas-hand',
    title: 'MIDAS Hand: Modular low-Impedance Direct-drive Anthropomorphic Sensing Hand',
    authors: [
      author('Alvin Zhu', true),
      author('Mingzhang Zhu', true),
      author('Beom Jun Kim', true),
      author('Quanyou Wang', true),
      author('Jose Victor S. H. Ramos', true),
      author('Dennis Hong')
    ],
    venue: 'arXiv',
    year: 2026,
    url: 'https://arxiv.org/abs/2607.14487',
    status: 'Preprint'
  },
  {
    id: 'dexexo',
    title: 'DexEXO: A Wearability-First Dexterous Exoskeleton for Operator-Agnostic Demonstration and Learning',
    authors: [
      author('Alvin Zhu', true),
      author('Mingzhang Zhu', true),
      author('Beom Jun Kim'),
      author('Jose Victor S. H. Ramos'),
      author('Yike Shi'),
      author('Yufeng Wu'),
      author('Raayan Dhar'),
      author('Fuyi Yang'),
      author('Ruochen Hou'),
      author('Hanzhang Fang'),
      author('Quanyou Wang'),
      author('Yuchen Cui'),
      author('Dennis W. Hong')
    ],
    venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
    year: 2026,
    url: 'https://arxiv.org/abs/2603.17323',
    status: 'Accepted'
  },
  {
    id: 'whed',
    title: 'WHED: A Wearable Hand Exoskeleton for Natural, High-Quality Demonstration Collection',
    authors: [
      author('Mingzhang Zhu', true),
      author('Alvin Zhu', true),
      author('Jose Victor S. H. Ramos'),
      author('Beom Jun Kim'),
      author('Yike Shi'),
      author('Yufeng Wu'),
      author('Ruochen Hou'),
      author('Quanyou Wang'),
      author('Eric Song'),
      author('Tony Fan'),
      author('Yuchen Cui'),
      author('Dennis W. Hong')
    ],
    venue: 'arXiv',
    year: 2026,
    url: 'https://arxiv.org/abs/2602.17908',
    status: 'Withdrawn preprint'
  },
  {
    id: 'humanoid-soccer-system',
    title: 'A Hierarchical, Model-Based System for High-Performance Humanoid Soccer',
    authors: [
      author('Quanyou Wang', true),
      author('Mingzhang Zhu', true),
      author('Ruochen Hou'),
      author('Kay Gillespie'),
      author('Alvin Zhu'),
      author('Shiqi Wang'),
      author('Yicheng Wang'),
      author('Gabriel I. Fernandez'),
      author('Yeting Liu'),
      author('Colin Togashi'),
      author('Hyunwoo Nam'),
      author('Aditya Navghare'),
      author('Alex Xu'),
      author('Taoyuanmin Zhu'),
      author('Min Sung Ahn'),
      author('Arturo Flores Alvarez'),
      author('Justin Quan'),
      author('Ethan Hong'),
      author('Dennis W. Hong')
    ],
    venue: 'Advanced Intelligent Systems',
    year: 2026,
    url: 'https://doi.org/10.1002/aisy.70594'
  },
  {
    id: 'humanoid-localization',
    title: 'Fast and Robust Localization for Humanoid Soccer Robot via Iterative Landmark Matching',
    authors: [
      author('Ruochen Hou'),
      author('Mingzhang Zhu'),
      author('Hyunwoo Nam'),
      author('Gabriel I. Fernandez'),
      author('Dennis W. Hong')
    ],
    venue: 'International Conference on Ubiquitous Robots (UR)',
    year: 2026,
    url: 'https://doi.org/10.1109/UR69537.2026.11626739'
  },
  {
    id: 'kid-cosmo',
    title: 'From Screen to Stage: Kid Cosmo, A Life-Like, Torque-Controlled Humanoid for Entertainment Robotics',
    authors: [
      author('Havel Liu', true),
      author('Mingzhang Zhu', true),
      author('Arturo Moises Flores Alvarez'),
      author('Yuan Hung Lo'),
      author('Conrad Ku'),
      author('Federico Parres'),
      author('Justin Quan'),
      author('Colin Togashi'),
      author('Aditya Navghare'),
      author('Quanyou Wang'),
      author('Dennis W. Hong')
    ],
    venue: 'IEEE-RAS International Conference on Humanoid Robots (Humanoids)',
    year: 2025,
    url: 'https://doi.org/10.1109/Humanoids65713.2025.11203026'
  },
  {
    id: 'humanoid-navigation',
    title: 'Model Predictive Control with Visibility Graphs for Humanoid Path Planning and Tracking Against Adversarial Opponents',
    authors: [
      author('Ruochen Hou'),
      author('Gabriel I. Fernandez'),
      author('Mingzhang Zhu'),
      author('Dennis W. Hong')
    ],
    venue: 'IEEE International Conference on Robotics and Automation (ICRA)',
    year: 2025,
    url: 'https://doi.org/10.1109/ICRA55743.2025.11128033'
  },
  {
    id: 'robocup-champions-guide',
    title: 'RoboCup 2024 Adult-Sized Humanoid Champions Guide for Hardware, Vision, and Strategy',
    authors: [
      author('Gabriel I. Fernandez'),
      author('Yeting Liu'),
      author('Colin Togashi'),
      author('Kyle Gillespie'),
      author('Alvin Zhu'),
      author('Quanyou Wang'),
      author('Yicheng Wang'),
      author('Hyunwoo Nam'),
      author('Shiqi Wang'),
      author('Ruochen Hou'),
      author('Mingzhang Zhu'),
      author('Aditya Navghare'),
      author('Alex Xu'),
      author('Taoyuanmin Zhu'),
      author('Min Sung Ahn'),
      author('Arturo Flores Alvarez'),
      author('Justin Quan'),
      author('Ethan Hong'),
      author('Dennis W. Hong')
    ],
    venue: 'RoboCup 2024: Robot World Cup XXVII, Lecture Notes in Computer Science, Springer',
    year: 2025,
    url: 'https://doi.org/10.1007/978-3-031-85859-8_43'
  },
  {
    id: 'eewoc-remar',
    title: 'Re-Examining Climbing Robots: Design and Performance of a Lightweight, Low-Cost Robot with a Highly Extendable Limb',
    authors: [
      author('Justin Quan'),
      author('Mingzhang Zhu'),
      author('Dennis Hong')
    ],
    venue: 'International Conference on Reconfigurable Mechanisms and Robots (ReMAR)',
    year: 2024,
    url: 'https://doi.org/10.1109/ReMAR61031.2024.10619924'
  },
  {
    id: 'eewoc-idetc',
    title: 'A Lightweight Mobile Robot for Climbing Steel Structures With an Extending and Bending Tape Spring Limb',
    authors: [
      author('Justin Quan'),
      author('Mingzhang Zhu'),
      author('Dennis Hong')
    ],
    venue: 'ASME International Design Engineering Technical Conferences and Computers and Information in Engineering Conference (IDETC-CIE)',
    year: 2023,
    url: 'https://doi.org/10.1115/DETC2023-115048'
  },
  {
    id: 'optical-fiber-coupling',
    title: 'Optical Fiber Coupling System for Steerable Endoscopic Instruments',
    authors: [
      author('Mingzhang Zhu'),
      author('Yao Shen'),
      author('Alex J. Chiluisa'),
      author('Jialin Song'),
      author('Loris Fichera'),
      author('Yuxiang Liu')
    ],
    venue: 'Annual International Conference of the IEEE Engineering in Medicine & Biology Society (EMBC)',
    year: 2021,
    url: 'https://doi.org/10.1109/EMBC46164.2021.9629658'
  }
];
