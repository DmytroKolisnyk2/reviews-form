create DATABASE reviews;

create TABLE form(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  message VARCHAR(255)
);