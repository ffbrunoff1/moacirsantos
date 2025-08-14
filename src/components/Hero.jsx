import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Star, Award, Clock, MapPin } from 'lucide-react'

export default function Hero() {
  const floatingIcons = [
    { icon: Heart, delay: 0, x: 100, y: 50 },
    { icon: Shield, delay: 0.5, x: -80, y: 100 },
    { icon: Star, delay: 1, x: 120, y: -80 },
    { icon: Award, delay: 1.5, x: -100, y: -50 }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Medical Gradient */}
      <div className="absolute inset-0 medical-gradient"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Medical Icons */}
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon
          return (
            <motion.div
              key={index}
              className="absolute opacity-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.1, 
                scale: 1,
                x: [0, item.x * 0.5, item.x, item.x * 0.5, 0],
                y: [0, item.y * 0.5, item.y, item.y * 0.5, 0]
              }}
              transition={{ 
                duration: 8, 
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + (index * 20)}%`,
                top: `${20 + (index * 15)}%`
              }}
            >
              <IconComponent className="w-16 h-16 text-white" />
            </motion.div>
          )
        })}

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-white/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                ✨ Medicina de Excelência
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Cuide da sua{' '}
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  saúde
                </span>{' '}
                com excelência médica
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Comprometidos com o seu bem-estar e dedicados a oferecer cuidados médicos 
                de alta qualidade com foco em resultados positivos.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/90">Atendimento personalizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/90">Cuidados especializados</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/90">Foco no bem-estar</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/90">Medicina de qualidade</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              >
                Agendar Consulta
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 text-center"
              >
                Conhecer Dr. Moacir
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 text-sm"
            >
              <div className="flex items-center space-x-2">
                <div className="p-1 bg-white/20 backdrop-blur-sm rounded">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-white/80">São Paulo, SP</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1 bg-white/20 backdrop-blur-sm rounded">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-white/80">Segunda à Sexta: 8h às 18h</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Doctor Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Background decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 border-2 border-white/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-24 h-24 border-2 border-white/30 rounded-lg"
              />
              
              {/* Main content card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Stethoscope className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Dr. Moacir Santos</h3>
                  <p className="text-white/80 mb-6">Especialista em Medicina</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">15+</div>
                      <div className="text-sm text-white/80">Anos de experiência</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">1000+</div>
                      <div className="text-sm text-white/80">Pacientes atendidos</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}