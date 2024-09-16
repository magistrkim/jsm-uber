import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.DATABASE_URL}`);

export const POST = async (request: Request) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
