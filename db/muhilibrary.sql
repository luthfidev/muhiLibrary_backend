-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: May 31, 2020 at 01:53 AM
-- Server version: 10.4.12-MariaDB-1:10.4.12+maria~bionic
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `muhilibrary`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `description` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Mark Manson', 'Gramedia Widiasarana Indonesia', '2020-05-15 21:55:36', '2020-05-17 13:21:07'),
(2, 'Hamidah Sulaiman', 'Gramedia', '2020-05-17 22:08:58', '2020-05-17 22:23:46'),
(3, 'Adrianus Agung W', 'Gramedia', '2020-05-17 22:15:27', '2020-05-17 22:23:55'),
(4, 'Redaksi Qultum Media', 'Gramedia', '2020-05-17 22:18:11', '2020-05-17 22:23:34'),
(5, 'Dewi Ria Utari', 'Gramedia', '2020-05-17 22:20:23', '2020-05-17 22:23:38'),
(6, 'Heru Kurniawan', 'Gramedia', '2020-05-17 22:23:13', '2020-05-17 22:23:41');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(10) NOT NULL,
  `title` varchar(40) NOT NULL,
  `description` varchar(100) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `genre_id` tinyint(3) NOT NULL,
  `author_id` int(10) NOT NULL,
  `release_date` date NOT NULL,
  `status_id` tinyint(3) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `description`, `image`, `genre_id`, `author_id`, `release_date`, `status_id`, `created_at`, `updated_at`) VALUES
(104, 'Sejarah', 'tentang sejarah', 'uploads\\1589729335714_1.png', 1, 1, '2005-02-20', 1, '2020-05-17 14:15:11', '2020-05-17 22:28:55'),
(106, 'Psikologi Perkembangan Anak Remaja', 'Secara umum, perkembangan merupakan proses pertumbuhan manusia sejak lahir hingga tumbuh dewasa', 'uploads\\1589728326428_2.png', 4, 2, '2020-04-29', 2, '2020-05-17 22:12:05', '2020-05-18 12:44:12'),
(107, 'Pertempuran Laut Jawa', 'Setelah sukses menghantam Pearl Harbour, Jepang semakin gencar mengadakan ekspansi militernya', 'uploads\\1589728560633_3.png', 5, 3, '2020-04-18', 1, '2020-05-17 22:16:00', '2020-05-18 04:43:41'),
(108, 'Yasin & Tahlil', 'Tulisan Arab, latin, dan terjemahnya besar dan mudah terbaca.', 'uploads\\1589728713145_4.png', 3, 4, '2020-04-13', 1, '2020-05-17 22:18:32', NULL),
(109, 'Rumah Hujan', 'Kepada Cakra, lelaki yang mencintai ibunya,', 'uploads\\1589728855084_5.png', 1, 5, '2020-04-13', 2, '2020-05-17 22:20:54', '2020-05-18 13:06:54'),
(110, 'Seni Mengajarkan Berpuasa pada Anak', 'Seni Mengajarkan Berpuasa pada Anak', 'uploads\\1589729085639_6.png', 3, 5, '2020-04-13', 1, '2020-05-17 22:24:45', NULL),
(112, 'Kisah Tanah Jawa 2', 'Horror', 'uploads\\2111.jpg', 1, 1, '2020-06-06', 1, '2020-05-21 09:45:01', NULL),
(113, 'Kisah Tanah Jawa 2', 'Horror', 'uploads\\1590029464582_11.jpg', 1, 1, '2020-06-06', 1, '2020-05-21 09:51:05', NULL),
(114, 'Kisah Tanah Jawa 2', 'Horror', 'uploads\\1590029646343_11.jpg', 1, 1, '2020-06-06', 1, '2020-05-21 09:54:06', NULL),
(115, 'Kisah Tanah Jawa 2', 'Horror', 'uploads\\1590030314712_11.jpg', 1, 1, '2020-06-06', 1, '2020-05-21 10:05:15', NULL),
(116, 'Kisah Tanah Jawa 2', 'Horror', '[object Object]', 1, 1, '2020-06-06', 1, '2020-05-22 14:06:48', NULL),
(117, 'Kisah Tanah Jawa 2', 'Horror', 'uploads\\1590131255095_11.jpg', 1, 1, '2020-06-06', 1, '2020-05-22 14:07:36', NULL),
(118, 'Kisah Tanah Jawa 2', 'Horror', 'uploads\\1590131343629_11.jpg', 1, 1, '2020-06-06', 1, '2020-05-22 14:09:05', NULL),
(119, 'Kisah Tanah Jawa', 'Horror', 'uploads\\1590828141949_10277651_783861248305696_2381725018213295719_n.jpg', 1, 1, '2020-06-06', 3, '2020-05-30 15:42:21', '2020-05-31 08:38:35');

