import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type SiteEntity = {
  __typename?: 'SiteEntity';
  id: Scalars['ID'];
  domainProviderId: Scalars['String'];
  domainProviderName: Scalars['String'];
  hostProviderId: Scalars['String'];
  hostProviderName: Scalars['String'];
  campaignId: Scalars['String'];
  campaignName: Scalars['String'];
  domain: Scalars['String'];
  dedicatedIp: Scalars['String'];
  yandexId: Scalars['String'];
  holderId: Scalars['String'];
  holderName: Scalars['String'];
  createdAt: Scalars['DateTime'];
};


export type UserEntity = {
  __typename?: 'UserEntity';
  id: Scalars['ID'];
  username: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  yandexLogin: Scalars['String'];
  telegram: Scalars['String'];
};

export type AuthData = {
  __typename?: 'AuthData';
  link: Scalars['String'];
  login: Scalars['String'];
  password: Scalars['String'];
};

export type HosterEntity = {
  __typename?: 'HosterEntity';
  id: Scalars['ID'];
  name: Scalars['String'];
  siteLink: Scalars['String'];
  authData: AuthData;
  sitesCount: Scalars['Int'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<Scalars['String']>>;
  user?: Maybe<UserEntity>;
};

export type TokenResponse = {
  __typename?: 'TokenResponse';
  error?: Maybe<Array<Scalars['String']>>;
  token?: Maybe<Scalars['String']>;
};

export type Campaign = {
  __typename?: 'Campaign';
  id: Scalars['ID'];
  langue: Scalars['String'];
  campaignName: Scalars['String'];
  fullCampaignName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  sites: Array<SiteEntity>;
  getSitesByHolder: Array<SiteEntity>;
  getSiteById: SiteEntity;
  users: Array<UserEntity>;
  findUserByName: UserEntity;
  hosters: Array<HosterEntity>;
  hoster: HosterEntity;
  me: UserResponse;
  campaigns: Array<Campaign>;
  campaign: Campaign;
};


export type QueryGetSitesByHolderArgs = {
  holderId: Scalars['String'];
};


export type QueryGetSiteByIdArgs = {
  id: Scalars['String'];
};


export type QueryFindUserByNameArgs = {
  name: Scalars['String'];
};


export type QueryHosterArgs = {
  id: Scalars['String'];
};


export type QueryCampaignArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSite: SiteEntity;
  updateSite: SiteEntity;
  changeSiteHolder: SiteEntity;
  createHoster: HosterEntity;
  removeHoster: HosterEntity;
  registration: TokenResponse;
  login: TokenResponse;
  createCampaign: Campaign;
};


export type MutationCreateSiteArgs = {
  inputs: SiteInput;
};


export type MutationUpdateSiteArgs = {
  inputs: SiteInput;
  id: Scalars['String'];
};


export type MutationChangeSiteHolderArgs = {
  newHolderName: Scalars['String'];
  newHolderId: Scalars['String'];
  siteId: Scalars['String'];
};


export type MutationCreateHosterArgs = {
  createHosterInput: HosterInput;
};


export type MutationRemoveHosterArgs = {
  id: Scalars['Int'];
};


export type MutationRegistrationArgs = {
  input: UserInput;
};


export type MutationLoginArgs = {
  input: UserLogin;
};


export type MutationCreateCampaignArgs = {
  campaignInput: CampaignInput;
};

export type SiteInput = {
  domainProviderId: Scalars['String'];
  domainProviderName: Scalars['String'];
  hostProviderId: Scalars['String'];
  hostProviderName: Scalars['String'];
  campaignId: Scalars['String'];
  campaignName: Scalars['String'];
  domain: Scalars['String'];
  dedicatedIp: Scalars['String'];
  yandexId: Scalars['String'];
  holderId: Scalars['String'];
  holderName: Scalars['String'];
};

export type HosterInput = {
  name: Scalars['String'];
  siteLink: Scalars['String'];
  authData: AuthDataInput;
};

export type AuthDataInput = {
  link: Scalars['String'];
  login: Scalars['String'];
  password: Scalars['String'];
};

export type UserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  yandexLogin: Scalars['String'];
  telegram: Scalars['String'];
};

