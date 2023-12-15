const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

var tempname = "";


//chatgpt
//const bodyParser = require('body-parser');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'PurrfectMatch',
  database: 'PurrfectMatch',
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

//user login
app.post("/user/login", (req, res) => {
  const { Username, Password } = req.body;
  connection.query(
    "select * from authentication where Username = ? and Password = ?",
    [Username, Password],
    function (err, row) {
      if (err) {
        return res.status(500).json();
      } else if (!row.length) {
        return res.status(404).json();
      }
      return res.status(201).json(row);
    }
  );
});

//user register
app.post("/user/register", async (req, res) => {
  try {
    const { id, FirstName,
    LastName,
    Username,
    Password,
    Gender,
    age,
    DateOfBirth } = req.body;

    console.log(id, FirstName,
      LastName,
      Username,
      Password,
      Gender,
      age,
      DateOfBirth)

    // Insert into authentication table
    const authQuery = "INSERT INTO authentication VALUES (?, ?, ?)";
    await new Promise((resolve, reject) => {
      connection.query(authQuery, [Username, Password, "customer"], function (err, row) {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });

    // Insert into user table
    const userQuery = "INSERT INTO user VALUES (?, ?, ?, ?, ?, ?)";
    await new Promise((resolve, reject) => {
      connection.query(userQuery, [id, FirstName, LastName, DateOfBirth, age, Gender], function (err, row1) {
        if (err) {
          reject(err);
        } else {
          resolve(row1);
        }
      });
    });

    // Respond to the client
    return res.status(201).json({ message: "Registration successful" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


//user register
app.post("/user/customer-data", (req, res) => {
  console.log(tempname);
  const {
    id,
    fname,
    lname,
    date,
    age,
    gender,
    energy,
    mind,
    nature,
    identity,
    tactics,
  } = req.body;

  connection.query(
    "insert into user values (?,?,?,?,?,?)",
    [id, fname, lname, date, age, gender],
    function (err, row1) {
      if (err) {
        return res.status(500).json();
      } else {
        if (tempname === "") {
          return res.status(500).json();
        }
        connection.query(
          "insert into customer values (?,?,?,?,?,?,?)",
          [id, energy, mind, nature, identity, tactics, tempname],
          function (err, row2) {
            if (err) {
              return res.status(500).json();
            }
          }
        );
        return res.status(201).json(row1);
      }
    }
  );
});

//list of all pets 
app.get("/pets", (req, res) => {
  connection.query("SELECT * FROM pet", function (err, rows) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(rows);
  });
});

//get details of a specific pet
app.get("/pets/:id", (req, res) => {
  const petId = req.params.id;
  connection.query("SELECT * FROM pet WHERE PetID = ?", [petId], function (err, row) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    } else if (!row.length) {
      return res.status(404).json({ error: "Pet not found" });
    }
    return res.status(200).json(row);
  });
});


//update pet details 
//7ewar el type id hal manteky keda?
app.put("/pets/:id", (req, res) => {
  const petId = req.params.id;
  const { name, gender, breed, typeName, dateOfBirth, centerId, userId } = req.body;

  connection.query(
    "SELECT TypeID FROM type WHERE TypeName = ?",
    [typeName],
    function (err, rows) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      } else if (rows.length === 0) {
        return res.status(404).json({ error: "Type not found" });
      }

      const typeId = rows[0].TypeID;

      connection.query(
        "UPDATE pet SET Name = ?, Gender = ?, Breed = ?, TypeID = ?, DateOfBirth = ?, CenterID = ?, UserID = ? WHERE PetID = ?",
        [name, gender, breed, typeId, dateOfBirth, centerId, userId, petId],
        function (err, result) {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
          } else if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Pet not found" });
          }
          return res.status(200).json({ message: "Pet updated successfully" });
        }
      );
    }
  );
});



//Delete a certain pet 

app.delete("/pets/:id", (req, res) => {
  const petId = req.params.id;
  connection.query("DELETE FROM pet WHERE PetID = ?", [petId], function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    } else if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Pet not found" });
    }
    return res.status(200).json({ message: "Pet deleted successfully" });
  });
});


//insert a new pet
//note adjust the database to increment the id automatically 
app.post("/pets/insert", (req, res) => {
  const { PetID, name, gender, breed, type, dateOfBirth, userId, centerName } = req.body || {};

  console.log(req.body);

  
  connection.query(
    "SELECT TypeID FROM Type WHERE TypeName = ?",
    [type],
    function (err, rows) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      } else if (rows.length === 0) {
        return res.status(404).json({ error: "Type not found" });
      }

      const typeId = rows[0].TypeID;

     
      connection.query(
        "SELECT CenterID FROM Center WHERE CenterName = ?",
        [centerName],
        function (err, rows) {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
          } else if (rows.length === 0) {
            return res.status(404).json({ error: "Center not found" });
          }

          const centerId = rows[0].CenterID;

          
          connection.query(
            "INSERT INTO pet (PetID, Name, Gender, Breed, TypeID, DateOfBirth, UserID, CenterID) VALUES (?,?, ?, ?, ?, ?, ?, ?)",
            [PetID, name, gender, breed, typeId, dateOfBirth, userId, centerId],
            function (err, result) {
              if (err) {
                console.error(err);
                return res.status(500).json({ error: "Internal Server Error" });
              }

              return res.status(201).json({ petId: result.insertId });
            }
          );
        }
      );
    }
  );
});


//List all vets:

app.get("/vets", (req, res) => {
  connection.query("SELECT * FROM vet", function (err, rows) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(rows);
  });
});

//Get details of a specific vet:

