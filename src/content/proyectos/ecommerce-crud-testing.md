---
title: "E-commerce CRUD con Pruebas Automatizadas"
tag: "Django ORM + Testing"
category: "fullstack"
order: 3
year: "2026"
role: "Desarrollador Backend Python / QA"
summary: "Aplicación web para gestión de productos y categorías utilizando Django ORM y base de datos PostgreSQL. Incorpora validaciones personalizadas en formularios para garantizar la integridad de datos y tests unitarios automatizados para asegurar la confiabilidad del sistema."
problem: "En sistemas de gestión de inventario y catálogo, los errores humanos al ingresar precios negativos, códigos duplicados o categorías huérfanas corrompen la base de datos si no existen reglas de validación estrictas y pruebas automatizadas que verifiquen cada operación CRUD."
solution: "Construí un módulo de administración de catálogo con Django y PostgreSQL enfocado en la calidad del dato y la confiabilidad del software. Diseñé formularios con validaciones personalizadas (ModelForms) y una suite de pruebas unitarias automatizadas que verifican la creación, lectura, actualización y eliminación de registros."
architecture:
  - "Operaciones CRUD completas sobre PostgreSQL utilizando consultas optimizadas del Django ORM."
  - "Validaciones personalizadas a nivel de modelo y formulario (clean methods) para impedir precios inválidos, stock negativo o registros inconsistentes."
  - "Suite de pruebas automatizadas con el framework TestCase de Django para validar modelos, vistas y respuestas HTTP."
  - "Manejo controlado de errores y mensajes de retroalimentación claros para el operador del sistema."
results:
  - "100% de las operaciones críticas de creación, edición y borrado cubiertas por pruebas unitarias automatizadas."
  - "Prevención total de datos corruptos en PostgreSQL gracias a la doble capa de validación (formulario + base de datos)."
  - "Base de código limpia y fácil de auditar al ejecutar cambios o refactorizaciones."
stack:
  - "Python"
  - "Django"
  - "PostgreSQL"
  - "Django ORM"
  - "Unit Testing"
  - "Git"
demoUrl: null
repoUrl: "https://github.com/JCarvajalLab"
highlight: false
---

## Enfoque del Caso de Estudio

Inspirado también en mi experiencia previa de **más de 4 años en Soporte TI resolviendo incidencias productivas**, este proyecto se enfocó en prevenir errores antes de que lleguen al usuario mediante validaciones rigurosas y **pruebas automatizadas**.

### Aspectos Destacados

1. **Validación Defensiva:** Se implementaron validadores personalizados en los modelos y formularios de Django para asegurar que cada producto cumpla con las reglas de negocio antes de tocar la base de datos.
2. **Cultura de Testing:** Se escribieron casos de prueba automatizados para comprobar tanto los caminos felices (*happy paths*) como los casos borde (intentos de inserción inválida, permisos denegados y eliminación de registros relacionados).
