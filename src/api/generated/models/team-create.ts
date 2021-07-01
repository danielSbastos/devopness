/* eslint-disable */
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



/**
 * 
 * @export
 * @interface TeamCreate
 */
export interface TeamCreate {
    /**
     * The ID of the project where the team will be created
     * @type {string}
     * @memberof TeamCreate
     */
    project_id: string;
    /**
     * The name of the team
     * @type {string}
     * @memberof TeamCreate
     */
    name: string;
    /**
     * The URL to team\'s image
     * @type {string}
     * @memberof TeamCreate
     */
    photo_url?: string;
}
