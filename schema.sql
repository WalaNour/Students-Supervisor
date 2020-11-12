DROP DATABASE IF EXISTS eduproject;
CREATE DATABASE eduproject;
USE eduproject;
CREATE TABLE students(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR (50),
    username VARCHAR (50) NOT NULL,
    lastname VARCHAR (50) ,
    secretinfo VARCHAR (150) NOT NULL,
    password VARCHAR (150) NOT NULL,
    email VARCHAR (50) NOT NULL ,
    country VARCHAR (50) ,
    city VARCHAR (50) , 
    address VARCHAR (50) ,
    -- ///
    dreamJob VARCHAR (50) , 
    postalcode VARCHAR (50),
    driving VARCHAR (50) , 
    educationlvl VARCHAR (50)  , 
    feald VARCHAR (50) , 
    -- ////
    dateOfBirth VARCHAR (50) ,
    placeOfBirth VARCHAR (50)  ,
    nationality VARCHAR (50) ,
    summery VARCHAR (500) ,
    socialLink VARCHAR (100) ,
    skills VARCHAR (50)  , 
    languages VARCHAR (50) , 
    hobbies VARCHAR (50) , 
    profilePic VARCHAR (100)  ,
    verification VARCHAR (10)  DEFAULT 'false'  , 
    verRequest VARCHAR (10)   DEFAULT 'false' , 
    firstTime VARCHAR (10)  DEFAULT 'true' ,
    token varchar (300) 
);
CREATE TABLE companies(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    password VARCHAR (120) NOT NULL ,
    email VARCHAR (50) ,
    owner VARCHAR (50) ,
    field VARCHAR (50) ,
    numberOfEmployees VARCHAR (50)  ,
    about VARCHAR (250) ,
    location VARCHAR (50),
    website VARCHAR (100),
    logo VARCHAR (100),
    verification VARCHAR (10) DEFAULT 'false'   , 
    verRequest VARCHAR (10)  DEFAULT 'false'  , 
    firstTime VARCHAR (10)  DEFAULT 'true' ,
        token varchar (300) 

);
CREATE TABLE trainingCenters(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    password VARCHAR (120) NOT NULL ,
    email VARCHAR (50) ,
    owner VARCHAR (50) ,
    trainingOptions VARCHAR (50) ,
    about VARCHAR (250) ,
    location VARCHAR (50),
    website VARCHAR (100),
    numberOfStudentGraduated VARCHAR (50),
    logo VARCHAR (100),
    verification VARCHAR (10)   DEFAULT 'false' , 
    verRequest VARCHAR (10)   DEFAULT 'false' , 
    firstTime VARCHAR (10)   DEFAULT 'true',
    numberOfPosts INTEGER(50) ,
    memberShip VARCHAR (10)   DEFAULT 'silver',
    numberOfPostsAvaible INTEGER(10) DEFAULT 3 , 
    token varchar (300) 

);
CREATE TABLE post(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) ,
    description VARCHAR(400) ,
    image VARCHAR(100) ,
    type VARCHAR(50) ,
    owner VARCHAR(50) ,
    rate INTEGER(10)  ,
    salary INTEGER(50)   DEFAULT 1, 
    contact VARCHAR(50) ,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE notification (
 id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50) ,
   owner VARCHAR(50) ,
   studentName VARCHAR(50)
);

CREATE TABLE feedbacks(

  id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  message VARCHAR(150),
  typeOfUser VARCHAR(15),
  username VARCHAR(50)
);

CREATE TABLE reports (
 id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) ,
reason VARCHAR(50) ,
comment VARCHAR(250),
postId VARCHAR(50)
);

CREATE TABLE coach (
id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
fullName VARCHAR(50) ,
image VARCHAR(100) ,

diplome VARCHAR(50) ,
experience VARCHAR(250),
about VARCHAR(1000) , 
email  VARCHAR(50) , 
number INTEGER(20) 
);

CREATE TABLE trees (
  id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  job VARCHAR(30),
  field VARCHAR(30)
);

CREATE TABLE paths (
  id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30),
  stepOne VARCHAR(30),
  descOne VARCHAR(200),
  stepTwo VARCHAR(30),
  descTwo VARCHAR(200),
  stepThree VARCHAR(30),
  descThree VARCHAR(200),
  stepFour VARCHAR(30),
  descFour VARCHAR(200),
  stepFive VARCHAR(30),
  descFive VARCHAR(200),
  stepSix VARCHAR(30),
  descSix VARCHAR(200),
  stepSeven VARCHAR(30),
  descSeven VARCHAR(200),
  stepEight VARCHAR(30),
  descEight VARCHAR(200),
  stepNine VARCHAR(30),
  descNine VARCHAR(200),
  stepTen VARCHAR(30),
  descTen VARCHAR(200)
);
CREATE TABLE relations (
  id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  treeName VARCHAR(30) ,
  pathName VARCHAR(30)
);

CREATE TABLE comments (
  id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  postId INT(4),
  username VARCHAR(30),
  postsText VARCHAR(255),
  imgUrl VARCHAR(150)
);


