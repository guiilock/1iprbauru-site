import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/shared/Section';
import { CONTENT, CHURCH_INFO } from '../utils/constants';
import { FaBible, FaCross, FaDove, FaUsers, FaHeart, FaChurch } from 'react-icons/fa';

const About = () => {
  const values = [
    { icon: FaBible, text: 'Autoridade das Escrituras', color: 'bg-blue-100' },
    { icon: FaCross, text: 'Centralidade de Cristo', color: 'bg-red-100' },
    { icon: FaDove, text: 'Dependência do Espírito Santo', color: 'bg-green-100' },
    { icon: FaUsers, text: 'Comunhão dos santos', color: 'bg-purple-100' },
    { icon: FaHeart, text: 'Missão integral', color: 'bg-pink-100' },
  ];

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
            <FaChurch className="text-6xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre Nós
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Conheça nossa história, fé e valores
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <Section
        title="Nossa História"
        bgColor="bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              A 1ª Igreja Presbiteriana Renovada de Bauru é parte da Igreja Presbiteriana Renovada do Brasil (IPRB), 
              uma denominação religiosa fundada em 1975 pela união da Igreja Cristã Presbiteriana (ICP) e da 
              Igreja Presbiteriana Independente Renovada (IPIR).
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nossa denominação é fruto do avivamento que se instaurou no meio presbiteriano brasileiro na década 
              de 60 do século XX, quando o movimento pentecostal trouxe renovação espiritual mantendo as bases 
              reformadas da fé cristã.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Somos uma igreja que une a solidez doutrinária reformada com a vivacidade do Espírito Santo, 
              crendo tanto na suficiência das Escrituras quanto na contemporaneidade dos dons espirituais para 
              edificação do corpo de Cristo.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Missão e Visão */}
      <Section bgColor="bg-cream">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h3 className="text-3xl font-bold text-primary mb-6">
              Nossa Missão
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {CONTENT.about.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h3 className="text-3xl font-bold text-primary mb-6">
              Nossa Visão
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {CONTENT.about.vision}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Nossos Valores */}
      <Section
        title="Nossos Valores"
        bgColor="bg-white"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className={`w-20 h-20 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <value.icon className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                {value.text}
              </h3>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Nossa Fé */}
      <Section
        title="Nossa Fé"
        subtitle="Declaração Doutrinária"
        bgColor="bg-gray-50"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="prose prose-lg max-w-none text-gray-700">
            {CONTENT.about.doctrinalStatement.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-2xl font-bold text-primary mb-4">
              Documentos da IPRB
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href={CHURCH_INFO.iprb.confessionOfFaith}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors text-center"
              >
                <span className="font-semibold text-primary">Confissão de Fé</span>
              </a>
              <a
                href={CHURCH_INFO.iprb.internalRegulations}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors text-center"
              >
                <span className="font-semibold text-primary">Regimento Interno</span>
              </a>
              <a
                href={CHURCH_INFO.iprb.disciplineCode}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors text-center"
              >
                <span className="font-semibold text-primary">Código de Disciplina</span>
              </a>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default About;
