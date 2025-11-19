import heroBg from "./hero_bg.webp";
import about from "./about.webp";
import summer from "./summer.webp";
import winter from "./winter.webp";
import fall from "./fall.webp";
import spring from "./spring.webp";
import blog1 from "./blog1.webp";
import blog2 from "./blog2.webp";
import blog3 from "./blog3.webp";

export const images = {
  hero_bg: heroBg,
  about: about,
  seasons: {
    winter: winter,
    summer: summer,
    fall: fall,
    spring: spring,
  },
  blogs: {
    blog1: blog1,
    blog2: blog2,
    blog3: blog3,
  },
};

export const services = [
  {
    id: 1,
    icon: "fa-solid fa-scissors",
    title: "Lawn Mowing",
    description:
      "Regular mowing that keeps your grass even, neat and healthy throughout the season.",
  },
  {
    id: 2,
    icon: "fa-solid fa-border-style",
    title: "Edging & Trimming",
    description:
      "Sharp edges around driveways, walkways and garden beds for a clean, polished look.",
  },
  {
    id: 3,
    icon: "fa-solid fa-seedling",
    title: "Fertilization",
    description:
      "Nutrient treatments that help your lawn grow greener, thicker and stronger.",
  },
  {
    id: 4,
    icon: "fa-solid fa-spray-can-sparkles",
    title: "Weed Control",
    description:
      "Targeted treatments that prevent weeds from spreading without harming your grass.",
  },
];

export const tips = [
  {
    id: 1,
    season: "Summer",
    tip: "Water deeply a few times a week and mow a little higher to protect the grass from heat stress. Keep an eye out for pests and treat dry spots early.",
    image: images.seasons.summer,
  },
  {
    id: 2,
    season: "Winter",
    tip: "Keep heavy foot traffic off frozen grass to avoid damage. Clear snow piles gently and plan any upcoming landscaping work for the next season.",
    image: images.seasons.winter,
  },
  {
    id: 3,
    season: "Fall",
    tip: "Rake leaves, aerate again and apply a fall fertilizer to strengthen the roots. This is also the best time for overseeding to prepare for next year’s growth.",
    image: images.seasons.fall,
  },
  {
    id: 2,
    season: "Spring",
    tip: "Give your lawn a fresh start by removing debris, dethatching and aerating the soil. Early fertilizing and overseeding help the grass fill in and grow strong for the year.",
    image: images.seasons.spring,
  },
];

export const testimonial_data = [
  {
    id: 1,
    name: "Sarah Mitchell",
    designation: "Homeowner",
    review:
      "My lawn has never looked this healthy. Their team shows up on time and delivers great work.",
  },
  {
    id: 2,
    name: "James Cooper",
    designation: "Real Estate Agent",
    review:
      "They helped boost curb appeal on several listings. Reliable and easy to work with.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "Landscape Designer",
    review:
      "Great attention to detail. Their mowing and trimming make my projects stand out.",
  },
  {
    id: 4,
    name: "Mark Thompson",
    designation: "Property Manager",
    review:
      "Consistent service every week. Our tenants appreciate how clean the grounds look.",
  },
  {
    id: 5,
    name: "Olivia Bennett",
    designation: "Small Business Owner",
    review:
      "Fast, friendly and professional. My storefront lawn looks sharp all year.",
  },
  {
    id: 6,
    name: "Daniel Wright",
    designation: "Construction Supervisor",
    review:
      "They handled a difficult yard and made it look brand new. Highly recommended.",
  },
  {
    id: 7,
    name: "Hannah Lee",
    designation: "Teacher",
    review:
      "Affordable and dependable. I love coming home to a neat, fresh-looking lawn.",
  },
];

export const articles_data = [
  {
    id: 1,
    title: "How Often Should You Mow Your Lawn?",
    content:
      "Regular mowing keeps your grass even and healthy. Most lawns do best with a weekly cut during the growing season.",
    date: "2025-02-01",
    image: images.blogs.blog1,
  },
  {
    id: 2,
    title: "Simple Ways to Prevent Weeds Naturally",
    content:
      "A thick, well-fed lawn blocks most weeds on its own. Overseeding and proper fertilization are your best defense.",
    date: "2025-01-18",
    image: images.blogs.blog2,
  },
  {
    id: 3,
    title: "Why Fall Is the Best Time to Overseed",
    content:
      "Cooler temperatures help new grass germinate and grow strong roots. Overseeding in fall prepares your lawn for spring.",
    date: "2024-12-10",
    image: images.blogs.blog3,
  },
];
