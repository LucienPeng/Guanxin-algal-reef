import React from 'react';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import {
  doc,
  collection,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';

// Initialize Firebase
export const firebaseConfig = {
  apiKey: 'AIzaSyBrSlERfkyQ_LEY3ZjwTtZcseHRWjM-Afs',
  authDomain: 'guanxin-algalreef.firebaseapp.com',
  projectId: 'guanxin-algalreef',
  storageBucket: 'guanxin-algalreef.appspot.com',
  messagingSenderId: '968822167274',
  appId: '1:968822167274:web:fa97bf0554a8b33acf6993',
  measurementId: 'G-G0P4EPJLB2',
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const useOpenModel = (arrs) => {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  ///

  const [modal, setModal] = React.useState({});
  React.useEffect(() => {
    const comparedModal = arrs.filter((item) => {
      if (item.id == content) {
        return item;
      }
    });
    setModal(comparedModal[0]);
  }, [content]);

  return [open, content, setContent, handleOpen, handleClose, modal, setModal];
};

export const useSetDataFirebase = (date, name, datail) => {
  const setData = () => {
    setDoc(doc(db, 'news', name), {
      date: date,
      time: '9:00',
      name: name,
      detail: datail,
    });
  };
  return setData();
};

export const useFetchDataFirebase = () => {
  const arr = [];
  const [data, setData] = React.useState([]);

  const fetchData = React.useCallback(async () => {
    const q = query(collection(db, 'news'), orderBy('date', 'asc'), limit(30));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arr.unshift(doc.data());
    });
    setData(arr);
    console.log(data);
  }, [data, setData]);

  React.useEffect(() => {
    fetchData();
  }, []);

  return [data, fetchData];
};

export const useDeleteDataFirebase = (collection, arr) => {
  const deleteSelectedDatas = async () => {
    const selected = arr.filter((item) => {
      if (item.value === true) return item.name;
    });

    const deleteSelected = await selected.forEach((item) => {
      console.log(item);
      deleteDoc(doc(db, collection, item.name));
    });
  };

  return deleteSelectedDatas;
};

export const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const jump = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };

  return { next, prev, jump, currentData, currentPage, maxPage };
};

export const useLocalStorage = (key, value) => {
  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  return { setItem, getItem };
};

export const useSetActiveItem = (e, selected) => {
  const [activeItem, setActiveItem] = React.useState(selected);
  const [open, setOpen] = React.useState(false);

  const handleClick = (selected) => {
    setActiveItem(selected);
    setOpen(!open);
  };
  return [activeItem, handleClick, open];
};

// export const useFetchDataFirebase = () => {
//   const docRef = doc(db, 'news', 'post');
//   const [data, setData] = React.useState([]);

//   React.useEffect(async () => {
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       setData(docSnap.data());
//     } else {
//       setData('No such document!');
//     }
//   }, []);

//   return [data];
// };
