---
title: "E-commerce CRUD con Pruebas Automatizadas"
titleEn: "E-commerce CRUD with Automated Testing"
tag: "BACKEND & QA · DJANGO ORM + TESTING"
tagEn: "BACKEND & QA · DJANGO ORM + TESTING"
category: "fullstack"
status: "completed"
image: "/projects/ecommerce-crud-preview.svg"
order: 4
year: "May. 2026"
yearEn: "May 2026"
role: "Desarrollador Backend Python / QA"
roleEn: "Python Backend / QA Developer"
summary: "Aplicación web para gestión de productos y categorías utilizando Django ORM y base de datos PostgreSQL. Incorpora validaciones personalizadas en formularios para garantizar la integridad de datos y tests unitarios automatizados para asegurar la confiabilidad del sistema."
summaryEn: "Web application for product and category management using Django ORM and PostgreSQL. Features custom form validations to guarantee data integrity and automated unit tests to ensure system reliability."
problem: "En sistemas de gestión de inventario y catálogo, los errores humanos al ingresar precios negativos, códigos duplicados o categorías huérfanas corrompen la base de datos si no existen reglas de validación estrictas y pruebas automatizadas que verifiquen cada operación CRUD."
problemEn: "In inventory and catalog management systems, human errors such as negative prices, duplicate SKUs, or orphaned categories corrupt the database unless strict validation rules and automated tests verify every CRUD operation."
solution: "Construí un módulo de administración de catálogo con Django y PostgreSQL enfocado en la calidad del dato y la confiabilidad del software. Diseñé formularios con validaciones personalizadas (ModelForms) y una suite de pruebas unitarias automatizadas que verifican la creación, lectura, actualización y eliminación de registros."
solutionEn: "I built a catalog administration module with Django and PostgreSQL focused on data quality and software reliability. I designed forms with custom validations (ModelForms) and an automated unit test suite verifying record creation, reading, updating, and deletion."
architecture:
  - "Operaciones CRUD completas sobre PostgreSQL utilizando consultas optimizadas del Django ORM."
  - "Validaciones personalizadas a nivel de modelo y formulario (clean methods) para impedir precios inválidos, stock negativo o registros inconsistentes."
  - "Suite de pruebas automatizadas con el framework TestCase de Django para validar modelos, vistas y respuestas HTTP."
  - "Manejo controlado de errores y mensajes de retroalimentación claros para el operador del sistema."
architectureEn:
  - "Full CRUD operations on PostgreSQL powered by optimized Django ORM queries."
  - "Custom model- and form-level validations (clean methods) preventing invalid prices, negative stock, or inconsistent records."
  - "Automated test suite using Django's TestCase framework to validate models, views, and HTTP responses."
  - "Controlled error handling and clear feedback messages for system operators."
results:
  - "100% de las operaciones críticas de creación, edición y borrado cubiertas por pruebas unitarias automatizadas."
  - "Prevención total de datos corruptos en PostgreSQL gracias a la doble capa de validación (formulario + base de datos)."
  - "Base de código limpia y fácil de auditar al ejecutar cambios o refactorizaciones."
resultsEn:
  - "100% of critical create, update, and delete operations covered by automated unit tests."
  - "Complete prevention of corrupted data in PostgreSQL thanks to dual-layer validation (form + database)."
  - "Clean, auditable codebase ready for safe refactoring and continuous improvements."
stack:
  - "PYTHON"
  - "DJANGO"
  - "POSTGRESQL"
  - "SQL"
  - "GIT & GITHUB"
demoUrl: null
repoUrl: "https://github.com/JCarvajalLab"
highlight: false
---

<div data-lang-block="es">

## Enfoque del Caso de Estudio

Inspirado también en mi experiencia previa de **más de 4 años en Soporte TI resolviendo incidencias productivas**, este proyecto se enfocó en prevenir errores antes de que lleguen al usuario mediante validaciones rigurosas y **pruebas automatizadas**.

### Aspectos Destacados

1. **Validación Defensiva:** Se implementaron validadores personalizados en los modelos y formularios de Django para asegurar que cada producto cumpla con las reglas de negocio antes de tocar la base de datos.
2. **Cultura de Testing:** Se escribieron casos de prueba automatizados para comprobar tanto los caminos felices (*happy paths*) como los casos borde (intentos de inserción inválida, permisos denegados y eliminación de registros relacionados).

</div>

<div data-lang-block="en" class="hidden">

## Case Study Focus

Drawing from my **4+ years of IT Support experience resolving production incidents**, this project focused on preventing errors before they reach end users through rigorous data validation and **automated testing**.

### Key Highlights

1. **Defensive Validation:** Custom validators were implemented in Django models and forms to ensure every product meets business rules before touching the database.
2. **Testing Culture:** Automated test cases were written to verify both happy paths and edge cases (invalid insertions, permission denials, and cascading deletions).

</div>
