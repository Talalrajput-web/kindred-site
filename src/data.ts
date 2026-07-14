import { Project, Organization, User, Contribution } from './types';

export const mockUser: User = {
  name: 'Sarah Jenkins',
  email: 'sarah.jenkins@impact.org',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqkZoCajPd_G3y6w2YKp2ZgB2Bz2_VRCd5TlYoLz-I-yntX0zGShKis2yNW6j3OuJnfglW5nleCPQJfu4hfOIlUufkPDKOaUTDGvXchkjjyoQn9GZGRYP4KSZZIMs78tenRgHvEmuWXMbVDT0JHb5iDKGQyAonNeuPV6qhe2B4yjyvsDwf4sGmsR5Q5u2QIx57xsf2-CQAxMPet17M7wq0c2owC5ZLwRKX3xsHsCAJpkFUbDPGqRfHEQ',
  verificationLevel: 'Gold',
  impactLives: 12,
  totalDonated: 1420,
  recurringDonations: 3,
};

export const mockOrg: Organization = {
  id: 'amazon-watch',
  name: 'Amazon Watch Initiative',
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvrrytExK0ui02ZsX2WtTr-VYIlKodjZCNh-N96ICkaP4551yA6dv5twE5OIq3xSbwHLuvhmEBDH_M1J-fWhJ73gezupfJE_KhEa0KaDgptVsY-AyA8xMUv0TDXCSnJzxGYUViA5yqCB_c0VPnAxqYJMGOLIIZvvGyPU-0KcQ3eSRusv0hG10JKL5-dXsPAMAA5_HL198KV-JA9H0FW1t5Isa4rQAZ4eknWstbUjMTihRVE8YGLGbFUg',
  bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6LHTis-BmZsTxWYbr_tkYy5k8KMa6_82X4PyoH_eBziFFBzP6iZ00r3vxcnGI6ZPkfLgHK1XU2UZ1CTHJi2T-LvKZvEqgH-LIVpwI1VtA151bKZNQBAv1OAq0S1hWDQJRKyfUcXa_gRgyJGTSxCXCTxvYOGECioV2xcWmwevPfclhvO0QsLMtbxMbrI73FzL_kWxWlnyhalwKNMDLj5fjZl2BuTQriGz0URzl2mAjaRULAMWl4OGRLg',
  rating: '4.9/5 Trust Score',
  verified: true,
  followers: 12400,
  description: 'Amazon Watch Initiative is dedicated to protecting the rainforest and defending the rights, lives, and territories of Indigenous peoples. Through radical transparency and direct funding, we ensure 95%+ of all received funds go straight to Indigenous field units.',
  mission: 'To preserve the Amazon Basin biodiversity and support its traditional guardians through technology-enabled transparent resource pooling, forest surveillance networks, and micro-grants for community-led agroforestry restoration.',
  impactStats: [
    { label: 'Hectares Protected', value: '45,200 ha' },
    { label: 'Communities Funded', value: '34 Units' },
    { label: 'Active Seedbanks', value: '18 Facilities' },
    { label: 'Verified Audits', value: '100% On-chain' }
  ],
  verifiedCredentials: [
    'IRS 501(c)(3) Nonprofit Status - Certified 2014',
    'Global Transparency Standard - Tier 1 Gold Certified',
    'Rainforest Alliance Strategic Partner',
    'Indigenous Rights Coalition Registered Observer'
  ]
};

