# PHP CRUD Operations Using MySQL

## Folder Structure

```text
crud/
├── connection.php
└── index.php
```

## 1. `connection.php` — Database Connection

This file connects PHP to the MySQL database named `college`.

```php
<?php
$conn = mysqli_connect("localhost", "root", "", "college");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
```

## 2. `index.php` — CRUD Operations

This file performs Create, Read, Update, and Delete operations on the `students` table.

```php
<?php
include "connection.php";

// Create
if (isset($_POST['add'])) {
    $name = $_POST['name'];
    mysqli_query($conn, "INSERT INTO students (name) VALUES ('$name')");
}

// Update
if (isset($_POST['update'])) {
    $id = $_POST['id'];
    $name = $_POST['name'];
    mysqli_query($conn, "UPDATE students SET name='$name' WHERE id=$id");
}

// Delete
if (isset($_GET['delete'])) {
    $id = $_GET['delete'];
    mysqli_query($conn, "DELETE FROM students WHERE id=$id");
}

// Read
$result = mysqli_query($conn, "SELECT * FROM students");
?>

<!DOCTYPE html>
<html>
<head>
    <title>PHP CRUD Operations</title>
</head>
<body>

    <h2>Student Management System</h2>

    <form method="post">
        <input type="number" name="id" placeholder="Student ID">
        <input type="text" name="name" placeholder="Student Name" required>

        <button type="submit" name="add">Add</button>
        <button type="submit" name="update">Update</button>
    </form>

    <h3>Student Records</h3>

    <?php
    while ($row = mysqli_fetch_assoc($result)) {
        echo $row['id'] . " - "
           . htmlspecialchars($row['name']);

        echo " <a href='?delete=" . $row['id']
           . "'>Delete</a><br>";
    }
    ?>

</body>
</html>
```

## Steps to Perform the Practical

1. Start **Apache** and **MySQL** in XAMPP.
2. Open [http://localhost/phpmyadmin](http://localhost/phpmyadmin).
3. Create a database named `college`.
4. Create a table named `students` with the following fields:

   | Field | Data Type | Constraint |
   |---|---|---|
   | `id` | INT | Primary Key, Auto Increment |
   | `name` | VARCHAR(50) | — |

5. Save both PHP files in `/opt/lampp/htdocs/crud/`.
6. Open [http://localhost/crud/](http://localhost/crud/) in your browser.
7. Test the following CRUD operations:
   - **Create:** Add a new student.
   - **Read:** View all student records.
   - **Update:** Enter a student ID and a new name, then click Update.
   - **Delete:** Click the Delete link next to a student record.

## Result

Successfully implemented Create, Read, Update, and Delete (CRUD) operations using PHP and a MySQL database.
