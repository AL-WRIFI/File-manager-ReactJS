import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import CreateFolder from "../ModalForms/CreateFolder";
import CreateFile from "../ModalForms/CreateFile";
import UploadFile from "../ModalForms/UploadFile";
import { Link, useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeFolder } from "../../Redux/actionCreators/FolderActions";

const SubNav = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userFolders ,currentFolder ,currentFolderData} = useSelector((state)=>({
    userFolders: state.Folders.userFolders,
    currentFolder : state.Folders.currentFolder,
    currentFolderData : state.Folders.userFolders.find(
      (folder)=> folder.docId === state.Folders.currentFolder),

  }),shallowEqual);

  const handleNavigate = ( link,id )=>{
    navigate(link);
    dispatch(changeFolder(id));
  }


  return (
    
    <Col md={12} className={"d-flex align-items-end px-5 pt-0 justify-content-between"}>
       <>
       <nav className="ms-5" aria-label="breadcrumb">
          <ol className="breadcrumb d-flex align-items-center" >
            {currentFolder !== "root" ? (
              <Fragment>
                <button onClick={()=> handleNavigate("/dashboard" ,"root")}
                className="breadcrumb-items btn btn-link text-decoration-none">
                  Root
                </button>
               {currentFolderData?.data.path.map((folder,idx)=>(
                <button key={idx} className="breadcrumb-items btn btn-link text-decoration-none"
                 onClick={()=> handleNavigate(`/dashboard/folder/${userFolders.find(
                  (fldr)=> fldr.docId === folder).docId}`,
                  userFolders.find((fldr)=> fldr.docId === folder).docId)}
                  >
                  {userFolders.find((fldr)=> fldr.docId === folder).data.name}
                </button>
               ))}
              <li className="breadcrumb-item active" >
                { currentFolderData?.data.name}
                </li>
              </Fragment>
            ):("")}
          </ol>
        </nav>
          <div className="ml-auto col-md-5 d-flex justify-content-center p-4" >
            <UploadFile  />
            &nbsp;
            <CreateFile  />
            &nbsp;
            <CreateFolder  />
          </div>
        </>
  
    </Col>
  );
};

export default SubNav;
