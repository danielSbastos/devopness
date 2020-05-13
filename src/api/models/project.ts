// tslint:disable
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { SshKey } from './ssh-key';

/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * The project\'s name
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * The type of the project, usually indicating the main technology, programming language or base framework
     * @type {string}
     * @memberof Project
     */
    type?: string;
    /**
     * A base64 string representation of the logo image
     * @type {string}
     * @memberof Project
     */
    logo_image?: string;
    /**
     * A URL path to the project\'s logo image
     * @type {string}
     * @memberof Project
     */
    logo_url?: string;
    /**
     * The list of SSH keys added to the project
     * @type {Array<SshKey>}
     * @memberof Project
     */
    ssh_keys?: Array<SshKey>;
    /**
     * The list of the operating system users found in all the servers linked to a project
     * @type {Array<object>}
     * @memberof Project
     */
    os_users?: Array<object>;
}

