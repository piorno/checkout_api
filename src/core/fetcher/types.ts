type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface FetchOptions {
    method?: Method,
    url?: string,
    data?: unknown,
    headers?: Record<string, unknown>
}

type ReturnRequest<T = unknown> = {status: number, data: T}

export { FetchOptions, Method, ReturnRequest }