export const mockProjects: Project[] = [
  {
    id: 'roots-of-resilience',
    title: 'Roots of Resilience: Restoring the Heart of the Amazon',
    organization: 'Amazon Watch Initiative',
    orgId: 'amazon-watch',
    description: 'Empower Indigenous communities to reforest 12,000 hectares of degraded land in the Xingu basin through native seedbanks and drone-assisted micro-planting.',
    longStory: 'The Amazon Rainforest is reaching a critical tipping point. Through "Roots of Resilience," we are partnering directly with the Kayapó and Yawanawá communities in the Xingu basin to restore lost biodiversity. This is not just a tree-planting project: we are building permanent regional seedbanks managed by Indigenous women, training young leaders in drone-assisted forest surveillance, and providing sustainable livelihoods through community-led agroforestry.\n\nOur radical transparency framework means every donor gets access to satellite verification maps. Your dollars buy bags of native seeds, GPS tracking bands, field rations, and drone repair equipment. Everything is logged publicly on our impact tracker dashboard, so you know exactly where your funds are going.',
    category: 'Environment',
    location: 'Xingu Basin, Brazil',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6LHTis-BmZsTxWYbr_tkYy5k8KMa6_82X4PyoH_eBziFFBzP6iZ00r3vxcnGI6ZPkfLgHK1XU2UZ1CTHJi2T-LvKZvEqgH-LIVpwI1VtA151bKZNQBAv1OAq0S1hWDQJRKyfUcXa_gRgyJGTSxCXCTxvYOGECioV2xcWmwevPfclhvO0QsLMtbxMbrI73FzL_kWxWlnyhalwKNMDLj5fjZl2BuTQriGz0URzl2mAjaRULAMWl4OGRLg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSM6TzcIP-ECbKGXHldf7_P2-1DX-PCwaQtkeBrWmiFLLIo9pWfhHf5SeA3NURgMj31L-_HRdS2aPm6hexP5z3W8kiOiNWJx0S_3lqhX_p2L9P-fS01yBADaxMFIYZgXe5CdYse2Bo_gmKzqaeRLiV_ELqXnYAAEwSUHMidu8G4q0xY3eD31G7PivFl0Fs5zJDWCVwTLy5vKF_yROwnIBqzR3lCR-vEio-cCfTiWloMCK0FW0d63dm-w',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBeEL6F4nM6_UYM1-76yqz-FeNC-vsesWrvPYNDqbFt-OO8PUiawU1c5PLJmjossWP9628MBCpo1icUfXU3_EF_ijSh30CZQQcuy9X_T7bWu0OseobvvctrSoi270_fzyu8pfcFFdM1f9cUBor1ivd9untX-dS5pe7nNn44L3mp_mPVhbicJHFdoapLQiK3schwatzkacWMmo3Mol3I9yxbWQrR2ItdFhVw_mcuWaONjO6oM7HC0JftiA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQKEqoq5tYk0cjAgdiLZVx2AF8QczV3sk0jtl8THqSQ9wMpKRZx24yHv70eSw_smLZUjXYk8LAs780W5ShdYvKdQGdxgcRI2xReQ5F_2TBtQs0XH5DqPQzgf4LF1abYaNslCuwJmgX0a_IlUajlhee7biTx4dejvHDd8fncyJxkKwACLBLKu8cOvgK3BrUK-0KtKsqPuscmt5JZ_ljw2LaIEi1d9EVJjBAxPKEb408oPXa2QXt4z6BqQ'
    ],
    raised: 82450,
    goal: 120000,
    donorsCount: 843,
    daysLeft: 14,
    urgency: 'high',
    updates: [
      {
        id: 'u1',
        date: 'Oct 14, 2026',
        title: 'Seedbank Facility Alpha Fully Operational',
        content: 'We are thrilled to report that Seedbank Alpha has completed construction in the Kayapó village territory. Thanks to the initial $45,000 cleared, we purchased heavy-duty airtight storage drums, dehydrators, and cataloging tablets. Indigenous catalogers have already registered over 450,000 seeds across 22 native tree species. High resolution satellite photos are now accessible in the Transparency tab.',
        author: 'Chief Txucarramãe, Kayapó Conservationist',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeEL6F4nM6_UYM1-76yqz-FeNC-vsesWrvPYNDqbFt-OO8PUiawU1c5PLJmjossWP9628MBCpo1icUfXU3_EF_ijSh30CZQQcuy9X_T7bWu0OseobvvctrSoi270_fzyu8pfcFFdM1f9cUBor1ivd9untX-dS5pe7nNn44L3mp_mPVhbicJHFdoapLQiK3schwatzkacWMmo3Mol3I9yxbWQrR2ItdFhVw_mcuWaONjO6oM7HC0JftiA'
      },
      {
        id: 'u2',
        date: 'Oct 02, 2026',
        title: 'Drone Pilot Training Commences',
        content: 'Our team successfully delivered 3 telemetry drone units to local rangers. Young leaders have completed classroom sessions covering flight dynamics, thermal imaging, and autonomous mapping grids. These drones will spot illegal logging incursions and verify our sapling growth rates.',
        author: 'Isabella Moreno, Project Coordinator',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQKEqoq5tYk0cjAgdiLZVx2AF8QczV3sk0jtl8THqSQ9wMpKRZx24yHv70eSw_smLZUjXYk8LAs780W5ShdYvKdQGdxgcRI2xReQ5F_2TBtQs0XH5DqPQzgf4LF1abYaNslCuwJmgX0a_IlUajlhee7biTx4dejvHDd8fncyJxkKwACLBLKu8cOvgK3BrUK-0KtKsqPuscmt5JZ_ljw2LaIEi1d9EVJjBAxPKEb408oPXa2QXt4z6BqQ'
      }
    ],
    comments: [
      {
        id: 'c1',
        authorName: 'Sarah Jenkins',
        authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqkZoCajPd_G3y6w2YKp2ZgB2Bz2_VRCd5TlYoLz-I-yntX0zGShKis2yNW6j3OuJnfglW5nleCPQJfu4hfOIlUufkPDKOaUTDGvXchkjjyoQn9GZGRYP4KSZZIMs78tenRgHvEmuWXMbVDT0JHb5iDKGQyAonNeuPV6qhe2B4yjyvsDwf4sGmsR5Q5u2QIx57xsf2-CQAxMPet17M7wq0c2owC5ZLwRKX3xsHsCAJpkFUbDPGqRfHEQ',
        content: 'I am so inspired by the drone-surveillance aspect of this program. Knowing my donation helps Indigenous youths protect their ancestors\' land directly is incredible. The updates are incredibly detailed!',
        date: 'Oct 12, 2026',
        amount: 250
      },
      {
        id: 'c2',
        authorName: 'Marcus Vance',
        authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWrg47GQF_ZHytBsk6NxD3_XmhA3sp9_hkdQ8NAc-rqlVNTVkGgbqhK-YBEgvaC1owWNnid4gghzc8K6z-Xq1PRkoW-RFCPJCF1WX348PjanEHu3z4aOQsdml05qWwQf9Qa_xdZdu_l_EFlRRIFUpjaKGpcZlENmF0LVp15AMpCYgHbrUA1agBxxUG36FlwMUaYor_2yyiOMIImeb0JQeeJsu43Q5qOtzKNqkIo8q53bOWxltmDoQe6g',
        content: 'The satellite verification link is stellar! I just checked the GPS coordinates of the newly replanted zone and compared it to last month\'s NDVI data. Incredible transparency.',
        date: 'Oct 08, 2026',
        amount: 500
      },
      {
        id: 'c3',
        authorName: 'Evelyn Parker',
        authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6ybaSWDu3icaYkoGsGaX5S7dl57_3h1azTokjGlgg1o6O2rjd9Z1alVILIg6sDtskH3TnL-jD2v_e6XTIQkYAO0GtsVg2oV9F3XE4GbZ-7NE8ZHZlnCiLXJsrgFbwbllL8VHcpsV5iYVzRoag3i0WXudArPdrzTeO_S_Ao0_5DODCocFvPy5ewSwDogFlUc8AOeFER15GjiV2kDYWs8REE8n6ux42E5uxiVDEV7uhBLoFpB5K90c3rg',
        content: 'This project sets a new gold standard for crowdfunding. Truly powerful model.',
        date: 'Sep 28, 2026',
        amount: 100
      }
    ],
    transparencyReport: {
      verified: true,
      breakdown: [
        { item: 'Indigenous Seed Gathering & Nursery Wages', percentage: 42, amount: 34629 },
        { item: 'Telemetry Drones & Training Equipment', percentage: 28, amount: 23086 },
        { item: 'Field Rations & Navigation Gear', percentage: 15, amount: 12367 },
        { item: 'Local Operations & Logistics Coordinator', percentage: 10, amount: 8245 },
        { item: 'Kindred Platform Verification Fees', percentage: 5, amount: 4123 }
      ],
      documents: [
        { name: 'Xingu_Agroforestry_Audit_Q3_2026.pdf', url: '#', size: '4.2 MB' },
        { name: 'Drone_Telemetry_Specs_Kayapo.pdf', url: '#', size: '1.8 MB' },
        { name: 'IRS_Nonprofit_Tax_Return_2025.pdf', url: '#', size: '12.4 MB' }
      ]
    }
  },
  {
    id: 'safe-havens-shelter',
    title: 'Safe Havens: Expanding Housing Access & Medical Care',
    organization: 'City Shelter Network',
    orgId: 'city-shelter',
    description: 'Providing immediate warm shelter beds, clean hot meals, and emergency mental health counseling to over 350 unhoused individuals.',
    longStory: 'Winter is fast approaching, and hundreds of families are facing freezing conditions on city streets. Safe Havens is expanding our transitional housing facilities to add 80 low-barrier heated sleep pods, a commercial-grade kitchen to serve 1,000 meals daily, and a co-located clinic for emergency medical and mental health counseling. We operate with zero administrative bloating and track every dollar spent on thermal blankets, ingredient invoices, and registered nurse shifts in real-time.',
    category: 'Humanitarian',
    location: 'Chicago, IL',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxGKG9iLtmchTvdZRiKLNgAdVfGifnG-f3nlupOdSOf-Tzd5ySW_RGqjEhiKkO0L08lsL-pBWZ6xDoP5n40oeGkdwbx82BI-lHBF-oRRHjWiRBzdkR8wx6lCG6c4oUPA6F3Erfh4LrhzV-q6CZaC04wu8SsbnrTKrcn-GOY2_C_1bSTX_4IDAl2rNNfX1osLJxq1qIAN4RseWnbQVT_aYxkHeobbhdU-DwkEHlilBqlGhuDGj_LasuBw',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5myLf08wNxIzjiNADoDYUJWq0O2n8Ypx-aM0rLKrapg2LXINJaWEI7W2MnWsraZUXu9UeI5suuaPE2qvyhdtQNdPeZTpeLPGUaC09IfrUfNRk4WrEnzP2sB5u4MyOslX3jWyUryLbZ3efC_9N6NqjvDbDEoZqOWizag1NvBM2A7qBgPbloPT86W6tiZ20oljpCvF8POP9WOGXCUz9b_jkIAU1l5Sfzlsxbz0vQoSy2s06JnkJYd0Myw'
    ],
    raised: 58900,
    goal: 75000,
    donorsCount: 412,
    daysLeft: 8,
    urgency: 'critical',
    updates: [
      {
        id: 'u3',
        date: 'Oct 05, 2026',
        title: 'Thermal Pod Prefabrication Complete',
        content: 'We have received delivery of 40 individual privacy sleeping pods. Assembly is underway in our central gym. These pods include integrated electrical charging, ventilation, and memory foam bedding purchased directly from our transparent budget.',
        author: 'Daniel Cross, Director',
      }
    ],
    comments: [
      {
        id: 'c4',
        authorName: 'Liam O\'Connor',
        authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqkZoCajPd_G3y6w2YKp2ZgB2Bz2_VRCd5TlYoLz-I-yntX0zGShKis2yNW6j3OuJnfglW5nleCPQJfu4hfOIlUufkPDKOaUTDGvXchkjjyoQn9GZGRYP4KSZZIMs78tenRgHvEmuWXMbVDT0JHb5iDKGQyAonNeuPV6qhe2B4yjyvsDwf4sGmsR5Q5u2QIx57xsf2-CQAxMPet17M7wq0c2owC5ZLwRKX3xsHsCAJpkFUbDPGqRfHEQ',
        content: 'Thank you for giving our community shelter and warmth. I can see the exact breakdown of clinic supply invoices!',
        date: 'Oct 02, 2026',
        amount: 150
      }
    ],
    transparencyReport: {
      verified: true,
      breakdown: [
        { item: 'Prefabricated Sleeping Pods', percentage: 55, amount: 32395 },
        { item: 'Kitchen Ingredients & Supplier Invoices', percentage: 25, amount: 14725 },
        { item: 'Registered Nurse & Therapist Stipends', percentage: 15, amount: 8835 },
        { item: 'Kindred Platform Audit & Support Fees', percentage: 5, amount: 2945 }
      ],
      documents: [
        { name: 'CityShelter_Vendor_Receipts_Oct.pdf', url: '#', size: '1.4 MB' }
      ]
    }
  },
  {
    id: 'empowering-future-coding',
    title: 'Future Tech: Bringing Digital Classrooms to Rural Schools',
    organization: 'Global Education Project',
    orgId: 'global-edu',
    description: 'Providing 20 rural elementary schools in developing regions with solar-powered tablet hubs, high-speed internet satellite arrays, and interactive STEM software.',
    longStory: 'In isolated mountain communities, children are cut off from the global knowledge economy. We are delivering modular STEM education kits. Each kit consists of 15 rugged Android tablets loaded with localized, interactive curriculum software, custom solar-charging cases, and a low-earth-orbit satellite receiver. Every solar panel serial number and software download statistic is synchronized to the project page for ultimate visibility.',
    category: 'Education',
    location: 'Oaxaca, Mexico',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQpLyG3LfgHIex4wZ-2w3rQSAxytiSf3nrmiuvXbcmhRyXpK5AwZd2dETcuF0gBNYCQ9RMv407nL-yvTiBK5SyTRtfNDvVdsNFYINZLn5DFfaYMUSCl9dSIOA11W72wxRxMqIjVA1jYWXccOMhyf87RXgT5-S6BDPs-VUhX1oEULldC-x7vk7ea_GD3lRoK2K96WeGbJdThMUKffZp4enqHixyZTaRoIIr9rFE3ZzQZDjh4SyZh6wJaQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB6ybaSWDu3icaYkoGsGaX5S7dl57_3h1azTokjGlgg1o6O2rjd9Z1alVILIg6sDtskH3TnL-jD2v_e6XTIQkYAO0GtsVg2oV9F3XE4GbZ-7NE8ZHZlnCiLXJsrgFbwbllL8VHcpsV5iYVzRoag3i0WXudArPdrzTeO_S_Ao0_5DODCocFvPy5ewSwDogFlUc8AOeFER15GjiV2kDYWs8REE8n6ux42E5uxiVDEV7uhBLoFpB5K90c3rg'
    ],
    raised: 34100,
    goal: 50000,
    donorsCount: 298,
    daysLeft: 22,
    urgency: 'medium',
    updates: [
      {
        id: 'u4',
        date: 'Sep 25, 2026',
        title: 'Oaxaca Pilot Hub Launches',
        content: 'Classroom Beta in San José has received its 15 solar tablets. The solar array was installed in under four hours by community volunteers. The local teacher reports 100% attendance this week as kids are eager to play the math algorithms.',
        author: 'Elena Rostova, STEM Lead',
      }
    ],
    comments: [
      {
        id: 'c5',
        authorName: 'Aris Thorne',
        authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqkZoCajPd_G3y6w2YKp2ZgB2Bz2_VRCd5TlYoLz-I-yntX0zGShKis2yNW6j3OuJnfglW5nleCPQJfu4hfOIlUufkPDKOaUTDGvXchkjjyoQn9GZGRYP4KSZZIMs78tenRgHvEmuWXMbVDT0JHb5iDKGQyAonNeuPV6qhe2B4yjyvsDwf4sGmsR5Q5u2QIx57xsf2-CQAxMPet17M7wq0c2owC5ZLwRKX3xsHsCAJpkFUbDPGqRfHEQ',
        content: 'Solar-powered tablets in high-altitude environments is a stellar concept. Very happy to see active student logs.',
        date: 'Sep 27, 2026',
        amount: 300
      }
    ],
    transparencyReport: {
      verified: true,
      breakdown: [
        { item: 'Rugged STEM Tablets (300 units)', percentage: 60, amount: 20460 },
        { item: 'Solar Cases & Satellite Mounts', percentage: 22, amount: 7502 },
        { item: 'Curriculum Translation & STEM Licensing', percentage: 13, amount: 4433 },
        { item: 'Kindred Platform Audit & Support Fees', percentage: 5, amount: 1705 }
      ],
      documents: [
        { name: 'Oaxaca_Tablet_Hardware_PurchaseOrder.pdf', url: '#', size: '2.1 MB' }
      ]
    }
  },
  {
    id: 'clean-water-tribes',
    title: 'Clean Water Commons: Gravity Filtration Systems',
    organization: 'H2O Collective',
    orgId: 'h2o-collective',
    description: 'Installing passive, double-membrane gravity filtration stations in 15 river communities experiencing copper runoff from mining.',
    longStory: 'Heavy metals shouldn\'t compromise life. H2O Collective is deploying heavy-duty, zero-electricity passive filtration towers. Each tower filters up to 20,000 liters of pristine drinking water daily using volcanic media and double-pore nano-filters. These systems require minimal maintenance, which will be managed by trained local water wardens. Our ledger details plumbing bills, freight shipping fees, and regional water testing reports.',
    category: 'Water Sanitation',
    location: 'Chocó, Colombia',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHLHMIvdZeJIsct1e6Tq9qGVdpLba3B1reHj5I_5jbA4Oni0eKRU08OjMRmhkxX5FiXOkbZxSYwA-pXkfUG8a3HdfNTOX8qKgTTDN4wNKV-mpeYea7gKXvN-8aLApc66KJmqxw9_TnfAU2CzE8uhiUnNKSbayrCQDnKMlSmuZ5ecPuRajZsIpSPXv0fPcRuqmgbbR6dIA-AZoa6ZkzgLkwFTXbkVwrhd9sFWiDIk3fEUive_SNZWNEUQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHLHMIvdZeJIsct1e6Tq9qGVdpLba3B1reHj5I_5jbA4Oni0eKRU08OjMRmhkxX5FiXOkbZxSYwA-pXkfUG8a3HdfNTOX8qKgTTDN4wNKV-mpeYea7gKXvN-8aLApc66KJmqxw9_TnfAU2CzE8uhiUnNKSbayrCQDnKMlSmuZ5ecPuRajZsIpSPXv0fPcRuqmgbbR6dIA-AZoa6ZkzgLkwFTXbkVwrhd9sFWiDIk3fEUive_SNZWNEUQ'
    ],
    raised: 21500,
    goal: 30000,
    donorsCount: 182,
    daysLeft: 19,
    urgency: 'high',
    updates: [
      {
        id: 'u5',
        date: 'Sep 12, 2026',
        title: 'Volcanic Media Batch Authenticated',
        content: 'We completed safety-grading on the heavy metal absorption characteristics of our Colombian media. The filters successfully scrubbed out 99.4% of dissolved copper ions in bench tests. Transit of components to Quibdó has launched.',
        author: 'Dr. Lucas Sola, Principal Hydrologist',
      }
    ],
    comments: [
      {
        id: 'c6',
        authorName: 'Jean De Silva',
        authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqkZoCajPd_G3y6w2YKp2ZgB2Bz2_VRCd5TlYoLz-I-yntX0zGShKis2yNW6j3OuJnfglW5nleCPQJfu4hfOIlUufkPDKOaUTDGvXchkjjyoQn9GZGRYP4KSZZIMs78tenRgHvEmuWXMbVDT0JHb5iDKGQyAonNeuPV6qhe2B4yjyvsDwf4sGmsR5Q5u2QIx57xsf2-CQAxMPet17M7wq0c2owC5ZLwRKX3xsHsCAJpkFUbDPGqRfHEQ',
        content: 'Colombia\'s river communities deserve safety and transparency. Excellent work publishing raw heavy metal lab reports.',
        date: 'Sep 14, 2026',
        amount: 80
      }
    ],
    transparencyReport: {
      verified: true,
      breakdown: [
        { item: 'Gravity Tower Hardware & Plumbing Assemblies', percentage: 50, amount: 10750 },
        { item: 'Double-Pore Volcanic Media Importation', percentage: 25, amount: 5375 },
        { item: 'Local Hydrology Lab Assessments', percentage: 20, amount: 4300 },
        { item: 'Kindred Platform Audit & Support Fees', percentage: 5, amount: 1075 }
      ],
      documents: [
        { name: 'Choco_Water_Assay_Report_Copper.pdf', url: '#', size: '3.1 MB' }
      ]
    }
  }
];

export const mockContributions: Contribution[] = [
  {
    id: 'tx-001',
    projectTitle: 'Roots of Resilience: Restoring the Heart of the Amazon',
    projectId: 'roots-of-resilience',
    amount: 250,
    date: 'Oct 12, 2026',
    status: 'Completed',
    receiptUrl: '#',
  },
  {
    id: 'tx-002',
    projectTitle: 'Safe Havens: Expanding Housing Access & Medical Care',
    projectId: 'safe-havens-shelter',
    amount: 500,
    date: 'Sep 29, 2026',
    status: 'Completed',
    receiptUrl: '#',
  },
  {
    id: 'tx-003',
    projectTitle: 'Future Tech: Bringing Digital Classrooms to Rural Schools',
    projectId: 'empowering-future-coding',
    amount: 150,
    date: 'Aug 14, 2026',
    status: 'Completed',
    receiptUrl: '#',
  }
];

export const mockImpactMetrics = {
  treesPlanted: 340,
  mealsServed: 210,
  carbonOffset: '14.5 tons CO2e',
  studentsEquipped: 45,
};
