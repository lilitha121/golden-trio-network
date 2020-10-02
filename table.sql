create table business_owner  (
    id serial primary key, 
    first_name text not null, 
    last_name text not null,
    business_type text,
    email text
);


insert into business_owner (business_type, last_name, first_name, email) values ('Plumber', 'Avela', 'Bhinqa' , '');
insert into business_owner (business_type, last_name, first_name, email) values ('Plumber', 'Jacob', 'Lubisi' , '');
insert into business_owner (business_type, last_name, first_name, email) values ('Plumber', 'Isriel', 'Sontonga' , '');
insert into business_owner (business_type, last_name, first_name, email) values ('Plumber', 'Menzi', 'Johnson' , '');
insert into business_owner (business_type, last_name, first_name, email) values ('Plumber', 'Xolani', 'Thimla' , '');


insert into business_owner (business_type, last_name, first_name, email) values ('Plumber', 'Avela', 'Bhinqa' , '');
insert into business_owner (business_type, last_name, first_name, email) values ('Plumber', 'Jacob', 'Lubisi' , '');
insert into business_owner (business_type, last_name, first_name, email) values ('Plumber', 'Isriel', 'Sontonga' , '');
insert into business_owner (business_type, last_name, first_name, email) values ('Plumber', 'Menzi', 'Johnson' , '');
insert into business_owner (business_type, last_name, first_name, email) values ('Plumber', 'Xolani', 'Thimla' , '')