-- --------------------------------------------------------

--
-- Table structure for table `book_statuses`
--

CREATE TABLE `book_statuses` (
  `id` tinyint(3) NOT NULL,
  `name` varchar(15) NOT NULL,
  `description` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_statuses`
--

INSERT INTO `book_statuses` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Available', 'books ready to be borrowed\r\n', '2020-05-16 05:43:13', '2020-05-17 13:19:28'),
(2, 'Unavailable', 'the book is being borrowed', '2020-05-13 08:44:52', '2020-05-17 13:19:12'),
(3, 'On Prosess', 'on proses loan for user', '2020-05-17 05:05:04', '2020-05-17 13:18:29');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` tinyint(3) NOT NULL,
  `name` varchar(25) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Art', '2020-05-16 05:34:52', '2020-05-17 13:16:25'),
(2, 'Technology', '2020-05-15 21:55:59', '2020-05-17 13:16:45'),
(3, 'Religious', '2020-05-16 05:36:26', '2020-05-17 13:23:25'),
(4, 'Science', '2020-05-17 22:07:54', NULL),
(5, 'Sejarah', '2020-05-17 22:14:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `time` timestamp NULL DEFAULT current_timestamp(),
  `user_email` varchar(25) DEFAULT NULL,
  `type` tinyint(4) DEFAULT NULL,
  `description` varchar(25) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `time`, `user_email`, `type`, `description`, `status`) VALUES
(52, '2020-05-31 01:32:30', 'user10@lib.com', 0, 'login', 0);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` tinyint(3) NOT NULL,
  `name` varchar(15) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2020-05-13 08:45:48', NULL),
(2, 'user', '2020-05-13 08:45:48', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(10) NOT NULL,
  `transaction_date` date NOT NULL,
  `user_id` int(10) NOT NULL,
  `book_id` int(10) NOT NULL,
  `status_id` tinyint(3) NOT NULL DEFAULT 3,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `transaction_date`, `user_id`, `book_id`, `status_id`, `created_at`, `updated_at`) VALUES
(20, '2020-05-17', 43, 107, 1, '2020-05-17 22:57:39', '2020-05-18 04:43:41'),
(21, '2020-09-09', 45, 106, 2, '2020-05-18 12:32:15', '2020-05-18 12:44:12'),
(22, '2020-09-09', 46, 109, 2, '2020-05-18 13:04:55', '2020-05-18 13:06:54'),
(23, '2020-12-12', 48, 119, 3, '2020-05-31 08:38:35', NULL);

--
-- Triggers `transactions`
--
DELIMITER $$
CREATE TRIGGER `update_status_book_after_insert` AFTER INSERT ON `transactions` FOR EACH ROW BEGIN
UPDATE books set books.status_id = new.status_id WHERE books.id = new.book_id;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_status_book_after_update` AFTER UPDATE ON `transactions` FOR EACH ROW BEGIN
UPDATE books set books.status_id = new.status_id WHERE books.id = old.book_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `transaction_statuses`
--

CREATE TABLE `transaction_statuses` (
  `id` tinyint(3) NOT NULL,
  `name` varchar(15) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction_statuses`
--

INSERT INTO `transaction_statuses` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Return the Book', '2020-05-13 08:46:39', '2020-05-18 12:45:12'),
(2, 'Borrowed', '2020-05-13 08:46:39', '2020-05-18 12:45:16'),
(3, 'Pending', '2020-05-18 12:39:49', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `email` varchar(25) NOT NULL,
  `password` varchar(60) NOT NULL,
  `role_id` tinyint(3) NOT NULL DEFAULT 2,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `role_id`, `created_at`, `updated_at`) VALUES
(34, 'admin@lib.com', '$2b$10$3sHeIcL8Bj.aBrxPpjnU/e1HOXTwBSrHxIo1g9fR59jFhK.qsF2ju', 1, '2020-05-15 20:30:23', '2020-05-15 20:34:06'),
(43, 'user2@lib.com', '$2b$10$uavZRd6oguegLc0aLanQR.NYz3fpmNa3Fok/Tu482pPP3yT6McHEe', 2, '2020-05-17 14:26:39', NULL),
(44, 'user@lib.com', '$2b$10$XiRBwKdfV.jgpv1xQ8ajlO2hrJFDF.20riOLYyiiyIMZJ.9ZuQAna', 2, '2020-05-17 22:00:58', NULL),
(45, 'user3@lib.com', '$2b$10$E22lIwEHHvy1sskE7qax1OhKn6hKDmXD56otm71EkGToNzE6eNjS6', 2, '2020-05-18 12:29:23', NULL),
(46, 'user5@lib.com', '$2b$10$nhIRAAbCFTPNKtsIIf/DyekYkyPZjGr5YWl.cfRLh5wEDrnBFZ/4K', 2, '2020-05-18 13:02:09', NULL),
(47, 'user6@lib.com', '$2b$10$MKV3Dc/98b6IPmPbG3T2fOMuhVmlGS8fncoeS5qpBHhEg2YIQ/G4G', 2, '2020-05-28 10:35:29', NULL),
(48, 'user10@lib.com', '$2b$10$H0jiTdFYxSGSWg9n4IfIcuh/Dd14dSjFRPpwVPiKQuanoYg/i484u', 2, '2020-05-28 10:41:06', NULL);

--
-- Triggers `users`
--
DELIMITER $$
CREATE TRIGGER `delete_user_on_detail` AFTER DELETE ON `users` FOR EACH ROW BEGIN
DELETE FROM user_details
	WHERE user_details.user_id = old.id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `id` int(10) NOT NULL,
  `user_id` int(10) DEFAULT NULL,
  `name` varchar(25) NOT NULL,
  `picture` varchar(100) DEFAULT NULL,
  `birthdate` date NOT NULL,
  `gender` enum('Male','Female') NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`id`, `user_id`, `name`, `picture`, `birthdate`, `gender`, `created_at`, `updated_at`) VALUES
(60, 34, 'user', 'uploads\\1589630700378_1403075_651107551589632_1552316277_o.jpg', '2020-06-06', 'Male', '2020-05-16 19:04:59', NULL),
(76, 43, 'kamal', NULL, '2020-06-06', 'Male', '2020-05-17 14:59:20', '2020-05-17 22:40:52'),
(77, 45, 'user', 'uploads\\1589779869279_download.jpg', '2020-06-06', 'Male', '2020-05-18 12:31:09', NULL),
(78, 46, 'andi', 'uploads\\1589781801604_download.jpg', '2020-06-06', 'Male', '2020-05-18 13:03:21', NULL),
(79, 47, 'kamal', 'uploads\\1590637011558_1.png', '2020-06-06', 'Male', '2020-05-28 10:36:50', NULL),
(80, 48, 'kamsong', 'uploads\\1590637615006_1.png', '2020-06-06', 'Male', '2020-05-28 10:46:53', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genre_id` (`genre_id`),
  ADD KEY `author_id` (`author_id`),
  ADD KEY `title` (`title`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `book_statuses`
--
ALTER TABLE `book_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `book_id` (`book_id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `transaction_statuses`
--
ALTER TABLE `transaction_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `book_statuses`
--
ALTER TABLE `book_statuses`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `transaction_statuses`
--
ALTER TABLE `transaction_statuses`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`%` EVENT `delete_logs_login` ON SCHEDULE EVERY 5 MINUTE STARTS '2020-05-30 22:39:16' ON COMPLETION NOT PRESERVE ENABLE DO DELETE FROM logs WHERE type = 0 AND time < DATE_SUB( CURRENT_TIME(), INTERVAL 50 MINUTE)$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