export type UserLogin = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type CampaignInput = {
  langue: Scalars['String'];
  campaignName: Scalars['String'];
};

export type RegularAuthDataFragment = (
  { __typename?: 'AuthData' }
  & Pick<AuthData, 'link' | 'login' | 'password'>
);

export type RegularCampaignFragment = (
  { __typename?: 'Campaign' }
  & Pick<Campaign, 'id' | 'langue' | 'campaignName' | 'fullCampaignName'>
);

export type RegularSiteEntityFragment = (
  { __typename?: 'SiteEntity' }
  & Pick<SiteEntity, 'id' | 'domainProviderId' | 'domainProviderName' | 'hostProviderId' | 'hostProviderName' | 'campaignId' | 'campaignName' | 'domain' | 'dedicatedIp' | 'yandexId' | 'holderId' | 'holderName' | 'createdAt'>
);

export type RegularTokenResponseFragment = (
  { __typename?: 'TokenResponse' }
  & Pick<TokenResponse, 'error' | 'token'>
);

export type RegularUserFragment = (
  { __typename?: 'UserEntity' }
  & Pick<UserEntity, 'id' | 'username' | 'role'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & Pick<UserResponse, 'errors'>
  & { user?: Maybe<(
    { __typename?: 'UserEntity' }
    & RegularUserFragment
  )> }
);

export type ChangeSiteHolderMutationVariables = Exact<{
  siteId: Scalars['String'];
  newHolderId: Scalars['String'];
  newHolderName: Scalars['String'];
}>;


export type ChangeSiteHolderMutation = (
  { __typename?: 'Mutation' }
  & { changeSiteHolder: (
    { __typename?: 'SiteEntity' }
    & RegularSiteEntityFragment
  ) }
);

export type CreateCampaignMutationVariables = Exact<{
  input: CampaignInput;
}>;


export type CreateCampaignMutation = (
  { __typename?: 'Mutation' }
  & { createCampaign: (
    { __typename?: 'Campaign' }
    & RegularCampaignFragment
  ) }
);

export type CreateHosterMutationVariables = Exact<{
  createHosterInput: HosterInput;
}>;


export type CreateHosterMutation = (
  { __typename?: 'Mutation' }
  & { createHoster: (
    { __typename?: 'HosterEntity' }
    & Pick<HosterEntity, 'id' | 'name'>
    & { authData: (
      { __typename?: 'AuthData' }
      & Pick<AuthData, 'link' | 'login' | 'password'>
    ) }
  ) }
);

export type CreateSiteMutationVariables = Exact<{
  inputs: SiteInput;
}>;


export type CreateSiteMutation = (
  { __typename?: 'Mutation' }
  & { createSite: (
    { __typename?: 'SiteEntity' }
    & RegularSiteEntityFragment
  ) }
);

export type LoginMutationVariables = Exact<{
  input: UserLogin;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'TokenResponse' }
    & RegularTokenResponseFragment
  ) }
);

export type RegisterMutationVariables = Exact<{
  input: UserInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { registration: (
    { __typename?: 'TokenResponse' }
    & RegularTokenResponseFragment
  ) }
);

export type UpdateSiteMutationVariables = Exact<{
  id: Scalars['String'];
  inputs: SiteInput;
}>;


export type UpdateSiteMutation = (
  { __typename?: 'Mutation' }
  & { updateSite: (
    { __typename?: 'SiteEntity' }
    & RegularSiteEntityFragment
  ) }
);

export type CampaignsQueryVariables = Exact<{ [key: string]: never; }>;


export type CampaignsQuery = (
  { __typename?: 'Query' }
  & { campaigns: Array<(
    { __typename?: 'Campaign' }
    & RegularCampaignFragment
  )> }
);

export type HostersQueryVariables = Exact<{ [key: string]: never; }>;


