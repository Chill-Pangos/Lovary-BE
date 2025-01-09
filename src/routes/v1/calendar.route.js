const express = require("express");
const auth = require("../../middlewares/auth");
const calendarController = require("../../controllers/calendar.controller");

const router = express.Router();

router.get("/getAnniversaries", auth(), calendarController.getAnniversaries);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Calendar
 *   description: Calendar management and retrieval
 */

/**
 * @swagger
 * /calendar/getAnniversaries:
 *   get:
 *     summary: Get anniversaries
 *     description: User can get anniversaries and holidays based on a start date.
 *     tags: [Calendar]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: startDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date in ISO 8601 format (e.g., "2023-01-01").
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 holidays:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         example: Valentine's Day
 *                       date:
 *                         type: string
 *                         format: date
 *                         example: "2023-02-14"
 *                 anniversaries:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         example: 100 ngày yêu nhau
 *                       date:
 *                         type: string
 *                         format: date
 *                         example: "2023-04-11"
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
