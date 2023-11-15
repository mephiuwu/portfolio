import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvojnaln");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handler for input field changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  }, [state.succeeded]);

  /* const onSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append('access_key', '6d7bc3fc-6190-43c5-8298-89ac5ef7494f');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://formspree.io/f/xvojnaln', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then(res => res.json());

    if (res.success) {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }
  }; */

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row gx-3 gy-4">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Tu nombre</label>
            <input
              id="name"
              name="name"
              placeholder="Nombre *"
              className="form-control"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Tu Email</label>
            <input
              id="email"
              name="email"
              placeholder="Email *"
              className="form-control"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="form-label">Asunto</label>
            <input
              id="subject"
              name="subject"
              placeholder="Asunto *"
              className="form-control"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Tu mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Mensaje *"
              rows={4}
              className="form-control"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="send">
            <button
              className={`px-btn w-100 ${loading ? 'disabled' : ''}`}
              type="submit"
              disabled={state.submitting}
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
