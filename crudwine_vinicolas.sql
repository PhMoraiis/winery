-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: crudwine
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `vinicolas`
--

DROP TABLE IF EXISTS `vinicolas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vinicolas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `description` varchar(555) NOT NULL,
  `price` decimal(8,0) NOT NULL,
  `local` varchar(255) NOT NULL,
  `quartos` int NOT NULL,
  `banheiros` int NOT NULL,
  `pets` tinyint DEFAULT NULL,
  `kids` tinyint DEFAULT NULL,
  `wifi` tinyint DEFAULT NULL,
  `cafe` tinyint DEFAULT NULL,
  `winetaste` tinyint DEFAULT NULL,
  `imageurl` varchar(355) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vinicolas`
--

LOCK TABLES `vinicolas` WRITE;
/*!40000 ALTER TABLE `vinicolas` DISABLE KEYS */;
INSERT INTO `vinicolas` VALUES (1,'Viu Manent','A Vinícola Terranova faz parte da Miolo Wine Group e está localizada no Vale do São Francisco, na Bahia. O estado é, no momento, o único lugar no mundo capaz de realizar mais de uma safra por ano, podendo chegar a três. O clima quente da região permite a criação de vinhos encorpados e com alta estrutura aromática.',1000,'Valle de Casablanca / Chile',4,4,1,1,0,0,1,'https://www.leblog.com.br/wp-content/uploads/2015/12/georges-dest.jpg'),(3,'Abreu Garcia Vinhos de Altitude','Localizada na Serra Catarinense, em Campo Belo do Sul, a Vinícola Abreu Garcia produz seus vinhos de altitude nas regiões mais elevadas do estado. Embora a empresa tenha sido fundada em 2006, já apresenta uma tradição consolidada, com mais de onze premiações nacionais e internacionais.',1500,'Campo Belo do Sul / SC',8,5,0,0,1,1,1,'https://www.divvino.com.br/blog/wp-content/uploads/2021/11/vinicolas-no-brasil-abreu-garcia.jpg'),(4,'Terranova','A Vinícola Terranova faz parte da Miolo Wine Group e está localizada no Vale do São Francisco, na Bahia. O estado é, no momento, o único lugar no mundo capaz de realizar mais de uma safra por ano, podendo chegar a três. O clima quente da região permite a criação de vinhos encorpados e com alta estrutura aromática.',300,'Vale do São Francisco / BA',2,2,0,1,0,0,0,'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyD19jHLerUhBgUSQeJm_U6soxxJaZTtMF14wYWq5Z0S11gUUMN24Rw44w0kx3Y2CxAgelP5ke8uN7Ct6PTPhDMpyiZAkjgHCx5Pe5XZNwTHIY8nDCaZSjW4gsrL4BuXAvCbXNTZ913Zery7j9WVuGbZ2kuIOHU9iqqp_ZsXO-N3lkOrWJvLv2zWTzOg/w640-h480/Blog-Apaixonados-por-Viagens-Vindima-Serra-Ga%C3%BAcha%20(106).jpg'),(5,'Zuccardi Valle de Uco','Localizada a 1.100 metros de altitude, a Zuccardi é a vinícola mais alta da região do Valle de Uco, em meio às montanhas andinas. Integrada à natureza, a vinícola de arquitetura ultra moderna foi construída com pedras naturais da região e é uma atração à parte, com o domo que parece um observatório para o incrível céu da região.',2200,'Mendoza / Argentina',10,6,0,1,1,1,1,'https://images.adsttc.com/media/images/614a/27df/f91c/81d5/d800/0171/newsletter/_MG_4278.jpg?1632249814');
/*!40000 ALTER TABLE `vinicolas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-18  4:34:25
