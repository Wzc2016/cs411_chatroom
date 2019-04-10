SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `movies` (
  	`budget` int(11),
	`genres` varchar(255),
	`homepage` varchar(255),
	`id` int(11),
	`keywords` varchar(255),
	`original_language` varchar(255),
	`original_title` varchar(255),
	`overview` varchar(255),
	`popularity` int(11),
	`production_companies` varchar(255),
	`production_countries` varchar(255),
	`release_date` datetime,
	`revenue` int(11),
	`runtime` int(11),
	`spoken_languages` varchar(255),
	`status` varchar(255),
	`tagline` varchar(255),
	`title` varchar(255),
	`vote_average` int(11),
	`vote_count` int(11),
	PRIMARY KEY (`id`)
);