export type HostersQuery = (
  { __typename?: 'Query' }
  & { hosters: Array<(
    { __typename?: 'HosterEntity' }
    & Pick<HosterEntity, 'id' | 'name' | 'siteLink' | 'sitesCount'>
    & { authData: (
      { __typename?: 'AuthData' }
      & RegularAuthDataFragment
    ) }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type SiteQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SiteQuery = (
  { __typename?: 'Query' }
  & { getSiteById: (
    { __typename?: 'SiteEntity' }
    & RegularSiteEntityFragment
  ) }
);

export type SitesQueryVariables = Exact<{ [key: string]: never; }>;


export type SitesQuery = (
  { __typename?: 'Query' }
  & { sites: Array<(
    { __typename?: 'SiteEntity' }
    & RegularSiteEntityFragment
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'UserEntity' }
    & Pick<UserEntity, 'id' | 'username' | 'password' | 'role' | 'yandexLogin' | 'telegram'>
  )> }
);

export const RegularAuthDataFragmentDoc = gql`
    fragment RegularAuthData on AuthData {
  link
  login
  password
}
    `;
export const RegularCampaignFragmentDoc = gql`
    fragment RegularCampaign on Campaign {
  id
  langue
  campaignName
  fullCampaignName
}
    `;
export const RegularSiteEntityFragmentDoc = gql`
    fragment RegularSiteEntity on SiteEntity {
  id
  domainProviderId
  domainProviderName
  hostProviderId
  hostProviderName
  campaignId
  campaignName
  domain
  dedicatedIp
  yandexId
  holderId
  holderName
  createdAt
}
    `;
export const RegularTokenResponseFragmentDoc = gql`
    fragment RegularTokenResponse on TokenResponse {
  error
  token
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on UserEntity {
  id
  username
  role
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors
  user {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export const ChangeSiteHolderDocument = gql`
    mutation ChangeSiteHolder($siteId: String!, $newHolderId: String!, $newHolderName: String!) {
  changeSiteHolder(
    siteId: $siteId
    newHolderId: $newHolderId
    newHolderName: $newHolderName
  ) {
    ...RegularSiteEntity
  }
}
    ${RegularSiteEntityFragmentDoc}`;
export type ChangeSiteHolderMutationFn = Apollo.MutationFunction<ChangeSiteHolderMutation, ChangeSiteHolderMutationVariables>;

/**
 * __useChangeSiteHolderMutation__
 *
 * To run a mutation, you first call `useChangeSiteHolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeSiteHolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeSiteHolderMutation, { data, loading, error }] = useChangeSiteHolderMutation({
 *   variables: {
 *      siteId: // value for 'siteId'
 *      newHolderId: // value for 'newHolderId'
 *      newHolderName: // value for 'newHolderName'
 *   },
 * });
 */
export function useChangeSiteHolderMutation(baseOptions?: Apollo.MutationHookOptions<ChangeSiteHolderMutation, ChangeSiteHolderMutationVariables>) {
        return Apollo.useMutation<ChangeSiteHolderMutation, ChangeSiteHolderMutationVariables>(ChangeSiteHolderDocument, baseOptions);
      }
export type ChangeSiteHolderMutationHookResult = ReturnType<typeof useChangeSiteHolderMutation>;
export type ChangeSiteHolderMutationResult = Apollo.MutationResult<ChangeSiteHolderMutation>;
export type ChangeSiteHolderMutationOptions = Apollo.BaseMutationOptions<ChangeSiteHolderMutation, ChangeSiteHolderMutationVariables>;
export const CreateCampaignDocument = gql`
    mutation CreateCampaign($input: CampaignInput!) {
  createCampaign(campaignInput: $input) {
    ...RegularCampaign
  }
}
    ${RegularCampaignFragmentDoc}`;
export type CreateCampaignMutationFn = Apollo.MutationFunction<CreateCampaignMutation, CreateCampaignMutationVariables>;

/**
 * __useCreateCampaignMutation__
 *
 * To run a mutation, you first call `useCreateCampaignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCampaignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCampaignMutation, { data, loading, error }] = useCreateCampaignMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCampaignMutation(baseOptions?: Apollo.MutationHookOptions<CreateCampaignMutation, CreateCampaignMutationVariables>) {
        return Apollo.useMutation<CreateCampaignMutation, CreateCampaignMutationVariables>(CreateCampaignDocument, baseOptions);
      }
export type CreateCampaignMutationHookResult = ReturnType<typeof useCreateCampaignMutation>;
export type CreateCampaignMutationResult = Apollo.MutationResult<CreateCampaignMutation>;
export type CreateCampaignMutationOptions = Apollo.BaseMutationOptions<CreateCampaignMutation, CreateCampaignMutationVariables>;
export const CreateHosterDocument = gql`
    mutation CreateHoster($createHosterInput: HosterInput!) {
  createHoster(createHosterInput: $createHosterInput) {
    id
    name
    authData {
      link
      login
      password
    }
  }
}
    `;
export type CreateHosterMutationFn = Apollo.MutationFunction<CreateHosterMutation, CreateHosterMutationVariables>;

/**
 * __useCreateHosterMutation__
 *
 * To run a mutation, you first call `useCreateHosterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHosterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHosterMutation, { data, loading, error }] = useCreateHosterMutation({
 *   variables: {
 *      createHosterInput: // value for 'createHosterInput'
 *   },
 * });
 */
export function useCreateHosterMutation(baseOptions?: Apollo.MutationHookOptions<CreateHosterMutation, CreateHosterMutationVariables>) {
        return Apollo.useMutation<CreateHosterMutation, CreateHosterMutationVariables>(CreateHosterDocument, baseOptions);
      }
export type CreateHosterMutationHookResult = ReturnType<typeof useCreateHosterMutation>;
export type CreateHosterMutationResult = Apollo.MutationResult<CreateHosterMutation>;
export type CreateHosterMutationOptions = Apollo.BaseMutationOptions<CreateHosterMutation, CreateHosterMutationVariables>;
export const CreateSiteDocument = gql`
    mutation CreateSite($inputs: SiteInput!) {
  createSite(inputs: $inputs) {
    ...RegularSiteEntity
  }
}
    ${RegularSiteEntityFragmentDoc}`;
export type CreateSiteMutationFn = Apollo.MutationFunction<CreateSiteMutation, CreateSiteMutationVariables>;

/**
 * __useCreateSiteMutation__
 *
 * To run a mutation, you first call `useCreateSiteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSiteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSiteMutation, { data, loading, error }] = useCreateSiteMutation({
 *   variables: {
 *      inputs: // value for 'inputs'
 *   },
 * });
 */
export function useCreateSiteMutation(baseOptions?: Apollo.MutationHookOptions<CreateSiteMutation, CreateSiteMutationVariables>) {
        return Apollo.useMutation<CreateSiteMutation, CreateSiteMutationVariables>(CreateSiteDocument, baseOptions);
      }
export type CreateSiteMutationHookResult = ReturnType<typeof useCreateSiteMutation>;
export type CreateSiteMutationResult = Apollo.MutationResult<CreateSiteMutation>;
export type CreateSiteMutationOptions = Apollo.BaseMutationOptions<CreateSiteMutation, CreateSiteMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: UserLogin!) {
  login(input: $input) {
    ...RegularTokenResponse
  }
}
    ${RegularTokenResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: UserInput!) {
  registration(input: $input) {
    ...RegularTokenResponse
  }
}
    ${RegularTokenResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateSiteDocument = gql`
    mutation UpdateSite($id: String!, $inputs: SiteInput!) {
  updateSite(id: $id, inputs: $inputs) {
    ...RegularSiteEntity
  }
}
    ${RegularSiteEntityFragmentDoc}`;
export type UpdateSiteMutationFn = Apollo.MutationFunction<UpdateSiteMutation, UpdateSiteMutationVariables>;

/**
 * __useUpdateSiteMutation__
 *
 * To run a mutation, you first call `useUpdateSiteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSiteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSiteMutation, { data, loading, error }] = useUpdateSiteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      inputs: // value for 'inputs'
 *   },
 * });
 */
export function useUpdateSiteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSiteMutation, UpdateSiteMutationVariables>) {
        return Apollo.useMutation<UpdateSiteMutation, UpdateSiteMutationVariables>(UpdateSiteDocument, baseOptions);
      }
