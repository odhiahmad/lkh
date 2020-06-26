-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Jun 2020 pada 04.35
-- Versi server: 10.3.16-MariaDB
-- Versi PHP: 7.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adonis`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '1503250034279_user', 1, '2020-06-16 08:09:19'),
(2, '1503250034280_token', 1, '2020-06-16 08:09:19'),
(3, '1539046136984_task_schema', 1, '2020-06-16 08:09:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `lkh`
--

CREATE TABLE `lkh` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `tanggal_pekerjaan` date NOT NULL,
  `jam_pekerjaan` time NOT NULL,
  `detail_pekerjaan` text NOT NULL,
  `status` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `lkh`
--

INSERT INTO `lkh` (`id`, `id_user`, `tanggal_pekerjaan`, `jam_pekerjaan`, `detail_pekerjaan`, `status`, `created_at`, `updated_at`) VALUES
(39, 2, '2020-06-20', '14:00:00', 'Te', 1, '2020-06-22 15:45:24', '2020-06-25 16:43:35'),
(40, 2, '2020-07-24', '08:54:00', 'AAAAAAAAA', 1, '2020-06-23 08:54:32', '2020-06-25 15:30:15'),
(41, 2, '2020-07-30', '12:30:00', 'sadsadsasddd', 1, '2020-06-23 08:54:51', '2020-06-25 15:30:18'),
(42, 2, '2020-08-21', '09:00:00', 'sfsdfsd', 0, '2020-06-23 09:07:21', '2020-06-23 09:07:21'),
(43, 41, '2020-06-23', '08:00:00', 'asdadadasdsa', 0, '2020-06-23 09:08:48', '2020-06-23 09:08:48'),
(44, 2, '2020-06-25', '09:00:00', 'Manjaik Celanaaa', 0, '2020-06-25 17:02:24', '2020-06-25 17:02:55'),
(45, 14, '2020-06-25', '18:30:00', '', 0, '2020-06-25 17:04:43', '2020-06-25 17:04:43');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tasks`
--

CREATE TABLE `tasks` (
  `id` int(10) UNSIGNED NOT NULL,
  `task_name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tokens`
--

CREATE TABLE `tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `type` varchar(80) NOT NULL,
  `is_revoked` tinyint(1) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(254) NOT NULL,
  `first_name` varchar(254) NOT NULL,
  `last_name` varchar(254) NOT NULL,
  `role` varchar(254) NOT NULL,
  `password` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `role`, `password`, `created_at`, `updated_at`) VALUES
(2, 'admin@gmail.com', 'Ahmad', 'Hidaydsdsfsd', 'admin', '$2a$10$pVjKaqx1jPLACWO3N6VBBOtoObFGeWbTkcEgV5mmfGt/c7J55yeqC', '2020-06-16 15:12:52', '2020-06-22 13:06:49'),
(13, 'juan@gmail.com', 'Aldi', 'Juanadasdsadsa', 'user', '$2a$10$VK.URr9hdOZYkIB6LzRdpeseghIYE09gobXhEyj5YUbr4BaQ.hYue', '2020-06-21 09:21:29', '2020-06-21 11:13:16'),
(14, 'bryan@gmail.com', 'Bryan', 'Denov', 'user', '$2a$10$yRA3MeDrHd.1qWIVkf5p4OsVToFpzzccLxTC4Kgx/syJv99xQu0VC', '2020-06-21 09:44:44', '2020-06-21 09:44:44'),
(37, 'adas@gmail.com', 'asdasdas', 'adasd', 'user', '$2a$10$qTgBnuMAownGlp.UwNeJiemv9jjgBbOcLgW2YddBYxir9voHtiA4q', '2020-06-21 19:07:59', '2020-06-22 09:35:01'),
(38, 'as@gmail.com', 'dsfdsfds', 'fdsfsdfdsf', 'user', '$2a$10$JnT1nfpkg/jsrIBuf9.Zb.5OkTLCJ20lsVn7aCGNFOq.arZboZRcO', '2020-06-21 19:08:11', '2020-06-22 09:34:57'),
(39, 'aa@gmail.com', 'sdfsdfdsfdsf', 'sdfdsfdsfdsds', 'user', '$2a$10$51LaWQ9K5uuOm6aAjFYih.Jlf6DuHhqcoCDmPAAyo6MOGzakI.Bxu', '2020-06-21 19:08:21', '2020-06-22 09:34:53'),
(40, 'fdsfdsfds@gmail.com', 'sfdsfdsds', 'fdsfdsfdsfds', 'admin', '$2a$10$LTIPGdWpVtd9iPg2uBcPge336vtqH1Pe89nYcYaAV0IV2oq0yROtC', '2020-06-21 19:08:30', '2020-06-22 09:34:50'),
(41, 'fdsds@gmail.com', 'sdfdsfds', 'fdsfdsfdsfs', 'user', '$2a$10$HP3dekqYdVO.ckOfP4UQsOJjsWVfcN8M9iA.cRwH15joTxh1UxA7G', '2020-06-21 19:09:25', '2020-06-22 09:34:38'),
(42, 'aaaa@gmail.com', 'aa', 'aaaa', 'admin', '$2a$10$a7UWefaQ7kw.CakaD2dDXumdLuHUz0gOJAPMuHyrj5ZRta4KGbOou', '2020-06-21 19:09:39', '2020-06-22 09:35:08'),
(43, 'sf@gmail.com', 'dsfsdfdsdsf', 'sfsdfdsfds', 'user', '$2a$10$xCtAcXsF6Hd2tmsKoRYx2erlXD3L047r4nno6oef3j7S3fYojwMd.', '2020-06-21 19:09:47', '2020-06-22 09:35:16'),
(45, 'wwerewrewre@gmail.com', 'sdfdsfdsf', 'sfdsfdsfdsf', '', '$2a$10$Fa/nkBPFYxINX3DjLZQCeO1M6r23AVtSoEa5hI49QJqDEfq5SUSVy', '2020-06-21 19:10:12', '2020-06-21 19:10:12');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `lkh`
--
ALTER TABLE `lkh`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tokens_token_unique` (`token`),
  ADD KEY `tokens_user_id_foreign` (`user_id`),
  ADD KEY `tokens_token_index` (`token`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_first_name_unique` (`first_name`),
  ADD UNIQUE KEY `users_last_name_unique` (`last_name`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `lkh`
--
ALTER TABLE `lkh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT untuk tabel `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tokens`
--
ALTER TABLE `tokens`
  ADD CONSTRAINT `tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
