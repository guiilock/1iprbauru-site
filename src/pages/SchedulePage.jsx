import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaChurch, FaPray, FaClock, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Section from '../components/shared/Section';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import { CHURCH_INFO } from '../utils/constants';

const SchedulePage = () => {
  const iconMap = {
    FaBook: FaBook,
    FaChurch: FaChurch,
    FaPray: FaPray,
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaClock className="text-6xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Horários e Localização
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Venha adorar conosco e crescer na graça e no conhecimento de Cristo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Horários dos Cultos */}
      <Section
        title="Nossos Cultos"
        bgColor="bg-white"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {CHURCH_INFO.schedule.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="text-center h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                      <IconComponent className="text-accent text-4xl" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 text-secondary mb-3">
                    <FaCalendarAlt className="text-xl" />
                    <span className="font-semibold text-lg">{item.day}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-accent mb-4">
                    <FaClock className="text-xl" />
                    <span className="text-3xl font-bold">{item.time}</span>
                  </div>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Localização */}
      <Section
        title="Nossa Localização"
        bgColor="bg-cream"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <FaMapMarkerAlt className="text-accent mr-3" />
                Endereço
              </h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {CHURCH_INFO.address.full}
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Estacionamento</h4>
                  <p className="text-gray-600">
                    Estacionamento disponível nas proximidades
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Acessibilidade</h4>
                  <p className="text-gray-600">
                    Templo com acesso para pessoas com mobilidade reduzida
                  </p>
                </div>
              </div>

              <Button
                href={CHURCH_INFO.address.mapUrl}
                variant="primary"
                className="w-full"
              >
                <FaMapMarkerAlt className="inline mr-2" />
                Ver no Google Maps
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.4!2d-49.0!3d-22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzAwLjAiUyA0OcKwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Igreja"
            ></iframe>
          </motion.div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section bgColor="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-accent to-accent-light rounded-lg p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Você é Bem-Vindo!
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Venha como está e experimente o amor de Cristo em nossa comunidade. 
            Estamos ansiosos para conhecê-lo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/contato"
              variant="outline"
              className="bg-white text-accent border-white hover:bg-accent hover:text-white"
            >
              Entre em Contato
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default SchedulePage;
