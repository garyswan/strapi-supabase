module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: env("GCS_BUCKET_NAME"),
        publicFiles: env("GCS_PUBLIC_FILES"),
        uniform: env("GCS_UNIFORM"),
        baseUrl: env("GCS_BASE_URL"),
        basePath: env("GCS_BASE_PATH"),
        serviceAccount: env.json("GCS_SERVICE_ACCOUNT"),
        // serviceAccount: {
        //   type: "service_account",
        //   project_id: "my-project-80760",
        //   private_key_id: "c140cf72c224bab7969bd101676447c93462ae78",
        //   private_key:
        //     "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCdAT40NBjPX1ON\nsNpPnjG5NdBwIo9V8ydDZgAdhNYhyqPXM4XLyIgeOI3/371ef+BRek+210ySZT0J\nSojmmQzvpYt3yTy64mzFr7dYwPKuCecsEyHI1QqT7ADiUkNOhb+RFTu0aUx6DCH+\nMkHG6j7xQyOWORr5BRm3yafDi9bv4g/l8w1R11QxF98Nws1XDK59wTUUJrnLp6RR\nTVpxWVzR4mLFpTJ+Pd/1WJllFvq7oy04R4vhoByfbDKvUcZUiBvHrzbUHXWau3es\ntV9yTbamBe/Z/7IoTOyBssafWcn/UcNWJnaM5zYHjRCowZAW3JECZ5rE9QtNJkYz\n1/oYYciNAgMBAAECggEAEIcX+EDft7zOO+U5JhZ+H4QlvBg3RJIDORocuv7H1+jQ\nFJBs7kXe5meHsz7nXXJSt+ELUTEa83JK2ZaKENRdw0CHDQYXKYk6cBkOUP6GzYFn\nX4FoFg8vPOEkOq70POjhgLFehqBrF5H9Zhf+SqVQGO+7aE38o+hAi9NjoLcw2jGk\nooYFeFlTsdmbAYIDkMi/4NChA+uGt3hMUp1LfLuYWU3l7LAnlIgjVyFrldrQIQdt\noAr8QdPGXvdspRW6iyk3NlcPzxb6xH2w/BxarvDrySQJ6lhurwPQZmuoOOxIIrk8\nKqfM6Nko8r0z5VLCRlyOlsW11DiQJTiNd9CCvFrstQKBgQDaoJ+daPGx+444jQC9\nS+DiOJ3b3/foUkS0uRMQQ4x7GVb4Rs/97LPkYencaT9SvKVsWCuqD0Y2JgdvXrRI\ntyfrtw2xVLSxuvxlcICLbLy2fMCxQfutyTyk80b7pbKs+ZEbE/MwxloPl/hwrcr4\nqiCXAM22hqwEeIRk2HdY3TVBFwKBgQC31/KgLAfhsT2ftUzzZ5euFM5hT1MySTik\nTuG2RSMwbZ3i/yUynQ10+r8yRKsXbwh9eNFlx8/IBOLBStALQW8XQcmN4NKP3rC6\n957QHVRXUqavWOJSr/AhLd3yXHMWYVGGwVRZ04lC8Anu4xRKuHA+TsWxQtW44I4K\nKSw27NEh+wKBgQDaN5TZwxPruNCd9W+VghU295fpDUYe526YjFpQ03t2qzY5nkSg\niRCNloWccJi59n2PBPqgRZqpFZA6Q2bjZZ09E3thUtEAzUh7360OfTxnUWHsC5Yw\nQjp70i85oowTRw7k3ibQukrOYbuijHWZegYJcs3hr84msDxFhCKr2i/7hQKBgFzT\nkfOkJ9qihs4UWiVwwhqo8MgbqJN0e0AjgD5rTGhQgO80C1EyEbBmR5IXMBhl/PB1\nx61Ppa+GIASfRMraIECq/B1CTq9MLwpIq4zDsmlhFz7kb2p24ZWvNikA2y+KtgKH\nrZKph94fm7RePkm4NRyQ46ssZwOxhqbEwUl+a95vAoGALLjfeQ80oKIZOKuyL5yR\nqRwjG9+gZAwMgV9yCZoGaq6+3MeYDV8PJAY80RISo0LK7xDObEawaD9ShPC8fKYP\nvM3NnB7QIQYakFWaalTMRhx2PNCadWCdX5v/pl7f8awEKPlO33oKz/gd436WJ3WA\nTGhH7HSlbWXyqFWTK1elrqo=\n-----END PRIVATE KEY-----\n",
        //   client_email:
        //     "strapi-supabase@my-project-80760.iam.gserviceaccount.com",
        //   client_id: "111204814145655897464",
        //   auth_uri: "https://accounts.google.com/o/oauth2/auth",
        //   token_uri: "https://oauth2.googleapis.com/token",
        //   auth_provider_x509_cert_url:
        //     "https://www.googleapis.com/oauth2/v1/certs",
        //   client_x509_cert_url:
        //     "https://www.googleapis.com/robot/v1/metadata/x509/strapi-supabase%40my-project-80760.iam.gserviceaccount.com",
        // },
      },
    },
  },
});
