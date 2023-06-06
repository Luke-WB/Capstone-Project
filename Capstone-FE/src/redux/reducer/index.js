import {
  ADD_ID_CARRELLO,
  ADD_ID_FATTURA,
  ADD_ID_ORDINE,
  ADD_ID_USER,
  ADD_TOKEN,
  ADD_USERNAME,
  ARTICOLI,
  CARRELLO,
  FATTURA,
  FATTURE,
  ORDINE,
  ORDINI,
  USER,
} from "../action";

const initialState = {
  token: "",
  username: "",
  idUser: "",
  idCarrello: "",
  idOrdine: "",
  idFattura: "",
  user: {},
  articoli: [],
  carrello: {},
  ordine: {},
  ordini: [],
  fattura: {},
  fatture: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case ADD_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case ADD_ID_USER:
      return {
        ...state,
        idUser: action.payload,
      };
    case ADD_ID_CARRELLO:
      return {
        ...state,
        idCarrello: action.payload,
      };
    case ADD_ID_ORDINE:
      return {
        ...state,
        idOrdine: action.payload,
      };
    case ADD_ID_FATTURA:
      return {
        ...state,
        idFattura: action.payload,
      };
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    case ARTICOLI:
      return {
        ...state,
        articoli: action.payload,
      };
    case CARRELLO:
      return {
        ...state,
        carrello: action.payload,
      };
    case ORDINE:
      return {
        ...state,
        ordine: action.payload,
      };
    case ORDINI:
      return {
        ...state,
        ordini: action.payload,
      };
    case FATTURA:
      return {
        ...state,
        fattura: action.payload,
      };
    case FATTURE:
      return {
        ...state,
        fatture: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
