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
 * MilitaryBranchesApi - axios parameter creator
 * @export
 */
export const MilitaryBranchesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * \'Creates a new UKG Pro militaryBranches configuration.\' 
         * @summary Create a new militaryBranches configuration
         * @param {CodeObject} codeObject The militaryBranches code to be written.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configureUkgPro: async (codeObject: CodeObject, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'codeObject' is not null or undefined
            assertParamExists('configureUkgPro', 'codeObject', codeObject)
            const localVarPath = `/militaryBranches`;
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
                pathTemplate: '/militaryBranches',
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
         * \'The militaryBranches endpoint returns information about the UKG Pro militaryBranches configurations.\' 
         * @summary Retrieve all militaryBranches configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllConfigurations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/militaryBranches`;
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
                pathTemplate: '/militaryBranches',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * \'Allows the ability update a single militaryBranches configuration.\' 
         * @summary Update a single militaryBranches configuration
         * @param {string} code Project code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('updateConfiguration', 'code', code)
            const localVarPath = `/militaryBranches/{code}`
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
                pathTemplate: '/militaryBranches/{code}',
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
 * MilitaryBranchesApi - functional programming interface
 * @export
 */
export const MilitaryBranchesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MilitaryBranchesApiAxiosParamCreator(configuration)
    return {
        /**
         * \'Creates a new UKG Pro militaryBranches configuration.\' 
         * @summary Create a new militaryBranches configuration
         * @param {MilitaryBranchesApiConfigureUkgProRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async configureUkgPro(requestParameters: MilitaryBranchesApiConfigureUkgProRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const codeObject: CodeObject = {
                description: requestParameters.description,
                code: requestParameters.code
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.configureUkgPro(codeObject, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * \'The militaryBranches endpoint returns information about the UKG Pro militaryBranches configurations.\' 
         * @summary Retrieve all militaryBranches configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllConfigurations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CodeObject>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllConfigurations(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * \'Allows the ability update a single militaryBranches configuration.\' 
         * @summary Update a single militaryBranches configuration
         * @param {MilitaryBranchesApiUpdateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateConfiguration(requestParameters: MilitaryBranchesApiUpdateConfigurationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateConfiguration(requestParameters.code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MilitaryBranchesApi - factory interface
 * @export
 */
export const MilitaryBranchesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MilitaryBranchesApiFp(configuration)
    return {
        /**
         * \'Creates a new UKG Pro militaryBranches configuration.\' 
         * @summary Create a new militaryBranches configuration
         * @param {MilitaryBranchesApiConfigureUkgProRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configureUkgPro(requestParameters: MilitaryBranchesApiConfigureUkgProRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.configureUkgPro(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * \'The militaryBranches endpoint returns information about the UKG Pro militaryBranches configurations.\' 
         * @summary Retrieve all militaryBranches configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllConfigurations(options?: AxiosRequestConfig): AxiosPromise<Array<CodeObject>> {
            return localVarFp.getAllConfigurations(options).then((request) => request(axios, basePath));
        },
        /**
         * \'Allows the ability update a single militaryBranches configuration.\' 
         * @summary Update a single militaryBranches configuration
         * @param {MilitaryBranchesApiUpdateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration(requestParameters: MilitaryBranchesApiUpdateConfigurationRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateConfiguration(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for configureUkgPro operation in MilitaryBranchesApi.
 * @export
 * @interface MilitaryBranchesApiConfigureUkgProRequest
 */
export type MilitaryBranchesApiConfigureUkgProRequest = {
    
} & CodeObject

/**
 * Request parameters for updateConfiguration operation in MilitaryBranchesApi.
 * @export
 * @interface MilitaryBranchesApiUpdateConfigurationRequest
 */
export type MilitaryBranchesApiUpdateConfigurationRequest = {
    
    /**
    * Project code.
    * @type {string}
    * @memberof MilitaryBranchesApiUpdateConfiguration
    */
    readonly code: string
    
}

/**
 * MilitaryBranchesApiGenerated - object-oriented interface
 * @export
 * @class MilitaryBranchesApiGenerated
 * @extends {BaseAPI}
 */
export class MilitaryBranchesApiGenerated extends BaseAPI {
    /**
     * \'Creates a new UKG Pro militaryBranches configuration.\' 
     * @summary Create a new militaryBranches configuration
     * @param {MilitaryBranchesApiConfigureUkgProRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MilitaryBranchesApiGenerated
     */
    public configureUkgPro(requestParameters: MilitaryBranchesApiConfigureUkgProRequest, options?: AxiosRequestConfig) {
        return MilitaryBranchesApiFp(this.configuration).configureUkgPro(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * \'The militaryBranches endpoint returns information about the UKG Pro militaryBranches configurations.\' 
     * @summary Retrieve all militaryBranches configurations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MilitaryBranchesApiGenerated
     */
    public getAllConfigurations(options?: AxiosRequestConfig) {
        return MilitaryBranchesApiFp(this.configuration).getAllConfigurations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * \'Allows the ability update a single militaryBranches configuration.\' 
     * @summary Update a single militaryBranches configuration
     * @param {MilitaryBranchesApiUpdateConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MilitaryBranchesApiGenerated
     */
    public updateConfiguration(requestParameters: MilitaryBranchesApiUpdateConfigurationRequest, options?: AxiosRequestConfig) {
        return MilitaryBranchesApiFp(this.configuration).updateConfiguration(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
