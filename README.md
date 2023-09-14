# PROYECTO DE CLASE: LANDING PAGE PARA CONSTRUCTORA DE CASAS RESIDENCIALES

## OBJETIVO GENERAL

Crear una landing page atractiva y funcional para promocionar los servicios de la constructora de casas residenciales “Bauhaus Inmobiliaria”.

## TECNOLOGIAS

- HTML
- CSS
- JavaScript

## CONSUMO DE DATOS

Datos estáticos.

## SECCIONES REQUERIDAS

1. Encabezado con logo y menú de navegación.
2. Banner principal con imagen representativa y mensaje.
3. Destacado de modelos de casas más vendidos con enlace al catálogo.
4. Catálogo de modelos de casas.
5. Galería de imágenes de áreas comunes y amenidades.
6. Descripción del proceso de compra.
7. Formulario de contacto con detalles de contacto adicionales.

## REQUERIMIENTOS TÉCNICOS

- Diseño atractivo y profesional con enfoque en la usabilidad.
- Responsive design para adaptarse a diferentes dispositivos.
- Implementación de HTML, CSS y JavaScript para interactividad.
- Integración de formularios de contacto y recopilación de datos (impresión en consola).

## REQUERIMIENTOS TECNICOS POSTERIORES

- Optimización de imágenes y carga rápida de la página.
- Uso de buenas prácticas de SEO para mejorar la visibilidad en motores de búsqueda.

## Compilar hojas de estilo SCSS a CSS

1. La ultima versión del proyecto **Beta Residencial Landing Page** utiliza SASS para desarrollar los estilos, por lo cual es necesario instalar SASS de manera global en el ambiente de desarrollo:

```bash
npm install -g sass
```

2. Para generar el archivo css (archivo de salida) es necesario compilar los estilos scss (archivos de entrada), para ello, en la carpeta principal del proyecto ejecutamos el comando:

```bash
sass scss/styles.scss css/styles.css
```

3. Si deseamos generar el archivo css comprimido, ejecutamos el siguiente comando, sin olvidar ajustar el nombre del archivo en el index.html.

```bash
sass --style compressed scss/styles.scss css/styles.min.css
```
