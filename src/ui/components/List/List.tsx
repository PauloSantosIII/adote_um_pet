import { Button } from '@mui/material'
import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService'
import {
  ListStyled,
  ItemList,
  Photo,
  Info,
  Name,
  Description
} from './List.style'

const List = (props: { pets: Pet[]} ) => {
  const sizeMaxText = 200

  return (
    <ListStyled>
      {props.pets.map(pet => (
        <ItemList key={pet.id}>
          <Photo src={pet.photo} alt={pet.name} />
          <Info>
            <Name>{pet.name}</Name>
            <Description>
              {TextService.limitTextSize(pet.history, sizeMaxText)}
            </Description>
            <Button
              variant={'contained'}
              fullWidth
            >Adotar {pet.name}</Button>
          </Info>
        </ItemList>
      ))}
    </ListStyled>
  )
}
export default List