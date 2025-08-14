import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Phone, Mail, MapPin, Clock, Stethoscope, Shield, Star, ArrowUp } from 'lucide-react'

export default function Footer() {
  const footerLinks = [
    {
      title: "Navegação",
      links: [
        { label: "Início", href: "#home" },
        { label: "Sobre", href: "#about" },
        { label: "Serviços", href: "#services" },
        { label: "Contato", href: "#contact" }
      ]
    },
    {
      title: "Serviços",
      links: [
        { label: "Consultas Médicas", href: "#services" },
        { label: "Medicina Preventiva", href: "#services" },
        { label: "Acompanhamento Terapêutico", href: "#services" },
        { label: "Diagnóstico Especializado", href: "#services" }
      ]
    },
    {
      title: "Contato",
      links: [
        { label: "(11) 9999-9999", href: "tel:+5511999999999", icon: Phone },
        { label: "contato@drmoacirsantos.com.br", href: "mailto:contato@drmoacirsantos.com.br", icon: Mail },
        { label: "São Paulo, SP", href: "#", icon: MapPin },
        { label: "Seg-Sex: 8h às 18h", href: "#", icon: Clock }
      ]
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-lg"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-primary-600 rounded-full shadow-lg"
                >
                  <Stethoscope className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold">Dr. Moacir Santos</h3>
                  <p className="text-gray-300">Medicina de Excelência</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Comprometidos com o seu bem-estar e dedicados a oferecer cuidados 
                médicos de alta qualidade com foco em resultados positivos.
              </p>

              {/* Key Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-accent-400" />
                  <span className="text-gray-300">Cuidados especializados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-accent-400" />
                  <span className="text-gray-300">Atendimento humanizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-accent-400" />
                  <span className="text-gray-300">Medicina de qualidade</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              >
                <h4 className="text-xl font-bold mb-6 text-white">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => {
                    const IconComponent = link.icon
                    return (
                      <motion.li
                        key={linkIndex}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a
                          href={link.href}
                          className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                        >
                          {IconComponent && (
                            <IconComponent className="w-4 h-4 text-accent-400 group-hover:text-accent-300" />
                          )}
                          <span className="group-hover:underline">{link.label}</span>
                        </a>
                      </motion.li>
                    )
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-12 border-t border-gray-700"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para Cuidar da Sua Saúde?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Agende sua consulta hoje mesmo e inicie uma jornada de cuidados 
              médicos personalizados e de qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:bg-primary-700 hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Agendar Consulta</span>
              </motion.a>
              <motion.a
                href="tel:+5511999999999"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-secondary-800 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Ligar Agora</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-300 text-center md:text-left"
            >
              <p>&copy; 2024 Dr. Moacir Santos. Todos os direitos reservados.</p>
              <p className="text-sm mt-1">
                Criado com{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 transition-colors"
                >
                  Papum
                </a>
              </p>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-700 text-center"
        >
          <p className="text-sm text-gray-400 max-w-4xl mx-auto leading-relaxed">
            <strong>Aviso Médico:</strong> As informações contidas neste site têm caráter 
            informativo e educacional. Não substituem a consulta médica presencial. 
            Sempre consulte um profissional de saúde qualificado para diagnóstico e 
            tratamento adequados. Em caso de emergência médica, procure imediatamente 
            um serviço de atendimento de urgência.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}