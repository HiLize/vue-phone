import {get} from '@/utils/http'
import { MINE_ACTIVITIES, ACTIVITY_DETAIL } from '@/config/requestPath'

export const mineActivities = params => {
    return get(MINE_ACTIVITIES)
}

export const getActivityDetail = params => {
    return get(ACTIVITY_DETAIL, params)
}