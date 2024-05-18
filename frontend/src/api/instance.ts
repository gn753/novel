import ky from 'ky'

const baseUrl = '/api'

const instance = ky.create({ prefixUrl: baseUrl })

export default instance
