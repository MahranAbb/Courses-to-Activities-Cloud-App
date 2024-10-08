export interface ActivityMappingDef {
    name: string,
    esploroOrgUnit?: string,
    activityCategory?: string,
    activityType?: string,
    activityResearcherRole?: string,
    courseTerm?: string
}

export interface ActivityMappings {
    [key: string]: ActivityMappingDef
}

export const defaultActivityMappings: ActivityMappings = {
    
}