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
};

export type SiteEntity = {
  __typename?: 'SiteEntity';
  id: Scalars['ID'];
  domain: Scalars['String'];
  holder: Scalars['String'];
};

export type UserEntity = {
  __typename?: 'UserEntity';
  id: Scalars['ID'];
  username: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
};

export type Hoster = {
  __typename?: 'Hoster';
  id: Scalars['ID'];
  name: Scalars['String'];
  url: Scalars['String'];
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

export type Query = {
  __typename?: 'Query';
  sites: Array<SiteEntity>;
  getSitesByHolder: Array<SiteEntity>;
  users: Array<UserEntity>;
  findUserByName: UserEntity;
  hosters: Array<Hoster>;
  hoster: Hoster;
  me: UserResponse;
};


export type QueryGetSitesByHolderArgs = {
  holderId: Scalars['String'];
};


export type QueryFindUserByNameArgs = {
  name: Scalars['String'];
};


export type QueryHosterArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSite: SiteEntity;
  createHoster: Hoster;
  removeHoster: Hoster;
  registration: TokenResponse;
  login: TokenResponse;
};


export type MutationCreateSiteArgs = {
  inputs: SiteInput;
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
  input: UserInput;
};

export type SiteInput = {
  domain: Scalars['String'];
  holder: Scalars['String'];
};

export type HosterInput = {
  name: Scalars['String'];
  url: Scalars['String'];
};

export type UserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

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

export type LoginMutationVariables = Exact<{
  input: UserInput;
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

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type SitesQueryVariables = Exact<{ [key: string]: never; }>;


export type SitesQuery = (
  { __typename?: 'Query' }
  & { sites: Array<(
    { __typename?: 'SiteEntity' }
    & Pick<SiteEntity, 'id' | 'domain' | 'holder'>
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'UserEntity' }
    & Pick<UserEntity, 'id' | 'username' | 'password' | 'role'>
  )> }
);

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
export const LoginDocument = gql`
    mutation Login($input: UserInput!) {
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
export const SitesDocument = gql`
    query Sites {
  sites {
    id
    domain
    holder
  }
}
    `;

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