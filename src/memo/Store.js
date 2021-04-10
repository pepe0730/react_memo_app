import { createStore } from 'redux';

//ステート
const initData = {
  data: [{message:'sample data', created: new Date() }],
  message: 'please type message:',
  mode:'default',
  //検索にヒットしたメモを格納するリスト
  fdata:[]
};

//レデューサアクションの分岐 中に実際にstateの値を変更するレデューサがある
export function memoReducer(state = initData, action) {
  switch(action.type) {
    case 'ADD':
      return addReduce(state, action);
    case 'DELETE':
      return deleteReduce(state, action);
    case 'FIND':
      return findReduce(state, action);
    default:
      return state;
  }
}

//レデュースアクション
function addReduce(state, action) {
  let data = {
    message:action.message,
    created:new Date()
  };
  //配列→配列
  let newdata = state.data.slice();
  //unshiftの引数が新たに配列に追加される。
  newdata.unshift(data);
  return {
    data:newdata,
    message:'Added!',
    mode: 'default',
    fdata:[]
  };
}

//メモ検索レデュース
function findReduce(state, action) {
  //??
  let f = action.find;
  let fdata = [];
  //(value) → valueでいいのでは？
  state.data.forEach((value) => {
    if (value.message.indexOf(f) >= 0) {
      fdata.push(value);
    }
  });
  return {
    data:state.data,
    message:'find"' + f + `":`,
    mode:'find',
    fdata: fdata
  }
}

//メモ削除
function deleteReduce(state, action) {
  let newdata = state.data.slice();
  //??
  newdata.splice(action.index, 1);
  return {
    data: newdata,
    message: 'delete"' + action.index + '":',
    mode: 'delete',
    fdata:[]
  };
}

//メモ追加のアクション どこでよぶ？？
export function addMemo(text) {
  return {
    type: 'ADD',
    message: text
  };
}

//メモ削除のアクション
export function deleteMemo(num) {
  return {
    type:"DELETE",
    index: num
  };
}

//メモ検索のアクション
export function findMemo(text) {
  return {
    type: 'FIND',
    find: text
  };
}

export default  createStore(memoReducer);
