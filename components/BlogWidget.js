'use client';

export default function BlogWidget() {
  const allBlogs = [
    {
      id: 1,
      image: '/images/Garden-Maintainnace.png',
      title: 'Delhi-NCR garden care pricing',
      description: 'Delhi’s love for green spaces is growing, from lush terrace gardens in South Delhi to cosy balcony setups in Gurugram apartments. Yet maintaining those plants in Delhi’s unpredictable weather and dusty conditions can be challenging. ',
      author: 'Rahul Sharma',
      readTime: '7 min read'
    },
    {
      id: 2,
      image: '/images/Terrace-Garden.png',
      title: 'Best Terrace Garden Ideas',
      description: 'In cities like Delhi and the NCR area, where pollution levels rise every season, our homes deserve to be more than just concrete walls, they should breathe. One of the most ',
      author: 'Megha Grover',
      readTime: '5 min read'
    },
    {
      id: 3,
      image: '/images/Indoor-Plants.png',
      title: '10 Best Indoor Plants for Delhi',
      description: 'If you live in Delhi–NCR, you already know how much a little greenery can change your space and your mood. Between the traffic, long workdays, and the never-ending pollution levels, having plants around feels like bringing a breath of fresh air indoors.',
      author: 'Pragya',
      readTime: '7 min read'
    },
    {
      id: 4,
      image: '/images/Vertcle-Garden.png',
      title: 'Vertical Walls and Kitchen Gardens ',
      description: 'Living in Delhi–NCR means juggling work, traffic, and the never-ending challenge of keeping your home fresh and green. Between rising pollution and shrinking spaces, the need for greenery inside our homes has never been greater.',
      author: 'Megha Grover',
      readTime: '10 min read'
    },
    {
      id: 5,
      image: '/images/Organic-Gardening.png',
      title: 'Organic Home Gardening Guide',
      description: 'As more people in Delhi-NCR embrace healthier lifestyles, the idea of growing fresh, chemical-free vegetables at home is becoming a beautiful reality. Whether you have a cozy balcony or a spacious terrace, organic gardening allows you to enjoy nutritious, homegrown produce straight from your garden to your kitchen safe, tasty, and full of life.',
      author: 'Megha Grover',
      readTime: '6 min read'
    },
  ];

  const displayedBlogs = allBlogs;

  return (
    <section className="bg-[#FFFAF3] py-6 md:py-12 -mt-[1px]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-5 md:mb-10">
          <h2 className="text-[22px] md:text-4xl md:font-normal text-[#164925] mb-3 sm:mb-4">
            Garden Knowledge Hub
          </h2>
          <p className="text-sm lg:text-base text-green max-w-3xl mx-auto">
            Expert tips, guides, and insights to help you grow a thriving garden
          </p>
        </div>

        {/* Blog Cards - Mobile (horizontal scroll, all items, centered text, 16px image radius) */}
        <div className="flex gap-4 overflow-x-auto mb-5 md:mb-10 scrollbar-hide -mx-4">
          {allBlogs.map((blog) => (
            <div
              key={blog.id}
              className="min-w-[280px] md:min-w-[329px] cursor-pointer -mx-4 md:mx-0 md:px-0 ml-4 last:pr-4"
            >
              {/* Blog Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-105 rounded-[16px]"
                />
              </div>

              {/* Blog Content */}
              <div className="py-5 space-y-3 text-start">
                {/* Title */}
                <h3 className="!text-[18px] font-normal text-green mb-2 leading-7">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-green leading-6 mb-5 line-clamp-2">
                  {blog.description}
                </p>

                {/* Author and Read Time */}
                <div className="flex items-center justify-start gap-2 font-normal leading-5 text-sm text-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12.6666 14V12.6667C12.6666 11.9594 12.3856 11.2811 11.8855 10.781C11.3854 10.281 10.7072 10 9.99992 10H5.99992C5.29267 10 4.6144 10.281 4.1143 10.781C3.6142 11.2811 3.33325 11.9594 3.33325 12.6667V14" stroke="#164925" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.99992 7.33333C9.47268 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47268 2 7.99992 2C6.52716 2 5.33325 3.19391 5.33325 4.66667C5.33325 6.13943 6.52716 7.33333 7.99992 7.33333Z" stroke="#164925" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>{blog.author}</span>
                  <span className="mx-1">•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Cards - Tablet/Desktop (unchanged layout, with View All toggle) */}
        {/* <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {displayedBlogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="py-5 space-y-3">
                <h3 className="text-2xl font-normal text-green mb-2 leading-7">
                  {blog.title}
                </h3>
                <p className="text-[15px] text-green leading-6 mb-5 line-clamp-2">
                  {blog.description}
                </p>

                <div className="flex items-center gap-2 font-normal leading-5 text-sm text-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12.6666 14V12.6667C12.6666 11.9594 12.3856 11.2811 11.8855 10.781C11.3854 10.281 10.7072 10 9.99992 10H5.99992C5.29267 10 4.6144 10.281 4.1143 10.781C3.6142 11.2811 3.33325 11.9594 3.33325 12.6667V14" stroke="#164925" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.99992 7.33333C9.47268 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47268 2 7.99992 2C6.52716 2 5.33325 3.19391 5.33325 4.66667C5.33325 6.13943 6.52716 7.33333 7.99992 7.33333Z" stroke="#164925" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>{blog.author}</span>
                  <span className="mx-1">•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}
