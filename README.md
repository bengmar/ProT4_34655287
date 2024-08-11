
# API REST NODE JS

El proyecto es una API REST para consultar, cargar, editar y eliminar libros de una base de datos sencilla.
Cada libro tiene los siguientes datos: nombre, autor, categoria, anio_publicacion e ISBN.
La base de datos se proporciona en la carpeta script del proyecto.




## Referencia de la API 

#### Obtener todos los libros

```http
  GET /libros
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :------------------------- |
| no requerido | ---- | Obtener todos los libros guardados |

#### Obtener libro

```http
  GET /libros/${id}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Requerido**. Obtener los detalles de un libro por id. |

#### Agregar libro

```http
  POST /libros/insertar
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| req body      | libro | **Requerido**. Enviar en el cuerpo de la petición los parámetros del libro a agregar |

#### Borrar libro

```http
  DELETE /libros/eliminar/${isbn}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `isbn`      | `number-string` | **Requerido**. Borrar un libro usando su ISBN como parámetro. |


#### Editar Libro

```http
  PUT /libros/editar
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| req body      | libro | **Requerido**. Introducir en el cuerpo de la petición un ISBN válido con los demás datos a editar.|





## Instalación

Clonar y ejecutar:

```bash
  npm install
```
para instalar los módulos requeridos.