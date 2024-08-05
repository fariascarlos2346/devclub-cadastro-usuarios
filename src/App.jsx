import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  Input,
  Button,
  InputLabel
} from "./styles"

import UsersImage from './assets/avatar.png'

function Home() {

  return (
    <Container>

      <TopBackground>
        <img src={UsersImage} />
      </TopBackground>

      <Form>
        <Title>Cadastro Usuário </Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do Usuário' />
            </div>

            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do Usuário' />
            </div>
          </div>
          <div>
            <InputLabel>
              E-mail<span>*</span>
            </InputLabel>
            <Input type='email' placeholder='E-mail do Usuário' />
          </div>
        </ContainerInputs>
        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home
