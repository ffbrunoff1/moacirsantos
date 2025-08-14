import React from 'react'
import { motion } from 'framer-motion'
import { User, Award, Heart, Clock, Shield, Star, CheckCircle, GraduationCap } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description: "Graduação em Medicina com especialização e constante atualização profissional",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Mais de 15 anos dedicados ao cuidado da saúde e bem-estar dos pacientes",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Atendimento personalizado com foco na relação médico-paciente",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Medicina Preventiva",
      description: "Foco na prevenção e diagnóstico precoce para melhor qualidade de vida",
      color: "from-green-500 to-green-600"
    }
  ]

  const values = [
    "Excelência no atendimento médico",
    "Compromisso com resultados positivos",
    "Inovação e tecnologia em saúde",
    "Ética e transparência profissional",
    "Cuidado integral do paciente",
    "Medicina baseada em evidências"
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
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
            <User className="w-8 h-8 text-primary-600" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-800 mb-6">
            Sobre{' '}
            <span className="gradient-text">Dr. Moacir Santos</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Dedicado à medicina com excelência, oferecendo cuidados personalizados 
            e comprometido com o bem-estar integral de cada paciente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-secondary-800 mb-6">
                Medicina de Qualidade e Humanizada
              </h3>
              <div className="space-y-4 text-secondary-600 text-lg leading-relaxed">
                <p>
                  Dr. Moacir Santos é um profissional dedicado à medicina com uma abordagem 
                  humanizada e personalizada. Com anos de experiência no setor médico, 
                  oferece atendimento de excelência focado na saúde e bem-estar dos pacientes.
                </p>
                <p>
                  Sua prática médica é baseada em evidências científicas, sempre buscando 
                  as melhores práticas e tecnologias disponíveis para proporcionar 
                  tratamentos eficazes e resultados positivos.
                </p>
                <p>
                  "A saúde é o nosso maior patrimônio" - essa filosofia guia cada consulta 
                  e procedimento, garantindo que cada paciente receba o cuidado integral 
                  que merece.
                </p>
              </div>
            </div>

            {/* Values List */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-secondary-800 mb-4">
                Nossos Valores e Compromissos:
              </h4>
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-secondary-700">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Doctor Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
              {/* Doctor Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <User className="w-16 h-16 text-white" />
                </motion.div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-secondary-800 mb-2">Dr. Moacir Santos</h3>
                <p className="text-primary-600 font-semibold mb-4">Médico Especialista</p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600">15+</div>
                    <div className="text-sm text-secondary-600">Anos de experiência</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600">1000+</div>
                    <div className="text-sm text-secondary-600">Pacientes atendidos</div>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="space-y-3">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full text-center block"
                  >
                    Agendar Consulta
                  </motion.a>
                  <motion.a
                    href="tel:+5511999999999"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary w-full text-center block"
                  >
                    Ligar Agora
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Star className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-bold text-secondary-800 mb-3">
                  {achievement.title}
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <Heart className="w-12 h-12 text-white" />
            </motion.div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Nossa Missão
            </h3>
            <p className="text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto opacity-90">
              "Proporcionar cuidados médicos de excelência com humanização, 
              inovação e dedicação, sempre priorizando o bem-estar e a qualidade 
              de vida de nossos pacientes."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}