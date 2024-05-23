import React, { useState } from 'react'
import './folder.css'
import FolderIcon from '@mui/icons-material/Folder';
import TopicIcon from '@mui/icons-material/Topic';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
const FolderStructure = ({
  explorerData,
  handleInsertNode,
  handleDeleteNode,
  handleEditNode
}) => {

  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false
  });

  const [value, setValue] = useState('');
  const [flag, setFlag] = useState(false);

  const handleButtons = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder
    })
    setValue('');
  }

  const handleDelete = (e) => {
    e.stopPropagation();
    handleDeleteNode(explorerData.id);
    setExpand(false);
  }

  const handleEdit = (e) => {
    e.stopPropagation();
    setValue(explorerData.name);
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder: explorerData.isFolder
    })
    setFlag(true);
  }

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      if (flag) {
        handleEditNode(explorerData.id, e.target.value);
        setFlag(false);
      }
      else {
        handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);
      }

      setShowInput({ ...showInput, visible: false })
      setValue('');
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
            <button className="btnEdit" onClick={handleEdit}><CreateIcon /></button>
            <button className="btnDelete" onClick={handleDelete}><DeleteIcon /></button>
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
                  onChange={(e) => setValue(e.target.value)}
                  className='inputTag'
                  value={value}
                  onBlur={() => {
                    setShowInput({ ...showInput, visible: false })
                    setFlag(false);
                  }}
                />
              </div>
            )
          }

          {
            explorerData.items?.map((ele, idx) => (
              <FolderStructure explorerData={ele} Key={idx} handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} handleEditNode={handleEditNode} />
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