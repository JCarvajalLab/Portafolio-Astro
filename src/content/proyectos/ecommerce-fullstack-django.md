---
title: "E-commerce Full Stack — Proyecto Final"
tag: "Python / Django + PostgreSQL"
category: "fullstack"
order: 2
year: "2026"
role: "Desarrollador Full Stack Python"
summary: "Plataforma completa de comercio electrónico desarrollada con Django y PostgreSQL. Integra catálogo de productos, autenticación de usuarios, carrito de compras dinámico y gestión de pedidos para simular un flujo real de compra con panel de administración y roles."
problem: "Construir un comercio electrónico escalable requiere mucho más que mostrar productos en pantalla: exige garantizar la integridad transaccional entre el catálogo, las sesiones de usuario autenticado, el estado del carrito de compras y la persistencia relacional de las órdenes generadas."
solution: "Desarrollé una aplicación web Full Stack bajo la arquitectura MVT (Model-View-Template) de Django conectada a una base de datos relacional PostgreSQL. Implementé autenticación segura de usuarios, gestión de carrito persistente en sesión y base de datos, validación de stock y un panel administrativo protegido por permisos."
architecture:
  - "Modelado relacional en PostgreSQL gestionado mediante Django ORM (Usuarios, Categorías, Productos, Carrito, Órdenes y Detalle de Orden)."
  - "Sistema de autenticación nativo de Django con protección CSRF en todos los formularios, hash seguro de contraseñas y control de acceso por roles."
  - "Lógica de carrito de compras sincronizada que calcula subtotales, impuestos y disponibilidad antes de confirmar el pedido."
  - "Interfaz responsiva construida con HTML5 semántico, CSS3 y Bootstrap 5 adaptada para navegación fluida en móviles y escritorio."
results:
  - "Flujo extremo a extremo funcional: registro, inicio de sesión, filtrado de catálogo, armado de carrito y generación de orden."
  - "Integridad referencial garantizada en PostgreSQL mediante claves foráneas y validaciones en servidor."
  - "Administración centralizada de inventario y pedidos a través de Django Admin personalizado."
stack:
  - "Python"
  - "Django"
  - "PostgreSQL"
  - "Django ORM"
  - "Bootstrap 5"
  - "Git & GitHub"
demoUrl: null
repoUrl: "https://github.com/JCarvajalLab"
highlight: true
---

## Enfoque del Caso de Estudio

Este proyecto consolida la especialización **Full Stack Python** integrando todas las capas de una aplicación web empresarial: desde el diseño del esquema relacional en **PostgreSQL** hasta las vistas protegidas y la experiencia de compra del cliente final.

### Decisiones de Ingeniería

1. **Seguridad y Validación en Servidor:** Ningún dato enviado desde el navegador se asume como válido. Los precios y totales se recalculan íntegramente en el backend usando las entidades de `Django ORM` antes de registrar una orden.
2. **Separación de Responsabilidades:** La lógica de negocio del carrito y el procesamiento de pedidos se estructuró de forma modular para facilitar el mantenimiento y la escalabilidad del código.
3. **Flujo de trabajo con Git:** Desarrollo organizado mediante ramas por funcionalidad (*feature branches*) y commits descriptivos siguiendo buenas prácticas de control de versiones.
