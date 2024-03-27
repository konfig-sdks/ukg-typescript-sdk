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
import { CodeObject } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * WaiveReasonApi - axios parameter creator
 * @export
 */
export const WaiveReasonApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * \'Creates a new UKG Pro waiveReason configuration.\' 
         * @summary Create a new waiveReason configuration
         * @param {CodeObject} codeObject The waiveReason code to be written.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConfigurationUkgPro: async (codeObject: CodeObject, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'codeObject' is not null or undefined
            assertParamExists('createConfigurationUkgPro', 'codeObject', codeObject)
            const localVarPath = `/waiveReason`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OauthSecurity required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OauthSecurity", ["recruiting.domain.third-party-job-board-integrations.auto-feed"], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: codeObject,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/waiveReason',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(codeObject, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * \'The waiveReason endpoint returns information about the UKG Pro waiveReason configurations.\' 
         * @summary Retrieve all waiveReason configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigurations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/waiveReason`;
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
                pathTemplate: '/waiveReason',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * \'Allows the ability update a single waiveReason configuration.\' 
         * @summary Update a single waiveReason configuration
         * @param {string} code Project code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSingleConfiguration: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('updateSingleConfiguration', 'code', code)
            const localVarPath = `/waiveReason/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code !== undefined ? code : `-code-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
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
                pathTemplate: '/waiveReason/{code}',
                httpMethod: 'PUT'
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
 * WaiveReasonApi - functional programming interface
 * @export
 */
export const WaiveReasonApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WaiveReasonApiAxiosParamCreator(configuration)
    return {
        /**
         * \'Creates a new UKG Pro waiveReason configuration.\' 
         * @summary Create a new waiveReason configuration
         * @param {WaiveReasonApiCreateConfigurationUkgProRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createConfigurationUkgPro(requestParameters: WaiveReasonApiCreateConfigurationUkgProRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const codeObject: CodeObject = {
                description: requestParameters.description,
                code: requestParameters.code
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createConfigurationUkgPro(codeObject, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * \'The waiveReason endpoint returns information about the UKG Pro waiveReason configurations.\' 
         * @summary Retrieve all waiveReason configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfigurations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CodeObject>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfigurations(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * \'Allows the ability update a single waiveReason configuration.\' 
         * @summary Update a single waiveReason configuration
         * @param {WaiveReasonApiUpdateSingleConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSingleConfiguration(requestParameters: WaiveReasonApiUpdateSingleConfigurationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSingleConfiguration(requestParameters.code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WaiveReasonApi - factory interface
 * @export
 */
export const WaiveReasonApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WaiveReasonApiFp(configuration)
    return {
        /**
         * \'Creates a new UKG Pro waiveReason configuration.\' 
         * @summary Create a new waiveReason configuration
         * @param {WaiveReasonApiCreateConfigurationUkgProRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConfigurationUkgPro(requestParameters: WaiveReasonApiCreateConfigurationUkgProRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createConfigurationUkgPro(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * \'The waiveReason endpoint returns information about the UKG Pro waiveReason configurations.\' 
         * @summary Retrieve all waiveReason configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigurations(options?: AxiosRequestConfig): AxiosPromise<Array<CodeObject>> {
            return localVarFp.getConfigurations(options).then((request) => request(axios, basePath));
        },
        /**
         * \'Allows the ability update a single waiveReason configuration.\' 
         * @summary Update a single waiveReason configuration
         * @param {WaiveReasonApiUpdateSingleConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSingleConfiguration(requestParameters: WaiveReasonApiUpdateSingleConfigurationRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateSingleConfiguration(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createConfigurationUkgPro operation in WaiveReasonApi.
 * @export
 * @interface WaiveReasonApiCreateConfigurationUkgProRequest
 */
export type WaiveReasonApiCreateConfigurationUkgProRequest = {
    
} & CodeObject

/**
 * Request parameters for updateSingleConfiguration operation in WaiveReasonApi.
 * @export
 * @interface WaiveReasonApiUpdateSingleConfigurationRequest
 */
export type WaiveReasonApiUpdateSingleConfigurationRequest = {
    
    /**
    * Project code.
    * @type {string}
    * @memberof WaiveReasonApiUpdateSingleConfiguration
    */
    readonly code: string
    
}

/**
 * WaiveReasonApiGenerated - object-oriented interface
 * @export
 * @class WaiveReasonApiGenerated
 * @extends {BaseAPI}
 */
export class WaiveReasonApiGenerated extends BaseAPI {
    /**
     * \'Creates a new UKG Pro waiveReason configuration.\' 
     * @summary Create a new waiveReason configuration
     * @param {WaiveReasonApiCreateConfigurationUkgProRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WaiveReasonApiGenerated
     */
    public createConfigurationUkgPro(requestParameters: WaiveReasonApiCreateConfigurationUkgProRequest, options?: AxiosRequestConfig) {
        return WaiveReasonApiFp(this.configuration).createConfigurationUkgPro(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * \'The waiveReason endpoint returns information about the UKG Pro waiveReason configurations.\' 
     * @summary Retrieve all waiveReason configurations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WaiveReasonApiGenerated
     */
    public getConfigurations(options?: AxiosRequestConfig) {
        return WaiveReasonApiFp(this.configuration).getConfigurations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * \'Allows the ability update a single waiveReason configuration.\' 
     * @summary Update a single waiveReason configuration
     * @param {WaiveReasonApiUpdateSingleConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WaiveReasonApiGenerated
     */
    public updateSingleConfiguration(requestParameters: WaiveReasonApiUpdateSingleConfigurationRequest, options?: AxiosRequestConfig) {
        return WaiveReasonApiFp(this.configuration).updateSingleConfiguration(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}