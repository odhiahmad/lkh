import axios from 'axios';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import styled from '@react-pdf/styled-components';

const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '25%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderBottomColor: '#000',
    borderWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: '30%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol1: {
    width: '50%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },

  tableColFooter: {
    width: '35%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 500,
  },
  tableCell: {
    fontSize: 11,
    fontFamily: 'Times-Roman',
    margin: 2,
  },
  tableCellFooter: {
    fontSize: 11,
    fontFamily: 'Times-Roman',
    margin: 1,
  },
  tableCellFooter2: {
    fontSize: 11,
    fontFamily: 'Times-Bold',
    margin: 1,
  },
});

export function PdfDocument(props) {
  console.log('pdf props', props.dataProfil[0]);

  const data = props.data;
  const dataProfil = props.dataProfil[0]
  return (

    <Document>
      <Page size="A4" style={{ backgroundColor: 'white' }}>
        <View style={{
          color: 'black',
          textAlign: 'center',
          margin: 30,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}>
          <Text style={{
            fontSize: 16,
            fontFamily: 'Times-Bold',
          }}>Pemerintah Kota Padang Panjang</Text>
          <Text style={{
            fontSize: 20,
            fontFamily: 'Times-Bold',
          }}>RUMAH SAKIT UMUM DAERAH</Text>
          <Text style={{
            fontSize: 11,
            fontFamily: 'Times-Bold',
          }}>Jl. Tabek Gadang Kel. Ganting - Gunung fax (0752) 82046
            Kode Pos 27127</Text>
          <Text style={{
            fontSize: 11,
            fontFamily: 'Times-Bold',
          }}>Website : rsud.padangpanjang.go.id - email:
            rsud.pp@padangpanjang.go.id</Text>
        </View>

        <View style={{
          color: 'black',
          textAlign: 'center',
        }}>
          <Text style={{
            textDecoration: 'underline',
            fontSize: 16,
            fontFamily: 'Times-Bold',
          }}>Surat Tugas</Text>
          <Text style={{
            fontSize: 12,
            fontFamily: 'Times-Bold',
          }}>Nomor : 090.2/ /RSUD-PP/I-2020</Text>
        </View>
        <View style={{
          color: 'black',
          textAlign: 'left',
          marginTop: 30,
          marginLeft: 90,
        }}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Yang Bertanda Tangan di bawah ini
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>:</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Nama
              </Text>
            </View>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>: Marlina Permata Sari SKM., M.KM</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                NIP
              </Text>
            </View>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>: 197402182000032003</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Pangkat/Golongan
              </Text>
            </View>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>: Pembina, IV/a</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Jabatan
              </Text>
            </View>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>: Kepala Bagian Tata Usaha RSUD Kota Padang Panjang</Text>
            </View>
          </View>
        </View>
        <View style={{
          color: 'black',
          textAlign: 'left',
          marginTop: 30,
          marginLeft: 90,
        }}>
          <Text style={{
            fontSize: 11,
            fontFamily: 'Times-Roman',
          }}>Dengan ini menugaskan kepada</Text>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Nama
              </Text>
            </View>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>: {dataProfil.first_name +' '+dataProfil.last_name}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                NIP
              </Text>
            </View>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>: -</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Jabatan
              </Text>
            </View>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>: {dataProfil.jabatan}</Text>
            </View>
          </View>
        </View>
        <View style={{
          color: 'black',
          textAlign: 'left',
          marginTop: 30,
          marginLeft: 90,
        }}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Untuk
              </Text>
            </View>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>: {data.detail_tugas}</Text>
            </View>
          </View>
        </View>
        <View style={{
          color: 'black',
          textAlign: 'left',
          marginTop:30,
          marginLeft: 90,
          marginRight: 90,
        }}>
          <Text style={{
            fontSize: 11,
            fontFamily: 'Times-Roman',
          }}>Demikian Surat Tugas ini diberikan untuk dapat dipergunakan
            sebagaimana mestinya</Text>
        </View>
        <View style={{
          color: 'black',
          textAlign: 'left',
          marginTop: 30,
        }}>
          <View style={styles.tableRow}>
            <View style={styles.tableColFooter}>
              <Text style={styles.tableCell}> </Text>
            </View>
            <View style={styles.tableColFooter}>
              <Text style={styles.tableCell}> </Text>
            </View>
            <View style={styles.tableColFooter}>
              <Text style={styles.tableCellFooter}>Ditetapkan di : Padang Panjang </Text>
              <Text style={styles.tableCellFooter}>Pada tanggal : Padang Panjang </Text>
              <Text style={styles.tableCellFooter}>Kepala Bagian Tata Usaha RSUD </Text>
              <Text style={styles.tableCellFooter}>Kota Padang Panjang </Text>

            </View>
          </View>
        </View>
        <View style={{
          color: 'black',
          textAlign: 'left',
          marginTop: 60,
        }}>
          <View style={styles.tableRow}>
            <View style={styles.tableColFooter}>
              <Text style={styles.tableCell}> </Text>
            </View>
            <View style={styles.tableColFooter}>
              <Text style={styles.tableCell}> </Text>
            </View>
            <View style={styles.tableColFooter}>
              <Text style={styles.tableCellFooter2}>Marlina Permata Sari SKM., M.KM</Text>
              <Text style={styles.tableCellFooter}>NIP 197402182000032003</Text>

            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}


export const TambahSuratTugas = newSuratTugas => {

  return axios
    .post('tambah/tambahSuratTugas', {
        id_user: localStorage.idUser,
        tanggal_tugas: newSuratTugas.tanggal_tugas,
        id_user_penyetuju: newSuratTugas.id_user_penyetuju,
        detail_tugas: newSuratTugas.detail_tugas,
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.usertoken}`,
        },
      }, {
        timeOut: 1000,
      },
    )
    .then(response => {
      console.log(newSuratTugas.tanggal_tugas);
      return response.data;
    })
    .catch(err => {
      return err.code;
    });
};

export const EditSuratTugas = newSuratTugas => {

  return axios
    .post('edit/editSuratTugas', {
        id: newSuratTugas.id,
        id_user: localStorage.idUser,
        detail_tugas: newSuratTugas.detail_tugas,
        id_user_penyetuju: newSuratTugas.id_user_penyetuju,
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.usertoken}`,
        },
      }, {
        timeOut: 1000,
      },
    )
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.code;
    });
};

export const HapusSuratTugas = newSuratTugas => {
  return axios
    .post('hapus/hapusSuratTugas', {
        id: newSuratTugas.id,
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.usertoken}`,
        },
      }, {
        timeOut: 1000,
      },
    )
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.code;
    });
};

export const getAllSuratTugas = postData => {

  return axios.post('list/suratTugasShowAllByUser', {
      id_user: localStorage.idUser,
      page: postData.page,
      limit: postData.limit,
      cari: postData.searchData,
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${postData.token}`,
      },
    },
  )
    .then(res => {
      return res.data;
    });
};
export const getAllUser = () => {

  return axios.get('list/getAllUser', {}, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`,
      },
    },
  )
    .then(res => {
      return res.data;
    });
};

