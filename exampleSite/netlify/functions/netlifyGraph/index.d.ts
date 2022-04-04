// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string;
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string;
}

export type WebhookEvent = {
  body: string;
  headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
  "path": Array<string | number>,
  "message": string,
  "extensions": Record<string, unknown>
};



export type GetGithubCommitCountsByRepoInput = {
  /**
 * Only contributions made at this time or later will be counted. If omitted, defaults to a year ago.
 */
 "from"?: unknown;  
 /**
 * Only contributions made before and up to (including) this time will be counted. If omitted, defaults to the current time or one year from the provided from argument.
 */
 "to"?: unknown
};

export type GetGithubCommitCountsByRepo = {
  /**
  * Any data from the function will be returned here
  */
data: {
  me: {
  github: {
  /**
  * The collection of contributions this user has made to different repositories.
  */
contributionsCollection: {
  /**
  * Commit contributions made by the user, grouped by repository.
  */
commitContributionsByRepository: Array<{
  /**
  * The commit contributions, each representing a day.
  */
contributions: {
  /**
  * A list of edges.
  */
edges: Array<{
  /**
  * The item at the end of the edge.
  */
node: {
  /**
  * How many commits were made on this day to this repository by the user.
  */
commitCount: number;
  /**
  * Whether this contribution is associated with a record you do not have access to. For
example, your own 'first issue' contribution may have been made on a repository you can no
longer access.

  */
isRestricted: boolean;
  /**
  * When this contribution was made.
  */
occurredAt: unknown;
  /**
  * The repository the user made a commit in.
  */
repository: {
  /**
  * The HTTP path for this repository
  */
resourcePath: string;
};
};
  /**
  * A cursor for use in pagination.
  */
cursor: string;
}>;
};
}>;
};
};
};
};
  /**
  * Any errors from the function will be returned here
  */
errors: Array<GraphQLError>;
};

/**
 * An example query to start with.
 */
export function fetchGetGithubCommitCountsByRepo(
  variables: GetGithubCommitCountsByRepoInput,
  options?: NetlifyGraphFunctionOptions
): Promise<GetGithubCommitCountsByRepo>;
