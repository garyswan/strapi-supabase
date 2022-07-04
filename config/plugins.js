module.exports = {
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "strapi-supabase",
        publicFiles: true,
        uniform: false,
        serviceAccount: {
          type: "service_account",
          project: "my-project-80760",
          project_id: "my-project-80760",
          private_key_id: "8da358012c9489ff4d6b59ed3fec7a5dad2c9635",
          private_key:
            "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCXcn9cgwHJANXx\ntLVbioOrf1+7r3M43aBXg8zVK+9SnAATuIEvR1Y3Wl7msc2DDZUP7pi4hfsB91Zr\ntwOeZ44W6JDLgVMaWvXZjEjQLARskshARnvNY+cKoyJChfegaEOndtNfhAzDHqZH\nkIM/RbveVGj0g6y7JuPcS/tQMrDpJ9ZwWVEVl/Ga4kGJMp9WeexOddFU/oE6ep/V\nFgch423GJuEDCtlyw7gbIxY5PEtkXm5x0hDQ8JWEGBGeq4hy9jylys5tDBd3AfAW\nZmbzTtsrBk0o70I16ZKxxVM2aHzhaK0MKlh9mNymUGvX0e+TK/oVLmgyGhxMf3KC\nNdN9NhoBAgMBAAECggEADIjv3QgELs8rO2KPRttebeRmAmfRgURpZV+a+uM0X2xa\ns/HSfMefwtxvpxJ9BbrVup2EoHPebwQ6GpeUQhkkxo/15BIj1GDw9lJJIzRxd/cS\nLK0TdCWFAE64+DPpvKoZ52jLXUgrB5SoLfDacXM5IHwbZRmSQ2SYTtSEdtfV6AZB\nHCTNjO/lMyonKepZsbFNbm1VQYeUwC6yO4rx8ySCSM6F13KpQYWUjqfAie9XXEU8\nD03yahLEWw9mdzpUX8NbIOPcbqX3r9fPIRv/yfGK38cRWimc/V+zGIECl07yP+ap\n/ugMCEvAYEU5hY87v94qbl1FjQj4/HglwSMhl4TzXQKBgQDQFMb/Bgl8msLtFhRF\nAXGEHEP9NdxZGCokcJvTULgglDm7OI/Bd9wxUvPBnDuf2sNcowxdvd0k4jiihwmI\n8f7kkplA2oMCnhxHAKgocN6jt0Mofbh3rjdXe2owWFauDlJfmQfxKcoY9TGcv4RS\nEHD7QrOiCnkk76xdE7/gG0n+uwKBgQC6Uuxd5zcj6sYRsoYnC5EHqgR5QzKpZVde\nW0ARE915FkN7v+q9KzVEqrB2Pxc7H0uL7Bh6A97kWKNYkQb/c8OvyFvjIM8KKKIA\nEZV9C5YbWzE6CYLAclz1r1OsyXOZvNjD9dSREBPjhA1vdQVcfL2fy03lVgcoWHnw\nIltUdn1EcwKBgARgC3cdR2HJV0Po7PAugZaHiZ5vXXy6F1jAzWX6EoUM2NHo9Iza\n2lRnLBzsDgzkaqst+nqWHWpDH3G7aSXqALQJqRNGBO8vJ+UOTHrdNLE4jz7wtco+\nbYd3Xto5YUkzn+PGsfYOLOOtdCeZl0yqb9W4p1JG6hkuuO8UFTq/GCU1AoGBAJxA\nFAX/cydEp8uJiaTOt1XVByFl7+NMoAL5xPVNUmpL+FWbsM/onygxeAABkoq7CNCT\nMkeIXW/iwUDxhgvNWepcvGnxRo6/WnNyS4lsoPnZ9KM1/JdEkJ5b5HC/E5l2W9Wh\nnxvzfqpKQDYazV8tIJwTkwRiq2fzInb1aN+g6hXvAoGAXJ1hOPgIFdEEHSXKOGOT\niVpW7WP+VkiPu2SbrmfVUMOf4pBjZ++BmLZPsp8zjJXHNmMDiBdZ9EQ7f7bNHRdE\nNnfJIGLnnctKUZO+mTTeryGbLXGPUsMIzyxRsoI9vIUWimQ2gQSJnn1miANhvSRn\nBFEGiRkbMkyw6C9CKBH/Gac=\n-----END PRIVATE KEY-----\n",
          client_email:
            "strapi-supabase@my-project-80760.iam.gserviceaccount.com",
          client_id: "111204814145655897464",
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url:
            "https://www.googleapis.com/robot/v1/metadata/x509/strapi-supabase%40my-project-80760.iam.gserviceaccount.com",
        },
      },
    },
  },
};
