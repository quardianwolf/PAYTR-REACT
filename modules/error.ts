import type { AxiosResponse } from "axios";
export declare class PayTRException extends Error {
  response?: AxiosResponse<any>;
  constructor(message: string, response?: AxiosResponse<any>);
}
//# sourceMappingURL=error.d.ts.map
