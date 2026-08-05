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
npm run build
node --test tests/rendered-html.test.mjs
```

## Carpeta lista para producción

La carpeta `production/` contiene una exportación estática completa para
servidores web como Plesk. Para regenerarla:

```bash
npm run build:production
```

En Plesk, configura como raíz de documentos la carpeta `production` del
repositorio. No requiere Node.js ni un proceso de servidor en producción.

## Estructura principal

- `app/`: página, formulario de contacto, estilos y metadatos.
- `public/og.png`: imagen utilizada al compartir la web.
- `production/`: versión compilada y lista para publicar en el servidor web.
- `CONCEPTO.md`: posicionamiento, arquitectura de marca y decisiones de producto.
- `tests/`: comprobaciones del HTML renderizado.

El formulario prepara la consulta en la aplicación de correo del visitante y la dirige a `info@aisolutions.peplogar.com`; la web no almacena los datos introducidos.
