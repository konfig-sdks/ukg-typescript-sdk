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
 * LoanTypeApi - axios parameter creator
 * @export
 */
export const LoanTypeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * \'Creates a new UKG Pro loanType configuration.\' 
         * @summary Create a new loanType configuration
         * @param {CodeObject} codeObject The loanType code to be written.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConfiguration: async (codeObject: CodeObject, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'codeObject' is not null or undefined
            assertParamExists('createConfiguration', 'codeObject', codeObject)
            const localVarPath = `/loanType`;
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
                pathTemplate: '/loanType',
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
         * \'The loanType endpoint returns information about the UKG Pro loanType configurations.\' 
         * @summary Retrieve all loanType configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigurations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/loanType`;
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
                pathTemplate: '/loanType',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * \'Allows the ability update a single loanType configuration.\' 
         * @summary Update a single loanType configuration
         * @param {string} code Project code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('updateConfiguration', 'code', code)
            const localVarPath = `/loanType/{code}`
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
                pathTemplate: '/loanType/{code}',
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
 * LoanTypeApi - functional programming interface
 * @export
 */
export const LoanTypeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LoanTypeApiAxiosParamCreator(configuration)
    return {
        /**
         * \'Creates a new UKG Pro loanType configuration.\' 
         * @summary Create a new loanType configuration
         * @param {LoanTypeApiCreateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createConfiguration(requestParameters: LoanTypeApiCreateConfigurationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const codeObject: CodeObject = {
                description: requestParameters.description,
                code: requestParameters.code
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createConfiguration(codeObject, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * \'The loanType endpoint returns information about the UKG Pro loanType configurations.\' 
         * @summary Retrieve all loanType configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfigurations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CodeObject>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfigurations(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * \'Allows the ability update a single loanType configuration.\' 
         * @summary Update a single loanType configuration
         * @param {LoanTypeApiUpdateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateConfiguration(requestParameters: LoanTypeApiUpdateConfigurationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateConfiguration(requestParameters.code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LoanTypeApi - factory interface
 * @export
 */
export const LoanTypeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LoanTypeApiFp(configuration)
    return {
        /**
         * \'Creates a new UKG Pro loanType configuration.\' 
         * @summary Create a new loanType configuration
         * @param {LoanTypeApiCreateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConfiguration(requestParameters: LoanTypeApiCreateConfigurationRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createConfiguration(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * \'The loanType endpoint returns information about the UKG Pro loanType configurations.\' 
         * @summary Retrieve all loanType configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigurations(options?: AxiosRequestConfig): AxiosPromise<Array<CodeObject>> {
            return localVarFp.getConfigurations(options).then((request) => request(axios, basePath));
        },
        /**
         * \'Allows the ability update a single loanType configuration.\' 
         * @summary Update a single loanType configuration
         * @param {LoanTypeApiUpdateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration(requestParameters: LoanTypeApiUpdateConfigurationRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateConfiguration(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createConfiguration operation in LoanTypeApi.
 * @export
 * @interface LoanTypeApiCreateConfigurationRequest
 */
export type LoanTypeApiCreateConfigurationRequest = {
    
} & CodeObject

/**
 * Request parameters for updateConfiguration operation in LoanTypeApi.
 * @export
 * @interface LoanTypeApiUpdateConfigurationRequest
 */
export type LoanTypeApiUpdateConfigurationRequest = {
    
    /**
    * Project code.
    * @type {string}
    * @memberof LoanTypeApiUpdateConfiguration
    */
    readonly code: string
    
}

/**
 * LoanTypeApiGenerated - object-oriented interface
 * @export
 * @class LoanTypeApiGenerated
 * @extends {BaseAPI}
 */
export class LoanTypeApiGenerated extends BaseAPI {
    /**
     * \'Creates a new UKG Pro loanType configuration.\' 
     * @summary Create a new loanType configuration
     * @param {LoanTypeApiCreateConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanTypeApiGenerated
     */
    public createConfiguration(requestParameters: LoanTypeApiCreateConfigurationRequest, options?: AxiosRequestConfig) {
        return LoanTypeApiFp(this.configuration).createConfiguration(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * \'The loanType endpoint returns information about the UKG Pro loanType configurations.\' 
     * @summary Retrieve all loanType configurations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanTypeApiGenerated
     */
    public getConfigurations(options?: AxiosRequestConfig) {
        return LoanTypeApiFp(this.configuration).getConfigurations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * \'Allows the ability update a single loanType configuration.\' 
     * @summary Update a single loanType configuration
     * @param {LoanTypeApiUpdateConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanTypeApiGenerated
     */
    public updateConfiguration(requestParameters: LoanTypeApiUpdateConfigurationRequest, options?: AxiosRequestConfig) {
        return LoanTypeApiFp(this.configuration).updateConfiguration(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
