import { useForm } from 'react-hook-form/dist/react-hook-form.ie11'
import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {PDFDownloadLink} from "@react-pdf/renderer";
import {PdfDocument} from "./ApiSuratTugas";

export default ({post, handleSubmitForm, handleChange, loadingButton, tipeForm, handleChangeDate, dataUser}) => {

  const {register, handleSubmit, errors} = useForm({
      mode: 'onChange',
      reValidateMode: 'onChange',
      validateCriteriaMode: "firstError",
      submitFocusError: true,
      nativeValidation: false, // Note: version 3 only
    }
  );

  if (tipeForm === 1) {
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
              selected={post.tanggal_tugas}
              onChange={handleChangeDate}
              dateFormat="PP"
            />
          </div>
          {/*<div className="form-group-sm">*/}
          {/*  <label>Tanggal dan Jam Pekerjaan</label><br/>*/}
          {/*  <Select options = {dataUser} />*/}
          {/*</div>*/}
          <div className="form-group-sm">
            <label>Detail Tugas</label><br/>
            <input
              onChange={handleChange}

              defaultValue={post.detail_tugas}
              className={errors.detail_tugas ? "form-control is-invalid" : "form-control is-valid"}
              placeholder="Isi Detail Tugas" name="detail_tugas" ref={register({
              required: true
            })}/>
          </div>

          <button
            type="submit" className="btn btn-primary btn-block" style={{marginTop: 20}}>
            {
              loadingButton === true ?
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ''
            }
            Submit
          </button>
        </form>
      </div>
    );
  } else if (tipeForm === 2) {
    return (
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="form-group-sm">
            <label>Detail Tugas</label><br/>
            <input
              onChange={handleChange}

              defaultValue={post.detail_tugas}
              className={errors.detail_tugas ? "form-control is-invalid" : "form-control is-valid"}
              placeholder="Isi Detail Tugas" name="detail_tugas" ref={register({
              required: true
            })}/>
          </div>
          <button
            type="submit" className="btn btn-primary btn-block" style={{marginTop: 20}}>
            {
              loadingButton === true ?
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ''
            }
            Edit Data
          </button>
        </form>
      </div>
    );
  } else if (tipeForm === 3) {
    return (
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <button
            type="submit" className="btn btn-primary btn-block" style={{marginTop: 20}}>
            {
              loadingButton === true ?
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ''
            }
            Hapus Data
          </button>
        </form>
      </div>
    );
  } else if (tipeForm === 4) {
    return (
      <PDFDownloadLink
        document={<PdfDocument data={dataUser}/>}
        fileName="movielist.pdf"
        className="btn btn-success btn-xs"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a"
        }}
      >
        {({blob, url, loading, error}) =>
          loading ? "Loading document..." : "Download Pdf"
        }
      </PDFDownloadLink>
    )
  }

}

