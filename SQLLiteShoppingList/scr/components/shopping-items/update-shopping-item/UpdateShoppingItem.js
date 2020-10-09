import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  CheckBox,
  Left,
  Right,
  Button,
  Grid,
  Col,
} from 'native-base';
import {CatalogItem} from '../catalog-item/CatalogItem';
import {fetchCatalogAction} from '../../../core/redux/actions/catalog-actions/actions';
import {itemSelectedAction, updateListItemAction, cleareUpdateItemAction} from '../../../core/redux/actions/update-list-item-actions/actions';
import {TextInput} from 'react-native';

export const UpdateShoppingItem = ({route, navigation}) => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalogReducer.catalog);
  const dbReady = useSelector((state) => state.dbReducer.dbReady);
  const selectedItem = useSelector(
    (state) => state.updateListItemReducer.selectedItem,
  );
  const updated = useSelector((state) => state.updateListItemReducer.updated);

  // const [catalog, setcatalog] = useState([]);
  // const [selectedItem, setselectedItem] = useState(undefined);

  const [statusMessage, setStatusMessage] = useState('');
  const [selectedFromDatabse, setselectedFromDatabse] = useState(false);
  // const [updated, setupdated] = useState(undefined);

  useEffect(() => {
    if (dbReady) {
      dispatch(fetchCatalogAction());
    }
  }, [dispatch, dbReady]);

  // useEffect(() => {
  //     if(route.params && !updated){
  //         const {id} = route.params;

  //         // if(id && !selectedItem.id && !selectedFromDatabse){
  //         //     console.log("selected: "+selectedItem.name+"id: "+selectedItem.id+"need to select: "+id);
  //         //     dispatch(selectItemFromDataBaseAction(id));
  //         //     setselectedFromDatabse(true);
  //         // }
  //     }

  //     return function cleanUp(){
  //         if(updated){
  //             onCancel();
  //         }

  //     };
  // }, [route.params, selectedItem,onCancel,console.log, dispatch,]);

  const onPress = (item) => {
    console.log('selecting ' + item);
    dispatch(itemSelectedAction({CATALOGUEID: item.ID, name: item.name}));
  };

  const onInputChange = (text) => {
    // console.log("selecting "+text);
    // dispatch(itemSelectedAction( {...selectedItem, name: text}));
  };

  const onSubmit = () => {
    if(!selectedItem|| !selectedItem.name || selectedItem.name==""){
        setStatusMessage("Invalid Item");
        return;
    }
    dispatch(updateListItemAction(selectedItem));
  };

  const onCancel = () => {
    dispatch(cleareUpdateItemAction());
    navigation.navigate('List');
  };

  const renderCatalogue = () => {
    return catalog.map((item) => (
      <CatalogItem item={item} onPress={onPress} key={item.ID} />
    ));
  };

  return (
    <Content>
      {updated && onCancel()}
      <Text>{statusMessage}</Text>
      <TextInput
        editable = {false}
        onChangeText={(text) => onInputChange(text)}
        value={selectedItem.name}
      />
      <Right>
        <Grid>
          <Col style={{width: 88, marginRight: 4}}>
            <Button
              onPress={() => {
                onSubmit();
              }}>
              <Text>Submit</Text>
            </Button>
          </Col>
          <Col style={{width: 88}}>
            <Button
              onPress={() => {
                onCancel();
              }}>
              <Text>Cancel</Text>
            </Button>
          </Col>
        </Grid>
      </Right>
      <Text>Chose product from catalog</Text>
      {renderCatalogue()}
    </Content>
  );
};
