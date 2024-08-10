import { pool } from "./database.js";

class LibroController {

  //Mostrar todos los libros
  async getAll(req, res) {
    const [result] = await pool.query("SELECT * FROM Libros");
    res.json(result);
  }

  //Mostrar un libro por id como parámetro
  async getOne(req, res) {
    try {
      const id = req.params.id;

      //Validar que el id ingresado sea numérico
      if (isNaN(id)) {
        return res
          .status(400)
          .json({ error: "ID inválido. Debe ser un número." });
      }
      //Consulta a la BD
      const [result] = await pool.query(`SELECT * FROM Libros WHERE id=(?)`, [
        id,
      ]);
      //Informar si se encontró o no el libro con el id ingresado.
      if (result.length == 0) {
        return res.status(404).json({
          error: "No se ha encontrado un libro que posea el id ingresado.",
        });
      } else {
        res
        .status(200)
        .json(result);
      }

      
    } catch (error) {
      //En caso de que la consulta a la BD sea erronea
      console.error("Error al obtener recurso:", error);
      res.status(500).json({ error: "Error interno del servidor." });
    }
  }

  //Agregar un libro ingresado en el body de la solicitud
  async add(req, res) {
    try {
      const libro = req.body;
      const [result] = await pool.query(
        `INSERT INTO Libros(nombre, autor, categoria, anio_publicacion, ISBN) VALUES(?, ?, ?, ?, ?)`,
        [
          libro.nombre,
          libro.autor,
          libro.categoria,
          libro.anio_publicacion,
          libro.ISBN,
        ]
      );
      res.json({ "Id insertado": result.insertId });
    } catch (error) {
      console.error(
        "No se han enviado los datos requeridos para la carga de manera correcta: ",
        error
      );
      res
        .status(400)
        .json({ error: "Datos introducidos de manera errónea. Reintente" });
    }
  }

  //Eliminar un libro de BD mediante su ISBN
  async delete(req, res) {
    try {
      //Ingreso de ISBN mediante parametro
      const isbn = req.params.isbn;

      const [result] = await pool.query(`DELETE FROM Libros WHERE ISBN=(?)`, [
        isbn,
      ]);
      //Si no se encuentra el ISBN en la BD se informa que no hay nada para eliminar
      if (result.affectedRows == 0) {
        res.json
          .status(404)
          .json({ error: "Recurso a eliminar con el ISBN proporcionado no encontrado." });
      } else {
        res.json({
          "Registro con el ISBN elegido eliminado": result.affectedRows,
        });
      }
      //Manejo del error ante algún inconveniente en la consulta a la BD
    } catch (error) {
      console.error("Error al eliminar el recurso:", error);
      res.status(500).json({ error: "Error interno del servidor." });
    }
  }

  //Actualizar un libro mediante el envio de los datos en el body de la solicitud
  async update(req, res) {
    try {
      const libro = req.body;
      const [result] = await pool.query(
        `UPDATE Libros SET nombre=(?), autor=(?), categoria=(?), anio_publicacion=(?), ISBN=(?) WHERE id=(?)`,
        [
          libro.nombre,
          libro.autor,
          libro.categoria,
          libro.anio_publicacion,
          libro.ISBN,
          libro.id,
        ]
      );
      res.json({ "Registros actualizados": result.changedRows });
    } catch (error) {
      console.error("Error en la actualización del recurso:", error);
      res.status(500).json({ error: "Error interno del servidor." });
    }
  }
}

export const libro = new LibroController();
