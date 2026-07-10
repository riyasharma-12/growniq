// Example component showing different ways to use icons
// This file is for reference only - you can delete it if not needed

import {
  LightningIcon,
  UsersIcon,
  BadgeCheckIcon,
  StarIcon,
  HeartIcon,
  BookOpenIcon,
  AcademicCapIcon,
  TrendingUpIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  LocationIcon,
} from './icons';

export default function IconExamples() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Icon Usage Examples</h2>

      {/* Example 1: Icon Grid */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Icon Grid</h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          <div className="flex flex-col items-center gap-2">
            <LightningIcon className="w-8 h-8 text-blue-600" />
            <span className="text-xs">Lightning</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <UsersIcon className="w-8 h-8 text-purple-600" />
            <span className="text-xs">Users</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BadgeCheckIcon className="w-8 h-8 text-green-600" />
            <span className="text-xs">Badge</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BookOpenIcon className="w-8 h-8 text-orange-600" />
            <span className="text-xs">Book</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AcademicCapIcon className="w-8 h-8 text-indigo-600" />
            <span className="text-xs">Academic</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TrendingUpIcon className="w-8 h-8 text-emerald-600" />
            <span className="text-xs">Trending</span>
          </div>
        </div>
      </section>

      {/* Example 2: Feature Cards with Icons */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Feature Cards</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <LightningIcon className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-bold mb-2">Fast Performance</h4>
            <p className="text-gray-600 text-sm">Lightning-fast load times</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <UsersIcon className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-bold mb-2">Community</h4>
            <p className="text-gray-600 text-sm">Join thousands of learners</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircleIcon className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-bold mb-2">Verified</h4>
            <p className="text-gray-600 text-sm">Certified courses</p>
          </div>
        </div>
      </section>

      {/* Example 3: Buttons with Icons */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Buttons with Icons</h3>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            <span>Learn More</span>
            <ArrowRightIcon className="w-5 h-5" />
          </button>
          
          <button className="flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition">
            <MailIcon className="w-5 h-5" />
            <span>Contact Us</span>
          </button>
          
          <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            <PhoneIcon className="w-5 h-5" />
            <span>Call Now</span>
          </button>
        </div>
      </section>

      {/* Example 4: Rating Stars */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Rating Display</h3>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <StarIcon filled={true} className="w-6 h-6 text-yellow-400" />
            <StarIcon filled={true} className="w-6 h-6 text-yellow-400" />
            <StarIcon filled={true} className="w-6 h-6 text-yellow-400" />
            <StarIcon filled={true} className="w-6 h-6 text-yellow-400" />
            <StarIcon filled={false} className="w-6 h-6 text-gray-300" />
          </div>
          <span className="text-gray-600">4.0 out of 5</span>
        </div>
      </section>

      {/* Example 5: Contact Info */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <MailIcon className="w-5 h-5 text-gray-600" />
            <span>contact@growniq.com</span>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="w-5 h-5 text-gray-600" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3">
            <LocationIcon className="w-5 h-5 text-gray-600" />
            <span>123 Learning St, Education City</span>
          </div>
        </div>
      </section>

      {/* Example 6: Like/Favorite Button */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Interactive Icons</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition">
            <HeartIcon filled={false} className="w-5 h-5 text-red-500" />
            <span>Like</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500 bg-red-50 transition">
            <HeartIcon filled={true} className="w-5 h-5 text-red-500" />
            <span className="text-red-600">Liked</span>
          </button>
        </div>
      </section>
    </div>
  );
}
