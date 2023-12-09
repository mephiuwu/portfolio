import React, { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import Swal from 'sweetalert2';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvojnaln");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const dict = {
    'TYPE_EMAIL': 'Email no válido',
    'OK': 'Email enviado con éxito',
  };

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
      Swal.fire({
        icon: 'success',
        text: dict['OK'],
        position: 'bottom-end',
        toast: true,
        timer: 3000,
        showConfirmButton: false
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }

    if (state.errors) {
      const err = state.errors.fieldErrors;

      err.forEach((value, key) => {

        setFormData(prevFormData => ({
          ...prevFormData,
          [key]: '',
        }));

        const code = value[0].code;

        Swal.fire({
          icon: 'error',
          text: dict[code],
          position: 'bottom-end',
          toast: true,
          timer: 3000,
          showConfirmButton: false
        });
      });

    }

  }, [state.succeeded, state.errors]);

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
              className={`px-btn w-100`}
              type="submit"
              disabled={state.submitting}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
