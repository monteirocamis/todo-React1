import { useState } from 'react';
//  import React from 'react';
// import logo from './logo.svg';
import './App.css';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
// import { NumericLiteral } from 'typescript';


const App = () =>{
const [list, setList] = useState<Item[]>([
  {id: 1, name: 'comprar pao', done:false},
  {id: 2, name: 'fazer exercicio', done:true},
]);

const handleAddTask = (taskName: string) =>{
  let newList = [...list];
  newList.push({
    id: list.length + 1,
    name:taskName,
    done: false
  })
  setList(newList);
}

// Função feita para tarefinha de casa.

const handleTaskChange = (id: number, done: boolean) =>{
  let newList = [...list];

  for(let i in newList) {
    if(newList[i].id === id) {
      newList[i].done = done;
  
    }
  }
  setList(newList);
}

  return (
  
   <C.Container >
     <C.Area>
      <C.Header>
        Lista de Tarefas
      </C.Header>

          { /*area de nova tarefa */}
          <AddArea onEnter={handleAddTask} />

          { /*lista de tarefa */}
          {list.map((item,index)=>(
            <ListItem 
            key={index} 
            item={item}
            onChange={handleTaskChange}
            />
          ))}
     </C.Area>
   </C.Container>
  );
}

export default App;
