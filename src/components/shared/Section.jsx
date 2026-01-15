import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  title, 
  subtitle, 
  className = '', 
  bgColor = 'bg-white',
  ...props 
}) => {
  return (
    <section className={`${bgColor} ${className}`} {...props}>
      <div className="section-container">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
