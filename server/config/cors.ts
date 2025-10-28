const corsOptions = {
    origin: ['http://localhost:5173'],

    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "user-role", "user-id"],
    credentials: true,
    optionsSuccessStatus: 204,
};

export default corsOptions;
