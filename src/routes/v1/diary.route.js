const express = require("express");
const validate = require("../../middlewares/validate");
const diaryValidation = require("../../validations/diary.validation");
const diaryController = require("../../controllers/diary.controller");
const auth = require("../../middlewares/auth");

const router = express.Router();

router.post(
  "/createDiary",
  auth(),
  validate(diaryValidation.createDiary),
  diaryController.createDiary
);

router.get(
  "/getDiaries",
  auth(),
  validate(diaryValidation.getDiaries),
  diaryController.getDiaries
);

router.patch(
  "/updateDiary/:diaryId",
  auth(),
  validate(diaryValidation.updateDiary),
  diaryController.updateDiary
);

router.delete(
  "/deleteDiary/:diaryId",
  auth(),
  validate(diaryValidation.deleteDiary),
  diaryController.deleteDiary
);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Diary
 *   description: Diary management and retrieval
 */

/**
 * @swagger
 * /diary/createDiary:
 *   post:
 *     summary: Create a diary
 *     description: User can create other users.
 *     tags: [Diary]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Diary'
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Diary'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /diary/getDiaries:
 *   get:
 *     summary: Get diaries
 *     description: User can get all diaries
 *     tags: [Diary]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: partnerId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Diary'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /diary/updateDiary/{diaryId}:
 *   patch:
 *     summary: Update a diary
 *     description: User can update a diary
 *     tags: [Diary]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: diaryId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Diary'
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Diary'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /diary/deleteDiary/{diaryId}:
 *   delete:
 *     summary: Delete a diary
 *     description: User can delete a diary
 *     tags: [Diary]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       parameters:
 *       - in: path
 *         name: diaryId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
