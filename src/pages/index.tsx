import type { NextPage } from 'next'
import List from '../ui/components/List/List'
import Title from '../ui/components/Title/Title'

const Home: NextPage = () => {
  return (
    <div>
      <Title
        title=''
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br/> 
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
      <List
        pets={[
          {
            id: 1,
            name: 'Bidu',
            history: 'loadDef a u ltErro rC omponents fdkjg j g  h jfjh h khkj hks hgkfhk hfkjh fjhgkjflkgg fhdks hkj ksdfjgh fkjhdg kfjhskf g fkh kfjg fkgjf gkjfg kgh kfhgj fghjfkgh fgh ghkfhgk gfjgh fkjgh fjghkfjgh fjgh fkjgh',
            photo: 'https://picsum.photos/200/200'
          },
          {
            id: 2,
            name: 'Totó',
            history: 'loadDef a u ltErro rC omponents fdkjg j g  h jfjh h khkj hks hgkfhk hfkjh fjhgkjflkgg fhdks hkj ksdfjgh fkjhdg kfjhskf g fkh kfjg fkgjf gkjfg kgh kfhgj fghjfkgh fgh ghkfhgk gfjgh fkjgh fjghkfjgh fjgh fkjgh',
            photo: 'https://picsum.photos/200/200'
          }
        ]}
      />
    </div>
  )
}

export default Home
