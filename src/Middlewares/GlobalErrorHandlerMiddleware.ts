import {
    Err,
    GlobalErrorHandlerMiddleware as BaseGlobalErrorHandlerMiddleware, IResponseError,
    OverrideProvider,
    Req, Res
} from "@tsed/common";

import {Constant} from "@tsed/di";
import {Exception} from "ts-httpexceptions";
import Express from "express";

import {QueryFailedError} from "typeorm";

@OverrideProvider(BaseGlobalErrorHandlerMiddleware)
export class GlobalErrorHandlerMiddleware extends BaseGlobalErrorHandlerMiddleware {

    @Constant("errors.headerName", "errors")
    protected headerName: string;

    // use(@Err() error: any,
    //     @Req() request: Req,
    //     @Res() response: Res): any {
    //
    //     return super.use(error, request, response);
    // }

    use(@Err() error: any, @Req() request: Req, @Res() response: Res): any {
        const logger = request.ctx.logger;

        const toHTML = (message = "") => message.replace(/\n/gi, "<br />");

        if (error instanceof Exception || error.status) {
            logger.error({
                error: {
                    message: error.message,
                    stack: error.stack,
                    status: error.status,
                    origin: error.origin
                }
            });

            this.setHeaders(response, error, error.origin);

            response.status(error.status).send(toHTML(error.message));

            return;
        }

        if (error instanceof QueryFailedError) {
        }

        if (typeof error === "string") {
            response.status(404).send(toHTML(error));

            return;
        }

        logger.error({
            error: {
                status: 500,
                message: error.message,
                stack: error.stack,
                origin: error.origin
            }
        });

        this.setHeaders(response, error, error.origin);

        response.status(error.status || 500).send("Internal Error");

        return;
    }

    setHeaders(response: Express.Response, ...args: IResponseError[]) {
        let hErrors: any = [];

        args
            .filter(o => !!o)
            .forEach(({headers, errors}: IResponseError) => {
                if (headers) {
                    response.set(headers);
                }

                if (errors) {
                    hErrors = hErrors.concat(errors);
                }
            });

        if (hErrors.length) {
            response.set(this.headerName, JSON.stringify(hErrors));
        }
    }
}
