import React from 'react';
import { Truck, Award, Leaf } from 'lucide-react'; // Import matching icons

const AboutUs = () => {
  return (
    <section className="py-16" id='about-us'>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20female%20pastry%20chef%20in%20a%20modern%20kitchen%20preparing%20gourmet%20treats%20with%20attention%20to%20detail%2C%20warm%20lighting%20highlighting%20her%20focused%20expression%2C%20artisanal%20food%20preparation%20with%20elegant%20kitchen%20equipment%20and%20ingredients%20visible&width=600&height=600&seq=17&orientation=squarish"
              alt="About Our Company"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          {/* Text Content Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              About Our Passion
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2020, our journey began with a simple mission: to create exceptional edible treats that bring joy to every occasion. What started as a small home kitchen experiment has grown into Ghana's premier artisanal treat company.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our founder, Akosua Mensah, combines traditional Ghanaian flavors with international techniques learned during her culinary training in France. Every product is handcrafted with premium ingredients, attention to detail, and a commitment to excellence.
            </p>

            {/* Features List */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-amber-50 px-4 py-3 rounded-lg flex items-center">
                <Award size={20} className="text-[#ec4899] mr-2" />
                <span className="gradient-text font-medium">Award Winning</span>
              </div>
              <div className="bg-amber-50 px-4 py-3 rounded-lg flex items-center">
                <Leaf size={20} className="text-[#ec4899] mr-2" />
                <span className="gradient-text font-medium">Natural Ingredients</span>
              </div>
              <div className="bg-amber-50 px-4 py-3 rounded-lg flex items-center">
                <Truck size={20} className="text-[#ec4899] mr-2" />
                <span className="gradient-text font-medium">Nationwide Delivery</span>
              </div>
            </div>

            <button className="bg-[#ec4899] hover:bg-[#f88ec3] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 whitespace-nowrap">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
