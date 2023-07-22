/*
  Warnings:

  - You are about to drop the column `name` on the `sensor_data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `sensor_data` DROP COLUMN `name`,
    ADD COLUMN `sensorId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `sensor` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sensor_data` ADD CONSTRAINT `sensor_data_sensorId_fkey` FOREIGN KEY (`sensorId`) REFERENCES `sensor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
