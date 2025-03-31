import { Mail, Phone, MapPin } from "lucide-react"
import AnimatedSection from "./animated"

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Get in Touch</h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="mr-2" size={20} />
                  <span>ephremeamanu@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="mr-2" size={20} />
                  <span>+251-974-222-184</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="mr-2" size={20} />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Send a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

