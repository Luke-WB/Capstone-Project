export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_USERNAME = "ADD_USERNAME";
export const ADD_ID_CARRELLO = "ADD_ID_CARRELLO";
export const ADD_ID_ORDINE = "ADD_ID_ORDINE";
export const ADD_ID_FATTURA = "ADD_ID_FATTURA";
export const USER = "USER";
export const CARRELLO = "CARRELLO";
export const ARTICOLI = "ARTICOLI";
export const ORDINE = "ORDINE";
export const ORDINI = "ORDINI";
export const FATTURA = "FATTURA";

export function regisrazioneUser(input) {
  return async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (response.ok) {
        console.log(response);
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function loginUser(input) {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data, " oooooooooooooooo");
        dispatch({
          type: ADD_TOKEN,
          payload: data.accessToken,
        }) &&
          dispatch({
            type: ADD_USERNAME,
            payload: data.username,
          });
        console.log(data.accessToken);
        window.location.href = "/";
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function getUser(token, username) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data, "data");
        const userFiltrato = data.filter((e) => e.username === username);
        dispatch({
          type: USER,
          payload: userFiltrato[0],
        });
        dispatch(trovaIdCarrello(userFiltrato[0].id, token));
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch({
      type: ADD_TOKEN,
      payload: "",
    }) &&
      dispatch({
        type: ADD_USERNAME,
        payload: "",
      }) &&
      dispatch({
        type: ADD_ID_CARRELLO,
        payload: "",
      });
  };
}

export function getArticoli(token) {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8080/api/articolo", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: ARTICOLI,
          payload: data,
        });
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function trovaIdCarrello(idUser, token) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/carrello`, {
        method: "GET",
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        const carrelloFiltrato = data.filter((e) => e.id === idUser);
        console.log(carrelloFiltrato[0].id, "oooooooooooooooooo");
        dispatch({
          type: ADD_ID_CARRELLO,
          payload: carrelloFiltrato[0].id,
        });
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function getCarrello(idCarrello, token) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/carrello/${idCarrello}`, {
        method: "GET",
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: CARRELLO,
          payload: data,
        });
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function aggiungiArticoliCarrello(idCarrello, idArticolo, token) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/carrello/${idCarrello}/articoli/${idArticolo}`, {
        method: "POST",
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log(response);
        dispatch(getCarrello(idCarrello, token));
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function rimuoviArticoliCarrello(idCarrello, idArticolo, token) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/carrello/${idCarrello}/articoli/${idArticolo}`, {
        method: "DELETE",
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log(response);
        dispatch(getCarrello(idCarrello, token));
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function creaOrdine(idUser, idCarrello, token) {
  return async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/ordine/user/${idUser}/carrello/${idCarrello}`, {
        method: "POST",
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log(response);
        window.location.href = "/ordine";
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function trovaIdOrdine(token, idUser, idCarrello, carrelloArticoli) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/ordine`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        const ordineFiltrato = data.filter(
          (e) =>
            e.user.id === idUser &&
            e.carrello.id === idCarrello &&
            e.carrello.articoli.length === carrelloArticoli.length &&
            e.carrello.articoli[0].id === carrelloArticoli[0].id
        );
        console.log(ordineFiltrato);
        dispatch({
          type: ADD_ID_ORDINE,
          payload: ordineFiltrato[0].id,
        });
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function getOrdini(token, idUser, idCarrello) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/ordine`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        const ordineFiltrato = data.filter((e) => e.user.id === idUser && e.carrello.id === idCarrello);
        console.log(ordineFiltrato);
        dispatch({
          type: ORDINI,
          payload: ordineFiltrato,
        });
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function getOrdine(idOrdine, token) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/ordine/${idOrdine}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data, "alalalalallalal");
        dispatch({
          type: ORDINE,
          payload: data,
        });
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function creaFattura(idOrdine, token) {
  return async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/fattura/ordine/${idOrdine}`, {
        method: "POST",
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log(response);
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function trovaIdFattura(token, idOrdine) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/fattura`, {
        method: "GET",
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        const fatturaFiltrata = data.filter((e) => e.id === idOrdine);
        console.log(fatturaFiltrata, "ffffffffffffffffffffff");
        dispatch({
          type: ADD_ID_FATTURA,
          payload: fatturaFiltrata[0].id,
        });
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function getFattura(idFattura, token) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/fattura/${idFattura}`, {
        method: "GET",
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data, "ss");

        dispatch({
          type: FATTURA,
          payload: data,
        });
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}
