

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `reviews` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Movie` varchar(255) NOT NULL,
  `Content` varchar(255) NOT NULL,
  `Num_likes` int(11) NOT NULL,
  `Num_dislikes` int(11) NOT NULL,
  `Created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Updated_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


