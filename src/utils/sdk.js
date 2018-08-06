/**
 * bh-mobile-sdk encapsulate
 */
import {init as sdkInit} from 'bh-mobile-sdk'

export const BASE_PATH = location.protocol + '//' + location.host + location.pathname

let tenantCode = null
let tenantInfo = null
let tenantId = null

export const runWithSdk = (() => {
  return !!~navigator.userAgent.indexOf('wisedu')
})()

/**
 * init method
 */
export const init = () => {
  return new Promise(resolve => {
    sdkInit(() => {
      resolve(BH_MOBILE_SDK)
    })
  })
}

/**
 * get current tenant code like 'wiseduys'
 */
export const getTenantCode = () => {
  if (!runWithSdk) {
    tenantCode = 'fdycs' // fake id for development
  }

  if (tenantCode) {
    return Promise.resolve(tenantCode)
  }

  return new Promise(resolve => {
    BH_MOBILE_SDK.cpdaily.getTenantInfo(tenant => {
      tenantCode = tenant ? tenant.tenantCode : ''
      resolve(tenantCode)
    })
  })
}

/**
 * get current tenant code like 'wiseduys'
 */
export const getTenantInfo = () => {
  if (!runWithSdk) {
    tenantInfo = {
      tenantCode: 'fdycs',
      tenantName: '辅导员测试大学'
    } // fake id for development
  }

  if (tenantInfo) {
    return Promise.resolve(tenantInfo)
  }

  return new Promise(resolve => {
    BH_MOBILE_SDK.cpdaily.getTenantInfo(tenant => {
      tenantInfo = {
        tenantCode: tenant.tenantCode,
        tenantName: tenant.shortName
      }

      resolve(tenantInfo)
    })
  })
}

/**
 * get current tenant id
 */
export const getTenantId = () => {
  if (!runWithSdk) {
    tenantId = ''
  }

  if (tenantId) {
    return Promise.resolve(tenantId)
  }

  return new Promise(resolve => {
    BH_MOBILE_SDK.cpdaily.getTenantID(id => {
      tenantId = id
      resolve(tenantId)
    })
  })
}

// 关闭当前窗口
export const closeWindow = () => {
  return BH_MOBILE_SDK.UI.closeWebView()
}

/**
 * 打开使用前端路由指定的页面
 */
export const openRoute = (path, options) => {
  openWindow(`${BASE_PATH}#${path}`, options)
}

/**
 * open outer link
 */
export const openWindow = (path, options) => {
  BH_MOBILE_SDK.UI.openWebView(path, options)
}

/**
 * copy to clipboard
 * @param {String} msg text to copy
 */
export const copy = (msg) => {
  return BH_MOBILE_SDK.systemAbility.setPasteboard(msg)
}

/**
 * 设置右上角操作按钮
 * @param {Number} type 样式类型,0-更多，1-转发，2-扫描，3-加号
 * @param {function} callback 点击后的回调方法
 */
export const setRightButton = (type, callback) => {
  return BH_MOBILE_SDK.UI.showLimitedRightButton(type, callback)
}

/**
 * 分享到今日校园
 * @example params
 * {
 *  type:0,                //0: 新闻，需要传入title、img、url,且img只能有一张（http完整路径）,input可选；  1: 链接，需要传入url，今日校园自动抓取页面上的图片和标题，input可选
 *  input:'默认输入的内容',
 *  title:'分享的标题',
 *  img:'http://xxxx.png',
 *  url:'http://xxx.html'
 * }
 */
export const share = (params) => {
  return BH_MOBILE_SDK.cpdaily.shareToCpdaily(params)
}

/**
 * 再次回到当前页面时触发的回调方法
 * @param {function} callback 待执行的回调函数
 */
export const setResume = (callback) => {
  return BH_MOBILE_SDK.UI.webviewOnResume(callback)
}

/**
 * 设置页面（WebView）标题
 * @param {String} title 标题
 */
export const setTitle = (title) => {
  return BH_MOBILE_SDK.UI.setTitleText(title)
}

/**
 * 埋点
 * @param {String} type 事件类型
 * @param {Object} params 附加参数
 */
export const trackEvent = (type, params) => {
  return BH_MOBILE_SDK.cpdaily.trackEvent(type, params)
}
