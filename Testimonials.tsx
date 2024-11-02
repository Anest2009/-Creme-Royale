import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      author: "Alexandra D.",
      role: "Food Critic, Luxury Lifestyle Magazine",
      content: "An extraordinary elevation of ice cream to high art. Each flavor is a masterpiece of culinary innovation.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
    {
      author: "James M.",
      role: "Executive Chef, The Golden Plate",
      content: "The attention to detail and quality of ingredients is unmatched. A true luxury experience.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    },
    {
      author: "Isabella R.",
      role: "Lifestyle Influencer",
      content: "CRÈME ROYALE has redefined what premium ice cream should taste like. Simply divine.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-16">
          Connoisseur <span className="text-amber-400">Reviews</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-white/10 hover:border-amber-400/50 transition-colors"
            >
              <div className="flex items-center space-x-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;