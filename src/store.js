import {createStore} from "redux"



const stateDefault = {
        userArr:[],
        obj:null
}
const reducers = function(state=stateDefault,action){
      switch(action.type){
            case 'add':
                state.userArr.push(action.user)
                break;
            case  'addObj':
                state.obj=action.obj
      }
      return state
}


const store = createStore(reducers)

export default store