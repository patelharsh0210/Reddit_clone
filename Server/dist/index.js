"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const review_route_1 = __importDefault(require("./routes/review.route"));
const data_route_1 = __importDefault(require("./routes/data.route"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
// app.use(errorHandler)
app.use('/api/auth', auth_route_1.default);
app.use('/api/review', review_route_1.default);
app.use('/api/data', data_route_1.default);
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
