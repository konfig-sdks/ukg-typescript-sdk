/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsImportMessage } from './ultimate-software-foundation-services-api-ulti-pro-personnel-import-tool-models-import-message';

/**
 * 
 * @export
 * @interface UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatus
 */
export interface UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatus {
    /**
     * 
     * @type {string}
     * @memberof UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatus
     */
    'stagingId'?: string;
    /**
     * 
     * @type {string}
     * @memberof UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatus
     */
    'fileProcessDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatus
     */
    'serviceSubmittalDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatus
     */
    'lastRepostDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatus
     */
    'employeeName'?: string;
    /**
     * 
     * @type {string}
     * @memberof UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatus
     */
    'employeeNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatus
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatus
     */
    'transaction'?: string;
    /**
     * 
     * @type {string}
     * @memberof UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatus
     */
    'fileName'?: string;
    /**
     * 
     * @type {Array<UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsImportMessage>}
     * @memberof UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatus
     */
    'messages'?: Array<UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsImportMessage>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatus
     */
    'childTransactionStatuses'?: Array<UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatusChildTransactionStatusesEnum>;
}

type UltimateSoftwareFoundationServicesApiUltiProPersonnelImportToolModelsFileStagingStatusChildTransactionStatusesEnum = 'FileStagingStatus object'


