import { useState } from "react";

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "ISO/IEC 27001:2022",
      subtitle: "Information Security Management System",
      image: "/assets/iso-27001-certificate.png",
      description:
        "Axisphere Mediaworx LLP is ISO/IEC 27001:2022 certified, demonstrating our strong commitment to protecting information security and maintaining confidentiality, integrity, and availability of data.",
    },
    {
      id: 2,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      image: "/assets/iso-9001-certificate.png",
      description:
        "Our ISO 9001:2015 certification showcases Axisphere’s dedication to continuous improvement, customer satisfaction, and delivering quality-driven services across all operations.",
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Certifications
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Axisphere Mediaworx LLP is recognized globally for its commitment to
          quality, security, and excellence through internationally accredited
          standards.
        </p>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="relative group w-full h-96 perspective cursor-pointer"
            >
              {/* Front Side */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-md p-4 transition-all duration-500 transform group-hover:rotate-y-180">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="rounded-xl w-full h-full object-contain"
                />
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-md p-6 text-center transform rotate-y-180 backface-hidden transition-all duration-500 group-hover:rotate-y-0 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  {cert.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{cert.subtitle}</p>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  {cert.description}
                </p>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              ✕
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="rounded-xl w-full h-auto max-h-[90vh] object-contain"
            />
            <h3 className="text-white text-xl mt-4 text-center font-semibold">
              {selectedCert.title} – {selectedCert.subtitle}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}
