# Components Documentation

## Icons

The `icons.js` file contains reusable SVG icon components that can be used throughout the application.

### Available Icons

- **LightningIcon** - Fast/Speed indicator
- **UsersIcon** - People/Community
- **BadgeCheckIcon** - Certification/Verification
- **MenuIcon** - Hamburger menu
- **CloseIcon** - Close/X button
- **BookOpenIcon** - Reading/Learning
- **AcademicCapIcon** - Education/Graduation
- **ChartBarIcon** - Analytics/Statistics
- **StarIcon** - Rating/Favorite (supports `filled` prop)
- **HeartIcon** - Like/Favorite (supports `filled` prop)
- **TrendingUpIcon** - Growth/Progress
- **ClockIcon** - Time/Duration
- **GlobeIcon** - Global/World
- **PlayIcon** - Video/Media
- **CheckCircleIcon** - Success/Complete
- **ArrowRightIcon** - Navigation/Next
- **MailIcon** - Email/Contact
- **PhoneIcon** - Phone/Call
- **LocationIcon** - Address/Location

### Usage

```jsx
import { LightningIcon, StarIcon } from './icons';

// Basic usage
<LightningIcon />

// Custom className
<LightningIcon className="w-8 h-8 text-blue-600" />

// Icons with filled prop
<StarIcon filled={true} className="w-6 h-6 text-yellow-500" />
<HeartIcon filled={false} className="w-6 h-6 text-red-500" />
```

### Props

All icons accept:
- **className** (optional): Custom CSS classes for styling (default: "w-6 h-6")
- **filled** (optional, StarIcon & HeartIcon only): Boolean to fill the icon

### Examples

```jsx
// Feature card with icon
<div className="bg-white p-6 rounded-lg">
  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
    <LightningIcon className="w-6 h-6 text-blue-600" />
  </div>
  <h3>Fast Learning</h3>
</div>

// Button with icon
<button className="flex items-center gap-2">
  <span>Learn More</span>
  <ArrowRightIcon className="w-5 h-5" />
</button>

// Rating display
<div className="flex gap-1">
  <StarIcon filled={true} className="w-5 h-5 text-yellow-400" />
  <StarIcon filled={true} className="w-5 h-5 text-yellow-400" />
  <StarIcon filled={true} className="w-5 h-5 text-yellow-400" />
  <StarIcon filled={false} className="w-5 h-5 text-gray-300" />
  <StarIcon filled={false} className="w-5 h-5 text-gray-300" />
</div>
```

## Component Structure

### Current Components

- **Header.js** - Navigation bar with mobile menu
- **Footer.js** - Footer with links and branding
- **Hero.js** - Hero section with CTA
- **Features.js** - Feature cards grid
- **Stats.js** - Statistics display
- **CTA.js** - Call-to-action section

All components are mobile-responsive and use Tailwind CSS for styling.
