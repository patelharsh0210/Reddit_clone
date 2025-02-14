"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const data_controller_1 = require("../controllers/data.controller");
const router = (0, express_1.Router)();
router.post("/register", auth_controller_1.createUser);
router.post('/login', auth_controller_1.loginUser);
router.get('/me', authMiddleware_1.isAuthenticated, auth_controller_1.getMe);
router.post('/logout', authMiddleware_1.isAuthenticated, auth_controller_1.logOut);
router.post('/data', data_controller_1.saveData);
router.get('/data', data_controller_1.getCollege);
//student register
router.post('/student/register', auth_controller_1.studentRegister);
router.post('/student/login', auth_controller_1.loginStudent);
//faculty register
router.post('/faculty/register', auth_controller_1.facultyRegister);
router.post('/faculty/login', auth_controller_1.loginFaculty);
exports.default = router;
