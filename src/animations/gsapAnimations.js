// src/animations/gsapAnimations.js
// Centralized GSAP animation utilities
import { gsap } from "gsap";

// Example: Fade in animation
export const fadeIn = (target, duration = 1, vars = {}) => {
  gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration, ...vars });
};

// Example: Slide in from left
export const slideInLeft = (target, duration = 1, vars = {}) => {
  gsap.fromTo(target, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration, ...vars });
};

// Example: Scale up
export const scaleUp = (target, duration = 1, vars = {}) => {
  gsap.fromTo(target, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration, ...vars });
};

// Add more reusable animation functions as needed
