import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaPlay } from 'react-icons/fa';
import Section from '../shared/Section';
import Button from '../shared/Button';
import YouTubeEmbed from './YouTubeEmbed';
import { CHURCH_INFO } from '../../utils/constants';

const LatestSermons = () => {
  // Vídeos mais recentes do canal @1iprbauru
  // Para atualizar: acesse o canal e copie os IDs dos vídeos mais recentes
  // O ID do vídeo é a parte após "watch?v=" na URL do YouTube
  // Exemplo: https://www.youtube.com/watch?v=ABC123 -> ID: ABC123
  const recentVideos = [
    {
      id: '_54Mg7f5PK0', // Substitua pelo ID real do vídeo mais recente
      title: 'Testemunho da Miss. Vera Rissato',
      description: 'Assista ao testemunho da Miss. Vera Rissato',
    },
    {
      id: 'MjRxP6ZZH_I', // Substitua pelo ID real do segundo vídeo
      title: 'Abraão, o exemplo de como Deus muda uma geração',
      description: 'Sermão semanal do Pr. Netto',
    },
    {
      id: 'iKldLoYsseA', // Substitua pelo ID real do terceiro vídeo
      title: 'Das trevas a Luz',
      description: 'Peça musical',
    },
  ];

  return (
    <Section
      title="Vídeos"
      subtitle="Assista alguns vídeos importantes da nossa igreja"
      bgColor="bg-white"
    >
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {recentVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="mb-4">
              <YouTubeEmbed videoId={video.id} title={video.title} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">
              {video.title}
            </h3>
            <p className="text-sm text-gray-600">{video.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center bg-gradient-to-r from-accent to-accent-light rounded-lg p-8 text-white"
      >
        <FaYoutube className="text-6xl mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4">
          Inscreva-se no Nosso Canal
        </h3>
        <p className="text-lg mb-6 opacity-90">
          Não perca nenhuma mensagem! Acompanhe nossos cultos e estudos bíblicos.
        </p>
        <Button
          href={CHURCH_INFO.social.youtube}
          variant="outline"
          className="bg-white text-accent border-white hover:bg-accent hover:text-white"
        >
          <FaYoutube className="inline mr-2" />
          Acessar Canal no YouTube
        </Button>
      </motion.div>
    </Section>
  );
};

export default LatestSermons;
