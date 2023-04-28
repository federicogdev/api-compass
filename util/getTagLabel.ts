import { Auth, Cors, Paid, Https } from "@prisma/client";

export const getCorsTagLabel = (cors: Cors | null) => {
  switch (cors) {
    case Cors.cors:
      return "cors";
    case Cors.no_cors:
      return "no cors";
    default:
      return "";
  }
};

export const getAuthTagLabel = (auth: Auth | null) => {
  switch (auth) {
    case Auth.api_key:
      return "api-key";
    case Auth.o_auth:
      return "oauth";
    case Auth.user_agent:
      return "user agent";
    case Auth.x_mashape_key:
      return "mashape key";
    case Auth.none:
      return "no auth";
    default:
      return "";
  }
};

export const getHttpsTagLabel = (https: Https | null) => {
  switch (https) {
    case Https.https:
      return "https";
    case Https.no_https:
      return "http";
    default:
      return "";
  }
};
