/* + */ export const AUTH_AUTH = '/api/v1/auth/authenticate';
/* + */ export const AUTH_ACTIVATE = '/api/v1/auth/activate?activationCode=';
/* + */ export const AUTH_REGISTER = '/api/v1/auth/register';
/* + */ export const AUTH_LOGOUT = '/api/v1/auth/logout';

/* + */ export const TWEETS_GET = '/api/v1/tweet';
/* + */ export const TWEETS_POST = '/api/v1/tweet';
/* + */ export const TWEETS_DELETE = '/api/v1/tweet';

/* + */ export const TIMELINES_TWEETS_GET_USER = '/api/v1/timeline/user';
/* + */ export const TIMELINES_TWEETS_GET_USER_BY_ID = '/api/v1/timeline/user';
/* + */ export const TIMELINES_TWEETS_GET_USER_REPLIES = '/api/v1/timeline/user-replies';
/* + */ export const TIMELINES_TWEETS_GET_USER_HOME = '/api/v1/timeline/home';

/* + */ export const LIKES_POST = '/api/v1/like'; /* req: /{tweetId}; res: code: 200 */
/* + */ export const LIKES_DELETE = '/api/v1/like'; /* req: /{tweetId}; res: code: 200 */

/* + */ export const RETWEET_POST = '/api/v1/retweet';
/* + */ export const RETWEET_DELETE = '/api/v1/retweet';
        export const RETWEET_LIST_GET = '/api/v1/retweets'; /* RETWEET_LIST_GET еще не внедрено, TODO изменения от бэкенда */
/* + */ export const RETWEET_GET = '/api/v1/retweet';

/* + */ export const REPLIES_GET = '/api/v1/reply'; /* req: /{parentTweetId}; res: code: 200, [{repliesData}] */
/* + */ export const REPLIES_POST = '/api/v1/reply'; /* req: default tweet data ; res: code: 200, [{repliesData}] */
/* + */ export const REPLIES_DELETE = '/api/v1/reply';

/* + */ export const PROFILE_AVATAR_GET = '/api/v1/profiles/images/avatar';
/* + */ export const PROFILE_AVATAR_POST = '/api/v1/profiles/images/avatar';
export const PROFILE_AVATAR_DELETE = '/api/v1/profiles/images/avatar';

/* + */ export const PROFILE_BANNER_GET = '/api/v1/profiles/images/banner';
/* + */ export const PROFILE_BANNER_POST = '/api/v1/profiles/images/banner';
export const PROFILE_BANNER_DELETE = '/api/v1/profiles/images/banner';

/* + */ export const PROFILE_ME_BIO = '/api/v1/profiles/me'; /* ADDED req: /{id}; res: code: 200, {profileData} */
/* + */ export const PROFILE_GET = '/api/v1/profiles' /* req: pathId; res: code: 200, {profileData}  */
/* + */ export const PROFILE_POST = '/api/v1/profiles'; /* req: /{email, username, jointDate}; res: code: 200, string */
/* + */ export const PROFILE_PATCH = '/api/v1/profiles'; /* req: /{id}; res: code: 200, {profileData} */
/* + */ export const PATH_ID_BY_EMAIL_GET = '/api/v1/profiles/id'; /* req: /{email}; res: code: 200, pathId */
/* + */ export const PROFILE_USERS_LIST_GET = '/api/v1/profiles'; /* req: username, pageble; res: code: 200, {usernames userlist} */

export const FOLLOW_POST = '/api/v1/follows/' //req: {followeeId} res: true | false
export const FOLLOW_DELETE = '/api/v1/follows/' //req: {followeeId} res: true | false