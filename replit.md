# replit.md

## Overview

This is an Astro-based static site generator project with Tailwind CSS for styling. The project follows modern web development practices with TypeScript support and appears to be set up for building a portfolio or personal website. The architecture emphasizes performance, modern styling capabilities, and developer experience with static site generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Astro 5.13.4** as the primary static site generator
  - Chosen for its excellent performance characteristics and ability to ship minimal JavaScript
  - Supports component islands architecture for selective hydration
  - Built-in TypeScript support with strict configuration
  - Content collections system for managing markdown and data files

### Styling Architecture
- **Tailwind CSS 3.4.17** for utility-first styling
  - Integrated via `@astrojs/tailwind` plugin for seamless Astro integration
  - Custom CSS layers defined in `global.css` for base styles, components, and utilities
  - Glassmorphism design patterns implemented as reusable CSS classes
  - Smooth scrolling and transition effects built into the design system

### TypeScript Configuration
- Extends Astro's strict TypeScript configuration
- JSX configured for React compatibility (`react-jsx` with React import source)
- Type definitions automatically generated for content collections
- Strict type checking enabled for better code quality

### Design System Components
- **Glassmorphism effects** with backdrop blur and transparency
- **Hover animations** with scale and glow effects for interactive elements
- **Profile hover effects** for user interface elements
- **Color transitions** for smooth theme changes
- **Responsive design** patterns using Tailwind's utility classes

### Content Management
- Astro's content collections system for managing markdown files
- Automatic type generation for content schemas
- Built-in markdown processing with remark plugins
- Support for frontmatter and metadata extraction

### Build and Development
- Astro's built-in development server and build system
- Automatic TypeScript compilation
- CSS optimization and purging via Tailwind
- Static asset optimization and compression

## External Dependencies

### Core Framework Dependencies
- **Astro** - Static site generator and build system
- **@astrojs/tailwind** - Official Tailwind CSS integration for Astro
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools
- **TypeScript** - Type checking and development experience
- **Astro Compiler** - Astro component compilation and processing
- **Astro Internal Helpers** - Core Astro functionality and utilities

### Content Processing
- **@astrojs/markdown-remark** - Markdown processing and rendering
- **GitHub Slugger** - URL-friendly slug generation for headings
- **HAST utilities** - HTML Abstract Syntax Tree processing

The project maintains a minimal dependency footprint while providing a robust foundation for static site development with modern styling capabilities and excellent developer experience.