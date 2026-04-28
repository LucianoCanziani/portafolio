---
layout: "../../layouts/PostLayout.astro"
title: "To-Do List - Herramienta de Productividad"
description: "Esta To-Do List fue parte de una entrevista técnica en la que tuve 24 horas para completarla. Podés agregar, eliminar, editar y filtrar tareas mientras ves unas lindas olas de fondo."
pubDate: "Nov 27 2022"
heroImage: "/proyectos/To-Do List con ReactJs.webp"
altImage: "To-Do List con ReactJs"
gitHub: "https://github.com/LucianoCanziani/to-do-list"
deploy: "https://to-do-list-luciano-canziani.netlify.app/"
stack: "ReactJs,CSS,API"
setup: |
  import { Tweet, Vimeo, YouTube } from 'astro-embed';
---

Esta To-Do List fue parte de una entrevista técnica en la que tuve 24 horas para completarla.

Podés agregar, eliminar, editar y filtrar tareas mientras ves unas lindas olas de fondo.

También integré la API de Quotable para que arranques el día con un mensaje inspirador.

## Cómo usarlo

1. Escribí una tarea y presioná el botón "Add".
2. Marcá la tarea como completada, editala o eliminala.
3. Podés filtrar por completadas y pendientes.

## Video

<YouTube id="https://www.youtube.com/watch?v=4uzqIcIegS4&ab_channel=LucianoCanziani" />

## Librerías y Frameworks

- react-router-dom: (^6.3.0)
- axios: (^0.27.2)
- react-simple-animate: (^3.5.0)
- react-wavify: (^1.5.8)

## API usada:

https://api.quotable.io

## GitHub

https://github.com/LucianoCanziani/to-do-list

## Deploy Netlify

https://to-do-list-luciano-canziani.netlify.app/
