import React from 'react';
import { Truck, Award, Leaf } from 'lucide-react'; 
import logo from '../assets/images/etlogo.png'

const AboutUs = () => {
  return (
    <section className="py-16" id='about-us'>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src={logo}
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
              Our journey began with a simple mission: to create exceptional edible treats that bring joy to every occasion. We produce high-quality chocolate blends made with cocoa and infused with other food crops such as cashew nuts, ginger, peanuts, and coconut.

              In addition, we offer a wide variety of pastries, including cupcakes, cookies, and all types of cakes for your special occasions.

              We are also committed to empowering youth—especially young women—by providing practical economic and vocational skills through our baking classes and training programs, promoting financial independence and self-sufficiency.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
            Our founder, Yvonne Nouriyee, ensures that every product is handcrafted with premium ingredients, meticulous attention to detail, and a strong commitment to excellence.
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
