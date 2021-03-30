create schema cinema;

create table if not exists cinema.employee (
  id serial,
  first_name varchar(80) not null, 
  last_name varchar(80), 
  address_street_name varchar(80) not null, 
  address_street_number numeric(10), 
  address_district varchar(150) not null, 
  birth_date timestamp
);


