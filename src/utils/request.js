import axios from 'axios'
import defaultSettings from '@/settings'

const service = axios.create({
    baseURL: defaultSettings.domain,
    timeout: 20000
})

service.interceptors.request.use(
    config => {
        if (config.method === 'get' && config.params) {
            let url = config.url + '?'
            for (const propName of Object.keys(config.params)) {
              const value = config.params[propName]
              var part = encodeURIComponent(propName) + '='
              if (value !== null && typeof (value) !== 'undefined') {
                if (typeof value === 'object') {
                  for (const key of Object.keys(value)) {
                    const params = propName + '[' + key + ']'
                    var subPart = encodeURIComponent(params) + '='
                    url += subPart + encodeURIComponent(value[key]) + '&'
                  }
                } else {
                  url += part + encodeURIComponent(value) + '&'
                }
              }
            }
            url = url.slice(0, -1)
            config.params = {}
            config.url = url
          }
          return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// service.interceptors.response.use(res => {

// })

export default service
