import { Project, TeamMember, Service, Testimonial, Stat } from '@/types'

// Company stats
export const stats: Stat[] = [
  { value: '150', label: 'Projects Completed', suffix: '+' },
  { value: '25', label: 'Years Combined Experience', suffix: '+' },
  { value: '98', label: 'Client Satisfaction', suffix: '%' },
  { value: '50', label: 'Industry Partners', suffix: '+' },
]

// Projects data
export const projects: Project[] = [
  {
    id: '1',
    title: 'Meridian Business Centre',
    slug: 'meridian-business-centre',
    category: 'commercial',
    location: 'Sydney CBD',
    year: '2024',
    description:
      'A landmark 12-storey commercial tower featuring sustainable design principles and state-of-the-art facilities. The building achieved a 5-star Green Star rating.',
    challenge:
      'Constructing in a tight CBD location with minimal disruption to surrounding businesses while meeting aggressive sustainability targets.',
    solution:
      'Implemented prefabricated construction methods and off-site manufacturing to reduce on-site time by 40%. Used innovative facade systems for thermal efficiency.',
    result:
      'Delivered 2 months ahead of schedule with zero lost-time injuries. The building now serves as a benchmark for sustainable commercial construction.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=1200&fit=crop&q=80',
        alt: 'Meridian Business Centre exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=1200&fit=crop&q=80',
        alt: 'Modern office lobby',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&h=1200&fit=crop&q=80',
        alt: 'Office workspace',
      },
    ],
    featured: true,
    specs: [
      { label: 'Size', value: '28,000 sqm' },
      { label: 'Floors', value: '12' },
      { label: 'Rating', value: '5 Star Green Star' },
    ],
  },
  {
    id: '2',
    title: 'Harbour View Medical Centre',
    slug: 'harbour-view-medical-centre',
    category: 'healthcare',
    location: 'Melbourne',
    year: '2024',
    description:
      'A state-of-the-art medical facility designed for patient comfort and operational efficiency, featuring the latest in healthcare technology integration.',
    challenge:
      'Meeting stringent healthcare compliance requirements while creating a welcoming, non-clinical atmosphere for patients.',
    solution:
      'Collaborated with healthcare specialists from day one. Integrated healing design principles with robust clinical infrastructure.',
    result:
      'Facility rated as one of the top patient-experience medical centres in Victoria within its first year of operation.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200',
        alt: 'Medical centre exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200',
        alt: 'Medical facility interior',
      },
    ],
    featured: true,
    specs: [
      { label: 'Size', value: '8,500 sqm' },
      { label: 'Consulting Rooms', value: '45' },
      { label: 'Operating Theatres', value: '6' },
    ],
  },
  {
    id: '3',
    title: 'Eastgate Retail Precinct',
    slug: 'eastgate-retail-precinct',
    category: 'retail',
    location: 'Brisbane',
    year: '2023',
    description:
      'A vibrant mixed-use retail development combining premium shopping with dining and entertainment, creating a destination experience.',
    challenge:
      'Integrating diverse retail requirements from anchor tenants to boutique stores while maintaining cohesive design language.',
    solution:
      'Developed flexible retail shells with standardised services but customisable finishes. Created distinct precincts within the larger development.',
    result:
      '95% leased within 6 months of completion. Foot traffic exceeded projections by 30% in the first year.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&fit=crop&q=80',
        alt: 'Retail precinct',
      },
      {
        url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&fit=crop&q=80',
        alt: 'Shopping interior',
      },
    ],
    featured: true,
    specs: [
      { label: 'GLA', value: '35,000 sqm' },
      { label: 'Retail Spaces', value: '120+' },
      { label: 'Parking', value: '2,000 bays' },
    ],
  },
  {
    id: '4',
    title: 'Phoenix Industrial Park',
    slug: 'phoenix-industrial-park',
    category: 'industrial',
    location: 'Western Sydney',
    year: '2023',
    description:
      'A modern logistics and warehousing complex designed for efficiency and scalability, serving major e-commerce and distribution clients.',
    challenge:
      'Creating flexible spaces that could accommodate diverse industrial operations from cold storage to high-bay warehousing.',
    solution:
      'Designed modular units with variable ceiling heights and adaptable loading configurations. Future-proofed with smart building technology.',
    result:
      'Fully occupied before completion. Tenants report 20% improvement in operational efficiency compared to previous facilities.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=1200&fit=crop&q=80',
        alt: 'Industrial warehouse exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&fit=crop&q=80',
        alt: 'Warehouse interior',
      },
    ],
    featured: false,
    specs: [
      { label: 'Total Area', value: '85,000 sqm' },
      { label: 'Units', value: '12' },
      { label: 'Dock Doors', value: '96' },
    ],
  },
  {
    id: '5',
    title: 'The Grand Hotel Renovation',
    slug: 'grand-hotel-renovation',
    category: 'hospitality',
    location: 'Gold Coast',
    year: '2024',
    description:
      'Complete refurbishment of a heritage-listed hotel, blending historical character with contemporary luxury and modern amenities.',
    challenge:
      'Preserving heritage elements while upgrading all systems and creating a competitive luxury offering.',
    solution:
      'Worked closely with heritage consultants. Used reversible construction methods where possible. Sourced period-appropriate materials.',
    result:
      'Hotel reopened to critical acclaim, winning multiple hospitality design awards. Occupancy rates increased by 40%.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200',
        alt: 'Luxury hotel exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200',
        alt: 'Hotel lobby',
      },
    ],
    featured: false,
    specs: [
      { label: 'Rooms', value: '180' },
      { label: 'Restaurants', value: '3' },
      { label: 'Conference Space', value: '2,500 sqm' },
    ],
  },
  {
    id: '6',
    title: 'Sunrise Learning Centre',
    slug: 'sunrise-learning-centre',
    category: 'education',
    location: 'Adelaide',
    year: '2023',
    description:
      'An innovative early learning centre designed to inspire curiosity and creativity, featuring indoor-outdoor learning spaces and sustainable design.',
    challenge:
      'Creating engaging, safe spaces for children while meeting strict regulatory requirements and environmental goals.',
    solution:
      'Engaged childhood education experts in design process. Used natural materials and biophilic design principles throughout.',
    result:
      'Facility became a model for early learning centre design, featured in multiple architecture publications.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200',
        alt: 'Learning centre exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200',
        alt: 'Classroom interior',
      },
    ],
    featured: false,
    specs: [
      { label: 'Capacity', value: '120 children' },
      { label: 'Indoor Area', value: '1,200 sqm' },
      { label: 'Outdoor Area', value: '800 sqm' },
    ],
  },
]

