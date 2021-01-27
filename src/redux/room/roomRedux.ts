import { createAction, ActionType, createReducer } from 'typesafe-actions'

const SAVE_ROOM_CODE = 'SAVE_ROOM_CODE'
const RENDER_ROOM = 'RENDER_ROOM'
const DESTROY_ROOM = 'DESTROY_ROOM'
const ADD_USER = 'ADD_USER'
const DELETE_USER ='DELETE_USER'
const UPDATE_ROOM_LOCKING_STATUS = 'UPDATE_ROOM_LOCKING_STATUS'
const TURN_ON_FILTER = 'TURN_ON_FILTER'
const TURN_OFF_FILTER = 'TURN_OFF_FILTER'
const SET_PROFILE = 'SET_PROFILE'

export const saveRoomCode = createAction(SAVE_ROOM_CODE)
export const renderRoom = createAction(RENDER_ROOM)
// export const destroyRoom = createAction(DESTROY_ROOM)
export const addUser = createAction(ADD_USER)
export const deleteUser = createAction(DELETE_USER)
export const setProfile = createAction(SET_PROFILE)
// export const updateRoomLockingStatus = createAction(UPDATE_ROOM_LOCKING_STATUS)
// export const turnOnFilter = createAction(TURN_ON_FILTER)
// export const turnOffFilter = createAction(TURN_OFF_FILTER)

const actions = { 
  saveRoomCode,
  renderRoom, 
  // destroyRoom, 
  addUser,
  deleteUser, 
  setProfile,
  // updateRoomLockingStatus, 
  // turnOnFilter, 
  // turnOffFilter 
} // 모든 액션 생성함수들을 actions 객체에 넣습니다
type RoomAction = ActionType<typeof actions> // ActionType 를 사용하여 모든 액션 객체들의 타입을 준비해줄 수 있습니다

interface Action {
  type: string
  value: any
}

interface usersItem {
  socketId: string
  photoUrl: string
  nickName: string
}

interface RoomState  {
  roomCode: string
  roomId: string
  users: usersItem[]
}

const initialState: RoomState = {
  roomCode: '',
  roomId: '',
  users: []
}

const roomReducer = createReducer<RoomState, RoomAction>(initialState, {
  [RENDER_ROOM]: (state: RoomState, action: any) => {
    state.users.push(action.user)
    return {
      ...state, 
      roomId: action.roomId, 
      roomCode: action.roomCode
    }
  },
  [ADD_USER]: (state: RoomState, action: any) => ({ ...state, users: [...state.users, action.user] }),
  [DELETE_USER]: (state: RoomState, action: any) => {
    const newUserList = state.users.filter(
      user => user.socketId !== action.socketId,
    )
    return {
      ...state,
      users: newUserList
    }
  },
  [SET_PROFILE]: (state: RoomState, action: any) => {
    let index = 0;
    state.users.forEach((user, idx) => {
      if(user.socketId === action.value.socketId) index = idx })
    state.users[index] = action.value

    return {
      ...state
    }
  }
  
})

export default roomReducer
// [SAVE_ROOM_CODE]: (state: RoomState, action: any) => ({ ...state, roomCode: action.value }),
  // [RENDER_ROOM]: (state, { payload: { key, value } }) => ({ ...key }), // 액션을 참조 할 필요 없으면 파라미터로 state 만 받아와도 됩니다
  // [DESTROY_ROOM]: state => ({ count: state.count - 1 }),
  // [ADD_MEMBER]: (state, action) => ({ count: state.count + action.payload }),
  // [DELETE_MEMBER]: state => ({ count: state.count + 1 }), // 액션을 참조 할 필요 없으면 파라미터로 state 만 받아와도 됩니다
  // [UPDATE_ROOM_LOCKING_STATUS]: state => ({ count: state.count - 1 }),
  // [TURN_ON_FILTER]: state => ({ count: state.count + 1 }), // 액션을 참조 할 필요 없으면 파라미터로 state 만 받아와도 됩니다
  // [TURN_OFF_FILTER]: state => ({ count: state.count - 1 }), // 액션의 타입을 유추 할 수 있습니다.