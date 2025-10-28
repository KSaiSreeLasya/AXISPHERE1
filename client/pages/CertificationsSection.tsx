import React, { useState } from 'react';
import './CertificationsSection.css';

const certifications = [
  {
    id: 1,
    title: 'ISO/IEC 27001:2022',
    image: '/iso-27001-certificate-thumb.png',
    description:
      'Information Security Management System certification demonstrates our compliance with global security and data protection standards.',
  },
  {
    id: 2,
    title: 'ISO 9001:2015',
    image: '/iso-9001-certificate-thumb.png',
    description:
      'Quality Management System certification reflects our commitment to delivering consistent quality and continuous improvement.',
  },
];

const CertificationSection: React.FC = () => {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleFlip = (id: number) => {
    setFlipped(flipped === id ? null : id);
  };

  const openModal = (image: string) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Certifications</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Axisphere Mediaworx LLP is recognized globally for its commitment to quality, security, and excellence
        through internationally accredited standards.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="perspective cursor-pointer"
            onClick={() => handleFlip(cert.id)}
          >
            <div className={`card-container ${flipped === cert.id ? 'is-flipped' : ''}`}>
              {/* Front */}
              <div className="card-face card-front flex flex-col justify-center items-center">
                <img src={cert.image} alt={cert.title} className="w-40 h-40 object-contain mb-4" />
                <h3 className="text-lg font-semibold">{cert.title}</h3>
              </div>

              {/* Back */}
              <div className="card-face card-back flex flex-col justify-center items-center">
                <p className="text-gray-700 mb-4">{cert.description}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(cert.image);
                  }}
                  className="mt-2 bg-violet-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-violet-700 transition"
                >
                  View Certification
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Certification Full View"
            className="max-w-3xl w-full rounded-xl shadow-lg border-4 border-white"
          />
        </div>
      )}
    </section>
  );
};

export default CertificationSection;
