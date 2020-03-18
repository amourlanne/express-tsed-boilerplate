const MailDevTransport = {
  host: 'localhost',
  port: 1025,
  secure: false,
  ignoreTLS: true
};

export default {
  default: {
    message: {
      from: 'expresss-tsed <express-tsed@email.com>',
    },
    send: true,
    preview: false,
    views: {
      options: {
        extension: 'twig',
      },
      root: 'templates/Emails',
    },
  },
  transport: MailDevTransport,
};
