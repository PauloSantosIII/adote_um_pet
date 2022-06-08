import { TitleStyled, Subtitle } from './Title.style'

const Title = (props: { title: string; subtitle?: string | JSX.Element }) => {
  return (
    <>
      <TitleStyled>{props.title}</TitleStyled>
      <Subtitle>{props.subtitle}</Subtitle>
    </>
  )
}
export default Title