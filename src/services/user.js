import { get, post } from '@/utils/http'
import { SCORE, USESIGN, USECANCELSIGN } from '@/config/requestPath'

export const getScore = params => {
    return get(SCORE)
}

export const userSign = params => {
    let url = `${USESIGN}?activityWid=${params}`
    return post(url)
}

export const userCancelSign = params => {
    let url = `${USECANCELSIGN}?activityWid=${params}`
    return post(url)
}
