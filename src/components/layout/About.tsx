import { motion } from "framer-motion";
import { Users, Shield, TrendingUp, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-16 px-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-4xl font-extrabold text-indigo-700 sm:text-5xl">
          Welcome to Mountains Tech 🚀
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Empowering innovators and communities through seamless **fundraising,
          project financing, and membership engagement.**
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="bg-indigo-600 p-3 rounded-full">
              <feature.icon className="h-10 w-10 text-white" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 bg-indigo-700 text-white py-10 px-6 rounded-lg text-center max-w-4xl"
      >
        <h2 className="text-3xl font-bold">Join Us & Make an Impact!</h2>
        <p className="mt-3 text-lg">
          Be part of a platform that fuels innovation, connects great minds, and
          secures financial transparency.
        </p>
      </motion.div>
    </div>
  );
}

const features = [
  {
    title: "Community-Driven",
    description:
      "A thriving hub for developers, investors, and entrepreneurs working together to create impact.",
    icon: Users,
  },
  {
    title: "Secure Transactions",
    description:
      "Advanced encryption & authentication ensure the highest level of financial security.",
    icon: Shield,
  },
  {
    title: "Smart Project Financing",
    description:
      "Get the funding you need, track your investments, and manage repayment seamlessly.",
    icon: TrendingUp,
  },
  {
    title: "Collaboration & Growth",
    description:
      "Connect with like-minded individuals and turn ideas into successful projects.",
    icon: HeartHandshake,
  },
];
