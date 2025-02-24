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
 * AwardTypeApi - axios parameter creator
 * @export
 */
export const AwardTypeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * \'Creates a new UKG Pro awardType configuration.\' 
         * @summary Create a new awardType configuration
         * @param {CodeObject} codeObject The awardType code to be written.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConfiguration: async (codeObject: CodeObject, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'codeObject' is not null or undefined
            assertParamExists('createConfiguration', 'codeObject', codeObject)
            const localVarPath = `/awardType`;
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
                pathTemplate: '/awardType',
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
         * \'The awardType endpoint returns information about the UKG Pro awardType configurations.\' 
         * @summary Retrieve all awardType configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllConfigurations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/awardType`;
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
                pathTemplate: '/awardType',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * \'Allows the ability update a single awardType configuration.\' 
         * @summary Update a single awardType configuration
         * @param {string} code Project code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('updateConfiguration', 'code', code)
            const localVarPath = `/awardType/{code}`
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
                pathTemplate: '/awardType/{code}',
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
 * AwardTypeApi - functional programming interface
 * @export
 */
export const AwardTypeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AwardTypeApiAxiosParamCreator(configuration)
    return {
        /**
         * \'Creates a new UKG Pro awardType configuration.\' 
         * @summary Create a new awardType configuration
         * @param {AwardTypeApiCreateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createConfiguration(requestParameters: AwardTypeApiCreateConfigurationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const codeObject: CodeObject = {
                description: requestParameters.description,
                code: requestParameters.code
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createConfiguration(codeObject, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * \'The awardType endpoint returns information about the UKG Pro awardType configurations.\' 
         * @summary Retrieve all awardType configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllConfigurations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CodeObject>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllConfigurations(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * \'Allows the ability update a single awardType configuration.\' 
         * @summary Update a single awardType configuration
         * @param {AwardTypeApiUpdateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateConfiguration(requestParameters: AwardTypeApiUpdateConfigurationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateConfiguration(requestParameters.code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AwardTypeApi - factory interface
 * @export
 */
export const AwardTypeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AwardTypeApiFp(configuration)
    return {
        /**
         * \'Creates a new UKG Pro awardType configuration.\' 
         * @summary Create a new awardType configuration
         * @param {AwardTypeApiCreateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConfiguration(requestParameters: AwardTypeApiCreateConfigurationRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createConfiguration(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * \'The awardType endpoint returns information about the UKG Pro awardType configurations.\' 
         * @summary Retrieve all awardType configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllConfigurations(options?: AxiosRequestConfig): AxiosPromise<Array<CodeObject>> {
            return localVarFp.getAllConfigurations(options).then((request) => request(axios, basePath));
        },
        /**
         * \'Allows the ability update a single awardType configuration.\' 
         * @summary Update a single awardType configuration
         * @param {AwardTypeApiUpdateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration(requestParameters: AwardTypeApiUpdateConfigurationRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateConfiguration(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createConfiguration operation in AwardTypeApi.
 * @export
 * @interface AwardTypeApiCreateConfigurationRequest
 */
export type AwardTypeApiCreateConfigurationRequest = {
    
} & CodeObject

/**
 * Request parameters for updateConfiguration operation in AwardTypeApi.
 * @export
 * @interface AwardTypeApiUpdateConfigurationRequest
 */
export type AwardTypeApiUpdateConfigurationRequest = {
    
    /**
    * Project code.
    * @type {string}
    * @memberof AwardTypeApiUpdateConfiguration
    */
    readonly code: string
    
}

/**
 * AwardTypeApiGenerated - object-oriented interface
 * @export
 * @class AwardTypeApiGenerated
 * @extends {BaseAPI}
 */
export class AwardTypeApiGenerated extends BaseAPI {
    /**
     * \'Creates a new UKG Pro awardType configuration.\' 
     * @summary Create a new awardType configuration
     * @param {AwardTypeApiCreateConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwardTypeApiGenerated
     */
    public createConfiguration(requestParameters: AwardTypeApiCreateConfigurationRequest, options?: AxiosRequestConfig) {
        return AwardTypeApiFp(this.configuration).createConfiguration(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * \'The awardType endpoint returns information about the UKG Pro awardType configurations.\' 
     * @summary Retrieve all awardType configurations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwardTypeApiGenerated
     */
    public getAllConfigurations(options?: AxiosRequestConfig) {
        return AwardTypeApiFp(this.configuration).getAllConfigurations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * \'Allows the ability update a single awardType configuration.\' 
     * @summary Update a single awardType configuration
     * @param {AwardTypeApiUpdateConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwardTypeApiGenerated
     */
    public updateConfiguration(requestParameters: AwardTypeApiUpdateConfigurationRequest, options?: AxiosRequestConfig) {
        return AwardTypeApiFp(this.configuration).updateConfiguration(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
