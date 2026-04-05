import { ECommandType } from '../models/commands.model';
import { ETheme } from '../models/themes.model';

export const email = 'itisrajya@gmail.com';
export const cvURL = '';
export const linkedInProfileURL = 'https://www.linkedin.com/in/itisrajya/';
export const twitterProfileURL = 'https://x.com/itisrajya';
export const githubProfileUrl = 'https://github.com/itisrajya';
export const projects = [
  {
    name: 'Unified Authentication System',
    date: 'Secured Login, Register and Account recovery',
    pointers: [
      'Developed and implemented secure solutions using.NET Core Web API and JWT-based authentication to manage user roles and protect API access.',
      'Designed RESTful APIs for seamless communication between services and client applications, leveraging Entity Framework Core and LINQ for efficient database management.',
      'Maintained high-quality standards by writing comprehensive unit tests with xUnit to ensure code reliability.',
      'The application emphasized seamless user experiences and operational efficiency while promoting local businesses.'
    ],
    technologies: [
      'C#',
      '.Net',
      'JWT',
      'BCrypt Hashing',
      'Entity Framework',
      'LINQ',
      'RESTful APIs',
      'SQL Server Management Studio',
      'xUnit'
    ]
  },
  {
    name: 'RAMBHA-LP I-V Curve Explorer',
    date: 'Radio Anatomy of Moon Bound Hypersensitive Ionosphere and Atmosphere” (often abbreviated RAMBHA)',
    pointers: [
      `A .NET Blazor application that lets space researchers, students, and enthusiasts interactively explore Chandrayaan-3’s RAMBHA Langmuir Probe measurements.`,
      `User can easily drag-and-drop files based on that user can later download CSV, JSON, or PNG plots for their research notes or presentations`,
      `integrated LiveCharts2 for Blazor Plotly via JS interop`
    ],
    technologies: ['C#', '.NET', 'Blazor WebAssembly', 'ASP.NET Core', 'Minimal API', 'Parsing & Serialization']
  },
  {
    name: 'Doctor Appointment System',
    date: '',
    pointers: [
      'An online platform to facilitate the process of booking appointments with doctors for their clients or patients',
      'The system serves three distinct user types with specialized interfaces and functionality intigrated with multi-role authentication and access control'
    ],
    technologies: ['PHP ', 'PHPMyAdmin', 'Apache', 'MySQL ']
  },
  {
    name: 'Proxy Server Log Analyzer [pfSense]',
    date: '',
    pointers: [
      'A cyber security tool aimed at analyzing and visualizing proxy server logs for the Information Security department.',
      'It provides insights into network traffic, security incidents, and user behavior based on the log data.'
    ],
    technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript ', 'Bootstrap']
  }
];
export const workEx = [
  {
    position: 'Software Developer',
    company: 'Epam Systems',
    date: '08/2024 - Present',
    tasks: [
      `Developed and deployed serverless apps using AWS Lambda, S3 buckets, SQS, Cloudfront, and Route 53.`,
      `Used AWS Codebuild and GitHub Actions to create a CI/CD pipeline.`,
      `Developed a secure backend solutions using <b>.NET Core Web API</b> with <b>JWT-based authentication</b> for role-based access and API security.`,
      `Designed and optimized <b>RESTful APIs</b> using <b>Entity Framework Core 8</b> and <b>LINQ</b> for efficient database interactions.`,
      `Adhered to <b>Onion Architecture, SOLID principles, and Clean Code practices</b> to ensure scalability, maintainability, and long-term efficiency.`,
      `Enhanced quality assurance by writing comprehensive <b>unit tests</b> with <b>xUnit</b> and <b>Moq</b> for test doubles, ensuring code reliability.`,
      `Streamlined workflows by following <b>Git Flow branching strategy</b>, leveraging <b>Jira</b> for sprint planning and tracking, and setting up <b>CI workflows with Jenkins</b>.`
    ]
  },
  {
    position: 'Cyber Security Intern',
    company: 'BSNL, Govt of India',
    date: '05/2023 - 07/2023',
    tasks: [
      `Developed a <b>cyber security project</b> to analyze and visualize <b>proxy server logs</b> for the Information Security department.`,
      `Implemented <b>log parsing, filtering, and aggregation</b> to track attributes such as <b>source IP</b>, <b>destination IP</b>, and <b>user actions</b>.`,
      `Built <b>statistical reporting</b> and <b>data visualizations</b> (bar, pie, line charts) using <b>JavaScript</b> and <b>Plotly</b>.`,
      `Designed a responsive <b>UI</b> with <b>HTML, CSS</b>, and <b>Bootstrap</b> for seamless user interaction.`,
      `Handled backend processing with <b>PHP</b> and integrated <b>MySQL</b> for efficient log storage and querying.`,
      `Enabled exporting of analysis results in multiple formats for further reporting and investigation.`
    ]
  }
];
export const certificates = [
  {
    name: 'Microservices Foundations',
    link: 'https://www.linkedin.com/learning/certificates/90300d272f58305b1b5c3fd66b540220b2b145b128796d96158991f4b9853c51?u=2113185'
  },
  {
    name: 'Securing ASP.NET Core Apps Advanced Techniques for Web Application Security',
    link: 'https://www.linkedin.com/learning/certificates/65e8dd104a933ff46b47344fc2f6e14dba6e9ab3973f13dcad6d8e153d088dbc?u=2113185'
  },
  {
    name: 'C# Test-Driven Development',
    link: 'https://www.linkedin.com/learning/certificates/ccdcd0bcbe6399b0bdb17fe4c50cfcd3d632add1c9d1c8bd4d217a7296d175ab?u=2113185'
  },
  {
    name: 'Software Architecture Patterns for Developers (2020)',
    link: 'https://www.linkedin.com/learning/certificates/80b3e6b868ff2cc1f4dfcebce5f2bd31594c65603c944f3b1cbf5377544b9ea5?u=2113185'
  },
  {
    name: 'ServiceNow Certified Application Developer',
    link: 'https://media.licdn.com/dms/image/v2/D4E1FAQGooxkAtYD44w/feedshare-document-images_480/feedshare-document-images_480/1/1700470513018?e=1760572800&v=beta&t=XjnY2x71wxMOgdxa1nzNe9lGAGZwBc9-vwb8_AOpE7k'
  },
  {
    name: 'AWS Cloud Security',
    link: 'https://www.credly.com/badges/850e0ca4-3d67-4c81-9300-8fbc46a1c9bb/print'
  }
];
export const skills = [
  'C#',
  '.Net',
  'Entity Framework',
  'ASP',
  'MVC',
  'Angular',
  'SQL',
  'XML',
  'Grafana',
  'APIs',
  'AWS',
  'CI/CD',
  'Git',
  'Burp Suite',
  'Postman',
  'IoT'
];
export const availableThemes = [...Object.values(ETheme)];
