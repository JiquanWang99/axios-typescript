export type Method =
  | 'get'
  | 'GET'
  | 'DELETE'
  | 'delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: string
  data?: any
  params?: any
}
