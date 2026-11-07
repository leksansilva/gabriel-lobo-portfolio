# Queries (TanStack Query)

Client-side server state. In a mostly static portfolio, prefer fetching in server containers (`page.tsx`) and only use query hooks for client interactions (search, pagination, form submissions).

## Setup

`Providers` (`(common)/components/providers`) wraps the app with `QueryClientProvider` using `getQueryClient()` from `(common)/libs/react-query.ts` (one client per browser, a fresh one per server render).

## Pattern

```ts
// services/queries/projects.query.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { projectsApi } from '../apis';

export const projectsQueryKeys = {
  all: ['projects'] as const,
  detail: (slug: string) => ['projects', slug] as const,
};

export const useGetProjects = () =>
  useQuery({
    queryKey: projectsQueryKeys.all,
    queryFn: () => projectsApi.getProjects(),
  });

export const usePostContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: contactApi.postContact,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: projectsQueryKeys.all }),
  });
};
```

- Hook names: `useGet<Resource>`, `useGet<Resource>BySlug`, `usePost<Resource>`, `usePut<Resource>`, `useDelete<Resource>`.
- Query keys live in a `<feature>QueryKeys` object in the same file.
- Toasts (`react-toastify`) on mutation success/error, with pt-BR messages.
- Re-export through `services/queries/index.ts`.
