import httpStatus from "http-status";
import supertest from "supertest";
import {
  buildCategory,
  generateCategory,
} from "../factories/categories.factory";
import cleanDb from "../helpers";
import app from "@/app";

const server = supertest(app);

beforeEach(async () => {
  await cleanDb();
});

describe("GET /categories", () => {
  it("should respond with status 200 and include all categories", async () => {
    const category = generateCategory();
    await buildCategory(category);
    const response = await server.get("/categories");

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual(
      expect.arrayContaining([expect.objectContaining(category)]),
    );
  });
  it("should respond with status 404 if the categories do not exist", async () => {
    const response = await server.get("/categories");
    expect(response.status).toBe(httpStatus.NOT_FOUND);
  });
});
