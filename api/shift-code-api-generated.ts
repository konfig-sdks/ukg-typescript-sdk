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
import { ShiftCodeGetList } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ShiftCodeApi - axios parameter creator
 * @export
 */
export const ShiftCodeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \\\"View\\\" role for the \\\"Company Configuration Integration\\\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).
         * @summary Shift Codes API Data
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getData: async (page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/configuration/v1/shift-codes`;
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
                pathTemplate: '/configuration/v1/shift-codes',
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
 * ShiftCodeApi - functional programming interface
 * @export
 */
export const ShiftCodeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShiftCodeApiAxiosParamCreator(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \\\"View\\\" role for the \\\"Company Configuration Integration\\\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).
         * @summary Shift Codes API Data
         * @param {ShiftCodeApiGetDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getData(requestParameters: ShiftCodeApiGetDataRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ShiftCodeGetList>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getData(requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ShiftCodeApi - factory interface
 * @export
 */
export const ShiftCodeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShiftCodeApiFp(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \\\"View\\\" role for the \\\"Company Configuration Integration\\\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).
         * @summary Shift Codes API Data
         * @param {ShiftCodeApiGetDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getData(requestParameters: ShiftCodeApiGetDataRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<ShiftCodeGetList>> {
            return localVarFp.getData(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getData operation in ShiftCodeApi.
 * @export
 * @interface ShiftCodeApiGetDataRequest
 */
export type ShiftCodeApiGetDataRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof ShiftCodeApiGetData
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof ShiftCodeApiGetData
    */
    readonly perPage?: number
    
}

/**
 * ShiftCodeApiGenerated - object-oriented interface
 * @export
 * @class ShiftCodeApiGenerated
 * @extends {BaseAPI}
 */
export class ShiftCodeApiGenerated extends BaseAPI {
    /**
     * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \\\"View\\\" role for the \\\"Company Configuration Integration\\\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).
     * @summary Shift Codes API Data
     * @param {ShiftCodeApiGetDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftCodeApiGenerated
     */
    public getData(requestParameters: ShiftCodeApiGetDataRequest = {}, options?: AxiosRequestConfig) {
        return ShiftCodeApiFp(this.configuration).getData(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}