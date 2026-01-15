import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaInstagram, 
  FaYoutube,
  FaWhatsapp 
} from 'react-icons/fa';
import { CHURCH_INFO, NAVIGATION } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1: Informações de Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href={CHURCH_INFO.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-accent transition-colors"
              >
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span className="text-sm">{CHURCH_INFO.address.full}</span>
              </a>
              <a
                href={`tel:${CHURCH_INFO.contact.phone}`}
                className="flex items-center space-x-3 hover:text-accent transition-colors"
              >
                <FaPhone />
                <span className="text-sm">{CHURCH_INFO.contact.phoneFormatted}</span>
              </a>
              <a
                href={CHURCH_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-accent transition-colors"
              >
                <FaWhatsapp />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a
                href={`mailto:${CHURCH_INFO.contact.email}`}
                className="flex items-center space-x-3 hover:text-accent transition-colors"
              >
                <FaEnvelope />
                <span className="text-sm">{CHURCH_INFO.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Links Úteis IPRB */}
          <div>
            <h3 className="text-xl font-bold mb-4">IPRB</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={CHURCH_INFO.iprb.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Site Oficial IPRB
                </a>
              </li>
              <li>
                <a
                  href={CHURCH_INFO.iprb.confessionOfFaith}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Confissão de Fé
                </a>
              </li>
              <li>
                <a
                  href={CHURCH_INFO.iprb.internalRegulations}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Regimento Interno
                </a>
              </li>
              <li>
                <a
                  href={CHURCH_INFO.iprb.disciplineCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Código de Disciplina
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais e Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a
                href={CHURCH_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={CHURCH_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
            <p className="text-sm text-center md:text-right">
              © {currentYear} {CHURCH_INFO.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
