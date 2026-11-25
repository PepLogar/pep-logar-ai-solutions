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

Este comando compila y exporta la web, comprueba el HTML de las páginas del catálogo, las fichas y el resto del sitio, y prueba la recuperación del exportador en carpetas temporales.

## Carpeta lista para producción

La carpeta `production/` contiene una exportación estática completa para
servidores web como Plesk. Para regenerarla:

```bash
npm run build:production
```

En Plesk, configura como raíz de documentos la carpeta `production` del
repositorio y activa PHP para `contacto/borrador.php`. Las páginas y los recursos se sirven como archivos estáticos. El formulario sin JavaScript requiere PHP 7.4 o posterior. Node.js solo se utiliza para compilar.

El exportador prepara las páginas en `.production-export/next`. Solo después de validar su HTML sustituye `production/`. Si falla la generación, sigue disponible la versión anterior. Si falla la sustitución, el exportador intenta restaurarla.

Si una interrupción deja `.production-export/` en disco, comprueba primero que la exportación haya terminado. Si falta `production/`, recupera el directorio `.production-export/previous` con el nombre `production`. Cuando hayas verificado la publicación, puedes retirar la carpeta temporal y volver a exportar.

## Estructura principal

- `app/`: página, formulario de contacto, estilos y metadatos.
- `public/og.png`: imagen utilizada al compartir la web.
- `production/`: versión compilada y lista para publicar en el servidor web.
- `CONCEPTO.md`: posicionamiento, arquitectura de marca y decisiones de producto.
- `tests/`: comprobaciones del HTML renderizado.

El formulario prepara un borrador dirigido a `info@aisolutions.peplogar.com`. Con JavaScript activo, el navegador lo prepara localmente. Solo con JavaScript desactivado aparece el botón «Preparar borrador» junto al aviso de tratamiento por HTTPS. Tras aceptar la casilla y pulsarlo, los campos viajan en el cuerpo de un POST al servidor. PHP los procesa en memoria y devuelve una página con «Abrir borrador». La respuesta lleva `Cache-Control: no-store`. El visitante revisa y envía el mensaje en su aplicación de correo. Para escribir directamente también puede usar la dirección que figura junto al formulario.

## Pensiones Lab en el catálogo

La tarjeta «Software gratuito · Simulador web» en `/productos/` abre la [ficha de Pensiones Lab](https://aisolutions.peplogar.com/productos/pensiones-lab/). La ficha propone un primer ejercicio para comparar qué ocurre con la deuda pública al cambiar la edad de jubilación de 65 a 66 años. El botón «Abrir la consola gratuita» lleva directamente a la [consola de Demarquía](https://demarquia.org/pensioneslab/consola.html). La [ayuda](https://demarquia.org/pensioneslab/ayuda.html) y la [metodología](https://demarquia.org/pensioneslab/metodologia.html) también se mantienen en Demarquía.

`public/productos/pensiones-lab/` contiene la captura real de la consola 1.80.0 del 25 de noviembre de 2026. `detalle.png` ilustra la tarjeta y la ficha. «Ampliar captura» abre `consola.png`, donde se ven los ajustes, los gráficos y la comparación de sistemas en 2050. Al actualizar las imágenes, conserva los nombres y revisa sus dimensiones y textos alternativos en ambas páginas.
