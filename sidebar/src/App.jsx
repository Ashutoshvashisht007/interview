import { useState } from 'react'
import './App.css'
import explorer from './data/folderData'
import FolderStructure from './components/FolderStructure'
import useTraverseTree from './hooks/use-traverse-tree'

function App() {
  const [explorerData, setExplorerData] = useState(explorer)

  const {insertNode, deleteTheFuckingNode, editNode} = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder)=> {
    const finalTree = insertNode(explorerData,folderId, item, isFolder);

    setExplorerData(finalTree);
  }

  const handleDeleteNode = (folderId) => {
    const finalTree = deleteTheFuckingNode(explorerData,folderId);

    setExplorerData(finalTree);
  }

  const handleEditNode = (folderId,name) => {
    const finalTree = editNode(explorerData,folderId, name);
    setExplorerData(editNode);
  }

  return (
    <div className='container'>
      <FolderStructure explorerData={explorerData} handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} handleEditNode={handleEditNode}/>
    </div>
  )
}

export default App

/*

root
    -> src
          -> public
    -> package.json

*/