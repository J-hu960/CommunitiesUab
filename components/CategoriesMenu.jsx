import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';

const local_data = [

  {
    value: '',
    lable: 'Todos',
   
  },
  {
    value: 'deportes',
    lable: 'Deportes',
  
  },
  {
    value: 'ciencia',
    lable: 'Ciencia',
  
  },
  {
    value: 'literatura',
    lable: 'Literatura',
    
  },
  {
    value: 'social',
    lable: 'Social',
 
  },
  {
    value: 'Technology',
    lable: 'Technology',
 
  },
];

const CategoriesMenu = ({category,setCategory}) => {
  const [country, setCountry] = useState('1');

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      search
      maxHeight={200}
      value={category}
      data={local_data}
      valueField="value"
      labelField="lable"
      placeholder="Selecciona una categoria"
      searchPlaceholder="Search..."
      onChange={e => {
        setCategory(e.value);
      }}
    />
  );
};

export default CategoriesMenu;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width:'50%'
  },
 
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});