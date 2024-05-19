import React, { useState } from 'react'
import './folder.css'
import FolderIcon from '@mui/icons-material/Folder';
import TopicIcon from '@mui/icons-material/Topic';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

const FolderStructure = ({ explorerData, handleInsertNode, handleDeleteNode }) => {

  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false
  });

  const handleButtons = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder
    })
  }

  const handleDelete = (e) => {
    e.stopPropagation();
    setExpand(false);
    console.log(explorerData.id, " ", showInput.isFolder);
    handleDeleteNode(explorerData.id,showInput.isFolder);
  }

  const onAddFolder = (e) => {
    if(e.keyCode === 13 && e.target.value){
      handleInsertNode(explorerData.id, e.target.value,showInput.isFolder)
      setShowInput({...showInput,visible: false})
    }
  }

  if (explorerData.isFolder) {
    return (
      <div className='folderContainer'>
        <span className='folderHead' onClick={() => setExpand(!expand)}>
          <span className='folderHead1'>
            <FolderIcon />
            {explorerData.name}
          </span>
          <span className='folderHeadButtons'>
            <button className="btn" onClick={(e) => handleButtons(e, true)}>Folder +</button>
            <button className="btn" onClick={(e) => handleButtons(e, false)}>File +</button>
            <button className="btnEdit" onClick={(e) => handleDelete(e, false)}><CreateIcon/></button>
            <button className="btnDelete" onClick={(e) => handleDelete(e, false)}><DeleteIcon/></button>
          </span>
        </span>
        <div className='folderBody' style={{ display: expand ? "flex" : "none" }}>

          {
            showInput.visible && (
              <div className='inputDiv'>
                <span>{
                  showInput.isFolder ? <FolderIcon /> : <TopicIcon />
                }</span>

                <input
                  type="text"
                  autoFocus
                  onKeyDown={onAddFolder}
                  className='inputTag'
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                />
              </div>
            )
          }

          {
            explorerData.items?.map((ele, idx) => (
              <FolderStructure explorerData={ele} Key={idx} handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} />
            ))
          }
        </div>
      </div>
    )
  }
  else {
    return (<span style={{ backgroundColor: "lightblue", padding: "10px", borderRadius: "10px", display: "flex", alignItems: "center", gap: "10px", marginLeft: "5px", marginTop: "10px", width: "30vw" }}>
      <TopicIcon />
      {explorerData.name}
    </span>)
  }

}

export default FolderStructure