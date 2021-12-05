-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 05, 2021 at 02:25 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `umn_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `nim` varchar(10) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `prodi` varchar(50) NOT NULL,
  `foto` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`nim`, `nama`, `prodi`, `foto`) VALUES
('001', 'John Thor', 'Informatika', NULL),
('002', 'John Wick', 'DKV', NULL),
('005', 'Delpoy', 'Valorant', 'uploads/Orta.png'),
('006', 'Delpin', 'Valorant', '/Applications/XAMPP/xamppfiles/htdocs/apiuploads/rothy.jpeg'),
('030', 'Curry', 'Basketball ', '/Applications/XAMPP/xamppfiles/htdocs/apiuploads/rothy.jpeg'),
('033', 'Seth Curry', 'Pro Basketbal', '/Applications/XAMPP/xamppfiles/htdocs/apiuploads/rothy.jpeg'),
('122', 'asd', 'asd', 'uploads/rothy.jpeg'),
('130', 'Roghty', 'Artis', 'uploads/rothy.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`nim`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