app.get("/vets/:id", (req, res) => {
  const vetId = req.params.id;
  connection.query("SELECT * FROM vet WHERE UserID = ?", [vetId], function (err, row) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    } else if (!row.length) {
      return res.status(404).json({ error: "Vet not found" });
    }
    return res.status(200).json(row);
  });
});

//Add a new vet:

app.post("/vets", (req, res) => {
  const { firstName, lastName, dateOfBirth, age, gender, buildingNum, streetNum, city, speciality, schedule, centerId, username, password } = req.body;
  connection.query(
    "INSERT INTO user (FirstName, LastName, DateOfBirth, Age, Gender) VALUES (?, ?, ?, ?, ?)",
    [firstName, lastName, dateOfBirth, age, gender],
    function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      const userId = result.insertId;

      connection.query(
        "INSERT INTO vet (UserID, BuildingNum, StreetNum, City, Speciality, Schedule, CenterID, Username) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [userId, buildingNum, streetNum, city, speciality, schedule, centerId, username],
        function (err) {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
          }

          // Additional logic if needed

          return res.status(201).json({ vetId: result.insertId });
        }
      );
    }
  );
});

//Update vet details:

app.put("/vets/:id", (req, res) => {
  const vetId = req.params.id;
  const { firstName, lastName, dateOfBirth, age, gender, buildingNum, streetNum, city, speciality, schedule, centerId, username } = req.body;
  connection.query(
    "UPDATE vet SET BuildingNum = ?, StreetNum = ?, City = ?, Speciality = ?, Schedule = ?, CenterID = ?, Username = ? WHERE UserID = ?",
    [buildingNum, streetNum, city, speciality, schedule, centerId, username, vetId],
    function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      } else if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Vet not found" });
      }
      return res.status(200).json({ message: "Vet updated successfully" });
    }
  );
});


//Delete a vet:
app.delete("/vets/:id", (req, res) => {
  const vetId = req.params.id;
  connection.query("DELETE FROM vet WHERE UserID = ?", [vetId], function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    } else if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Vet not found" });
    }
    return res.status(200).json({ message: "Vet deleted successfully" });
  });
});


//Appointment Operations:
//List all appointments:
app.get("/appointments", (req, res) => {
  connection.query("SELECT * FROM appointment", function (err, rows) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(rows);
  });
});


//Get details of a specific appointment:


app.get("/appointments/:id", (req, res) => {
  const appointmentId = req.params.id;
  connection.query("SELECT * FROM appointment WHERE AppointmentID = ?", [appointmentId], function (err, row) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    } else if (!row.length) {
      return res.status(404).json({ error: "Appointment not found" });
    }
    return res.status(200).json(row);
  });
});


//Schedule a new appointment:

app.post("/appointments", (req, res) => {
  const { date, time, vetId, petId, customerId, centerId } = req.body;
  connection.query(
    "INSERT INTO appointment (Date, Time, VetID, PetID, CustomerID, CenterID) VALUES (?, ?, ?, ?, ?, ?)",
    [date, time, vetId, petId, customerId, centerId],
    function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      // Additional logic if needed

      return res.status(201).json({ appointmentId: result.insertId });
    }
  );
});


//Update appointment details:

app.put("/appointments/:id", (req, res) => {
  const appointmentId = req.params.id;
  const { date, time, vetId, petId, customerId, centerId } = req.body;
  connection.query(
    "UPDATE appointment SET Date = ?, Time = ?, VetID = ?, PetID = ?, CustomerID = ?, CenterID = ? WHERE AppointmentID = ?",
    [date, time, vetId, petId, customerId, centerId, appointmentId],
    function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      } else if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Appointment not found" });
      }
      return res.status(200).json({ message: "Appointment updated successfully" });
    }
  );
});


//Cancel an appointment:

app.delete("/appointments/:id", (req, res) => {
  const appointmentId = req.params.id;
  connection.query("DELETE FROM appointment WHERE AppointmentID = ?", [appointmentId], function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    } else if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Appointment not found" });
    }
    return res.status(200).json({ message: "Appointment canceled successfully" });
  });
});

//Product Operations:
//List all products:
app.get("/products", (req, res) => {
  connection.query("SELECT * FROM product", function (err, rows) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(rows);
  });
});


//Get details of a specific product:

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  connection.query("SELECT * FROM product WHERE ProductID = ?", [productId], function (err, row) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    } else if (!row.length) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.status(200).json(row);
  });
});


//Add a new product:

app.post("/products", (req, res) => {
  const { name, description, stock, productionDate, expirationDate, cost, type, centerId } = req.body;
  connection.query(
    "INSERT INTO product (Name, Description, Stock, ProductionDate, ExpirationDate, Cost, Type, CenterID) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [name, description, stock, productionDate, expirationDate, cost, type, centerId],
    function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      // Additional logic if needed

      return res.status(201).json({ productId: result.insertId });
    }
  );
});


//Update product details:

app.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  const { name, description, stock, productionDate, expirationDate, cost, type, centerId } = req.body;
  connection.query(
    "UPDATE product SET Name = ?, Description = ?, Stock = ?, ProductionDate = ?, ExpirationDate = ?, Cost = ?, Type = ?, CenterID = ? WHERE ProductID = ?",
    [name, description, stock, productionDate, expirationDate, cost, type, centerId, productId],
    function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      } else if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.status(200).json({ message: "Product updated successfully" });
    }
  );
});


//Delete a product:

app.delete("/products/:id", (req, res) => {
  const productId = req.params.id;
  connection.query("DELETE FROM product WHERE ProductID = ?", [productId], function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    } else if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
