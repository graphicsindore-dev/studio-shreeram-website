
import { ServiceTab, TeamMember, Project, Award } from './types';

export const COLORS = {
  primary: '#0057FF',
  dark: '#111827',
  accent: '#0057FF'
};

export const SERVICES: ServiceTab[] = [
  {
    id: 'print',
    title: 'Print Media',
    icon: 'fa-newspaper',
    description: 'Crafting tangible, high-impact campaigns in Newspapers, Magazines, and Brochures.',
    features: ['Research & Analysis', 'Media Strategy', 'Buying & Scheduling', 'Campaign Development', 'Production & Printing', 'Copy Development']
  },
  {
    id: 'tv',
    title: 'Television',
    icon: 'fa-tv',
    description: 'Compelling visual stories that capture massive audiences through strategic broadcasting.',
    features: ['Scripting & Storyboarding', 'Media Planning', 'Casting & Celebrity Endorsement', 'Production & Post', 'Voiceover & Mastering']
  },
  {
    id: 'radio',
    title: 'Radio',
    icon: 'fa-microphone-alt',
    description: 'Memorable jingles and audio experiences that resonate with loyal listeners.',
    features: ['Production of Spots', 'Jingle Design', 'Media Planning', 'On-Air Events', 'Reporting & Analysis']
  },
  {
    id: 'ooh',
    title: 'OOH',
    icon: 'fa-road',
    description: 'Dominating the landscape with creative media on billboards, transit, and landmark events.',
    features: ['Highway Billboards', 'Transit Posters', 'Strategic Placements', 'Substantial Exposure', 'Location Strategy']
  },
  {
    id: 'online',
    title: 'Online',
    icon: 'fa-bullhorn',
    description: 'Engaging modern audiences where they live, from SEO to social communities.',
    features: ['SEO & SEM', 'PPC Management', 'Display Ads', 'Social Media Strategy', 'Content Development', 'Community Management']
  }
];

export const PROJECTS: Project[] = [
  { 
    id: '1', 
    title: 'Real Estate Excellence', 
    category: '360° Campaign', 
    image: 'assets/work-real-estate.jpg',
    detailsImage: 'assets/project-details-real-estate.jpg'
  },
  { 
    id: '2', 
    title: 'FMCG Growth Strategy', 
    category: 'Brand Positioning', 
    image: 'assets/work-fmcg.jpg',
    detailsImage: 'assets/project-details-fmcg.jpg'
  },
  { 
    id: '3', 
    title: 'Educational Reach', 
    category: 'Lead Generation', 
    image: 'assets/work-education.jpg',
    detailsImage: 'assets/project-details-education.jpg'
  }
];

export const TEAM: TeamMember[] = [
  { name: 'Rahul Yadav', role: 'General Manager', image: 'assets/team1.jpg' },
  { name: 'Amarjeet Singh', role: 'Sr. Manager, Marketing', image: 'assets/team2.jpg' },
  { name: 'Kailash Jonwal', role: 'Creative Design Head', image: 'assets/team3.jpg' },
  { name: 'Aayush Patidar', role: 'Creative Designer', image: 'assets/team4.jpg' },
  { name: 'Parn Upadhyay', role: 'DM Executive', image: 'assets/team5.jpg' },
  { name: 'Aakash Arya', role: 'Office Admin', image: 'assets/team6.jpg' }
];

export const AWARDS: Award[] = [
  { title: 'Best Print Campaign', org: 'Dainik Bhaskar', year: '2023', image: 'assets/award-print-campaign.jpg' },
  { title: 'Excellence in Regional Ads', org: 'Times of India', year: '2022', image: 'assets/award-regional-ads.jpg' },
  { title: 'Radio Commercial of the Year', org: 'Radio City', year: '2021', image: 'assets/award-radio-commercial.jpg' }
];

// Saare logos jo aapke screenshot mein dikh rahe hain
export const CLIENT_LOGOS = [
  'assets/logo-fairfield.png',
  'assets/logo-faith.png',
  'assets/logo-godrej.png',
  'assets/logo-lg.png',
  'assets/logo-oriental.png',
  'assets/logo-oyester.png',
  'assets/logo-peopleuniversity.png',
  'assets/logo-purasure.png',
  'assets/logo-rkdf.png',
  'assets/logo-sbpl.png',
  'assets/logo-topntown.png',
  'assets/logo-windsor.png',
  'assets/logo-amrithomes.png',
  'assets/logo-autohanger.png'
];

// Creative portfolio from brand1.jpg to brand8.jpg
export const CREATIVE_SHOWCASE = [
  'assets/brand1.jpg',
  'assets/brand2.jpg',
  'assets/brand3.jpg',
  'assets/brand4.jpg',
  'assets/brand5.jpg',
  'assets/brand6.jpg',
  'assets/brand7.jpg',
  'assets/brand8.jpg'
];
