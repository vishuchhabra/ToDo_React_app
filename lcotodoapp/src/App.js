import  React from 'react'
import logo  from './image.jpg'
import './App.css'


class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      newItem :"",
      list : []
    }
  }

  addItem(todoValue)
  {
    if(todoValue!=="")
    {
        const newItem ={
        id:Date.now(),
        value:todoValue,
        isDone:false
        }
        const list =[...this.state.list] // ... means append all  the existing value of list in list
        list.push(newItem)
        //now list in local scope
        this.setState({
        list,
        newItem:""
      })
    }
  }

  deleteItem (id)
  {
    const list = [...this.state.list] //current copy of list
    const updateList = list.filter(item=>
    {
        return item.id!==id
    }) //skip the list which id we have in the argument of deleteItem
    this.setState({
      list:updateList
    })
  }

  updateInput(input)
  {
    this.setState({
      newItem:input
    })
  }

 

  render(){
    return(
     <div>
       <script>
         
       </script>
       <img src={logo} width="300" height ="200" className="logo" alt="This is pic of one Car"/>
       <h1 className="app-title">LCO ToDo APP</h1>
       
       <p className="app-tit">FOR DELETING , CLICK <span> <button  className="b-t" onClick="">Delete</button></span></p>
       
       
       <div className="container">
       Add an Item.... 
       <br/>
       <input type="text" className="input-text" placeholder="Write To Do" required  value={this.state.newItem}  
       onChange={ e => this.updateInput(e.target.value)} >
       </input>
       <button
       onClick ={()=>
       this.addItem(this.state.newItem)}
       disabled={!this.state.newItem.length} ///for disabling 
       className="add-btn">Add ToDo</button>
       <div className="list">
       <ul>
         {this.state.list.map(
             item=>{
               return (
                <li key={item.id}>
                  {item.value}
                  <button  className="btn" onClick={()=> this.deleteItem(item.id)}>
                  Delete</button>

                </li> 
               )
             }
           )}
         
         </ul>
        </div>
      </div>
     </div>
    )
  }

}

export default App