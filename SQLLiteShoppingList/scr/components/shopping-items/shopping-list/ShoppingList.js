import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {SectionList} from 'react-native';
import {ShoppingListItem} from '../shopping-list-item/ShoppingListItem';
import {useEffect, useState} from 'react';
import {Content, Button, Text, Right, Form, Grid, Col} from 'native-base';
// import { toggleEditAction, deleteShoppingListItemAction, toggleDeleteDialogAction } from '../../../core/redux/actions/shopping-list-actions/actions';
import {
  fetchShoppingListAction,
  toggleEditAction,
  deleteShoppingListItemAction,
  toggleDeleteDialogAction,
} from '../../../core/redux/actions/shopping-list-actions/actions';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
  DialogTitle,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import {
  openDBAction,
  closeDBAction,
} from '../../../core/redux/actions/db-actions/actions';

export const ShoppingList = ({navigation}) => {
  const shoppingList = useSelector(
    (state) => state.shoppingListReducer.shoppingList,
  );
  const itemToDelete = useSelector(
    (state) => state.shoppingListReducer.itemToDelete,
  );
  const dispatch = useDispatch();

  const dbReady = useSelector((state) => state.dbReducer.dbReady);

  const [deletePopUpVisible, setDeletePopUpVisible] = useState(false);

  useEffect(() => {
    startSetUp();

    const unsubscribe = navigation.addListener('focus', (e) => {
      startSetUp();
    });

    return unsubscribe;
  }, [
    itemToDelete,
    deletePopUpVisible,
    dispatch,
    setDeletePopUpVisible,
    dbReady,
  ]);

  const startSetUp = () => {
    if (dbReady) {
      dispatch(fetchShoppingListAction());
    }
    if (deletePopUpVisible && !itemToDelete) {
      setDeletePopUpVisible(false);
    }
    if (!deletePopUpVisible && itemToDelete) {
      setDeletePopUpVisible(true);
    }
  };

  const createSections = () => {
    const bought = shoppingList.filter((item) => item.bought);
    const toBuy = shoppingList.filter((item) => !item.bought);
    return [
      {
        title: 'What we need:',
        data: toBuy,
      },
      {
        title: 'Bought:',
        data: bought,
      },
    ];
  };

  const onDelete = () => {
    if (itemToDelete) {
      dispatch(deleteShoppingListItemAction(itemToDelete));
    }
  };

  const onDeleteCancel = () => {
    dispatch(toggleDeleteDialogAction());
  };

  const toggleEdit = () => {
    console.log('Toggling edit');
    dispatch(toggleEditAction());
  };

  return (
    <>
      <Content>
        <Right>
          <Grid>
            <Col style={{width: 88, marginRight: 4}}>
              <Button onPress={() => navigation.navigate('Update')}>
                <Text>+</Text>
              </Button>
            </Col>
            <Col style={{width: 88}}>
              <Button onPress={() => toggleEdit()}>
                <Text>Edit</Text>
              </Button>
            </Col>
          </Grid>
        </Right>
        <SectionList
          sections={createSections()}
          keyExtractor={(item) => item.ID}
          renderItem={({item}) => (
            <ShoppingListItem item={item} navigation={navigation} />
          )}
          renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        />
      </Content>
      <Dialog
        visible={deletePopUpVisible}
        onTouchOutside={() => {
          onDeleteCancel();
        }}
        modalTitle={<DialogTitle title="Delete item?" />}
        modalAnimation={
          new ScaleAnimation({
            initialValue: 0,
            useNativeDriver: true,
          })
        }>
        <DialogContent>
          <Text>
            Are you sure you whish to delete{' '}
            {itemToDelete ? itemToDelete.name : ''} from the shopping list?
          </Text>
        </DialogContent>
        <DialogFooter>
          <DialogButton
            text="CANCEL"
            onPress={() => {
              onDeleteCancel();
            }}
          />
          <DialogButton
            text="OK"
            onPress={() => {
              onDelete();
            }}
          />
        </DialogFooter>
      </Dialog>
    </>
  );
};
