import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import heroEn from './locales/en/hero.json';
import aboutEn from './locales/en/about.json';
import experienceEn from './locales/en/experiences.json';
import competenciesEn from './locales/en/competencies.json';
import projectsEn from './locales/en/projects.json';
import hobbiesEn from './locales/en/hobbies.json';
import contactEn from './locales/en/contact.json';
import skillsEn from './locales/en/skills.json';

import heroPt from './locales/pt/hero.json';
import aboutPt from './locales/pt/about.json';
import experiencePt from './locales/pt/experiences.json';
import competenciesPt from './locales/pt/competencies.json';
import projectsPt from './locales/pt/projects.json';
import hobbiesPt from './locales/pt/hobbies.json';
import contactPt from './locales/pt/contact.json';
import skillsPt from './locales/pt/skills.json';

import heroEs from './locales/es/hero.json';
import aboutEs from './locales/es/about.json';
import experienceEs from './locales/es/experiences.json';
import competenciesEs from './locales/es/competencies.json';
import projectsEs from './locales/es/projects.json';
import hobbiesEs from './locales/es/hobbies.json';
import contactEs from './locales/es/contact.json';
import skillsEs from './locales/es/skills.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        hero: heroPt,
        about: aboutPt,
        experiences: experiencePt,
        competencies: competenciesPt,
        projects: projectsPt,
        hobbies: hobbiesPt,
        contact: contactPt,
        skills: skillsPt,
      },
      en: {
        hero: heroEn,
        about: aboutEn,
        experiences: experienceEn,
        competencies: competenciesEn,
        projects: projectsEn,
        hobbies: hobbiesEn,
        contact: contactEn,
        skills: skillsEn,
      },
      es: {
        hero: heroEs,
        about: aboutEs,
        experiences: experienceEs,
        competencies: competenciesEs,
        projects: projectsEs,
        hobbies: hobbiesEs,
        contact: contactEs,
        skills: skillsEs,
      }
    },
    fallbackLng: 'pt',
    lng: 'pt',
    ns: ['hero', 'about', 'skills', 'experience', 'competencies', 'projects', 'hobbies', 'contact'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
