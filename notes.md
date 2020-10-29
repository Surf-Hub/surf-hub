# surf-hub

A surfer focused mobile app to catch the latest conditions on your favorite surf locations and update your friends of your next pipes.



<!-- DATABASE NOTES -->
    CREATE TABLE Users(
        userId VARCHAR (100) PRIMARY KEY, 
        displayName VARCHAR (50), 
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

    CREATE TABLE User_friends (
        friendId SERIAL PRIMARY KEY, 
        userId VARCHAR (100) NOT NULL,
        userFriendId VARCHAR (100) NOT NULL, 
        status (50) NOT NULL, 
        <!-- Sent Time Stamp -->
        <!-- Accepted Time Stamp -->
        FOREIGN KEY (userId) REFERENCES Users (userId),
        FOREIGN KEY (userFriendId) REFERENCES Users (userId)  
    )


    Example: https://stackoverflow.com/questions/379236/database-design-best-table-structure-for-capturing-the-user-friend-relationship


    friends query example: 
    https://stackoverflow.com/questions/36998526/design-a-friends-table-for-a-social-networking-site

<!-- DUMMY DATA -->
INSERT INTO Users (userId, email, password, homebreak, nextspot) VALUES ('theqwertypusher', 'test@gmail.com', 'test_123', 'elporto', 'malibu') 

INSERT INTO User_favorites (userId, location) VALUES ('12345', 'ELPORTO')

INSERT INTO User_friends (userId, userFriendId) VALUES ('1', '108151015866983509449')


<!-- Renamed column -->
ALTER TABLE Users 
RENAME COLUMN email TO displayName;




