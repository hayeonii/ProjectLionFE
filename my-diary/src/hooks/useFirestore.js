import { appFireStore } from "../firebase/config"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { useReducer } from "react"

const initState = {
    document: null,
    isPending: false,
    error: null,
    success: false
}

// 엑션-->( {타입:문서타입 페이로드: 관리할 데이터})
const storeReducer = (state, action) => {
    // action의 타입에 따른 반환값들
    // action - {타입: 문서타입, 페이로드: 관리할 데이터}
    // payload - 우리가 관리할 값. 바꿔줄 값.

    /* action.type에 따른 반환값 */
    // 케이스마다 리턴해야할 값을 바꿔줘야 함.기존데이터에 새로운 데이터만 추가되는 방식 사용불가
    // 데이터를 추가하는게 아니고 데이터 내 객체값이 계속 바뀌는 상태이므로 전개구문을 사용할 수 없음
    switch (action.type) {
        case 'isPending':
            return { isPending: true, document: null, error: null, success: false }
        case 'addDoc' :
            return { isPending: false, document: action.payload, error: null, success: true }
        case 'error' :
            return { isPending: false, document: null, error: action.payload, success: false }
        default:
            return state
    }
}

export const useFirestore = (transaction) => {
    // transaction: hook을 전달받을 떄 사용하는 hook
    const [response, dispatch] = useReducer(storeReducer, initState);

    // collection -> 참조값 가져오는 역할
    const colRef = collection(appFireStore, transaction);

    const addDocument = async (doc) => {
        // 통신상태를 보여 주기 위해 넣은 dispatch
        dispatch({type: "isPending"})
        try {
            // fromDate 메서드를 통해 현재시각을 timeStamp 객체에 전달
            // Timestamp를 useFireStore.js에서 바로 import 하지 않고 config.js에서 먼저 import한 뒤에 export해서 받아오는 이유
                // 이렇게 해도 되는데 굵직굵직한 것들을 config.js에서 초기화하는중,, (초기화 하는 것들을 설정 파일 만들어서 모아두는 편 - 개인의 취향)
            const createdTime = Timestamp.fromDate(new Date())
            const docRef = await addDoc(colRef, {...doc, createdTime});
            dispatch({type: "addDoc", payload: docRef}) // 전달할 데이터 - payload: docRef
        } catch (e) {
            dispatch({type: "addDoc", payload: e.message})
        }
    }

    const deleteDocument = (id) => {
        // 컬렉션에 도달하는 것들은 각자 고유한 id를 가지고 있음
    }
    
    // 파이어베이스 클라우드 파이어스토어에 저장될때를 위해 작성
    // 밖에서 사용할 수 있게 리턴
    return { response, addDocument, deleteDocument}
}
