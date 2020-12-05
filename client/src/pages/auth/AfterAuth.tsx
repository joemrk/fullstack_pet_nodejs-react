

import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useMeQuery } from '../../generated/graphql';


const AfterAuth: React.FC = () => {
  const history = useHistory()
  
  const ctx = useContext(AuthContext)
  if(ctx.username) history.push("/sites")

  const { data, loading, error } = useMeQuery({ fetchPolicy: "cache-and-network" })
  
  if (!loading && !error) {
    ctx.loginContext(data?.me.user?.role as string, data?.me.user?.username as string)
  }

  return <>AfterAuth</>
}
export default AfterAuth