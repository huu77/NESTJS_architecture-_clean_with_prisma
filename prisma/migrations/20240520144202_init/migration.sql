-- CreateTable
CREATE TABLE `user_account_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(50) NOT NULL,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(30) NOT NULL,
    `accessToken` VARCHAR(700) NOT NULL,
    `refresheToken` VARCHAR(700) NOT NULL,
    `user_account_status_id` INTEGER NOT NULL,
    `user_profile_id` INTEGER NOT NULL,

    UNIQUE INDEX `idUser_account_status`(`user_account_status_id`),
    UNIQUE INDEX `user_account_user_profile_id_key`(`user_profile_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(50) NOT NULL,
    `lastname` VARCHAR(50) NOT NULL,
    `fullname` VARCHAR(100) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `time_zone` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `google_account` (
    `user_profile_id` INTEGER NOT NULL,
    `google_account_id` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`user_profile_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_account` ADD CONSTRAINT `user_account_user_account_status_id_fkey` FOREIGN KEY (`user_account_status_id`) REFERENCES `user_account_status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_account` ADD CONSTRAINT `user_account_user_profile_id_fkey` FOREIGN KEY (`user_profile_id`) REFERENCES `user_profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `google_account` ADD CONSTRAINT `google_account_user_profile_id_fkey` FOREIGN KEY (`user_profile_id`) REFERENCES `user_profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
