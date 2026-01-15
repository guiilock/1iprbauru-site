import React from 'react';
import { motion } from 'framer-motion';
import Section from '../shared/Section';
import Button from '../shared/Button';
import { CONTENT } from '../../utils/constants';
import { FaBible, FaCross, FaDove, FaUsers, FaHeart } from 'react-icons/fa';

const Welcome = () => {
  const values = [
    { icon: FaBible, text: 'Autoridade das Escrituras' },
    { icon: FaCross, text: 'Centralidade de Cristo' },
    { icon: FaDove, text: 'Dependência do Espírito Santo' },
    { icon: FaUsers, text: 'Comunhão dos santos' },
    { icon: FaHeart, text: 'Missão integral' },
  ];

  return (
    <Section
      title="Bem-vindos à Nossa Comunidade"
      subtitle="Uma igreja fundamentada na Palavra de Deus e vivificada pelo Espírito Santo"
      bgColor="bg-cream"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Left column - Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
              <span className="w-1 h-8 bg-accent mr-3"></span>
              Nossa Missão
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {CONTENT.about.mission}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
              <span className="w-1 h-8 bg-accent mr-3"></span>
              Nossa Visão
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {CONTENT.about.vision}
            </p>
          </div>
        </motion.div>

        {/* Right column - Values */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Nossos Valores
          </h3>
          <div className="space-y-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-cream transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <value.icon className="text-accent text-xl" />
                </div>
                <span className="text-gray-700 font-medium">{value.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Doctrinal Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-xl p-8 md:p-12"
      >
        <h3 className="text-3xl font-bold text-primary mb-6 text-center">
          Nossa Fé
        </h3>
        <div className="prose prose-lg max-w-none text-gray-700">
          {CONTENT.about.doctrinalStatement.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/sobre" variant="secondary">
            Saiba Mais Sobre Nós
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};

export default Welcome;
