import React from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, Heart, Activity, Shield, Clock, Star, Phone, Calendar, CheckCircle, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Consultas Médicas",
      description: "Avaliação médica completa com anamnese detalhada, exame físico e orientações personalizadas para sua saúde.",
      features: ["Consulta inicial completa", "Acompanhamento médico", "Orientações personalizadas", "Plano de tratamento"],
      color: "from-blue-500 to-blue-600",
      gradient: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      icon: Heart,
      title: "Medicina Preventiva",
      description: "Foco na prevenção de doenças através de check-ups regulares, exames de rotina e acompanhamento contínuo.",
      features: ["Check-ups regulares", "Exames de rotina", "Vacinação", "Orientação nutricional"],
      color: "from-red-500 to-red-600",
      gradient: "bg-gradient-to-br from-red-50 to-red-100"
    },
    {
      icon: Activity,
      title: "Acompanhamento Terapêutico",
      description: "Monitoramento contínuo de tratamentos com ajustes personalizados e suporte completo ao paciente.",
      features: ["Monitoramento contínuo", "Ajuste de tratamentos", "Suporte ao paciente", "Evolução clínica"],
      color: "from-green-500 to-green-600",
      gradient: "bg-gradient-to-br from-green-50 to-green-100"
    },
    {
      icon: Shield,
      title: "Diagnóstico Especializado",
      description: "Investigação clínica aprofundada com uso de tecnologia moderna para diagnósticos precisos e eficazes.",
      features: ["Investigação clínica", "Diagnóstico preciso", "Tecnologia moderna", "Laudos detalhados"],
      color: "from-purple-500 to-purple-600",
      gradient: "bg-gradient-to-br from-purple-50 to-purple-100"
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Respeitamos seu tempo com pontualidade e eficiência"
    },
    {
      icon: Star,
      title: "Qualidade Comprovada",
      description: "Medicina baseada em evidências e melhores práticas"
    },
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Atendimento personalizado focado no paciente"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Protocolos rigorosos de segurança e higiene"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Agendamento",
      description: "Entre em contato para agendar sua consulta de forma rápida e prática",
      icon: Phone
    },
    {
      step: "02", 
      title: "Consulta Médica",
      description: "Atendimento personalizado com tempo adequado para suas necessidades",
      icon: Stethoscope
    },
    {
      step: "03",
      title: "Diagnóstico",
      description: "Avaliação completa com diagnóstico preciso e plano de tratamento",
      icon: Activity
    },
    {
      step: "04",
      title: "Acompanhamento",
      description: "Suporte contínuo e monitoramento da evolução do seu tratamento",
      icon: Heart
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block p-3 bg-primary-100 rounded-full mb-6"
          >
            <Stethoscope className="w-8 h-8 text-primary-600" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-800 mb-6">
            Nossos{' '}
            <span className="gradient-text">Serviços Médicos</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços médicos com foco na excelência, 
            inovação e cuidado personalizado para cada paciente.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`${service.gradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 h-full flex flex-col`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-4 h-4 text-accent-600 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full text-center group"
                  >
                    Agendar Consulta
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200 inline" />
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
              Como Funciona o{' '}
              <span className="gradient-text">Atendimento</span>
            </h3>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Um processo simples e eficiente para cuidar da sua saúde
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center relative"
                >
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>

                  <h4 className="text-xl font-bold text-secondary-800 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-secondary-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-200 transform -translate-y-1/2 z-0" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
              Por que Escolher{' '}
              <span className="gradient-text">Dr. Moacir Santos</span>
            </h3>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Diferenciais que fazem toda a diferença no seu atendimento médico
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-secondary-800 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-secondary-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <Calendar className="w-12 h-12 text-white" />
            </motion.div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Pronto para Cuidar da Sua Saúde?
            </h3>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Agende sua consulta hoje mesmo e dê o primeiro passo para uma vida 
              mais saudável com acompanhamento médico de qualidade.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center group"
            >
              Agendar Consulta Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}