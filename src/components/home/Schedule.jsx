import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaChurch, FaPray, FaClock, FaCalendarAlt } from 'react-icons/fa';
import Section from '../shared/Section';
import Card from '../shared/Card';
import Button from '../shared/Button';
import { CHURCH_INFO } from '../../utils/constants';

const Schedule = () => {
  const iconMap = {
    FaBook: FaBook,
    FaChurch: FaChurch,
    FaPray: FaPray,
  };

  return (
    <Section
      title="Horários dos Cultos"
      subtitle="Venha adorar conosco e crescer na graça e no conhecimento de Cristo"
      bgColor="bg-white"
    >
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {CHURCH_INFO.schedule.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <Card key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <IconComponent className="text-accent text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {item.title}
              </h3>
              <div className="flex items-center justify-center space-x-2 text-secondary mb-3">
                <FaCalendarAlt />
                <span className="font-semibold">{item.day}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-accent mb-4">
                <FaClock />
                <span className="text-2xl font-bold">{item.time}</span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-lg text-gray-700 mb-6">
          Todos são bem-vindos! Venha como está e experimente o amor de Cristo em nossa comunidade.
        </p>
        <Button to="/horarios" variant="primary">
          Ver Mais Informações
        </Button>
      </motion.div>
    </Section>
  );
};

export default Schedule;
