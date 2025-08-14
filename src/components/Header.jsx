import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail, Stethoscope } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className={`p-2 rounded-full transition-all duration-300 ${
              isScrolled ? 'bg-primary-600' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <Stethoscope className={`w-8 h-8 transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-primary-600'
              }`} />
            </div>
            <div>
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-secondary-800' : 'text-white'
              }`}>
                Dr. Moacir Santos
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-secondary-600' : 'text-white/80'
              }`}>
                Medicina de Excelência
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-secondary-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 mr-6">
              <div className="flex items-center space-x-2">
                <Phone className={`w-4 h-4 transition-colors duration-300 ${
                  isScrolled ? 'text-primary-600' : 'text-white'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-secondary-700' : 'text-white'
                }`}>
                  (11) 9999-9999
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className={`w-4 h-4 transition-colors duration-300 ${
                  isScrolled ? 'text-primary-600' : 'text-white'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-secondary-700' : 'text-white'
                }`}>
                  contato@drmoacirsantos.com.br
                </span>
              </div>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Agendar Consulta
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-secondary-700 hover:bg-secondary-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="lg:hidden overflow-hidden bg-white shadow-lg rounded-lg mt-2"
        >
          <div className="py-4 px-6 space-y-4">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-secondary-700 hover:text-primary-600 font-medium transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <div className="pt-4 border-t border-secondary-200">
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="w-4 h-4 text-primary-600" />
                <span className="text-sm text-secondary-700">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <Mail className="w-4 h-4 text-primary-600" />
                <span className="text-sm text-secondary-700">contato@drmoacirsantos.com.br</span>
              </div>
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full text-center"
              >
                Agendar Consulta
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}