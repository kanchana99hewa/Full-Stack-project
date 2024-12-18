const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

//error handel
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
      success: false,
      status,
      message,
    });

    app.get("/", async (req, res) => {
        res.status(200).json({
          message: "Hello GFG Developers",
        });
      });
      app.use("/api/user/", UserRouter);
      app.use("/api/products/", ProductRoutes);
    