import {useForm} from "react-hook-form";
import React from 'react'
// import {TambahUser} from './ApiUser'

export default ({post,handleSubmitForm,handleChange,loadingButton,tipeForm}) => {
  const {register, handleSubmit, errors} = useForm({
      mode: 'onChange',
      reValidateMode: 'onChange',
      validateCriteriaMode: "firstError",
      submitFocusError: true,
      nativeValidation: false, // Note: version 3 only
    }
  );

  if(tipeForm === 1){
    return (
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <button
            type="submit" className="btn btn-primary btn-block" style={{marginTop: 20}}>
            {
              loadingButton === true ?
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>:''
            }
            Verifikasi
          </button>
        </form>
      </div>
    );
  }else if(tipeForm === 2){
    return (
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="form-group-sm">
            <label>Nama Depan</label>
            <input
              onChange={handleChange}
              defaultValue={post.first_name}
              className={errors.first_name ? "form-control is-invalid" : "form-control is-valid"}
              placeholder="Nama Depan" name="first_name" ref={register({
              required:true,
            })}/>
          </div>
          <div className="form-group-sm">
            <label>Nama Belakang</label>
            <input
              onChange={handleChange}
              defaultValue={post.last_name}
              className={errors.last_name ? "form-control is-invalid" : "form-control is-valid"}
              placeholder="Nama Belakang" name="last_name" ref={register({
              required: true
            })}/>
            {errors.lastName && errors.lastName.message}
          </div>
          <div className="form-group-sm">
            <label>Role</label>
            <select ref={register(
              {
                required: true
              }
            )} name="role" defaultValue={post.role} onChange={handleChange} className={errors.role ? "form-control is-invalid" : "form-control is-valid"}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {errors.roleForm && errors.roleForm.message}
          </div>
          <button
            type="submit" className="btn btn-primary btn-block" style={{marginTop: 20}}>
            {
              loadingButton === true ?
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>:''
            }
            Edit Data
          </button>
        </form>
      </div>
    );
  }else if(tipeForm === 3){
    return (
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <button
            type="submit" className="btn btn-primary btn-block" style={{marginTop: 20}}>
            {
              loadingButton === true ?
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>:''
            }
            Hapus Data
          </button>
        </form>
      </div>
    );
  }

}

