import { Auth, Cors, Paid, Https } from "@prisma/client";

export const getCorsTagColor = (cors: Cors | null) => {
  switch (cors) {
    case Cors.cors:
      return "red";
    case Cors.no_cors:
      return "cyan";

    default:
      return "brand";
  }
};

export const getAuthTagColor = (auth: Auth | null) => {
  switch (auth) {
    case Auth.api_key:
      return "orange";
    case Auth.o_auth:
      return "blue";
    case Auth.user_agent:
      return "yellow";
    case Auth.x_mashape_key:
      return "purple";
    case Auth.none:
      return "green";
    default:
      return "brand";
  }
};

export const getPaidTagColor = (paid: Paid | null) => {
  switch (paid) {
    case Paid.free:
      return "green";
    case Paid.subscription:
      return "orange";
    case Paid.paid:
      return "red";
    default:
      return "brand";
  }
};

export const getHttpsTagColor = (https: Https | null) => {
  switch (https) {
    case Https.https:
      return "cyan";
    case Https.no_https:
      return "red";

    default:
      return "brand";
  }
};
