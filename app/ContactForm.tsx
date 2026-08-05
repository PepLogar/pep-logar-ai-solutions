"use client";

import type { FormEvent } from "react";

const CONTACT_EMAIL = "info@aisolutions.peplogar.com";

export function ContactForm() {
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const interest = String(form.get("interest") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = `Consulta web · ${interest}`;
    const body = [
      `Nombre: ${name}`,
      `Empresa: ${company || "No indicada"}`,
      `Email: ${email}`,
      `Teléfono: ${phone || "No indicado"}`,
      `Área de interés: ${interest}`,
      "",
      "Proceso o necesidad:",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={prepareEmail}>
      <div className="form-heading">
        <span>Cuéntanos el punto de partida</span>
        <small>Todos los campos con * son obligatorios</small>
      </div>

      <div className="form-grid">
        <label>
          <span>Nombre y apellidos *</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Tu nombre" />
        </label>
        <label>
          <span>Empresa</span>
          <input name="company" type="text" autoComplete="organization" placeholder="Nombre de la empresa" />
        </label>
        <label>
          <span>Email profesional *</span>
          <input name="email" type="email" autoComplete="email" required placeholder="nombre@empresa.com" />
        </label>
        <label>
          <span>Teléfono</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="(+34) 000 000 000" />
        </label>
      </div>

      <label>
        <span>¿Qué quieres mejorar? *</span>
        <select name="interest" required defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          <option>Procesos administrativos</option>
          <option>Atención al cliente</option>
          <option>Ventas y CRM</option>
          <option>Documentos y datos</option>
          <option>Software a medida</option>
          <option>Aún no lo tengo claro</option>
        </select>
      </label>

      <label>
        <span>Describe brevemente el proceso *</span>
        <textarea name="message" required rows={5} placeholder="¿Qué ocurre hoy, dónde se pierde tiempo y qué resultado te gustaría conseguir?" />
      </label>

      <label className="consent">
        <input name="consent" type="checkbox" required />
        <span>Acepto que mis datos se utilicen únicamente para responder a esta consulta.</span>
      </label>

      <div className="form-footer">
        <button type="submit">Preparar consulta <span aria-hidden="true">↗</span></button>
        <small>Se abrirá tu aplicación de correo con el mensaje preparado. Esta web no almacena tus datos.</small>
      </div>
    </form>
  );
}
