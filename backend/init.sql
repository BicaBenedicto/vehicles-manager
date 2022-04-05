  CREATE SCHEMA IF NOT EXISTS vhg_challenge;

  CREATE TABLE IF NOT EXISTS vhg_challenge.types_vehicles (
    id INT AUTO_INCREMENT,
    type VARCHAR(50) UNIQUE NOT NULL,
    PRIMARY KEY (id)
  );
  
  CREATE TABLE IF NOT EXISTS vhg_challenge.categories_vehicles (
    id INT AUTO_INCREMENT,
    type_id INT NOT NULL,
    category VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (type_id) REFERENCES types_vehicles(id)
  );
  
  CREATE TABLE IF NOT EXISTS vhg_challenge.vehicles (
    id INT AUTO_INCREMENT,
    category_id INT NOT NULL,
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    color VARCHAR(50) NOT NULL,
    plate VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories_vehicles(id)
  );
  
  INSERT INTO vhg_challenge.types_vehicles (type)
  VALUES ('carro'), ('moto');
  
  INSERT INTO vhg_challenge.categories_vehicles (type_id, category)
  VALUES
  (1, 'Compacto'),
  (1, 'Sedan'),
  (1, 'SUV'),
  (1, 'Caminhonete'),
  (2, 'Scooter'),
  (2, 'Cidade'),
  (2, 'Off - Road'),
  (2, 'Sport');
  
  INSERT INTO vhg_challenge.vehicles (category_id, model, color, plate, year, brand)
  VALUES
  (1, 'Compacto Teste', 'Preto', 'CAS-1321', 1960, 'Marca qualquer'),
  (1, 'Compacto Teste 2', 'Azul', 'HAS-3321', 1990, 'Marca qualquer'),
  (2, 'Sedan Teste', 'Vermelho', 'CAS-1321', 1960, 'Marca qualquer'),
  (2, 'Sedan Teste 2', 'Preto', 'CAS-1321', 1960, 'Marca qualquer'),
  (3, 'SUV Teste', 'Preto', 'CAS-1321', 1960, 'Marca qualquer'),
  (3, 'SUV Teste 2', 'Preto', 'CAS-1321', 1960, 'Marca qualquer'),
  (4, 'Caminhonete Teste', 'Preto', 'CAS-1321', 1960, 'Marca qualquer'),
  (4, 'Caminhonete Teste 2', 'Preto', 'CAS-1321', 1960, 'Marca qualquer'),
  (5, 'Scooter Teste', 'Preto', 'CAS-1321', 1960, 'Marca qualquer'),
  (5, 'Scooter Teste 2', 'Preto', 'CAS-1321', 1960, 'Marca qualquer'),
  (6, 'Cidade Teste', 'Preto', 'CAS-1321', 1960, 'Marca qualquer'),
  (6, 'Cidade Teste 2', 'Preto', 'CAS-1321', 1960, 'Marca qualquer'),
  (7, 'Off - Road Teste', 'Preto', 'CAS-1321', 1960, 'Marca qualquer'),
  (7, 'Off - Road Teste 2', 'Preto', 'CAS-1321', 1960, 'Marca qualquer'),
  (8, 'Sport Teste', 'Preto', 'CAS-1321', 1960, 'Marca qualquer'),
  (8, 'Sport Teste 2', 'Preto', 'CAS-1321', 1960, 'Marca qualquer');
  