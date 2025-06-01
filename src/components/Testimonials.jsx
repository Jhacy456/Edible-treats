import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

function Testimonials() {
    const [activeSlide, setActiveSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            rating: 5,
            comment:
                "The chocolate truffles were absolutely divine! Everyone at my dinner party was impressed with the quality and presentation. Will definitely order again!",
            date: "May 15, 2025",
        },
        {
            id: 2,
            name: "Michael Addo",
            rating: 5,
            comment:
                "I ordered a gift box for my wife's birthday and she loved it! The packaging was beautiful and the treats were delicious. Excellent customer service too!",
            date: "May 10, 2025",
        },
        {
            id: 3,
            name: "Abena Mensah",
            rating: 4,
            comment:
                "The cookies were fresh and tasty. Delivery was prompt and the packaging kept everything intact. Would recommend to friends and family.",
            date: "May 5, 2025",
        },
    ];

    return (
        <section className="py-16 bg-[#FEF3C7]" id='testimonials'>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold gradient-text mb-2">
                        What Our Customers Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hear from our satisfied customers about their experience with our treats
                    </p>
                </div>

                <div className="relative">
                    <div className="flex overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[#a855f7] max-w-2xl mx-auto">
                                        <div className="flex items-center mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={16}
                                                    className={`mr-1 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 italic mb-6">
                                            "{testimonial.comment}"
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-semibold text-amber-900">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-gray-500 text-sm">
                                                    Verified Purchase
                                                </p>
                                            </div>
                                            <span className="text-gray-400 text-sm">
                                                {testimonial.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() =>
                            setActiveSlide((prev) =>
                                prev > 0 ? prev - 1 : testimonials.length - 1
                            )
                        }
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-[#a855f7] hover:text-[#c797f5] transition-colors duration-300"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={() =>
                            setActiveSlide((prev) =>
                                prev < testimonials.length - 1 ? prev + 1 : 0
                            )
                        }
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-[#a855f7] hover:text-[#c797f5] transition-colors duration-300"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === index ? "bg-[#a855f7] w-6" : "bg-[#c797f5]"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
