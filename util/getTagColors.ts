import { Cors } from "@prisma/client";

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
