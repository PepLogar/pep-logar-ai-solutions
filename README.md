# Pep Logar AI Solutions

Sitio corporativo de Pep Logar AI Solutions: desarrollo de software, agentes de IA, conexiones MCP y automatización de procesos empresariales.

## Desarrollo local

Requiere Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

La aplicación estará disponible por defecto en `http://localhost:3000`.

## Validación

```bash
npm test
```

Este comando compila y exporta la web, comprueba el HTML de las diez páginas y prueba la recuperación del exportador en carpetas temporales.

## Carpeta lista para producción

La carpeta `production/` contiene una exportación estática completa para
servidores web como Plesk. Para regenerarla:

```bash
npm run build:production
```

En Plesk, configura como raíz de documentos la carpeta `production` del
repositorio. No requiere Node.js ni un proceso de servidor en producción.

El exportador prepara las diez páginas en `.production-export/next`. Solo después de validar su HTML sustituye `production/`. Si falla la generación, sigue disponible la versión anterior. Si falla la sustitución, el exportador intenta restaurarla.

Si una interrupción deja `.production-export/` en disco, comprueba primero que la exportación haya terminado. Si falta `production/`, recupera el directorio `.production-export/previous` con el nombre `production`. Cuando hayas verificado la publicación, puedes retirar la carpeta temporal y volver a exportar.

## Estructura principal

- `app/`: página, formulario de contacto, estilos y metadatos.
- `public/og.png`: imagen utilizada al compartir la web.
- `production/`: versión compilada y lista para publicar en el servidor web.
- `CONCEPTO.md`: posicionamiento, arquitectura de marca y decisiones de producto.
- `tests/`: comprobaciones del HTML renderizado.

El formulario prepara un borrador dirigido a `info@aisolutions.peplogar.com` en la aplicación de correo del visitante. Con JavaScript disponible, organiza los campos y añade el asunto. Con JavaScript desactivado, el navegador utiliza el mismo destinatario y entrega los campos como texto al gestor de correo. El visitante puede revisar el mensaje antes de enviarlo. En la sección de contacto también figura el correo para copiarlo o escribir directamente.
