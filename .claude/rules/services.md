# Services (data layer)

Only needed when the portfolio consumes an API (CMS, contact endpoint, GitHub API…). Static content stays in `constants/`.

## Shared pieces (`(common)/services/`)

- `api.service.ts` — the axios instance (`api`). Server-side it prefixes `NEXT_API_URL`; client-side it is relative (`/api`), so add a `rewrites()` in `next.config.ts` if proxying to an external API.
- `base-api.service.ts` — `BaseApiService` with `get/post/put/patch/delete<T>({ path, params, payload, customBasePath })`.

## Pattern

```ts
// (common)/services/apis/projects.api.ts   (or a route's services/apis/)
import { BaseApiService } from '@/app/(common)/services';
import type { Project } from '../../types';

class ProjectsApi extends BaseApiService {
  constructor() {
    super('/projects');
  }

  async getProjects() {
    return this.get<Project[]>();
  }

  async getProjectBySlug(slug: string) {
    return this.get<Project>({ path: `/${slug}` });
  }
}

export const projectsApi = new ProjectsApi();
```

- File `services/apis/<feature>.api.ts`; class `<Feature>Api`; export a single lowercase singleton; never `new` it at call sites.
- Methods are thin: one HTTP call + minimal shaping. Formatting belongs in `utils/`.
- Use `customBasePath` for a one-off endpoint outside the base path instead of a second class.
- Re-export through `services/apis/index.ts`.
