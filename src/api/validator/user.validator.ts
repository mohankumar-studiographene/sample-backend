import { loginRegisterValidation } from "./common";
import Joi from "@hapi/joi";

const updateBookingStatus = Joi.object({});
export namespace UserValidator {
  export const user = Joi.object({
    email: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().optional(),
    dob: Joi.string().required(),
    isVerified: Joi.boolean().required(),
  });

  export const updateUser = Joi.object({
    id: Joi.string().required(),
    email: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().optional(),
    dob: Joi.string().required(),
    isVerified: Joi.boolean().required(),
  });


  export const pagination = Joi.object({
    page: Joi.number().optional(),
    size: Joi.when("page", {
      then: Joi.number().required(),
      otherwise: Joi.forbidden(),
    }),
    order: Joi.string().optional(),
  });
}
