
import { useEffect, useState } from 'react';
import './App.css';
import nhvCategorylist from './components/nhvCategorylist';
import axios from './api/nhvApi';
import nhvCategoryform from './components/nhvCategoryform';


function App() {
  //Lấy dữ liệu từ api
  const [nhvCategories,setnhvCategories] = useState([]);

  const getCategories = async () => {
   try {
    const nhvCateRespose = await axios.get("nhvCategory");
    setnhvCategories(nhvCateRespose.data);
   } catch (error) {
    console.log("Lỗi", error);
   }
  }

  useEffect (() => {
    getCategories();
    console.log("nhvCategories: ", nhvCategories);
  }, [])
  //Trạng thái form
  const [nhvCategoryIsForm, setnhvCategoryIsFrom] = useState(false);
  const [nhvCategoryEdit, setnhvCategoryEdit] = useState("");
  const nhvHandleAddNew = (param) =>{
    setnhvCategoryIsFrom(param);
  }

  const nhvHandleCategoryCloseForm = (param) => {
    setnhvCategoryIsFrom(param);
  }
  const nhvHandleDelete =(nhvId) => {
    console.log("App-Delete-nhvId:",nhvId);
    //const nhvRespose =  axios.delete('https://666c5a5b49dbc5d7145dbb07.mockapi.io/nhvapi/nhvv1/nhvCategory/${nhvId}');
    const nhvRespose =  axios.delete('nhvCategory/${nhvId}');
    console.log("nhvRespoce - Delete",);
    let nhvDelete = nhvCategories.filter(x=>x.nhvId !== nhvId);
    setnhvCategories (nhvCategories);
    console.log("delete:",);
  }
  const nhvHandleEdit = (nhvCategory) => {
    setnhvCategoryEdit(nhvCategory)
    setnhvCategoryIsFrom(true);
  }
  return (
    <div className="container border my-3">
      <h1>Nguyễn Hoàng Vũ - Call API</h1>

      <nhvCategorylist  rendernhvCategories = {nhvCategories}
                onAddNew={nhvHandleAddNew}
                onnhvDelete = {nhvHandleDelete}
                onnhvEdit= {nhvHandleEdit} />
      <hr/>
      {
        nhvCategoryIsForm ===true?<nhvCategoryform 
        rendernhvcategory= {nhvCategoryEdit}
        onCloseForm={nhvHandleCategoryCloseForm} />:""
      }
      
    </div>
  );
}

export default App;
