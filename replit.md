# Replit Configuration

## Overview

This is an Astro-based static site project with TypeScript support and Tailwind CSS for styling. The project appears to be a modern web application focused on creating a portfolio or personal website with glassmorphism design elements and smooth animations. The setup uses Astro's static site generation capabilities combined with a utility-first CSS framework for responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Astro 5.13.4**: Chosen as the primary framework for static site generation
- **TypeScript**: Strict configuration enabled for type safety and better development experience
- **JSX Support**: Configured with React JSX transform for component flexibility

### Styling Architecture
- **Tailwind CSS 3.4.17**: Utility-first CSS framework for rapid styling
- **Custom CSS Layer System**: Organized into base, components, and utilities layers
- **Design System Components**:
  - Glassmorphism effects for modern UI aesthetics
  - Hover animations and transitions
  - Profile image effects with scale and glow
  - Technology icon animations

### Build Configuration
- **TypeScript Configuration**: Extends Astro's strict TypeScript settings
- **CSS Processing**: Global styles with Tailwind directives and custom component classes
- **Modern Browser Features**: Smooth scrolling and CSS backdrop filters

### Design Patterns
- **Component-Based Styling**: Custom CSS classes for reusable UI components
- **Responsive Design**: Tailwind's mobile-first approach
- **Animation Strategy**: CSS transitions for smooth user interactions
- **Visual Effects**: Glassmorphism and glow effects for modern aesthetics

## External Dependencies

### Core Framework Dependencies
- **@astrojs/tailwind**: Official Astro integration for Tailwind CSS
- **astro**: Static site generator and framework
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **TypeScript**: Type checking and enhanced development experience
- **Astro Compiler**: Internal compilation and optimization tools

### Browser APIs
- **CSS Backdrop Filter**: For glassmorphism effects
- **CSS Transforms**: For hover animations and scaling effects
- **CSS Transitions**: For smooth state changes