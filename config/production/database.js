// # Google App Engine
// # https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/google-app-engine.html
// module.exports = ({ env }) => ({
//     connection: {
//       client: 'postgres',
//       connection: {
//           host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
//           database: env('DATABASE_NAME'),
//           user: env('DATABASE_USER'),
//           password: env('DATABASE_PASSWORD'),
//       },
//     },
//   });

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      // schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    debug: false,
  },
});
