import httpStatus from "http-status";
import supertest from "supertest";
import { buildCategory } from "../factories/categories.factory";
import cleanDb from "../helpers";
import { buildProduct, generateProduct } from "../factories/products.factory";
import app from "@/app";

const server = supertest(app);

beforeEach(async () => {
  await cleanDb();
});

describe("GET /products", () => {
  it("should respond with status 200 and include all products", async () => {
    const category = await buildCategory();
    const product = generateProduct(category.id);
    await buildProduct(product);
    const response = await server.get("/products");

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual(
      expect.arrayContaining([expect.objectContaining(product)]),
    );
  });
  it("should respond with status 404 if the products do not exist", async () => {
    const response = await server.get("/products");
    expect(response.status).toBe(httpStatus.NOT_FOUND);
  });
});
