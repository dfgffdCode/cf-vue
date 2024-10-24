import request from '@/utils/request'

export function getMenuList() {
    return request({
        url: '/api',
        method: 'get'
    }).then(res => {
        console.log(res);
    })
}
