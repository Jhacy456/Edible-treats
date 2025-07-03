import React, { useState } from 'react';
import { ChefHat, Users, Clock, Award, Star, ArrowRight, Play, Calendar, MapPin, Heart, Trophy, BookOpen } from 'lucide-react';
import train3 from '../assets/images/train3.jpg'
import train6 from '../assets/images/train6.jpg'
import train5 from '../assets/images/train5.jpg'
import train1 from '../assets/images/train1.jpg'
import train2 from '../assets/images/train2.jpg'
import train4 from '../assets/images/train4.jpg'
function Trainings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <EdibleTreatsTrainingSection />
    </div>
  );
}

function EdibleTreatsTrainingSection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Professional Cake Decorating",
      duration: "8 Weeks",
      level: "Beginner to Advanced",
      students: 24,
      rating: 4.9,
      price: "GH₵5000",
      image: train6,
      description: "Master the art of cake decoration with hands-on training in buttercream techniques, fondant work, and floral arrangements.",
      highlights: ["Buttercream Piping", "Fondant Sculpting", "Sugar Flowers", "Wedding Cake Design"]
    },
    {
      id: 2,
      title: "Artisan Baking Fundamentals",
      duration: "4 Weeks",
      level: "Beginner",
      students: 18,
      rating: 4.8,
      price: "GH₵3000",
      image: train5,
      description: "Learn essential baking techniques, from mixing and measuring to creating perfect textures and flavors.",
      highlights: ["Bread Making", "Pastry Basics", "Flavor Pairing", "Kitchen Safety"]
    },
    {
      id: 3,
      title: "Advanced Pastry Arts",
      duration: "1 Week",
      level: "Intermediate",
      students: 15,
      rating: 4.9,
      price: "GH₵500",
      image: train1,
      description: "Elevate your skills with complex pastry techniques, chocolate work, and professional presentation methods.",
      highlights: ["Chocolate Tempering", "Laminated Doughs", "Plated Desserts", "Business Skills"]
    }
  ];

  const features = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from certified pastry chefs with years of industry experience"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Small Class Sizes",
      description: "Maximum 8 students per class ensuring personalized attention"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "Weekend and evening classes available to fit your schedule"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Certification",
      description: "Receive recognized certificates that boost your credibility"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Baker turned Entrepreneur",
      content: "The hands-on approach at Edible Treats transformed my baking skills completely. I now run my own successful cake business!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Michael Chen",
      role: "Professional Pastry Chef",
      content: "This training gave me the confidence and skills I needed to advance my career. The instructors are incredibly supportive.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-orange-50" id='trainings'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-4">
              <ChefHat className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional <span className="text-transparent  gradient-text bg-clip-text">Training Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your passion for baking into professional expertise with our comprehensive hands-on training programs
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg flex flex-wrap gap-2 sm:gap-0 overflow-x-auto max-w-full">
            {['overview', 'courses', 'features'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-[#ec4899] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Where Passion Meets Professional Excellence
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our state-of-the-art training facility provides the perfect environment for aspiring bakers 
                and seasoned professionals to master their craft through hands-on learning and expert guidance.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-pink-600 mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Graduates</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">4.9★</div>
                  <div className="text-gray-600 font-medium">Rating</div>
                </div>
              </div>

              <button 
                onClick={() => setActiveTab('courses')}
                className="bg-[#ec4899] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <img 
                src={train3} 
                alt="Students learning cake decoration" 
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-bold text-gray-900">4.9/5</span>
                  <span className="text-gray-600 text-sm">Rating</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Learning Path
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From beginner basics to advanced techniques, find the perfect course for your skill level
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div 
                  key={course.id} 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                      {course.price}
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-xs sm:text-sm font-medium text-gray-700">{course.rating}</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs sm:text-sm text-gray-600">{course.students} students</span>
                    </div>
                    
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{course.title}</h4>
                    <p className="text-gray-600 mb-2 text-xs sm:text-sm leading-relaxed">{course.description}</p>
                    
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">{course.level}</span>
                    </div>
                    
                    <div className="space-y-1 mb-4">
                      {course.highlights.slice(0, 2).map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                    
                    <a
                      href="https://wa.me/233249967700"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#ec4899] text-white py-2 sm:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex justify-center items-center"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Training?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the difference with our comprehensive approach to culinary education
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-shadow">
                    <div className="text-pink-600 group-hover:text-orange-500 transition-colors flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Training Environment Images */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <img 
                  src={train2} 
                  alt="Professional training kitchen" 
                  className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-contain rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Professional Kitchen</h4>
                  <p className="text-sm opacity-90">State-of-the-art equipment and workspace</p>
                </div>
              </div>
              
              <div className="relative group">
                <img 
                  src={train4} 
                  alt="Hands-On Learning"
                  className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-contain rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Hands-On Learning</h4>
                  <p className="text-sm opacity-90">Practice with real ingredients and techniques</p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-16">
              <h4 className="text-2xl font-bold text-center text-gray-900 mb-8">What Our Students Say</h4>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-pink-600 to-purple-500 rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl mb-8 opacity-90">Join hundreds of successful graduates who transformed their passion into profession</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 flex justify-center items-center"
            >
              Enroll Today
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trainings;