import Joi from "joi";
import { PaymentParams } from "./protocols/payments";

export const opcional = Joi.object<Partial<PaymentParams>>({
  change: Joi.number(),
  code: Joi.number(),
  status: Joi.string(),
  total: Joi.number(),
  userId: Joi.number(),
});

export const required = Joi.object<PaymentParams>({
  change: Joi.number().required(),
  code: Joi.number().required(),
  status: Joi.string().required(),
  total: Joi.number().required(),
  userId: Joi.number().required(),
});

const paymentSchema = {
  opcional,
  required,
};

export default paymentSchema;
