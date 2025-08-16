import { Bird, BriefcaseBusiness, Camera, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12 sm:py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Maxius
            </h3>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
              Innovative solutions for the modern startup ecosystem. 
              Build, scale, and succeed with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Bird/>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300">
                <BriefcaseBusiness/>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Camera/>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Phone/>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Maxius. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}