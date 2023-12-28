
-- CreateTable
CREATE TABLE `myproduct` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `Brand` VARCHAR(255) NOT NULL,
    `Name` VARCHAR(255) NOT NULL,
    `price` INTEGER NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
