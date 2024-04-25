import React from "react";

const MapEmbed = () => {
  return (
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490466.644928305!2d30.06304720431616!3d31.313173341816974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1500492432a7c98b%3A0x6a6b422013352cba!2sIsrael!5e0!3m2!1sen!2s!4v1709541878149!5m2!1sen!2s"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="Embedded Google Map"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  );
};

export default MapEmbed;
