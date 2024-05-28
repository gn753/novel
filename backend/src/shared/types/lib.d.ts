import "express-session";

declare module "express-session" {
  interface SessionData {
    user: {
      userId: string;
      email: string;
      username: string;
    };
  }
}

declare global {
  namespace Express {
    interface User {
      userId: string;
      email: string;
      username: string;
    }

    interface Request {
      user?: User;
    }
  }
}
