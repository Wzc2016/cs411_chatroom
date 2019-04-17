SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `users` (
	`user_name` varchar(255) NOT NULL,
	`uid` int(11) NOT NULL AUTO_INCREMENT,
	`friends` varchar(255) NOT NULL DEFAULT '',
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`movie_list` varchar(255) NOT NULL DEFAULT '',
	PRIMARY KEY (`uid`)
)ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
