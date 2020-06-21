import React, {Component} from 'react';
/**
 * Get User from Local Storage
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
 * @return {obeject} UserData
 * {
 *  username: string,
 *  role: string
 * }
 */
const GetUser = () => {
  const fromStorage = JSON.parse(localStorage.getItem("role"));
  return !!fromStorage ? fromStorage : {user: '', role: 'guest'};
}

/**
 * Checking role its valid
 * @param {object}
 * {
 *   role: string,
 *   allowedRoles: array,
 * }
 * @return {boolean}
 */
const isValidRole = ({role, allowedRoles}) => allowedRoles.includes(role);

/**
 * Authorization (High Order Component Concept)
 * @param {array} allowedRoles
 * @param {object} WrappedComponent
 * @return {object} React.Component
 *
 * Example:
 *    # set AllowedRoles with Component
 *    const AuthComponent = Authorization(['user','admin','superman'])(MyComponent)
 *
 *    # set AllowedRoles without Component
 *    const AuthHOC = Authorization(['user','admin','superman'])
 *    const MyComponent = () => <h1> Hello </h1>
 *    const AuthComponent = AuthHOC(MyComponent);
 *
 *    ReactDOM.render( <AuthComponent/>, target);
 */
const Authorization = allowedRoles => wrappedComponent => class withAuth extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: GetUser(), // state user assign value from GetUser function
    }
  }

  render(){
    const {role} = this.state.user;
    return isValidRole({role: role, allowedRoles: allowedRoles}) ?
      <wrappedComponent/>:
      <h1> Hai! kamu tidak boleh masuk dihalaman ini, rasakan chidorii ini - regards {allowedRoles.join(', ')}</h1>
  }
}


/**
 * define administrator role
 * use: Admin(<Component/>)
 */
export const Admin = Authorization(['admin']);

/**
 * define user role
 * use: User(<Component/>)
 */
export const User = Authorization(['admin','user']);

export default {
  Admin,
  User,
}
