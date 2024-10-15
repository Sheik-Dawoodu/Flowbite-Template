export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export enum USER_TYPE{
    ADMIN  = "ADMIN",
    USER   = "USER"
 }

 export interface MENUDATA {
    menuName: string;
    routePath?: string;
    svgUrl?: any;
    allowedUserTypes?: Array<USER_TYPE>;
    children?: Array<MENUDATA>;
  }