import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

const queryClient = new QueryClient()

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </div>
    )
}

