import { ArrowRight, Bot, Globe, Languages, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Your Smart Guide to Government Services
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Let DocGenie, our AI assistant, navigate you through government services and save precious time. Get instant access to official portals and step-by-step guidance.
              </p>
              <Link
                to="/chat"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-lg"
              >
                Start Chat with DocGenie <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block relative"
            >
              <img
                src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=600"
                alt="Digital Services"
                className="rounded-xl shadow-2xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl"
              >
                <Bot className="h-12 w-12 text-blue-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Government Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Get instant guidance and official links for various government services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Passport Services",
                image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=400",
                points: ["Online Application", "Document Requirements", "Appointment Booking"]
              },
              {
                title: "Driver's License",
                image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=400",
                points: ["Learner's License", "Driving Test", "License Renewal"]
              },
              {
                title: "Tax Filing",
                image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=400",
                points: ["ITR Filing", "Tax Calculator", "Document Upload"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose DocGuide?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bot,
                title: "Smart AI Chatbot",
                description: "DocGenie understands your needs and provides instant guidance"
              },
              {
                icon: Globe,
                title: "Multi-Platform",
                description: "Access via web, mobile apps, WhatsApp, and Telegram"
              },
              {
                icon: Languages,
                title: "Multi-Language",
                description: "Support for regional languages for wider accessibility"
              },
              {
                icon: Shield,
                title: "Secure & Trusted",
                description: "Access only verified, official government sources"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Simplify Your Government Service Experience?
          </h2>
          <Link
            to="/chat"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-lg"
          >
            Chat with DocGenie Now <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}