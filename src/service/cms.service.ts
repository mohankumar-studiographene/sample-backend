import { getManager } from "typeorm";
import { TIMEZONE } from "@config/secret";
import i18n from "i18n";
import moment from "moment-timezone";

export class CmsService {
  constructor() {
    moment.tz.setDefault(TIMEZONE);
  }
}
