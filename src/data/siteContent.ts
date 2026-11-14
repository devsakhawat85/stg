export interface SubService {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  quote?: {
    text: string;
    author: string;
  };
  image?: string;
  imageAlt?: string;
}

export interface PracticeArea {
  number: string;
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  subServices: SubService[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export const SITE_ASSETS = {
  logo: '/se-assets/se_704f365143.png',
  heroAtrium: '/se-assets/se_6350365cd9.jpg',
  lynnPortrait: '/se-assets/se_2247476393.jpg',
  behavioralRisk: '/se-assets/se_de63c4fda2.jpg',
  executiveWalk: '/se-assets/se_6526fb72a0.jpg',
  brassCompass: '/se-assets/se_9b1abed9b5.jpg',
  facilitator: '/se-assets/se_601b7f3685.jpg',
  orgCircle: '/se-assets/se_d6352c396f.jpg',
  conflictChess: '/se-assets/se_5f89fa9672.jpg',
  skyBanner: '/se-assets/se_2d741126ce.jpg',
};

export const BRAND_INFO = {
  name: 'Strategic Evolution',
  legalName: 'Strategic Evolution, LLC',
  tagline: 'Empowering your human capital to drive ROI',
  triad: ['Engage', 'Enhance', 'Empower'] as const,
  heroHeadline: 'Empowering your human capital to drive ROI.',
  heroSubcopy:
    "We partner with our Clients to effectively and efficiently accomplish their organization's goals.",
  introHeading: 'An organization is only as good as the people who are a part of it.',
  introBody: [
    "Strategic Evolution consults with our client organizations to strategize, develop and implement programs that will support the organization's personnel while strengthening business processes and culture.",
    'As your organization experiences change, we can strategically help you to evolve. Whether Behavioral Risk and Violence Prevention, Executive and Organizational Development, Mergers and Acquisitions or Trainings, we will assist you in driving forward efficiently and always with an eye to the future.',
  ],
  missionStatement:
    "Dedicated to the strategic evolution of your people by engaging and empowering them in an ethical and positive manner to best carry out each organization's vision. We will partner with our clients using results driven strategies that are in alignment with each organization's evolution.",
  contact: {
    address: '1200 Agora Drive, Suite 176, Bel Air, MD 21014',
    phone: '410-937-5820',
    phoneHref: 'tel:4109375820',
    fax: '410-838-9520',
    prompt: 'Please send any questions you may have for us.',
    confirmation:
      'Thank you for contacting us! If needed, you will hear back within 24-48 hours.',
  },
};

export const STRATEGIC_PILLARS = [
  {
    number: '01',
    title: 'Risk Management',
    statement:
      'OSH ACT requires employers to a safe and healthful workplace. Do you have a plan, have you trained, are you ready?',
    linkLabel: 'OSHA Workplace Violence Fact Sheet',
    href: 'https://www.osha.gov/OshDoc/data_General_Facts/factsheet-workplace-violence.pdf',
  },
  {
    number: '02',
    title: 'Organizational Development',
    statement:
      "With today's economy it's hard to know what your organization should be investing in...",
    linkLabel: 'Why Great Workplaces Invest in Employees',
    href: 'http://www.greatplacetowork.com/publications-and-events/blogs-and-news/2458-why-great-workplaces-invest-in-their-employees',
  },
  {
    number: '03',
    title: 'Mergers & Acquisitions',
    statement:
      'Mergers and Acquisitions blend cultures, synergies and strengths. Are you getting your ROI out of the HC merger? Need that skill set or an extra set of hands?',
    linkLabel: 'Human Capital in Mergers & Acquisitions',
    href: 'http://www.tgcpinc.com/SiteData/doc/MergersAcquisitions-MBrenner-071409/976ceba14c4fae75a4bbcb514bb34762/MergersAcquisitions-MBrenner-071409.pdf',
  },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    number: '01',
    id: 'behavioral-risk',
    title: 'Behavioral Risk & Crisis Management',
    shortTitle: 'Behavioral Risk & Crisis',
    description:
      'Strategic Evolution behavioral risk and crisis management offers a wide range of customized services to assist with planning, preparation and responding to organizational needs and situations.',
    image: SITE_ASSETS.behavioralRisk,
    imageAlt: 'Executive overlooking city skyline from high-rise office window',
    subServices: [
      {
        id: 'crisis-planning',
        title: 'Crisis Planning & Response',
        summary:
          'In order to assist your organization in providing a well prepared and safer workplace, we offer consultation, planning, and implementation with training for policies around Violence in the Workplace. Whether it is a Natural Disaster, Workplace Violence, or other issues, we can assist in assessing your policies and team, developing and training your team, and creating workforce stability.',
        highlights: [
          'Highly responsive emergency on-site clinical services',
          'Post-incident follow up and team recovery services',
          "Post incident analysis to assist in evolution of your organization's crisis plan",
        ],
      },
      {
        id: 'behavioral-risk-mgmt',
        title: 'Behavioral Risk Management',
        summary:
          'The Strategic Evolution behavioral risk management objective is to identify and prevent loss by building awareness around, and the management of, both the individual and organizational behaviors that have potential to create risk for your company.',
        highlights: [
          'Increased productivity and profitability',
          'Cost savings from preventable loss',
          'Strategic alignment between technology, human resources, leadership and organizational objectives',
        ],
      },
      {
        id: 'violence-prevention',
        title: 'Violence Prevention in the Workplace',
        summary:
          'The prevention of violence in the workplace is a highly critical but often overlooked piece of the business plan for many organizations. We can offer experienced advice, education and training to assist in building a customized strategy for your organization to prepare, plan and train for an unexpected event. We also provide follow-up on an individual and organizational level to review and update any areas that may need adjusting.',
        highlights: [
          'Create and/or analyze existing policies and procedures',
          'Educate and Train',
          'Apply, review and practice for continuous evolution',
        ],
      },
      {
        id: 'conflict-resolution',
        title: 'Workplace Conflict Resolution',
        summary:
          'When your organization experiences conflict between individuals, groups or teams, productivity and morale are negatively affected. Strategic Evolution will provide assistance in project planning and execution to align all parties and utilize the source of conflict to ignite a win/win change. One-on-one services, training and a variety of tools may be used to creatively solve the conflict and evolve to success.',
        highlights: [
          'Align all parties across individuals, groups, or teams',
          'One-on-one services and customized training',
          'Practical tools to ignite win/win resolution',
        ],
        image: SITE_ASSETS.conflictChess,
        imageAlt: 'Strategic glass chess pieces arranged across board',
      },
    ],
  },
  {
    number: '02',
    id: 'leadership-development',
    title: 'Leadership Development & Executive Coaching',
    shortTitle: 'Leadership & Coaching',
    description:
      'Strategic Evolution works to calculate opportunities and develop leadership and communication skills individually or as teams. Strategies are inclusive of creation of leadership funnel, identity of areas of excellence and areas of improvement intertwined with new strategies to support evolution of the employee.',
    image: SITE_ASSETS.executiveWalk,
    imageAlt: 'Two executives walking alongside classical architectural columns',
    subServices: [
      {
        id: 'executive-development',
        title: 'Professional & Executive Development',
        summary:
          "The Strategic Evolution executive development services strive to ensure that your organization's leaders are equipped to continually develop and build on their existing knowledge and skills to support continued growth of your business. We will create and deliver solutions based on the specific needs and culture of your organization to promote successful outcomes in whatever new endeavors your company may choose to undertake.",
        highlights: [
          'Customized Leadership Development and Training Programs',
          'Individual high-touch Executive Coaching Services',
          'Confidential Navigation for Personal issues to assist with workplace growth, issues and concerns',
          'Analysis of future leadership needs and design for Future Leader Development and funnel',
        ],
        quote: {
          text: 'Leaders become great, not because of their power, but because of their ability to empower others.',
          author: 'John Maxwell',
        },
      },
      {
        id: 'executive-guide',
        title: 'Executive Guide',
        summary:
          "In the role of Executive Guide, Strategic Evolution serves as an unbiased and neutral party to assist with workplace issues or concerns. We identify and assist leaders to improve in areas of need or assist in the evolution of employees' negative perceptions of leadership. We focus on the three core areas of communication, employee performance and leadership abilities while aligning behaviors to the goals of your organization.",
        highlights: [
          'Communication alignment across leadership and staff',
          'Employee performance clarity and development',
          'Leadership abilities aligned to organizational goals',
        ],
        quote: {
          text: "A leader takes people where they want to go. A great leader takes people where they don't necessarily want to go, but ought to be.",
          author: 'Rosalynn Carter',
        },
        image: SITE_ASSETS.brassCompass,
        imageAlt: 'Brass compass resting on a classic nautical map',
      },
      {
        id: 'confidential-navigation',
        title: 'Confidential Executive Navigation of Personal Issues',
        summary:
          'At Strategic Evolution, we recognize that it can be difficult for many executives to request information regarding, or access, personal services offered by your organization for both themselves and their family members due to possible exposure. As a confidential third party, we will address these sensitive issues in a private and professional manner, allowing your executives to access the services they need and better focus on performing their duties to the best of their abilities.',
        highlights: [
          'Family Member issues & Life Changes',
          'Addictions & Mental Health Issues',
          'Childcare or Eldercare Services',
          'Legal Advising & Financial Counseling',
        ],
      },
    ],
  },
  {
    number: '03',
    id: 'organizational-development',
    title: 'Organizational Development & Workplace Training',
    shortTitle: 'Org Development & Training',
    description:
      'Strategic Evolution works with organizations to provide strategic planning and guidance to address whatever situation may be keeping your business from reaching the next level of success. From planning for a merger or acquisition, to individual project management, we will work to create the best plan for your organization to engage, enhance and empower the people that you employ.',
    image: SITE_ASSETS.facilitator,
    imageAlt: 'Executive consultant leading an interactive organizational training session',
    subServices: [
      {
        id: 'org-development',
        title: 'Organizational Development',
        summary:
          'Strategic planning and guidance tailored to address whatever may be keeping your business from reaching the next level of success, while gaining employee buy-in across every stage of transformation.',
        highlights: [
          'Organizational Design and Team Building',
          'Professional Development Plans inclusive of Change Management and Human Capital in mergers and acquisitions',
          'Customized Climate Surveys and Focus Groups to drive ideas to solutions while gaining employee buy-in',
          'Train the Trainer programs',
        ],
        image: SITE_ASSETS.orgCircle,
        imageAlt: 'Interlocking team figures representing organizational unity',
      },
      {
        id: 'org-design',
        title: 'Organizational Design & Team Building',
        summary:
          "An overview and analysis of structure and behaviors is performed to develop customized leadership assistance and training programs that target each group's needs and existing strengths, creating proactive results that meet or exceed the business need.",
        highlights: [
          'Leadership training',
          'Climate Surveys',
          'Performance Review programs (metrics and review process)',
        ],
      },
      {
        id: 'project-management',
        title: 'Project Management',
        summary:
          'Strategic Evolution will proactively drive organizational initiatives by guiding employees through the process of operationalizing the project and driving the objective forward by connecting with technology, processes and utilizing all available resources. With in-depth knowledge of how to analyze the issues that often affect organizational culture and resources, Strategic Evolution will drive your project forward.',
        highlights: [
          'Operationalizing organizational initiatives with employees',
          'Connecting technology, business processes, and existing resources',
          'Engage, Enhance and Empower your People to drive ROI',
        ],
      },
      {
        id: 'workplace-training',
        title: 'Customized Workplace Training & Train the Trainer',
        summary:
          'Strategic Evolution provides a variety of individually tailored trainings and seminars proven to enhance workplace functioning. Whether addressing supervisors and managers, employees or the organization as a whole, we will create and provide trainings and seminars designed to address your specific needs—including Train the Trainer delivery.',
        highlights: [
          'Organizational Strategy & Change Management',
          'Generational Workforce',
          'Harassment & Discrimination',
          'Drug Free Workplace',
        ],
      },
    ],
  },
];

export const ABOUT_INFO = {
  founder: 'Lynn Scarbath Berger, MSW, LGSW',
  title: 'Owner and Principal Consultant',
  whyQuestion: 'Do you know Why?',
  whySubtext: 'Most know What, some know How, are you in the few that know Why?',
  videoUrl: 'https://www.youtube.com/watch?v=u4ZoJKF_VuA',
  bioParagraphs: [
    'After earning her B.A. in Education and Social Work from Salisbury State University and a Masters of Social Work from University of MD at Baltimore specializing in Community Organization and Social Administration, Lynn went on to become a Licensed Social Worker with additional certification in Crisis Management from ICISF in 2001.',
    'Lynn has spent more than fifteen years driving organizational initiatives and optimizing corporate visibility in competitive markets. Her education and experience in behavioral science has provided her invaluable insight into the behavior and culture, or psychology, of business when consulting with senior and emerging leaders, teams and organizations on both business structure as well as behavior and cultural alignment.',
    'Lynn also utilizes her wide range of experience and skills in organization development, training and crisis management with a large book of over 400 external clients in the non-profit, for-profit, government and private sectors.',
  ],
  speakingEngagements: [
    {
      topic: 'Developing our Culture',
      venue: 'Towson University Administration and Finance Division Retreat',
    },
    {
      topic: 'Violence in the Workplace',
      venue: 'MAPLA',
    },
    {
      topic: 'Violence Continuum',
      venue: 'EAPA National Conference',
    },
    {
      topic: 'Succession Planning',
      venue: 'Transportation Association of Maryland',
    },
    {
      topic: 'SMART Goals',
      venue: 'BRIVO',
    },
    {
      topic: 'Drug Free Workplace',
      venue: 'Harford Transit Link',
    },
  ],
  inTheNews: {
    headline: 'Trying to Change the World Bank',
    summary:
      "Read how Jim Yong Kim initiated the World Bank's first massive reorganization in nearly two decades. He explains how welcoming coaching in addition to working to redefine the organization's culture worked to create change that was both beneficial and necessary.",
  },
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'barrera',
    quote:
      "I would like to take a moment and compliment Ms. Lynn Berger for her dedication and professionalism in working with the Bureau of Alcohol, Tobacco, Firearms and Explosives. She has assisted the Miami Field Division in Critical Incident Debriefings, addressing communications issues between agents and supervisors, and team development. Her years of experience in this field were evident, she was able to defuse potentially volatile situations. Ms. Berger was able to obtain the cooperation of the employees involved, to include Agents and Industry Operations Personnel for a successful resolution to the problems at hand. Additionally, she created a plan to improve the situation in the office through the use of communication skills. We have been so impressed with her work that we have requested several other types of the Interventions/Communication sessions for all available employees of the Miami Field Division to be inclusive of work out of CONUS in Puerto Rico, during the past several years. Ms. Berger's ability to understand, relate, and gain trust of our Agents as well as Industry Operations personnel is an extremely unique skill set. I would like to commend Ms. Berger for the support throughout the years. Her work and services are essential to the success of our organization.",
    author: 'Hugo J. Barrera',
    role: 'Special Agent in Charge, Miami Field Division',
    organization: 'Bureau of Alcohol, Tobacco, Firearms and Explosives',
  },
  {
    id: 'baldwin',
    quote:
      'Lynn is one of the most energetic and engaging consultants I have ever worked with. The fact that she loves what she does, loves helping individuals and teams improve, and loves problem solving, is so obvious the very first time you work with her. We have had numerous requests for her facilitation at retreats, Professional Development sessions for our senior leaders, and presentations at our annual conference. She is very versatile and customizes everything she does to each specific audience. She is a true professional and a delight to work with.',
    author: 'Margaret Baldwin',
    role: 'Director of Talent Management',
    organization: 'Stevenson University',
  },
  {
    id: 'klein',
    quote:
      'I worked closely with Lynn Berger for many years during her association in various capacities with Business Health Services. Our relationship was, in every respect, remarkable. In my experience, it is rare to find someone with Lynn’s sharp business vision and analytical skills, coupled with an honest and open approach to problem-solving. Lynn has the ability to take a complicated topic, break it down into understandable pieces, and present options for resolving issues – perfect for projects and programs with multiple moving parts. I relied on Lynn on many occasions to give me the “big picture” and then help me tackle the details.',
    author: 'Peter Klein',
    role: 'Fund Manager',
    organization: 'Local 26 IBEW-NECA Joint Trust Funds',
  },
  {
    id: 'trepp',
    quote:
      'Lynn does a masterful job of making the serious topic of Preventing Workplace Violence an engaging and empowering learning experience by blending personal observations and experiences with humor and factual data. Public Library staff open their doors daily to patrons with multiple mental health issues. Lynn designed and presented numerous sessions in the past 3 years of Preventing Workplace Violence for our public library staff... All of the information presented is valuable for work and personal life. We would love to continue to have her back for new staff annually.',
    author: 'Joanne Trepp',
    role: 'Staff Development Coordinator',
    organization: 'Anne Arundel County Public Library',
  },
  {
    id: 'blum',
    quote:
      'Lynn is the ultimate professional. She is a very talented, intelligent, honest, energetic and highly skilled professional who gives so much to fill the needs of her customers. My work with Lynn has always been very satisfying to me because I know I can count on her to give well developed professional guidance, solid opinions, and ability to get things accomplished within the stated deadlines. As a business owner/provider of EAP services I always received products from Lynn (EAP area clinicians and/or trainers) that were well prepared and professional. I really appreciate Lynn’s sense of humor, can-do attitude and amazing energy. Over the years, I have come to know Lynn as a trusted business colleague and friend.',
    author: 'Dorothy Blum, PhD, CEAP',
    role: 'Manager',
    organization: 'Employee Assistance Program',
  },
  {
    id: 'then',
    quote:
      "In my many years of dealing with Mrs. Lynn Scarbeth Berger, I always found her to be professional, concerned, and helpful, regardless of the nature of the situation. She provided invaluable assistance to enumerable employees and always strived to seek a win/win solution for all concerned. I have always been impressed by Mrs. Berger's competencies and sincerity. It was always a positive experience working with Mrs. Berger.",
    author: 'Colleen Then',
    role: 'Retired Director',
    organization: 'Industry Operations Bureau of ATF',
  },
];
