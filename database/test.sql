-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: 35.225.226.226    Database: reviews
-- ------------------------------------------------------
-- Server version	5.7.14-google-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED='65af2c72-5bc4-11e9-a6e5-42010a800582:1-10234';

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Movie` varchar(255) NOT NULL,
  `Content` varchar(255) NOT NULL,
  `Num_likes` int(11) NOT NULL,
  `Num_dislikes` int(11) NOT NULL,
  `Created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Updated_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (20,'Coco','Best movie ever!',1,0,'2019-03-29 21:41:07','2019-03-29 21:41:07'),(21,'Fantastic Beasts and Where to Find them','Such a fantastic movie!',1,0,'2019-03-29 21:43:18','2019-03-29 21:43:18'),(22,'Titanic','I cried after I watched the movie! So classic!',1,0,'2019-03-29 21:45:13','2019-03-29 21:45:13'),(23,'The Lord Of The Rings ','The world it depicts is so great. Love the characters a lot!',1,0,'2019-03-29 21:47:27','2019-03-29 21:47:27'),(24,'The Hobbit','Fantastic!',1,0,'2019-03-29 21:50:56','2019-03-29 21:50:56'),(25,'Captain American','Such a great movie. I love the special effects!',1,0,'2019-03-29 21:53:35','2019-03-29 21:53:35'),(26,'Captain American','Such a great movie. I love the special effects!',1,0,'2019-03-29 21:53:38','2019-03-29 21:53:38'),(27,'Ready Player One','The games in it is so interesting. It reminds me of my childhood.',1,0,'2019-03-29 21:55:37','2019-03-29 21:55:37'),(28,'Captain Marvel','I think it is quite boring.  ',1,0,'2019-03-29 21:56:26','2019-03-29 21:56:26'),(29,'Green Book','  It\'s a really meaningful  movie.',1,0,'2019-03-29 21:58:11','2019-03-29 21:58:11'),(33,'Titanic','Old and classic movie, great overall',3,0,'2019-03-30 13:26:34','2019-03-30 13:26:34'),(34,'Titanic','Good',0,0,'2019-03-30 15:49:00','2019-03-30 15:49:00'),(35,'Harry Potter','Good',5,0,'2019-03-30 21:25:07','2019-03-30 21:25:07'),(36,'a','a',1,1,'2019-04-03 20:39:46','2019-04-03 20:39:46');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-10 17:03:50
