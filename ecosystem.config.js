module.exports = {
  apps: [
    {
      name: "makatee-frontend",       // Name of the app in PM2
      script: "npm",            // Command to run
      args: "start",            // Arguments for the command (in this case, `npm start`)
      env: {
        NODE_ENV: "production", // Ensure the environment is set to production
      },
      instances: "max",         // Optional: Set to max to scale based on CPU cores
      exec_mode: "cluster",     // Optional: Enable cluster mode for better performance
    }
  ]
};
