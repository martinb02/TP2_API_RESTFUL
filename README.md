# API RESTful de Biblioteca Digital

Una API RESTful para gestionar una colección de libros utilizando Node.js, Express, TypeScript y MongoDB.

## Descripción

Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de libros. Está construida utilizando Node.js con el framework Express, TypeScript para tipado estático y MongoDB como base de datos.

## Características

- Gestión de libros con operaciones CRUD.
- Uso de TypeScript para tipado estático.
- Conexión a MongoDB para almacenamiento de datos.
- Estructura de proyecto siguiendo el patrón MVC (Modelo-Vista-Controlador).
- Manejo de errores y respuestas estandarizadas.

## Requisitos Previos

- Node.js
- npm o yarn
- MongoDB

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/biblioteca-digital.git
   cd biblioteca-digital
   ```
2. **Instalar las dependencias:**

   ```bash
    npm install express mongoose dotenv cors
    npm install --save-dev ts-node-dev typescript
    npm install ts-node @types/node @types/express @types/cors
   ```

3. **Configurar las variables de entorno:**

- Crea un archivo .env en la raíz del proyecto y configura las variables necesarias:

   ```bash
    MONGO_URI=mongodb://localhost:27017/biblioteca
    PORT=3000
   ```

4. **Compilar y ejecutar la aplicación:**

   ```bash
   npm run build
   npm start
   ```

## Uso

La API estará disponible en http://localhost:3000/api/books.

## Endpoints

   ```bash
   Método	Ruta	    Descripción
   GET	    /books	    Listar todos los libros
   GET	    /books/:id	Obtener un libro por ID
   POST	    /books  	Crear un nuevo libro
   PATCH	/books/:id	Actualizar un libro existente
   DELETE	/books/:id	Eliminar un libro
   ```

# Ejemplo de Uso con Postman

## Configuración Inicial en Postman

1. **Abre Postman** y crea una nueva colección para tu proyecto. Puedes nombrarla "Biblioteca Digital API".
2. **Configura las variables de entorno** (opcional pero útil):
   - Ve a "Manage Environments" y crea un nuevo entorno.
   - Añade una variable llamada `base_url` con el valor `http://localhost:3000/api`.

## Probar los Endpoints

### 1. Crear un Nuevo Libro

1. Crea una nueva solicitud en tu colección y selecciona el método `POST`.
2. Establece la URL a `{{base_url}}/books` (si estás usando variables de entorno) o `http://localhost:3000/api/books`.
3. Ve a la pestaña "Body", selecciona "raw" y elige "JSON" del menú desplegable.
4. Ingresa el siguiente JSON para crear un nuevo libro:

   ```bash
   {
       "title": "El Principito",
       "author": "Antoine de Saint-Exupéry",
       "publishedYear": 1943,
       "genre": "Literatura infantil"
   }
  
5. Envía la solicitud y verifica la respuesta para asegurarte de que el libro fue creado exitosamente.

### 2. Obtener Todos los Libros

1. Crea una nueva solicitud y selecciona el método GET.
2. Establece la URL a {{base_url}}/books o http://localhost:3000/api/books.
3. Envía la solicitud y verifica la lista de libros en la respuesta.

### 3. Obtener un Libro por ID

1. Crea una nueva solicitud y selecciona el método GET.
2. Establece la URL a {{base_url}}/books/<ID_DEL_LIBRO> o http://localhost:3000/api/books/<ID_DEL_LIBRO>. Asegúrate de reemplazar <ID_DEL_LIBRO> con un ID real de un libro.
3. Envía la solicitud y verifica que recibes los detalles del libro específico.

### 4. Actualizar un Libro Existente

1. Crea una nueva solicitud y selecciona el método PATCH.
2. Establece la URL a {{base_url}}/books/<ID_DEL_LIBRO> o http://localhost:3000/api/books/<ID_DEL_LIBRO>. Asegúrate de reemplazar <ID_DEL_LIBRO> con un ID real de un libro.
3. Ve a la pestaña "Body", selecciona "raw" y elige "JSON".
4. Ingresa el JSON con los campos que deseas actualizar:

   ```bash
   {
      "title": "El Principito (Edición Especial)",
      "available": false
   }
   ```
5. Envía la solicitud y verifica que el libro haya sido actualizado correctamente.

### 5. Eliminar un Libro
1. Crea una nueva solicitud y selecciona el método DELETE.
2. Establece la URL a {{base_url}}/books/<ID_DEL_LIBRO> o http://localhost:3000/api/books/<ID_DEL_LIBRO>. Asegúrate de reemplazar <ID_DEL_LIBRO> con un ID real de un libro.
4. Envía la solicitud y verifica que el libro haya sido eliminado correctamente.

## Contribución
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
3. Realiza tus cambios y haz commit de ellos (git commit -am 'Añadir nueva característica').
4. Sube tus cambios a la rama (git push origin feature/nueva-caracteristica).
5. Abre un Pull Request
