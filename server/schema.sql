-- DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int not Null primary key,
  name varchar(30),
  room varchar(30),
  message varchar(140)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE room_message (
  room_id int not Null primary key,
  room_name varchar(30),
  message_id int not Null,
  foreign key (message_id) references messages (id)
);

CREATE TABLE name_message (
  name_id int not Null primary key,
  name varchar(30),
  message_id int not Null,
  foreign key (message_id) references messages (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

