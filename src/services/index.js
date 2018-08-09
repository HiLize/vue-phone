import { get } from '@/utils/http'
import { ACTIVITIES, BANNER } from '@/config/requestPath'

export const getActivities = params => {
    return get(ACTIVITIES, params)
}

export const getBanner = params => {
    return get(BANNER)
}
