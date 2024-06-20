import React from 'react'

export default function nhvCategorylist({rendernhvCategories, onAddNew, onnhvEdit}) {
    console.log("rendernhvCategories: ",  rendernhvCategories);

    let nhvCategoryElement = rendernhvCategories.map((nhvCategory,index) => {
        return(
            <tr key={index}>
                <th>{index+1}</th>
                <td>{nhvCategory.nhvId}</td>
                <td>{nhvCategory.nhvCategoryName}</td>
                <td>{nhvCategory.nhvCategoryStatus===true?"Hiển thị":"Tạm Khóa"}</td>
                <td>
                    <button className='btn btn-danger' onClick={()=>nhvHandleDelete(nhvCategory.nhvId)}>Delete</button>
                </td>
                <td>
                    <button className='btn btn-cuccess' onClick={()=>nhvHandleEdit(nhvCategory)}>Edit</button>
                </td>
            </tr>
        )
    })

    const nhvHandleAdd = () =>{
        onAddNew(true);
    }
    const nhvHandleDelete = (nhvId) =>{
        
        if(window.confirm('Bạn có thật sự muốn xóa Category có mã['+nhvId+']khong?')){
            console.log("Delete:", nhvId);
        }else{

        }
       // onnhvDelete(true);
    }
    //su kien cho nut sua
    const nhvHandleEdit = (nhvCategory) =>{
        onnhvEdit(nhvCategory);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sách loại sản phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã Loại</th>
                        <th>Tên Loại</th>
                        <th>Trạng Thái</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {nhvCategoryElement}
                </tbody>

            </table>
            <button className='btn btn-primary' onClick={nhvHandleAdd}>Thêm mới </button>
        </div>
    )
}
