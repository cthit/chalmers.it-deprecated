export interface SvEn {
    sv: string;
    en: string;
}

export interface SuperGroup {
    id: string;
    name: string;
    prettyName: string;
    type: string;
    email: string;
}

export interface Group {
    id: string;
    becomesActive: any;
    becomesInactive: any;
    description: SvEn;
    email: string;
    function: SvEn;
    name: string;
    prettyName: string;
    avatarURL?: any;
    superGroup: SuperGroup;
    active: boolean;
}

export interface User {
    id: string;
    cid: string;
    nick: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    language: string;
    avatarUrl: string;
    gdpr: boolean;
    userAgreement: boolean;
    accountLocked: boolean;
    acceptanceYear: number;
    authorities: any[];
    activated: boolean;
    enabled: boolean;
    username: string;
    accountNonLocked: boolean;
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
    groups: Group[];
    websiteURLs?: any;
}
