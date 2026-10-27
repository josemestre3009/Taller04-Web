# Taller 04: La misma landing, ahora con rutas

**Semana 9:** Rutas y navegación  
**Código:** 2026-30

## Así se ve

El documento original incluye una referencia visual de la landing en esta sección.

## Qué hay que hacer

Tomar la landing del **Taller 03** y partirla en varias vistas con **React Router**, cada una con su propia URL.

Cada sección pasa a ser una ruta, y se agrega una de `/login` que no existía.

La navegación va con `Link` o `NavLink`, nunca con `<a href>`.

## Las rutas

| Ruta | Qué muestra |
| --- | --- |
| `/` | La vista principal |
| `/cursos` | La sección de cursos |
| `/nosotros` | La sección de nosotros |
| `/login` | Nueva, solo interfaz |
| `*` | La 404 |

El `<Navbar />` se ve en todas.

## La ruta `/login`

Un formulario con correo y contraseña, su botón y un microcopy que aclare que no valida nada.

**Dos comportamientos obligatorios:**

1. El botón está deshabilitado mientras haya campos vacíos.
2. Al enviar, los campos se deshabilitan.

No hay backend ni usuario real: es interfaz.

## Requisitos técnicos

- [x] `BrowserRouter` en `main.jsx`, `Routes` y `Route` en `App.jsx`.
- [x] Una vista por archivo en `src/views/`, los componentes en `src/components/`.
- [x] El `<Navbar />` visible en todas las rutas.
- [x] La ruta `/login` con su botón y sus campos deshabilitándose.
- [x] Una ruta `*` que atienda las URLs que no existen.
- [ ] No se acepta navegación interna con `<a href>`.
- [ ] No se acepta todo en un solo componente.

> Las casillas anteriores representan requisitos del enunciado, no el estado de implementación.

## Entrega

- El proyecto en un repositorio de GitHub.
- Subir el enlace del repositorio al aula virtual.
- La fecha va en el aula virtual.

`node_modules` no se sube: va en el `.gitignore`.
