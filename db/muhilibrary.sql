-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: May 17, 2020 at 01:03 AM
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
(1, 'Bibit', 'w', '2020-05-15 21:55:36', NULL);

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
(1, 'Muhi', 'Horror', 'uploads\\1589551865144_bot.jpg', 1, 1, '2020-06-06', 2, '2020-05-15 21:11:03', '2020-05-16 06:32:41'),
(99, 'Muhi', 'Horror', 'uploads\\1589554580521_bot.jpg', 1, 1, '2020-06-06', 1, '2020-05-15 21:56:18', '2020-05-17 05:13:25'),
(101, 'Kisah Tanah Jawa', 'Horror', 'http://localhost:5000uploads\\1589589880320_4b57396b59fd0c779237e11a771b25c3.jpg', 1, 1, '2020-06-06', 1, '2020-05-16 07:44:40', NULL),
(102, 'Kisah Tanah Jawa', 'Horror', 'http://localhost:5000/uploads\\1589590043792_4b57396b59fd0c779237e11a771b25c3.jpg', 1, 1, '2020-06-06', 2, '2020-05-16 07:47:23', '2020-05-17 05:09:04');

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
(1, 'Available', 'ora ono', '2020-05-16 05:43:13', '2020-05-17 05:03:34'),
(2, 'Unavailable', 'tidak tersedia', '2020-05-13 08:44:52', NULL),
(3, 'On prosess loan', '', '2020-05-17 05:05:04', NULL);

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
(1, 'Melayu', '2020-05-16 05:34:52', '2020-05-16 06:04:19'),
(2, '2s', '2020-05-15 21:55:59', '2020-05-16 05:39:36'),
(10, 'Melayu', '2020-05-16 05:36:26', NULL);

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
(6, '2020-12-12', 17, 1, 1, '2020-05-16 05:51:37', NULL),
(8, '2020-12-12', 34, 1, 1, '2020-05-16 06:03:02', NULL),
(9, '2020-12-12', 34, 1, 1, '2020-05-16 06:05:44', NULL),
(10, '2020-09-09', 39, 99, 2, '2020-05-16 06:05:45', '2020-05-16 09:14:22'),
(14, '2020-12-12', 34, 99, 1, '2020-05-16 06:28:29', NULL),
(15, '2020-09-09', 39, 99, 2, '2020-05-16 09:08:50', '2020-05-16 09:14:54'),
(16, '2020-09-09', 39, 99, 1, '2020-05-17 04:07:06', '2020-05-17 05:13:25'),
(17, '2020-12-12', 41, 99, 3, '2020-05-17 04:44:35', NULL),
(18, '2020-12-12', 41, 99, 3, '2020-05-17 04:47:38', NULL);

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
(1, 'dipinjam', '2020-05-13 08:46:39', NULL),
(2, 'Dikembalikan', '2020-05-13 08:46:39', NULL),
(3, 'Pending', '2020-05-16 08:50:48', NULL);

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
(38, 'dalbo@lib.com', '$2b$10$pf8glGnkklA5bNxu1NWJ7e8XEOES4vSg3NCLoaC1O1ff8GkdWFdti', 2, '2020-05-16 04:56:41', NULL),
(39, 'user@lib.com', '$2b$10$CaqckGtuuQMt66sbx5qQ/OfM2vMY4acWK6I/ASwce2aGZ.eRGD9Ty', 2, '2020-05-16 09:03:51', NULL),
(40, 'user1@lib.com', '$2b$10$wK1Gxa4Ke/iz1LVtynQaSuV650OIkARtkbvwLGkiHb7p/GemndVum', 2, '2020-05-16 18:53:00', NULL),
(41, 'user2@lib.com', '$2b$10$78fIcVGA5mED2RVl7NnS1.4/JahRjQ3qJtGsZ6ob8mjTQq4uYUHcW', 2, '2020-05-17 04:43:08', NULL),
(42, 'user3@lib.com', '$2b$10$LYnsFX76Wrx2UgoXjrvh5u1CIVKjF8h3bjkh8uUf72S63sclExcwi', 2, '2020-05-17 04:45:17', NULL);

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
(59, 39, 'user', 'uploads\\1589594658485_4b57396b59fd0c779237e11a771b25c3.jpg', '2020-06-06', 'Male', '2020-05-16 09:04:18', NULL),
(60, 34, 'user', 'uploads\\1589630700378_1403075_651107551589632_1552316277_o.jpg', '2020-06-06', 'Male', '2020-05-16 19:04:59', NULL),
(71, 40, 'user', 'uploads\\1589663209569_1403075_651107551589632_1552316277_o.jpg', '2020-06-06', 'Male', '2020-05-17 04:06:49', NULL),
(72, 41, 'user', 'uploads\\1589665439555_1403075_651107551589632_1552316277_o.jpg', '2020-06-06', 'Male', '2020-05-17 04:43:59', NULL);

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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

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
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `transaction_statuses`
--
ALTER TABLE `transaction_statuses`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
