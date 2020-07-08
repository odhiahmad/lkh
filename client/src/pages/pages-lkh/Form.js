import { useForm } from 'react-hook-form/dist/react-hook-form.ie11'
import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default ({post,handleSubmitForm,handleChange,loadingButton,tipeForm,handleChangeDate}) => {

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
          <div className="form-group-sm">
            <label>Tanggal dan Jam Pekerjaan</label><br/>

            <DatePicker
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              className="form-control"
              selected={post.tanggal_pekerjaan}
              onChange={handleChangeDate}
              showTimeSelect
              dateFormat="PP"
              timeFormat="p"
            />
          </div>
          <div className="form-group-sm">
            <label>Catatan</label><br/>
            <input
              onChange={handleChange}

              defaultValue={post.detail_pekerjaan}
              className={errors.detail_pekerjaan ? "form-control is-invalid" : "form-control is-valid"}
              placeholder="Isi Catatan" name="detail_pekerjaan" ref={register({
              required: true
            })}/>
          </div>

          <button
            type="submit" className="btn btn-primary btn-block" style={{marginTop: 20}}>
            {
              loadingButton === true ?
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>:''
            }
            Submit
          </button>
        </form>
      </div>
    );
  }else if(tipeForm === 2){
    return (
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="form-group-sm">
            <label>Catatan</label><br/>
            <input
              onChange={handleChange}
              defaultValue={post.detail_pekerjaan}
              className={errors.detail_pekerjaan ? "form-control is-invalid" : "form-control is-valid"}
              placeholder="Isi Catatan" name="detail_pekerjaan" ref={register({
              required: true
            })}/>
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

