module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'daniloud2809@gmail.com',
          pass: `nsgwcyrjzdeuexwb`,
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'fademetmontajes@gmail.com',
        defaultReplyTo: 'fademetmontajes@gmail.com',
      },
    },
  },
  // ...
});