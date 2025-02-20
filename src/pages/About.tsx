import { motion } from 'framer-motion';
import { Bot, Users, Clock, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <img
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=200&h=200"
                alt="Digital Government"
                className="w-32 h-32 rounded-full shadow-xl object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">About DocGuide</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're on a mission to make government services accessible and easy to understand for everyone through AI-powered assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At DocGuide, we understand the challenges citizens face when navigating government services. Our AI-powered platform, featuring DocGenie, is designed to simplify this process and make government services more accessible to everyone.
              </p>
              <p className="text-gray-600">
                We're committed to providing accurate, up-to-date information and guidance, ensuring that every citizen can access the services they need without confusion or frustration.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600"
                alt="Digital Services"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Government Services Made Simple</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=400&h=300"
                alt="Passport Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">Passport Services</h3>
                <p className="text-gray-600">Quick and easy passport application process</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=400&h=300"
                alt="Tax Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">Tax Filing</h3>
                <p className="text-gray-600">Simplified tax filing assistance</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=400&h=300"
                alt="Driver's License"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">Driver's License</h3>
                <p className="text-gray-600">Streamlined license application</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Created by Team Undertakers</h2>
            <p className="text-gray-600">A passionate team dedicated to simplifying government services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=400"
                alt="Team Collaboration"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">Innovation & Technology</h3>
                <p className="text-gray-600">Leveraging cutting-edge AI to serve citizens better</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&h=400"
                alt="Digital Service"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">User-Centric Approach</h3>
                <p className="text-gray-600">Designed with citizens' needs in mind</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose DocGuide?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bot,
                title: "AI-Powered Assistance",
                description: "Our intelligent chatbot DocGenie provides instant, accurate guidance"
              },
              {
                icon: Users,
                title: "User-Friendly",
                description: "Simple interface designed for users of all technical abilities"
              },
              {
                icon: Clock,
                title: "Time-Saving",
                description: "Quick access to the exact information and services you need"
              },
              {
                icon: Shield,
                title: "Reliable & Secure",
                description: "Access to only verified government sources and secure information"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}