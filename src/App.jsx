import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'


import * as S from './styles.js'

function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  function inputMudou(event) {
    setTask(event.target.value)
  }

  function cliqueiNoBotao() {
    if(task) {
      setList([...list, { id: uuid(), task, finished: false }])
    }
  }


  function finalizarTarefa(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)

  }

  function deletarItem(id) {
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }


  return (

    <S.Container>
      <S.ToDoList>
        <S.Input onChange={inputMudou} placeholder="O que tenha para fazer..." />
        <S.Button onClick={cliqueiNoBotao}>Adicionar</S.Button>

        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <S.ListItem isFinished={item.finished} key={item.id}>
                  <S.Check onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <S.Trash onClick={() => deletarItem(item.id)} />
                </S.ListItem>
              ))
            ) : (
              <h3>Não há itens na lista</h3>
            )
          }
        </ul>
      </S.ToDoList>
    </S.Container>

  )
}

export default App
