import { useState } from 'react'
import './App.css'
import explorer from './data/folderData'
import FolderStructure from './components/FolderStructure'
import useTraverseTree from './hooks/use-traverse-tree'

function App() {
  const [explorerData, setExplorerData] = useState(explorer)

  const {insertNode, deleteTheFuckingNode} = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder)=> {
    const finalTree = insertNode(explorerData,folderId, item, isFolder);

    setExplorerData(finalTree);
  }
//hello
  const handleDeleteNode = (folderId, isFolder) => {
    const finalTree = deleteTheFuckingNode(explorerData,folderId,isFolder);

    setExplorerData(finalTree);
  }

  return (
    <div className='container'>
      <FolderStructure explorerData={explorerData} handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode}/>
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