export type UpdateSiteMutationHookResult = ReturnType<typeof useUpdateSiteMutation>;
export type UpdateSiteMutationResult = Apollo.MutationResult<UpdateSiteMutation>;
export type UpdateSiteMutationOptions = Apollo.BaseMutationOptions<UpdateSiteMutation, UpdateSiteMutationVariables>;
export const CampaignsDocument = gql`
    query Campaigns {
  campaigns {
    ...RegularCampaign
  }
}
    ${RegularCampaignFragmentDoc}`;

/**
 * __useCampaignsQuery__
 *
 * To run a query within a React component, call `useCampaignsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCampaignsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCampaignsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCampaignsQuery(baseOptions?: Apollo.QueryHookOptions<CampaignsQuery, CampaignsQueryVariables>) {
        return Apollo.useQuery<CampaignsQuery, CampaignsQueryVariables>(CampaignsDocument, baseOptions);
      }
export function useCampaignsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CampaignsQuery, CampaignsQueryVariables>) {
          return Apollo.useLazyQuery<CampaignsQuery, CampaignsQueryVariables>(CampaignsDocument, baseOptions);
        }
export type CampaignsQueryHookResult = ReturnType<typeof useCampaignsQuery>;
export type CampaignsLazyQueryHookResult = ReturnType<typeof useCampaignsLazyQuery>;
export type CampaignsQueryResult = Apollo.QueryResult<CampaignsQuery, CampaignsQueryVariables>;
export const HostersDocument = gql`
    query Hosters {
  hosters {
    id
    name
    siteLink
    sitesCount
    authData {
      ...RegularAuthData
    }
  }
}
    ${RegularAuthDataFragmentDoc}`;

/**
 * __useHostersQuery__
 *
 * To run a query within a React component, call `useHostersQuery` and pass it any options that fit your needs.
 * When your component renders, `useHostersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHostersQuery({
 *   variables: {
 *   },
 * });
 */
