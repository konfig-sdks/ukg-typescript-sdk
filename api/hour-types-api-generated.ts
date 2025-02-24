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
import { ResultDtoHourTypeDto } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * HourTypesApi - axios parameter creator
 * @export
 */
export const HourTypesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Obtains all hour types.
         * @summary Obtains all hour types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        obtainAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/simpleschedule/hour_types`;
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/simpleschedule/hour_types',
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
 * HourTypesApi - functional programming interface
 * @export
 */
export const HourTypesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HourTypesApiAxiosParamCreator(configuration)
    return {
        /**
         * Obtains all hour types.
         * @summary Obtains all hour types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async obtainAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultDtoHourTypeDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.obtainAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HourTypesApi - factory interface
 * @export
 */
export const HourTypesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HourTypesApiFp(configuration)
    return {
        /**
         * Obtains all hour types.
         * @summary Obtains all hour types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        obtainAll(options?: AxiosRequestConfig): AxiosPromise<ResultDtoHourTypeDto> {
            return localVarFp.obtainAll(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HourTypesApiGenerated - object-oriented interface
 * @export
 * @class HourTypesApiGenerated
 * @extends {BaseAPI}
 */
export class HourTypesApiGenerated extends BaseAPI {
    /**
     * Obtains all hour types.
     * @summary Obtains all hour types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HourTypesApiGenerated
     */
    public obtainAll(options?: AxiosRequestConfig) {
        return HourTypesApiFp(this.configuration).obtainAll(options).then((request) => request(this.axios, this.basePath));
    }
}
