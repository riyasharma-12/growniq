# Agent Rules

This document outlines the core guidelines and constraints that all AI agents must strictly follow when working on this project.

## 1. Strict Figma Design Alignment
- **Requirement**: Always align the implementation precisely with the provided Figma design files.
- **Action**: Fetch the design context and screenshots for any node under development. Maintain identical copywriting, colors, margins, buttons, and component structures as specified in Figma. Do not deviate or simplify layouts unless explicitly requested by the user.

## 2. Mobile Responsiveness & Mobile-Friendly Layouts
- **Requirement**: All pages, sections, components, headers, and footers must be fully responsive and optimized for mobile browsers.
- **Action**:
  - Always use Tailwind CSS responsive utilities (`sm:`, `md:`, `lg:`, etc.) to adjust layouts for smaller screen sizes.
  - Implement mobile-friendly navigation (e.g., collapsible accordion footers, overlay mobile menus, touch-friendly carousel controls).
  - Ensure font sizes, padding, and image aspect ratios adjust correctly on mobile viewports to prevent horizontal overflow and layout clipping.
