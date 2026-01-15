import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaUsers, FaChurch } from 'react-icons/fa';
import Section from '../components/shared/Section';
import Card from '../components/shared/Card';

const Leadership = () => {
  const leadershipStructure = {
    pastor: {
      name: 'Pr. Netto',
      title: 'Pastor Presidente',
      photo: '/images/lideranca/pastor-netto.png',
      bio: 'Conhecido carinhosamente como Pr. Netto, o Rev. Benedito Vieira da Silva lidera com o propósito de servir. Atual Presidente do Presbitério de Bauru da IPRB, ele dedica sua vida a edificar uma igreja relevante, organizada e fundamentada na Palavra. Seja na liderança regional ou no pastoreio local, seu foco é promover um ambiente de crescimento espiritual saudável e acolhimento para todas as famílias.',
    },
    presbyters: [
      {
        name: 'Mauro Almeida',
        photo: '/images/lideranca/mauro-almeida.png',
        role: 'Presbítero Vice Presidente',
      },
      {
        name: 'Guilherme Nascimento',
        photo: '/images/lideranca/guilherme-nascimento.png',
        role: 'Presbítero Secretário',
      },
      {
        name: 'Eraldo Forte',
        photo: '/images/lideranca/eraldo-forte.png',
        role: 'Presbítero',
      },
      {
        name: 'João Cândido',
        photo: '/images/lideranca/joao-candido.png',
        role: 'Presbítero',
      },
      {
        name: 'Ricardo Almeida',
        photo: '/images/lideranca/ricardo-almeida.png',
        role: 'Presbítero',
      },
    ],
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
            <FaUserTie className="text-6xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nossa Liderança
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Conheça aqueles que Deus chamou para pastorear e servir nossa congregação
            </p>
          </motion.div>
        </div>
      </section>

      {/* Governo Presbiteriano */}
      <Section
        title="Governo Presbiteriano"
        bgColor="bg-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="bg-cream rounded-lg p-8">
            <FaChurch className="text-5xl text-accent mx-auto mb-4" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Reconhecemos o governo presbiteriano como bíblico, onde presbíteros são chamados por Deus 
              para pastorear, ensinar e governar a igreja local. Este modelo de liderança plural reflete 
              o padrão neotestamentário e promove sabedoria, prestação de contas e cuidado pastoral.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Pastor Presidente */}
      <Section bgColor="bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <img
                  src={leadershipStructure.pastor.photo}
                  alt={leadershipStructure.pastor.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="md:col-span-2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {leadershipStructure.pastor.name}
                </h2>
                <p className="text-xl text-accent mb-4">
                  {leadershipStructure.pastor.title}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {leadershipStructure.pastor.bio}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Presbíteros */}
      <Section
        title="Conselho de Presbíteros"
        subtitle="Líderes chamados para servir e pastorear a congregação"
        bgColor="bg-white"
      >
        {/* Diretoria - 2 primeiros (Vice-Presidente e Secretário) */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {leadershipStructure.presbyters.slice(0, 2).map((presbyter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-full sm:w-80"
            >
              <Card className="text-center">
                <img
                  src={presbyter.photo}
                  alt={presbyter.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-primary mb-2">
                  {presbyter.name}
                </h3>
                <p className="text-secondary font-semibold">
                  {presbyter.role}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Demais Presbíteros - 3 últimos */}
        <div className="flex flex-wrap justify-center gap-8">
          {leadershipStructure.presbyters.slice(2).map((presbyter, index) => (
            <motion.div
              key={index + 2}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 2) * 0.1, duration: 0.5 }}
              className="w-full sm:w-80"
            >
              <Card className="text-center">
                <img
                  src={presbyter.photo}
                  alt={presbyter.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-primary mb-2">
                  {presbyter.name}
                </h3>
                <p className="text-secondary font-semibold">
                  {presbyter.role}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Versículo */}
      <Section bgColor="bg-gradient-to-r from-primary to-secondary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <FaUsers className="text-6xl mx-auto mb-6 opacity-80" />
          <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
            "Obedeçam aos seus líderes e submetam-se à autoridade deles. 
            Eles cuidam de vocês como quem deve prestar contas. 
            Obedeçam-lhes, para que o trabalho deles seja uma alegria e não um peso, 
            pois isso não seria proveitoso para vocês."
          </blockquote>
          <p className="text-xl font-semibold">
            Hebreus 13:17
          </p>
        </motion.div>
      </Section>

      {/* Nota informativa */}
      <Section bgColor="bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-xl p-8 text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-600 italic">
            As informações completas sobre nossa liderança, incluindo fotos e biografias, 
            serão atualizadas em breve. Para mais informações, entre em contato conosco.
          </p>
        </motion.div>
      </Section>
    </div>
  );
};

export default Leadership;
