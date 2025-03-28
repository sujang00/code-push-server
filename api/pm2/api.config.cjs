module.exports = {
  apps: [
    {
      name: "code-push-server",
      script: "npm",
      args: "run start:env",
      max_memory_restart: "1G",
      time: true,
    },
  ],
};
