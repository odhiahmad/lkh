import {useForm} from "react-hook-form";
import React from 'react'
// import {TambahUser} from './ApiUser'

export default ({post,handleSubmitForm,handleChange}) => {
  const {register, handleSubmit, errors} = useForm({
      mode: 'onChange',
      reValidateMode: 'onChange',
      validateCriteriaMode: "firstError",
      submitFocusError: true,
      nativeValidation: false, // Note: version 3 only
    }
  );
  return (
    <div>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="form-group-sm">
          <label>Nama Depan</label>
          <input
            onChange={handleChange}
            defaultValue={post.first_name}
            className={errors.firstName ? "form-control is-invalid" : "form-control is-valid"}
                 placeholder="Nama Depan" name="first_name" ref={register({
            required:true,
          })}/>
        </div>
        <div className="form-group-sm">
          <label>Nama Belakang</label>
          <input
            onChange={handleChange}
            defaultValue={post.last_name}
            className={errors.lastName ? "form-control is-invalid" : "form-control is-valid"}
                 placeholder="Nama Belakang" name="last_name" ref={register({
            required: true
          })}/>
          {errors.lastName && errors.lastName.message}
        </div>
        <div className="form-group-sm">
          <label>Email</label>
          <input
            onChange={handleChange}
            defaultValue={post.email}
            className={errors.emailForm ? "form-control is-invalid" : "form-control is-valid"}
                 placeholder="Email" name="email" ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address"
            }
          })}/>
        </div>
        <div className="form-group-sm">
          <label>Password</label>
          <input
            onChange={handleChange}
            defaultValue={post.password}
            name="password"
                 ref={register({
                   required: true,
                   minLength: 6
                 })} type="password"
                 className={errors.passwordForm ? "form-control is-invalid" : "form-control is-valid"}
                 placeholder="Password"/>
        </div>
        <div className="form-group-sm">
          <label>Minimal</label>
          <select ref={register(
            {
              required: true
            }
          )} name="role" defaultValue={post.role} onChange={handleChange} className={errors.roleForm ? "form-control is-invalid" : "form-control is-valid"}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          {errors.roleForm && errors.roleForm.message}
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop: 20}}>Submit</button>
      </form>
    </div>
  );
}

