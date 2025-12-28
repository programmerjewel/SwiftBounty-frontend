
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Quote } from "lucide-react"
import SectionHeader from "@/components/ui/section-header"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Salman Haider",
      role: "Freelance Worker",
      photo: "https://i.ibb.co.com/fGPgFVgd/586099097-4323742771192656-2942265504356037351-n.jpg",
      quote:
        "SwiftBounty has completely changed how I earn money online. The tasks are simple, payments are instant whenever I have free time. I've earned over $2,000 in just 3 months!",
      rating: 4,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Small Business Owner",
      photo: "https://i.ibb.co.com/k24QqC0P/john.png",
      quote:
        "As a buyer, I'm impressed with the quality of work and speed of delivery. The platform makes it incredibly easy to get tasks done without hiring full-time staff. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Part-Time Worker",
      photo: "https://i.ibb.co.com/hxPyy52v/Man-32.png",
      quote:
        "I started using SwiftBounty during my college years. It's perfect for students like me perfect for side income. The support team is amazing and always ready to help! Highly recommended for beginners.",
      rating: 5,
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Digital Marketing Agency",
      photo: "https://i.ibb.co.com/r2ZzKq8G/Woman-23.png",
      quote:
        "We've been using SwiftBounty for content moderation, and my client's small tasks. The platform is reliable, workers are skilled, and the pricing is great. Game-changer for our agency!",
      rating: 5,
    },
    {
      id: 5,
      name: "Sarah Johnson",
      role: "Remote Worker",
      photo: "https://i.ibb.co.com/tpwxcSD9/Woman-19.png",
      quote:
        "Working from home has never been easier. SwiftBounty provides consistent task availability and fair compensation. I love the transparency and trust this platform offers.",
      rating: 5,
    },
  ]
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionHeader title = "What Our Users Say" subtitle = "Join thousands of satisfied workers and buyers who trust SwiftBounty for their micro-tasking needs"></SectionHeader>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[ Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            speed={800}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="p-12 testimonials-slider"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-[#ECEBE4] rounded-2xl p-8 h-full flex flex-col mb-10">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-blue-500 opacity-50" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 grow">{testimonial.quote}</p>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <svg key={index} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <img
                      src={testimonial.photo || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 text-pretty">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
    </section>
  );
};

export default Testimonials;