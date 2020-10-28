# surf-hub

A surfer focused mobile app to catch the latest conditions on your favorite surf locations and update your friends of your next pipes.



<!-- DATABASE NOTES -->
    CREATE TABLE Users(
        userId VARCHAR (100) PRIMARY KEY, 
        email VARCHAR (50), 
        password VARCHAR (50), 
        homebreak VARCHAR (50), 
        nextspot VARCHAR (50), 
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP), 
        )

  CREATE TABLE User_favorites (
        favId SERIAL PRIMARY KEY,  
        userId VARCHAR(100),
        location VARCHAR, 
        FOREIGN KEY (userId) REFERENCES Users (userId)
    )

<!-- DUMMY DATA -->
INSERT INTO Users (userId, email, password, homebreak, nextspot) VALUES ('theqwertypusher', 'test@gmail.com', 'test_123', 'elporto', 'malibu') 

INSERT INTO User_favorites (userId, location) VALUES ('12345', 'ELPORTO')