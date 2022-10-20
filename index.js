const SQLClient = require("./db/clients/sql.clients");
const dbConfig = require("./db/config");

const db = new SQLClient(dbConfig);

// Punto 1

db.createTable("articulos")
  .then(() => {
    console.log("table created");

    // Punto 2
    const articulos = [
      { nombre: "Calculadora", codigo: "calc-01", precio: 123.45, stock: 500 },
      { nombre: "Televisor", codigo: "sony-01", precio: 44553.5, stock: 400 },
      { nombre: "Televisor", codigo: "lenovo-01", precio: 1875.25, stock: 300 },
      { nombre: "Piano", codigo: "pia-01", precio: 1244.605, stock: 200 },
      { nombre: "Reloj", codigo: "rel-01", precio: 123.45, stock: 100 },
    ];
    return db.insertRecords("articulos", articulos);
  })
  .then(() => {
    console.log("Records inserted correctly");
   
    //Punto 3
    return db.getRecords("articulos");
  })
  .then((records) => {
    console.table(records);

    //Punto4

    return db.deleteRecordById("articulos", 3);
  })
  .then(() => {
    console.log("Deleted correctly");

    // Punto 5
    return db.updateRecordById("articulos", 2, {
      stock: 0,
    });
  })
  .then(() => {
    console.log("record updated");

    return db.getRecords("articulos");
  })
  .then((records) => {
    console.log("final outcome");
    console.table(records);
  })
  .catch((error) => console.log(error.message))
  .finally(() => {
    db.disconnect();
  });
