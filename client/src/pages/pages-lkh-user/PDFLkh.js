import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import React, { useState, useEffect } from 'react';
import styled from '@react-pdf/styled-components';
import axios from 'axios';

const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
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
    borderColor: 'black',
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 'auto',
    fontSize: 12,
    fontWeight: 500,
  },
  tableCell: {
    margin: 'auto',
    fontSize: 10,
  },
});

export function PdfDocument(props) {

  const data = props.data;


  return (
    <Document>
      <Page size="A4" style={{ backgroundColor: 'white' }}>
        <View style={{
          color: 'black',
          textAlign: 'left',
          marginTop: 30,
          marginLeft: 40,
          marginRight: 40,
        }}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Tanggal Pekerjaan</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Jam</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Detail Pekerjaan</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Status</Text>
              </View>
            </View>

            {data.map(item => (
              <View key={item.id}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{item.tanggal_pekerjaan}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{item.jam_pekerjaan}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{item.detail_pekerjaan}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>5€</Text>
                  </View>
                </View>
              </View>
            ))}


          </View>
        </View>
      </Page>
    </Document>
  );
}
