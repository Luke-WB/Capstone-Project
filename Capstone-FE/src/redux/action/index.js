export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_USERNAME = "ADD_USERNAME";
export const ADD_ID_USER = "ADD_ID_USER";
export const ADD_ID_CARRELLO = "ADD_ID_CARRELLO";
export const ADD_ID_ORDINE = "ADD_ID_ORDINE";
export const ADD_ID_FATTURA = "ADD_ID_FATTURA";
export const USER = "USER";
export const CARRELLO = "CARRELLO";
export const ARTICOLI = "ARTICOLI";
export const ORDINE = "ORDINE";
export const ORDINI = "ORDINI";
export const FATTURA = "FATTURA";
export const FATTURE = "FATTURE";
export const ADD_PREFE = "ADD_PREFE";
export const REMOVE_PREFE = "REMOVE_PREFE";

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
        window.location.href = "/login";
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
        const token = data.accessToken;
        const username = data.username;
        console.log(data, " oooooooooooooooo");
        dispatch({
          type: ADD_TOKEN,
          payload: token,
        });
        dispatch({
          type: ADD_USERNAME,
          payload: username,
        });
        window.location.href = "/";
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
    });
    dispatch({
      type: ADD_USERNAME,
      payload: "",
    });
    dispatch({
      type: ADD_ID_USER,
      payload: "",
    });
    dispatch({
      type: ADD_ID_CARRELLO,
      payload: "",
    });
    dispatch({
      type: ADD_ID_ORDINE,
      payload: "",
    });
    dispatch({
      type: ADD_ID_FATTURA,
      payload: "",
    });
    dispatch({
      type: USER,
      payload: {},
    });
    dispatch({
      type: CARRELLO,
      payload: {},
    });
    dispatch({
      type: ORDINE,
      payload: {},
    });
    dispatch({
      type: ORDINI,
      payload: [],
    });
    dispatch({
      type: FATTURA,
      payload: {},
    });
    dispatch({
      type: ARTICOLI,
      payload: [],
    });
    window.location.href = "/";
  };
}

export function trovaIdUser(token, username) {
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
        console.log(data, "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        const userFiltrato = data.filter((e) => e.username === username);
        dispatch({
          type: ADD_ID_USER,
          payload: userFiltrato[0].id,
        });
        dispatch(getUser(userFiltrato[0].id, token));
        dispatch(trovaIdCarrello(userFiltrato[0].id, token));
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function getUser(idUser, token) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/user/${idUser}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data, "ooooooooooooooooo");
        dispatch({
          type: USER,
          payload: data,
        });
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function putUser(idUser, token, input) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/user/${idUser}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (response.ok) {
        dispatch(
          dispatch({
            type: USER,
            payload: {},
          })
        );
        dispatch(getUser(idUser, token));
      }
    } catch (error) {
      alert("testComment", error);
    }
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
        console.log("oooooookokokokkokokok");
        const carrelloFiltrato = data.filter((e) => e.id === idUser);
        dispatch({
          type: ADD_ID_CARRELLO,
          payload: carrelloFiltrato[0].id,
        });
        dispatch(getCarrello(carrelloFiltrato[0].id, token));
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
        console.log(data, "carrelloooooo");
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

export function trovaIdOrdine(token, idUser, idCarrello, carrello) {
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
        const ordineFiltratoArticoliId = data.length - 1 + 1;
        const ordineId = data.filter(
          (e) =>
            e.user.id === idUser &&
            e.carrello.id === idCarrello &&
            e.articoli.length === carrello.articoli.length &&
            e.id === ordineFiltratoArticoliId
        );
        console.log(
          data,
          "ooooooooooooooooooooooooooooooooooooooooooooooooooookkkk",
          ordineFiltratoArticoliId,
          ordineId[0].id
        );
        dispatch({
          type: ADD_ID_ORDINE,
          payload: ordineId[0].id,
        });
        dispatch(getOrdine(ordineId[0].id, token));
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
        const ordiniFiltrati = data.filter((e) => e.user.id === idUser && e.carrello.id === idCarrello);
        console.log(ordiniFiltrati, "ooooooooooooooooooooo");
        dispatch({
          type: ORDINI,
          payload: ordiniFiltrati,
        });
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}
export function getStatoOrdine(token, idUser, idCarrello, numeroOrdine) {
  return async () => {
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
        const ordiniFiltrati = data.filter(
          (e) => e.user.id === idUser && e.carrello.id === idCarrello && e.numero === numeroOrdine
        );
        console.log(ordiniFiltrati, "ooooooooooooooooooooo");
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
        window.location.href = "/ordine-confermato";
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
        const ok = data.map((e) => e.id);
        const fatturaFiltrata = data.filter((e) => e.id === idOrdine);
        console.log(fatturaFiltrata, ok, "ffffffffffffffffffffff", data);
        dispatch({
          type: ADD_ID_FATTURA,
          payload: fatturaFiltrata[0].id,
        });
        dispatch(getFattura(fatturaFiltrata[0].id, token));
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

export function getFatture(token, idUser) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/fattura`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        const fattureFiltrate = data.filter((e) => e.ordine.user.id === idUser);
        console.log(fattureFiltrate, "xxxxxxxxxxxxxxxxxxxxxxxxxx", data);
        dispatch({
          type: FATTURE,
          payload: fattureFiltrate,
        });
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function svuotaCarrello() {
  return (dispatch) => {
    dispatch({
      type: CARRELLO,
      payload: {},
    });
  };
}

export function svuotaFattura() {
  return (dispatch) => {
    dispatch({
      type: ADD_ID_ORDINE,
      payload: "",
    });
    dispatch({
      type: ORDINE,
      payload: {},
    });
    dispatch({
      type: ADD_ID_FATTURA,
      payload: "",
    });
    dispatch({
      type: FATTURA,
      payload: {},
    });
    window.location.href = "/";
  };
}
