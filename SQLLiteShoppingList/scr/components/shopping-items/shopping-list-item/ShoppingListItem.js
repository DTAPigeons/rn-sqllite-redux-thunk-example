import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  toggleDeleteDialogAction,
  toggleItemBoughtStatusAction,
} from '../../../core/redux/actions/shopping-list-actions/actions';
import {
  Card,
  CardItem,
  Text,
  Body,
  CheckBox,
  Left,
  Button,
  Right,
  Grid,
  Col,
} from 'native-base';

export const ShoppingListItem = ({item, navigation}) => {
  const dispatch = useDispatch();
  const editToggled = useSelector(
    (state) => state.shoppingListReducer.editToggled,
  );

  const switchBoughtStatus = () => {
    dispatch(toggleItemBoughtStatusAction(item));
  };

  const onEdit = () => {
    navigation.navigate('Update', {id: item.ID});
  };

  const onDeleteClicked = () => {
    dispatch(toggleDeleteDialogAction(item));
  };

  return (
    <>
      <Card>
        <CardItem>
          <Left>
            <CheckBox
              checked={item.bought}
              onPress={switchBoughtStatus}
              color="green"
            />
            <Body>
              <Text>{item.name}</Text>
            </Body>
          </Left>
          {editToggled && (
            <Right>
              <Grid>
                <Col style={{width: 88, marginRight: 4}}>
                  <Button onPress={onEdit}>
                    <Text>Edit</Text>
                  </Button>
                </Col>
                <Col style={{width: 88}}>
                  <Button onPress={onDeleteClicked}>
                    <Text>Delete</Text>
                  </Button>
                </Col>
              </Grid>
            </Right>
          )}
        </CardItem>
      </Card>
    </>
  );
};
