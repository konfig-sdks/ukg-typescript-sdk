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
import { BusinessRuleFileUpload } from '../models';
// @ts-ignore
import { BusinessRuleImportFileStaging } from '../models';
// @ts-ignore
import { BusinessRuleImportFileStagingStatus } from '../models';
// @ts-ignore
import { BusinessRuleImportRequest } from '../models';
// @ts-ignore
import { FileStatusModel } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * BusinessRuleImportToolApi - axios parameter creator
 * @export
 */
export const BusinessRuleImportToolApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Takes an XML transaction and feeds it into the Business Rule Import Tool
         * @param {BusinessRuleImportRequest} businessRuleImportRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        businessRuleImportFileUpload: async (businessRuleImportRequest: BusinessRuleImportRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'businessRuleImportRequest' is not null or undefined
            assertParamExists('businessRuleImportFileUpload', 'businessRuleImportRequest', businessRuleImportRequest)
            const localVarPath = `/configuration/v1/businessruleimport-tool/fileupload`;
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
                requestBody: businessRuleImportRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/configuration/v1/businessruleimport-tool/fileupload',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(businessRuleImportRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieves the status of an Business Rule Import Tool transaction
         * @param {string} fileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFileUploadStatus: async (fileId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getFileUploadStatus', 'fileId', fileId)
            const localVarPath = `/configuration/v1/businessruleimport-tool/filestatus/{fileId}`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId !== undefined ? fileId : `-fileId-`)));
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
                pathTemplate: '/configuration/v1/businessruleimport-tool/filestatus/{fileId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieves the status of an Business Rule Import Tool transaction
         * @param {string} stagingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStagingStatus: async (stagingId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'stagingId' is not null or undefined
            assertParamExists('getStagingStatus', 'stagingId', stagingId)
            const localVarPath = `/configuration/v1/businessruleimport-tool/transactionstatus/{stagingId}`
                .replace(`{${"stagingId"}}`, encodeURIComponent(String(stagingId !== undefined ? stagingId : `-stagingId-`)));
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
                pathTemplate: '/configuration/v1/businessruleimport-tool/transactionstatus/{stagingId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Takes an XML transaction and feeds it into the Business Rule Import Tool (Staging)
         * @param {BusinessRuleImportRequest} businessRuleImportRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importsBusinessRuleStagingData: async (businessRuleImportRequest: BusinessRuleImportRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'businessRuleImportRequest' is not null or undefined
            assertParamExists('importsBusinessRuleStagingData', 'businessRuleImportRequest', businessRuleImportRequest)
            const localVarPath = `/configuration/v1/businessruleimport-tool/transaction`;
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
                requestBody: businessRuleImportRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/configuration/v1/businessruleimport-tool/transaction',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(businessRuleImportRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BusinessRuleImportToolApi - functional programming interface
 * @export
 */
export const BusinessRuleImportToolApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BusinessRuleImportToolApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Takes an XML transaction and feeds it into the Business Rule Import Tool
         * @param {BusinessRuleImportToolApiBusinessRuleImportFileUploadRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async businessRuleImportFileUpload(requestParameters: BusinessRuleImportToolApiBusinessRuleImportFileUploadRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const businessRuleImportRequest: BusinessRuleImportRequest = {
                transaction: requestParameters.transaction,
                uniqueFileName: requestParameters.uniqueFileName
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.businessRuleImportFileUpload(businessRuleImportRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieves the status of an Business Rule Import Tool transaction
         * @param {BusinessRuleImportToolApiGetFileUploadStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFileUploadStatus(requestParameters: BusinessRuleImportToolApiGetFileUploadStatusRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileStatusModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileUploadStatus(requestParameters.fileId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieves the status of an Business Rule Import Tool transaction
         * @param {BusinessRuleImportToolApiGetStagingStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStagingStatus(requestParameters: BusinessRuleImportToolApiGetStagingStatusRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BusinessRuleImportFileStagingStatus>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStagingStatus(requestParameters.stagingId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Takes an XML transaction and feeds it into the Business Rule Import Tool (Staging)
         * @param {BusinessRuleImportToolApiImportsBusinessRuleStagingDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importsBusinessRuleStagingData(requestParameters: BusinessRuleImportToolApiImportsBusinessRuleStagingDataRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BusinessRuleImportFileStaging>> {
            const businessRuleImportRequest: BusinessRuleImportRequest = {
                transaction: requestParameters.transaction,
                uniqueFileName: requestParameters.uniqueFileName
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.importsBusinessRuleStagingData(businessRuleImportRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BusinessRuleImportToolApi - factory interface
 * @export
 */
export const BusinessRuleImportToolApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BusinessRuleImportToolApiFp(configuration)
    return {
        /**
         * 
         * @summary Takes an XML transaction and feeds it into the Business Rule Import Tool
         * @param {BusinessRuleImportToolApiBusinessRuleImportFileUploadRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        businessRuleImportFileUpload(requestParameters: BusinessRuleImportToolApiBusinessRuleImportFileUploadRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.businessRuleImportFileUpload(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieves the status of an Business Rule Import Tool transaction
         * @param {BusinessRuleImportToolApiGetFileUploadStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFileUploadStatus(requestParameters: BusinessRuleImportToolApiGetFileUploadStatusRequest, options?: AxiosRequestConfig): AxiosPromise<FileStatusModel> {
            return localVarFp.getFileUploadStatus(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieves the status of an Business Rule Import Tool transaction
         * @param {BusinessRuleImportToolApiGetStagingStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStagingStatus(requestParameters: BusinessRuleImportToolApiGetStagingStatusRequest, options?: AxiosRequestConfig): AxiosPromise<BusinessRuleImportFileStagingStatus> {
            return localVarFp.getStagingStatus(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Takes an XML transaction and feeds it into the Business Rule Import Tool (Staging)
         * @param {BusinessRuleImportToolApiImportsBusinessRuleStagingDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importsBusinessRuleStagingData(requestParameters: BusinessRuleImportToolApiImportsBusinessRuleStagingDataRequest, options?: AxiosRequestConfig): AxiosPromise<BusinessRuleImportFileStaging> {
            return localVarFp.importsBusinessRuleStagingData(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for businessRuleImportFileUpload operation in BusinessRuleImportToolApi.
 * @export
 * @interface BusinessRuleImportToolApiBusinessRuleImportFileUploadRequest
 */
export type BusinessRuleImportToolApiBusinessRuleImportFileUploadRequest = {
    
} & BusinessRuleImportRequest

/**
 * Request parameters for getFileUploadStatus operation in BusinessRuleImportToolApi.
 * @export
 * @interface BusinessRuleImportToolApiGetFileUploadStatusRequest
 */
export type BusinessRuleImportToolApiGetFileUploadStatusRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BusinessRuleImportToolApiGetFileUploadStatus
    */
    readonly fileId: string
    
}

/**
 * Request parameters for getStagingStatus operation in BusinessRuleImportToolApi.
 * @export
 * @interface BusinessRuleImportToolApiGetStagingStatusRequest
 */
export type BusinessRuleImportToolApiGetStagingStatusRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BusinessRuleImportToolApiGetStagingStatus
    */
    readonly stagingId: string
    
}

/**
 * Request parameters for importsBusinessRuleStagingData operation in BusinessRuleImportToolApi.
 * @export
 * @interface BusinessRuleImportToolApiImportsBusinessRuleStagingDataRequest
 */
export type BusinessRuleImportToolApiImportsBusinessRuleStagingDataRequest = {
    
} & BusinessRuleImportRequest

/**
 * BusinessRuleImportToolApiGenerated - object-oriented interface
 * @export
 * @class BusinessRuleImportToolApiGenerated
 * @extends {BaseAPI}
 */
export class BusinessRuleImportToolApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Takes an XML transaction and feeds it into the Business Rule Import Tool
     * @param {BusinessRuleImportToolApiBusinessRuleImportFileUploadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessRuleImportToolApiGenerated
     */
    public businessRuleImportFileUpload(requestParameters: BusinessRuleImportToolApiBusinessRuleImportFileUploadRequest, options?: AxiosRequestConfig) {
        return BusinessRuleImportToolApiFp(this.configuration).businessRuleImportFileUpload(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieves the status of an Business Rule Import Tool transaction
     * @param {BusinessRuleImportToolApiGetFileUploadStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessRuleImportToolApiGenerated
     */
    public getFileUploadStatus(requestParameters: BusinessRuleImportToolApiGetFileUploadStatusRequest, options?: AxiosRequestConfig) {
        return BusinessRuleImportToolApiFp(this.configuration).getFileUploadStatus(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieves the status of an Business Rule Import Tool transaction
     * @param {BusinessRuleImportToolApiGetStagingStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessRuleImportToolApiGenerated
     */
    public getStagingStatus(requestParameters: BusinessRuleImportToolApiGetStagingStatusRequest, options?: AxiosRequestConfig) {
        return BusinessRuleImportToolApiFp(this.configuration).getStagingStatus(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Takes an XML transaction and feeds it into the Business Rule Import Tool (Staging)
     * @param {BusinessRuleImportToolApiImportsBusinessRuleStagingDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessRuleImportToolApiGenerated
     */
    public importsBusinessRuleStagingData(requestParameters: BusinessRuleImportToolApiImportsBusinessRuleStagingDataRequest, options?: AxiosRequestConfig) {
        return BusinessRuleImportToolApiFp(this.configuration).importsBusinessRuleStagingData(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
