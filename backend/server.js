import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import url from 'url';

import connectdb from './config/db.js';
import authRoute from './routes/authRoutes.js';
import achievementRoute from './routes/AchievementRoute/achievementRoute.js';
import gameProgressRoute from './routes/GameProgressRoute/gameProgressRoute.js';
import leaderboardRoute from './routes/LeaderboardRoute/leaderboardRoute.js';
import levelRoute from './routes/LevelRoute/levelRoute.js';
import playerProfileRoute from './routes/PlayerProfileRoute/playerProfileRoute.js';
import shopItemRoute from './routes/ShopItemRoute/shopItemRoute.js';
import userRoute from './routes/UserRoute/userRoute.js';

dotenv.config();


const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);

app.use('/api/achievement', achievementRoute);
app.use('/api/gameProgress', gameProgressRoute);
app.use('/api/leaderboard', leaderboardRoute);
app.use('/api/level', levelRoute);
app.use('/api/playerProfile', playerProfileRoute);
app.use('/api/shopItem', shopItemRoute);
app.use('/api/user', userRoute);

app.get('/', (req, res) => res.send('Welcome to the Home Page!'));

// URL parser test snippet
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = url.parse(adr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q.query.month);

connectdb();

const server = http.createServer(app);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
