import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPaperPlane
} from 'react-icons/fa';
import Section from '../components/shared/Section';
import Card from '../components/shared/Card';
import { CHURCH_INFO } from '../utils/constants';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simular envio (futuramente integrar com backend)
    const mailtoLink = `mailto:${CHURCH_INFO.contact.email}?subject=${encodeURIComponent(
      data.subject === 'prayer' ? 'Pedido de Oração' : 'Contato pelo Site'
    )}&body=${encodeURIComponent(
      `Nome: ${data.name}\nEmail: ${data.email}\nTelefone: ${data.phone || 'Não informado'}\n\nMensagem:\n${data.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setSubmitMessage('Redirecionando para seu cliente de email...');
    setTimeout(() => {
      setSubmitMessage('');
      reset();
      setIsSubmitting(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: FaMapMarkerAlt,
      title: 'Endereço',
      content: CHURCH_INFO.address.full,
      link: CHURCH_INFO.address.mapUrl,
      color: 'bg-blue-100',
    },
    {
      icon: FaPhone,
      title: 'Telefone',
      content: CHURCH_INFO.contact.phoneFormatted,
      link: `tel:${CHURCH_INFO.contact.phone}`,
      color: 'bg-green-100',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: 'Envie uma mensagem',
      link: CHURCH_INFO.contact.whatsapp,
      color: 'bg-green-100',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: CHURCH_INFO.contact.email,
      link: `mailto:${CHURCH_INFO.contact.email}`,
      color: 'bg-red-100',
    },
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
            <FaPaperPlane className="text-6xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em Contato
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Estamos aqui para ouvir você. Entre em contato conosco!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Métodos de Contato */}
      <Section bgColor="bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="block"
            >
              <Card className="text-center h-full hover:scale-105 transition-transform">
                <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="text-primary text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {method.content}
                </p>
              </Card>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Formulário e Mapa */}
      <Section bgColor="bg-cream">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Envie uma Mensagem
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Nome é obrigatório' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido'
                      }
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    {...register('subject', { required: 'Selecione um assunto' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Selecione...</option>
                    <option value="general">Informações Gerais</option>
                    <option value="visit">Quero Visitar a Igreja</option>
                    <option value="prayer">Pedido de Oração</option>
                    <option value="ministry">Participar de um Ministério</option>
                    <option value="other">Outro</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register('message', { required: 'Mensagem é obrigatória' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>

                {submitMessage && (
                  <p className="text-green-600 text-center">{submitMessage}</p>
                )}
              </form>
            </Card>
          </motion.div>

          {/* Mapa e Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Mapa */}
            <Card className="p-0 overflow-hidden h-80">
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
            </Card>

            {/* Redes Sociais */}
            <Card>
              <h3 className="text-xl font-bold text-primary mb-4">
                Siga-nos nas Redes Sociais
              </h3>
              <div className="flex space-x-4">
                <a
                  href={CHURCH_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center"
                >
                  <FaInstagram className="text-3xl mx-auto mb-2" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href={CHURCH_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-red-600 text-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center"
                >
                  <FaYoutube className="text-3xl mx-auto mb-2" />
                  <span className="text-sm">YouTube</span>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
