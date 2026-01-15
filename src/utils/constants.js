export const CHURCH_INFO = {
  name: '1ª Igreja Presbiteriana Renovada de Bauru',
  shortName: '1ª IPRB Bauru',
  address: {
    street: 'R. Primeiro de Maio, 1289',
    neighborhood: 'Vila Seabra',
    city: 'Bauru',
    state: 'SP',
    zipCode: '17036-770',
    full: 'R. Primeiro de Maio, 1289 - Vila Seabra, Bauru - SP, 17036-770',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=R.+Primeiro+de+Maio+1289+Vila+Seabra+Bauru+SP',
  },
  contact: {
    phone: '+55 11 91420-8479',
    phoneFormatted: '(11) 91420-8479',
    email: 'secretaria@1iprbauru.com.br',
    whatsapp: 'https://wa.me/5511914208479',
  },
  social: {
    instagram: 'https://www.instagram.com/1iprbauru',
    instagramHandle: '@1iprbauru',
    youtube: 'https://www.youtube.com/@1iprbauru',
    youtubeHandle: '@1iprbauru',
  },
  schedule: [
    {
      day: 'Domingo',
      time: '09:00',
      title: 'Escola Bíblica Dominical',
      description: 'Estudo bíblico para todas as idades',
      icon: 'FaBook',
    },
    {
      day: 'Domingo',
      time: '18:00',
      title: 'Culto de Celebração',
      description: 'Adoração e pregação da Palavra',
      icon: 'FaChurch',
    },
    {
      day: 'Terça-feira',
      time: '20:00',
      title: 'Culto de Oração e Doutrina',
      description: 'Oração e ensino bíblico',
      icon: 'FaPray',
    },
  ],
  ministries: [
    {
      id: 'mulheres',
      name: 'Ministério de Mulheres',
      description: 'Comunhão, estudo bíblico e apoio mútuo entre as irmãs',
      icon: 'FaFemale',
      color: 'bg-pink-100',
    },
    {
      id: 'varoes',
      name: 'Ministério de Varões',
      description: 'Discipulado masculino e serviço ao Reino',
      icon: 'FaMale',
      color: 'bg-blue-100',
    },
    {
      id: 'jovens',
      name: 'Ministério de Jovens',
      description: 'Adoração, evangelismo e crescimento espiritual',
      icon: 'FaUsers',
      color: 'bg-green-100',
    },
    {
      id: 'adolescentes',
      name: 'Ministério de Adolescentes',
      description: 'Formação de caráter cristão para a nova geração',
      icon: 'FaUserFriends',
      color: 'bg-purple-100',
    },
    {
      id: 'louvor',
      name: 'Ministério de Louvor',
      description: 'Adoração e música para a glória de Deus',
      icon: 'FaMusic',
      color: 'bg-yellow-100',
    },
    {
      id: 'intercessao',
      name: 'Ministério de Intercessão',
      description: 'Oração pelos membros, cidade e nações',
      icon: 'FaHandsHelping',
      color: 'bg-red-100',
    },
  ],
  iprb: {
    website: 'https://iprb.org.br',
    confessionOfFaith: 'https://iprb.org.br/confissao-de-fe-da-iprb/',
    internalRegulations: 'https://iprb.org.br/regimento-interno-da-iprb/',
    disciplineCode: 'https://iprb.org.br/codigo-de-disciplina-da-iprb/',
  },
};

export const CONTENT = {
  hero: {
    title: 'Na Terra Assim Como é no Céu',
    subtitle: 'Bem-vindo à 1ª Igreja Presbiteriana Renovada de Bauru!',
    description: 'Somos uma comunidade de fé fundamentada na Palavra de Deus, que crê na suficiência das Escrituras e na ação presente do Espírito Santo. Aqui você encontrará um lugar de adoração genuína, ensino bíblico sólido e comunhão fraternal.',
  },
  about: {
    mission: 'Glorificar a Deus através da pregação fiel da Palavra, da adoração em Espírito e em verdade, e do discipulado que transforma vidas para a glória de Cristo.',
    vision: 'Ser uma igreja que reflete o caráter de Cristo, fundamentada na doutrina reformada, vivificada pelo Espírito Santo, e comprometida com a evangelização e o cuidado pastoral.',
    values: [
      'Autoridade das Escrituras',
      'Centralidade de Cristo',
      'Dependência do Espírito Santo',
      'Comunhão dos santos',
      'Missão integral',
    ],
    doctrinalStatement: 'Somos uma igreja reformada e continuísta, fundamentada na autoridade suprema das Sagradas Escrituras. Cremos na Trindade, na inspiração verbal da Bíblia, na salvação pela graça mediante a fé em Cristo Jesus, e na contemporaneidade dos dons do Espírito Santo para edificação da Igreja.\n\nConfessamos a soberania de Deus em todas as coisas, a suficiência da obra redentora de Cristo, e a necessidade do novo nascimento. Cremos no batismo no Espírito Santo como experiência subsequente à conversão, na atualidade dos dons espirituais distribuídos segundo a soberana vontade de Deus, e na segunda vinda pré-milenial de Cristo.\n\nAdotamos o governo presbiteriano, reconhecendo a autoridade dos presbíteros e a importância da comunhão dos santos. Praticamos o batismo por imersão e celebramos a Ceia do Senhor como memorial do sacrifício de Cristo.',
  },
};

export const NAVIGATION = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Horários', path: '/horarios' },
  { name: 'Liderança', path: '/lideranca' },
  { name: 'Contato', path: '/contato' },
];