// Team members
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'David Anderson',
    role: 'Managing Director',
    bio: 'With over 20 years in commercial construction, David founded BDA Built with a vision to deliver exceptional quality and service. His hands-on approach and industry expertise drive our commitment to excellence.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    linkedin: '#',
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    bio: 'Sarah brings 15 years of project management experience to BDA Built. She oversees all operations, ensuring every project meets our exacting standards for quality, safety, and client satisfaction.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    linkedin: '#',
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Construction Manager',
    bio: "Michael's technical expertise and meticulous attention to detail ensure flawless execution on every project. He leads our site teams with a focus on innovation and continuous improvement.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    linkedin: '#',
  },
  {
    id: '4',
    name: 'Emma Roberts',
    role: 'Design Coordinator',
    bio: 'Emma bridges the gap between architectural vision and construction reality. Her collaborative approach ensures design intent is preserved while maintaining buildability and budget.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    linkedin: '#',
  },
]

// Services
export const services: Service[] = [
  {
    id: '1',
    title: 'Commercial Construction',
    slug: 'commercial-construction',
    description:
      'From office buildings to mixed-use developments, we deliver commercial spaces that inspire productivity and reflect your brand values.',
    icon: 'building',
    features: [
      'Office buildings',
      'Mixed-use developments',
      'Design and construct',
      'Project management',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
  },
  {
    id: '2',
    title: 'Childcare Centres',
    slug: 'childcare-centres',
    description:
      'Purpose-built early learning centres designed with children in mind, meeting all regulatory requirements while creating inspiring spaces.',
    icon: 'heart',
    features: [
      'New childcare facilities',
      'Indoor-outdoor play areas',
      'Regulatory compliance',
      'Safe, engaging environments',
    ],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
  },
  {
    id: '3',
    title: 'Luxury Apartments',
    slug: 'luxury-apartments',
    description:
      'Premium residential developments featuring high-end finishes and meticulous attention to detail that discerning buyers expect.',
    icon: 'home',
    features: [
      'Multi-storey apartments',
      'Boutique developments',
      'Premium finishes',
      'Smart home integration',
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
  },
  {
    id: '4',
    title: 'Commercial Fitouts',
    slug: 'commercial-fitouts',
    description:
      'Transforming existing spaces to meet evolving needs while minimising disruption to ongoing operations.',
    icon: 'refresh',
    features: [
      'Office fitouts',
      'Retail fitouts',
      'Restaurant fit-outs',
      'Workspace transformations',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
  },
  {
    id: '5',
    title: 'Residential Construction',
    slug: 'residential-construction',
    description:
      'Custom homes and residential projects built with craftsmanship and care, turning your vision into reality.',
    icon: 'home',
    features: [
      'Custom homes',
      'Townhouses',
      'Renovations & extensions',
      'Knockdown rebuilds',
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  },
  {
    id: '6',
    title: 'Factories & Warehouses',
    slug: 'factories-warehouses',
    description:
      'Purpose-built industrial facilities designed for operational efficiency, scalability, and future adaptability.',
    icon: 'warehouse',
    features: [
      'Warehouses',
      'Manufacturing facilities',
      'Distribution centres',
      'Industrial units',
    ],
    image:
      'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&fit=crop&q=80',
  },
]

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'BDA Built delivered our headquarters on time and on budget. Their attention to detail and proactive communication made the entire process seamless.',
    author: 'James Wilson',
    role: 'CEO',
    company: 'Meridian Group',
  },
  {
    id: '2',
    quote:
      "The team's expertise in healthcare construction was evident from day one. They understood our unique requirements and delivered a facility that exceeds our expectations.",
    author: 'Dr. Lisa Chang',
    role: 'Medical Director',
    company: 'Harbour View Medical',
  },
  {
    id: '3',
    quote:
      "Working with BDA Built was a partnership in the truest sense. They brought solutions to challenges we hadn't even anticipated.",
    author: 'Robert Martinez',
    role: 'Development Manager',
    company: 'Eastgate Properties',
  },
]

// Process steps
export const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We begin by understanding your vision, requirements, and constraints. Our team conducts thorough site assessments and feasibility studies.',
    details: [
      'Initial briefing and visioning session',
      'Site assessment and due diligence',
      'Budget and timeline discussion',
      'Feasibility analysis',
    ],
  },
  {
    number: '02',
    title: 'Planning & Design',
    description:
      'Our design coordination team works with architects and consultants to develop detailed plans that balance aesthetics, functionality, and budget.',
    details: [
      'Design development and coordination',
      'Value engineering',
      'Regulatory approvals',
      'Detailed programming',
    ],
  },
  {
    number: '03',
    title: 'Pre-Construction',
    description:
      'Meticulous preparation ensures smooth execution. We finalise contracts, mobilise teams, and establish robust project controls.',
    details: [
      'Contract finalisation',
      'Procurement strategy',
      'Team mobilisation',
      'Risk management planning',
    ],
  },
  {
    number: '04',
    title: 'Construction',
    description:
      'Our experienced teams bring your project to life with precision and care, maintaining the highest standards of safety and quality.',
    details: [
      'Site establishment',
      'Quality assurance protocols',
      'Progress reporting',
      'Stakeholder coordination',
    ],
  },
  {
    number: '05',
    title: 'Completion',
    description:
      'We ensure every detail is perfect before handover, providing comprehensive documentation and ongoing support.',
    details: [
      'Quality inspections',
      'Commissioning',
      'Documentation and training',
      'Defects liability management',
    ],
  },
]

// Navigation
export const navigation = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
]

// Company values
export const values = [
  {
    title: 'Craftsmanship',
    description:
      'We take pride in the quality of our work. Every detail matters, from the foundation to the finishing touches.',
    icon: 'hammer',
  },
  {
    title: 'Integrity',
    description:
      'Honest communication, transparent pricing, and ethical practices form the foundation of every relationship we build.',
    icon: 'shield',
  },
  {
    title: 'Excellence',
    description:
      "We continuously push the boundaries of what's possible, embracing innovation while respecting proven methods.",
    icon: 'award',
  },
  {
    title: 'Partnership',
    description:
      'We see ourselves as an extension of your team, invested in your success from the first meeting to project completion.',
    icon: 'handshake',
  },
]
