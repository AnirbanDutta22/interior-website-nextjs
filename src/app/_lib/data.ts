// Direct imports for JSON data
import statsData from '../../../public/data/stats.json';
import reasonsData from '../../../public/data/reasons.json';
import recentWorksData from '../../../public/data/recentworks.json';
import sliderData from '../../../public/data/slider.json';
import processData from '../../../public/data/process.json';
import reviewsData from '../../../public/data/reviews.json';
import faqData from '../../../public/data/faq.json';
import categoriesData from '../../../public/data/categories.json';

// Simple data fetching functions
export const getStats = async () => {
  return statsData;
};

export const getReasons = async () => {
  return reasonsData;
};

export const getRecentWorks = async () => {
  return recentWorksData;
};

export const getSliderData = async () => {
  return sliderData;
};

export const getProcessData = async () => {
  return processData;
};

export const getReviews = async () => {
  return reviewsData;
};

export const getFAQ = async () => {
  return faqData;
};

export const getCategories = async () => {
  return categoriesData;
}; 