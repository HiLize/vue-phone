import { get, post } from '@/utils/http'
import { SCORE, } from '@/config/requestPath'


export const getScore = params => {
    return get(SCORE)
}