export function useHostersQuery(baseOptions?: Apollo.QueryHookOptions<HostersQuery, HostersQueryVariables>) {
        return Apollo.useQuery<HostersQuery, HostersQueryVariables>(HostersDocument, baseOptions);
      }
export function useHostersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HostersQuery, HostersQueryVariables>) {
          return Apollo.useLazyQuery<HostersQuery, HostersQueryVariables>(HostersDocument, baseOptions);
        }
export type HostersQueryHookResult = ReturnType<typeof useHostersQuery>;
export type HostersLazyQueryHookResult = ReturnType<typeof useHostersLazyQuery>;
export type HostersQueryResult = Apollo.QueryResult<HostersQuery, HostersQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SiteDocument = gql`
    query Site($id: String!) {
  getSiteById(id: $id) {
    ...RegularSiteEntity
  }
}
    ${RegularSiteEntityFragmentDoc}`;

/**
 * __useSiteQuery__
 *
 * To run a query within a React component, call `useSiteQuery` and pass it any options that fit your needs.
 * When your component renders, `useSiteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSiteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSiteQuery(baseOptions: Apollo.QueryHookOptions<SiteQuery, SiteQueryVariables>) {
        return Apollo.useQuery<SiteQuery, SiteQueryVariables>(SiteDocument, baseOptions);
      }
export function useSiteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SiteQuery, SiteQueryVariables>) {
          return Apollo.useLazyQuery<SiteQuery, SiteQueryVariables>(SiteDocument, baseOptions);
        }
export type SiteQueryHookResult = ReturnType<typeof useSiteQuery>;
export type SiteLazyQueryHookResult = ReturnType<typeof useSiteLazyQuery>;
export type SiteQueryResult = Apollo.QueryResult<SiteQuery, SiteQueryVariables>;
export const SitesDocument = gql`
    query Sites {
  sites {
    ...RegularSiteEntity
  }
}
    ${RegularSiteEntityFragmentDoc}`;

/**
 * __useSitesQuery__
 *
 * To run a query within a React component, call `useSitesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSitesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSitesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSitesQuery(baseOptions?: Apollo.QueryHookOptions<SitesQuery, SitesQueryVariables>) {
        return Apollo.useQuery<SitesQuery, SitesQueryVariables>(SitesDocument, baseOptions);
      }
export function useSitesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SitesQuery, SitesQueryVariables>) {
          return Apollo.useLazyQuery<SitesQuery, SitesQueryVariables>(SitesDocument, baseOptions);
        }
export type SitesQueryHookResult = ReturnType<typeof useSitesQuery>;
export type SitesLazyQueryHookResult = ReturnType<typeof useSitesLazyQuery>;
export type SitesQueryResult = Apollo.QueryResult<SitesQuery, SitesQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    username
    password
    role
    yandexLogin
    telegram
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;