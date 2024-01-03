# Anime API

Esta es una API simple para obtener información sobre animes utilizando la API Jikan. Permite realizar búsquedas y obtener detalles de animes.

## Instalación

1. Clona este repositorio: `git clone https://github.com/tuusuario/anime-api.git`
2. Instala las dependencias: `npm install`

## Uso

1. Inicia el servidor: `npm start`
2. La API estará disponible en `http://localhost:3000`

## Endpoints

- `/anime/search`: Realiza una búsqueda de animes.
  - Método: GET
  - Parámetros de consulta: `q` (cadena de búsqueda)

Ejemplo de uso:
```bash
curl http://localhost:3000/anime/search?q=Naruto
```

## Dependencias Principales

- [axios](https://www.npmjs.com/package/axios): Para realizar solicitudes HTTP.
- [express](https://www.npmjs.com/package/express): Marco web para Node.js.
- [typescript](https://www.npmjs.com/package/typescript): Superset de JavaScript con tipado estático.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes mejoras, por favor crea un problema o envía una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia ISC - consulta el archivo [LICENSE](LICENSE) para más detalles.
