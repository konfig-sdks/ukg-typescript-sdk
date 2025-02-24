/* tslint:disable */
/* eslint-disable */
/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { PositionReport } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PositionReportApi - axios parameter creator
 * @export
 */
export const PositionReportApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).   
         * @summary Get Position Report
         * @param {string} [positionCode] 
         * @param {string} [reportsToPositionCode] 
         * @param {string} [effectiveStartDate] 
         * @param {string} [effectiveStopDate] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (positionCode?: string, reportsToPositionCode?: string, effectiveStartDate?: string, effectiveStopDate?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/personnel/v1/position-report`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OauthSecurity required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OauthSecurity", ["recruiting.domain.third-party-job-board-integrations.auto-feed"], configuration)
            if (positionCode !== undefined) {
                localVarQueryParameter['positionCode'] = positionCode;
            }

            if (reportsToPositionCode !== undefined) {
                localVarQueryParameter['reportsToPositionCode'] = reportsToPositionCode;
            }

            if (effectiveStartDate !== undefined) {
                localVarQueryParameter['effectiveStartDate'] = (effectiveStartDate as any instanceof Date) ?
                    (effectiveStartDate as any).toISOString() :
                    effectiveStartDate;
            }

            if (effectiveStopDate !== undefined) {
                localVarQueryParameter['effectiveStopDate'] = (effectiveStopDate as any instanceof Date) ?
                    (effectiveStopDate as any).toISOString() :
                    effectiveStopDate;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_Page'] = perPage;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/personnel/v1/position-report',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PositionReportApi - functional programming interface
 * @export
 */
export const PositionReportApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PositionReportApiAxiosParamCreator(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).   
         * @summary Get Position Report
         * @param {PositionReportApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: PositionReportApiGetRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PositionReport>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.positionCode, requestParameters.reportsToPositionCode, requestParameters.effectiveStartDate, requestParameters.effectiveStopDate, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PositionReportApi - factory interface
 * @export
 */
export const PositionReportApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PositionReportApiFp(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).   
         * @summary Get Position Report
         * @param {PositionReportApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: PositionReportApiGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<PositionReport>> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for get operation in PositionReportApi.
 * @export
 * @interface PositionReportApiGetRequest
 */
export type PositionReportApiGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof PositionReportApiGet
    */
    readonly positionCode?: string
    
    /**
    * 
    * @type {string}
    * @memberof PositionReportApiGet
    */
    readonly reportsToPositionCode?: string
    
    /**
    * 
    * @type {string}
    * @memberof PositionReportApiGet
    */
    readonly effectiveStartDate?: string
    
    /**
    * 
    * @type {string}
    * @memberof PositionReportApiGet
    */
    readonly effectiveStopDate?: string
    
    /**
    * 
    * @type {number}
    * @memberof PositionReportApiGet
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof PositionReportApiGet
    */
    readonly perPage?: number
    
}

/**
 * PositionReportApiGenerated - object-oriented interface
 * @export
 * @class PositionReportApiGenerated
 * @extends {BaseAPI}
 */
export class PositionReportApiGenerated extends BaseAPI {
    /**
     * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).   
     * @summary Get Position Report
     * @param {PositionReportApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PositionReportApiGenerated
     */
    public get(requestParameters: PositionReportApiGetRequest = {}, options?: AxiosRequestConfig) {
        return PositionReportApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
