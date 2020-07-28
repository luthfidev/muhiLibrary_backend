-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Waktu pembuatan: 28 Jul 2020 pada 07.27
-- Versi server: 10.4.12-MariaDB-1:10.4.12+maria~bionic
-- Versi PHP: 7.4.5

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
-- Struktur dari tabel `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `description` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `authors`
--

INSERT INTO `authors` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'DANIEL C. DENNETT', 'DANIEL C. DENNETT', '2020-07-08 23:46:18', '2020-07-12 16:20:38'),
(5, 'Eko', 'Eko Ivano Winata', '2020-07-09 06:28:19', '2020-07-13 11:27:49'),
(695, 'Erich Fromm', 'Erich Fromm', '2020-07-09 09:56:18', '2020-07-12 16:24:19'),
(696, 'Hasna Wijayanti', 'Hasna Wijayanti', '2020-07-09 09:56:48', '2020-07-12 16:23:27'),
(700, 'Jeriko', 'Jeriko', '2020-07-12 10:09:33', NULL),
(701, 'Carol S. Dweck, Ph.d.', 'Carol S. Dweck, Ph.d', '2020-07-12 11:32:05', '2020-07-12 17:42:44'),
(702, 'Sutrino Yahya', 'Sutrino Yahya', '2020-07-12 22:24:07', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `books`
--

CREATE TABLE `books` (
  `id` int(10) NOT NULL,
  `title` varchar(40) NOT NULL,
  `description` varchar(100) NOT NULL,
  `image` varchar(100) DEFAULT 'uploads\\bookdummy.jpg',
  `genre_id` tinyint(3) NOT NULL,
  `author_id` int(10) NOT NULL,
  `release_date` date DEFAULT NULL,
  `status_id` tinyint(3) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `book_statuses`
--

CREATE TABLE `book_statuses` (
  `id` tinyint(3) NOT NULL,
  `name` varchar(15) NOT NULL,
  `description` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `book_statuses`
--

INSERT INTO `book_statuses` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Available', 'books ready to be borrowed\r\n', '2020-05-16 05:43:13', '2020-05-17 13:19:28'),
(2, 'Unavailable', 'the book is being borrowed', '2020-05-13 08:44:52', '2020-05-17 13:19:12'),
(3, 'On Prosess', 'on proses loan for user', '2020-05-17 05:05:04', '2020-05-17 13:18:29'),
(4, 'Available', 'books ready to be borrowed', '2020-06-14 19:05:53', '2020-06-14 19:06:04');

-- --------------------------------------------------------

--
-- Struktur dari tabel `genres`
--

CREATE TABLE `genres` (
  `id` tinyint(3) NOT NULL,
  `name` varchar(25) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `genres`
--

INSERT INTO `genres` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Horror', '2020-07-06 07:32:32', NULL),
(3, 'Geografi', '2020-07-06 07:33:03', NULL),
(6, 'Romance', '2020-07-06 08:33:21', NULL),
(26, 'Humor', '2020-07-12 14:56:12', '2020-07-12 16:25:27'),
(27, 'Psikologi', '2020-07-12 14:57:18', '2020-07-12 16:24:36'),
(28, 'Indiana', '2020-07-12 18:01:17', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `time` timestamp NULL DEFAULT current_timestamp(),
  `user_email` varchar(25) DEFAULT NULL,
  `type` tinyint(4) DEFAULT NULL,
  `description` varchar(25) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `rate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `roles`
--

CREATE TABLE `roles` (
  `id` tinyint(3) NOT NULL,
  `name` varchar(15) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2020-05-13 08:45:48', NULL),
(2, 'user', '2020-05-13 08:45:48', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
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
-- Trigger `transactions`
--
DELIMITER $$
CREATE TRIGGER `after_delete_transaction` AFTER DELETE ON `transactions` FOR EACH ROW UPDATE books set books.status_id = 1 WHERE books.id = old.book_id
$$
DELIMITER ;
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
-- Struktur dari tabel `transaction_statuses`
--

CREATE TABLE `transaction_statuses` (
  `id` tinyint(3) NOT NULL,
  `name` varchar(15) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transaction_statuses`
--

INSERT INTO `transaction_statuses` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Return the Book', '2020-05-13 08:46:39', '2020-05-18 12:45:12'),
(2, 'Borrowed', '2020-05-13 08:46:39', '2020-05-18 12:45:16'),
(3, 'Pending', '2020-05-18 12:39:49', NULL),
(4, 'Cancel', '2020-06-14 19:10:36', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
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
-- Trigger `users`
--
DELIMITER $$
CREATE TRIGGER `after_add_users` AFTER INSERT ON `users` FOR EACH ROW INSERT INTO `user_details` (
    `user_id`,
    `picture`,
    `name`,
    `birthdate`,
    `gender`) 
VALUES (
     NEW.id,
     'uploads/default.png', 	 
    'unknown',
    '2020-05-05',
     'Male'
)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `delete_user_on_detail` AFTER DELETE ON `users` FOR EACH ROW BEGIN
DELETE FROM user_details
	WHERE user_details.user_id = old.id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_details`
--

CREATE TABLE `user_details` (
  `id` int(10) NOT NULL,
  `user_id` int(10) DEFAULT NULL,
  `name` varchar(25) DEFAULT NULL,
  `picture` varchar(100) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `gender` enum('Male','Female') DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genre_id` (`genre_id`),
  ADD KEY `author_id` (`author_id`),
  ADD KEY `title` (`title`),
  ADD KEY `status_id` (`status_id`);

--
-- Indeks untuk tabel `book_statuses`
--
ALTER TABLE `book_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `book_id` (`book_id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indeks untuk tabel `transaction_statuses`
--
ALTER TABLE `transaction_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indeks untuk tabel `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=704;

--
-- AUTO_INCREMENT untuk tabel `books`
--
ALTER TABLE `books`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `book_statuses`
--
ALTER TABLE `book_statuses`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `genres`
--
ALTER TABLE `genres`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT untuk tabel `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `roles`
--
ALTER TABLE `roles`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `transaction_statuses`
--
ALTER TABLE `transaction_statuses`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `user_details`
--
ALTER TABLE `user_details`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

DELIMITER $$
--
-- Event
--
CREATE DEFINER=`root`@`%` EVENT `delete_logs_login` ON SCHEDULE EVERY 5 MINUTE STARTS '2020-05-30 22:39:16' ON COMPLETION NOT PRESERVE ENABLE DO DELETE FROM logs WHERE type = 0 AND time < DATE_SUB( CURRENT_TIME(), INTERVAL 50 MINUTE)$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
